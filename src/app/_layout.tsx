import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppTabs from "@/components/app-tabs";
import { Colors } from "@/constants/theme";
import { ThemeProvider, useThemeMode } from "@/contexts/theme-context";

function ThemedShell() {
  const { mode } = useThemeMode();
  const colors = Colors[mode];

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background).catch(() => {});
  }, [colors.background]);

  return (
    <NavThemeProvider value={mode === "dark" ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar style={mode === "dark" ? "light" : "dark"} />
        <AppTabs />
      </View>
    </NavThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ThemedShell />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
