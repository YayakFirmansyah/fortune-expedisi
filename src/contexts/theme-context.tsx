import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

let AsyncStorage: {
  getItem: (k: string) => Promise<string | null>;
  setItem: (k: string, v: string) => Promise<void>;
  removeItem: (k: string) => Promise<void>;
} | null = null;
try {
  AsyncStorage =
    require("@react-native-async-storage/async-storage").default ?? null;
} catch {
  AsyncStorage = null;
}

const STORAGE_KEY = "fortune-expedisi:theme-pref";

export type ThemeMode = "light" | "dark";
export type ThemePref = ThemeMode | "system";

type ThemeContextValue = {
  mode: ThemeMode;
  pref: ThemePref;
  setPref: (pref: ThemePref) => void;
  isReady: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useSystemColorScheme();
  const [pref, setPrefState] = useState<ThemePref>("system");
  const [isReady, setIsReady] = useState<boolean>(!AsyncStorage);

  useEffect(() => {
    let active = true;
    if (!AsyncStorage) {
      setIsReady(true);
      return () => {
        active = false;
      };
    }
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (!active) return;
        if (stored === "light" || stored === "dark" || stored === "system") {
          setPrefState(stored);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) setIsReady(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const setPref = useCallback((next: ThemePref) => {
    setPrefState(next);
    if (AsyncStorage) {
      AsyncStorage.setItem(STORAGE_KEY, next).catch(() => {});
    }
  }, []);

  const mode: ThemeMode = useMemo(() => {
    if (pref === "system") return systemScheme === "dark" ? "dark" : "light";
    return pref;
  }, [pref, systemScheme]);

  const value = useMemo(
    () => ({ mode, pref, setPref, isReady }),
    [mode, pref, setPref, isReady],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeMode(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return ctx;
}
