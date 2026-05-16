import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { createSettingsStyles } from "@/styles/settings";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

const APP_VERSION = "1.0.0";

export default function Settings() {
  const scheme = useColorScheme();
  const { width: screenWidth } = useWindowDimensions();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];
  const styles = createSettingsStyles(colors, screenWidth);
  const [selectedTheme, setSelectedTheme] = useState(
    scheme === "dark" ? "dark" : "light",
  );

  const handleThemeChange = (theme: "light" | "dark") => {
    setSelectedTheme(theme);
    Alert.alert(
      "Info",
      `Tema akan berubah ke ${theme === "dark" ? "Gelap" : "Terang"} ketika aplikasi di-restart`,
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.maxWidth}>
          <View style={styles.header}>
            <Text style={styles.title}>Pengaturan</Text>
            <Text style={styles.subtitle}>Atur preferensi aplikasi Anda</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tampilan</Text>
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.label}>Tema</Text>
              </View>

              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() => handleThemeChange("light")}
                  style={{
                    flex: 1,
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    backgroundColor:
                      selectedTheme === "light" ? "#2563eb" : colors.background,
                    borderRadius: 8,
                    marginRight: 8,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color:
                        selectedTheme === "light" ? "#ffffff" : colors.text,
                      fontWeight: "600",
                      fontSize: 14,
                    }}
                  >
                    ☀️ Terang
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleThemeChange("dark")}
                  style={{
                    flex: 1,
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    backgroundColor:
                      selectedTheme === "dark" ? "#2563eb" : colors.background,
                    borderRadius: 8,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: selectedTheme === "dark" ? "#ffffff" : colors.text,
                      fontWeight: "600",
                      fontSize: 14,
                    }}
                  >
                    🌙 Gelap
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.label}>Nama Aplikasi</Text>
                <Text style={styles.value}>Fortune Expedisi</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.row}>
                <Text style={styles.label}>Versi</Text>
                <Text style={styles.value}>{APP_VERSION}</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.row}>
                <Text style={styles.label}>Deskripsi</Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.textSecondary,
                  lineHeight: 22,
                  marginTop: 8,
                }}
              >
                Aplikasi kalkulator jasa carter kendaraan yang membantu Anda
                menghitung estimasi biaya perjalanan dengan cepat dan akurat.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
