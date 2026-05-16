import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACCENT = "#2563eb";

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Beranda" }} />
      <Tabs.Screen name="hitung" options={{ title: "Hitung" }} />
      <Tabs.Screen name="settings" options={{ title: "Pengaturan" }} />
      <Tabs.Screen name="about" options={{ href: null }} />
    </Tabs>
  );
}

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const BAR_HEIGHT = 64;
const FAB_SIZE = 56;
const FAB_SLOT = FAB_SIZE + 12;

function FloatingTabBar({ state, navigation }: BottomTabBarProps) {
  const scheme = useColorScheme();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];
  const insets = useSafeAreaInsets();

  const routes = state.routes;
  const focusedIndex = state.index;
  const visibleRoutes = routes.filter((r) => r.name !== "about");

  const indexOf = (name: string) => routes.findIndex((r) => r.name === name);
  const homeIdx = indexOf("index");
  const hitungIdx = indexOf("hitung");
  const settingsIdx = indexOf("settings");

  const focusedRouteName = routes[focusedIndex]?.name;
  if (
    focusedRouteName &&
    !visibleRoutes.some((r) => r.name === focusedRouteName)
  ) {
    return null;
  }

  const navigateTo = (name: string, index: number) => {
    const route = routes[index];
    if (!route) return;
    const isFocused = state.index === index;
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name as never);
    }
  };

  const hitungFocused = focusedIndex === hitungIdx;

  const floatAnim = useRef(new Animated.Value(hitungFocused ? 1 : 0)).current;
  const bobAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(floatAnim, {
      toValue: hitungFocused ? 1 : 0,
      useNativeDriver: true,
      friction: 6,
      tension: 90,
    }).start();
  }, [hitungFocused, floatAnim]);

  useEffect(() => {
    if (!hitungFocused) {
      bobAnim.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(bobAnim, {
          toValue: 1,
          duration: 1400,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(bobAnim, {
          toValue: 0,
          duration: 1400,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [hitungFocused, bobAnim]);

  const liftY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -12],
  });
  const bobY = bobAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -4],
  });
  const fabScale = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.06],
  });
  const shadowOpacity = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Platform.OS === "ios" ? 0.25 : 0.5, Platform.OS === "ios" ? 0.45 : 0.85],
  });

  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 12) }]}
    >
      <View style={styles.barOuter}>
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.backgroundElement,
              shadowColor: themeKey === "dark" ? "#000" : "#0f172a",
            },
          ]}
        >
          <SideTab
            icon="home"
            iconOutline="home-outline"
            label="Beranda"
            focused={focusedIndex === homeIdx}
            colors={colors}
            onPress={() => navigateTo("index", homeIdx)}
          />

          <View style={styles.fabSlot}>
            <Text
              style={[
                styles.fabLabel,
                { color: hitungFocused ? ACCENT : colors.textSecondary },
              ]}
              numberOfLines={1}
            >
              Hitung
            </Text>
          </View>

          <SideTab
            icon="settings"
            iconOutline="settings-outline"
            label="Pengaturan"
            focused={focusedIndex === settingsIdx}
            colors={colors}
            onPress={() => navigateTo("settings", settingsIdx)}
          />
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={[
            styles.fabWrap,
            { transform: [{ translateY: liftY }, { translateY: bobY }] },
          ]}
        >
          <Animated.View
            style={[
              styles.fabShadow,
              { shadowColor: ACCENT, shadowOpacity, transform: [{ scale: fabScale }] },
            ]}
          >
            <Pressable
              onPress={() => navigateTo("hitung", hitungIdx)}
              style={({ pressed }) => [
                styles.fab,
                { backgroundColor: ACCENT, opacity: pressed ? 0.92 : 1 },
              ]}
              android_ripple={{
                color: "rgba(255,255,255,0.22)",
                borderless: true,
              }}
            >
              <Ionicons name="calculator" size={26} color="#ffffff" />
            </Pressable>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

function SideTab({
  icon,
  iconOutline,
  label,
  focused,
  colors,
  onPress,
}: {
  icon: IoniconName;
  iconOutline: IoniconName;
  label: string;
  focused: boolean;
  colors: typeof Colors.light | typeof Colors.dark;
  onPress: () => void;
}) {
  const tint = focused ? ACCENT : colors.textSecondary;
  return (
    <Pressable
      onPress={onPress}
      style={styles.sideTab}
      android_ripple={{ color: "rgba(127,127,127,0.15)", borderless: true }}
    >
      <Ionicons name={focused ? icon : iconOutline} size={22} color={tint} />
      <Text style={[styles.sideLabel, { color: tint }]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 14,
    paddingTop: FAB_SIZE / 2 + 12,
  },
  barOuter: {
    position: "relative",
  },
  bar: {
    height: BAR_HEIGHT,
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    elevation: 12,
  },
  sideTab: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  sideLabel: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  fabSlot: {
    width: FAB_SLOT,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  fabLabel: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  fabWrap: {
    position: "absolute",
    top: -FAB_SIZE / 2,
    left: "50%",
    marginLeft: -FAB_SIZE / 2,
    width: FAB_SIZE,
    height: FAB_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  fabShadow: {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 14,
  },
  fab: {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
