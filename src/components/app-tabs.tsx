import { useColorScheme } from "@/hooks/use-color-scheme";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";
import { Text, View } from "react-native";

import { Colors } from "@/constants/theme";

export default function AppTabs() {
  const scheme = useColorScheme();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}
    >
      <NativeTabs.Trigger name="index">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={{ fontSize: 20 }}>🏠</Text>
          <Text style={{ color: colors.text }}>Beranda</Text>
        </View>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="hitung">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={{ fontSize: 20 }}>🧮</Text>
          <Text style={{ color: colors.text }}>Hitung</Text>
        </View>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={{ fontSize: 20 }}>⚙️</Text>
          <Text style={{ color: colors.text }}>Settings</Text>
        </View>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
