import { Colors } from "@/constants/theme";
import { useThemeMode } from "@/contexts/theme-context";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACCENT = "#2563eb";

export default function Settings() {
  const scheme = useColorScheme();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { mode, setPref } = useThemeMode();
  const styles = makeStyles(colors);

  const isDark = mode === "dark";
  const handleToggleTheme = (value: boolean) => {
    setPref(value ? "dark" : "light");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 16, paddingBottom: 160 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Pengaturan</Text>
        <Text style={styles.subtitle}>Atur preferensi aplikasi Anda</Text>

        <Text style={styles.sectionTitle}>Tampilan</Text>
        <View style={styles.listCard}>
          <View style={styles.listRow}>
            <View style={[styles.iconWrap, { backgroundColor: ACCENT + "22" }]}>
              <Ionicons
                name={isDark ? "moon" : "sunny"}
                size={18}
                color={ACCENT}
              />
            </View>
            <View style={styles.listLabelWrap}>
              <Text style={styles.listLabel}>Tema</Text>
              <Text style={styles.listValue}>
                {isDark ? "Mode Gelap" : "Mode Terang"}
              </Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={handleToggleTheme}
              trackColor={{ false: "#cbd5e1", true: ACCENT }}
              thumbColor="#ffffff"
              ios_backgroundColor="#cbd5e1"
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Informasi</Text>
        <View style={styles.listCard}>
          <Pressable
            onPress={() => router.push("/about")}
            android_ripple={{ color: colors.backgroundSelected }}
            style={({ pressed }) => [
              styles.listRow,
              pressed && { opacity: 0.7 },
            ]}
          >
            <View
              style={[styles.iconWrap, { backgroundColor: "#0ea5e9" + "22" }]}
            >
              <Ionicons name="information-circle" size={18} color="#0ea5e9" />
            </View>
            <View style={styles.listLabelWrap}>
              <Text style={styles.listLabel}>Tentang Aplikasi</Text>
              <Text style={styles.listValue}>
                Detail, versi, dan deskripsi
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const makeStyles = (colors: typeof Colors.light | typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.text,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: 14,
      color: colors.textSecondary,
      marginTop: 4,
      marginBottom: 28,
    },
    sectionTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.textSecondary,
      letterSpacing: 0.6,
      textTransform: "uppercase",
      marginBottom: 10,
      marginTop: 4,
    },
    listCard: {
      backgroundColor: colors.backgroundElement,
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 24,
    },
    listRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 14,
      gap: 14,
    },
    iconWrap: {
      width: 36,
      height: 36,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    listLabelWrap: {
      flex: 1,
    },
    listLabel: {
      fontSize: 15,
      fontWeight: "600",
      color: colors.text,
    },
    listValue: {
      fontSize: 12,
      color: colors.textSecondary,
      marginTop: 2,
    },
  });
