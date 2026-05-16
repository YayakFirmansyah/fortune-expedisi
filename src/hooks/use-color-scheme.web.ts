import { useThemeMode } from "@/contexts/theme-context";

export function useColorScheme(): "light" | "dark" {
  return useThemeMode().mode;
}
