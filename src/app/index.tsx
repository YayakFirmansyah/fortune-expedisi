import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { createHomeStyles } from "@/styles/home";
import React from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";

export default function Home() {
  const scheme = useColorScheme();
  const { width: screenWidth } = useWindowDimensions();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];
  const styles = createHomeStyles(colors, screenWidth);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.maxWidth}>
          <View style={styles.header}>
            <Text style={styles.title}>Beranda</Text>
            <Text style={styles.subtitle}>
              Selamat datang di Fortune Expedisi
            </Text>
          </View>

          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeText}>
              Aplikasi kalkulator jasa carter kendaraan untuk membantu Anda
              menghitung estimasi biaya perjalanan dengan cepat dan akurat.
            </Text>

            <View style={styles.featureGrid}>
              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>🚗</Text>
                <Text style={styles.featureTitle}>Hitung Harga</Text>
                <Text style={styles.featureDescription}>
                  Hitung biaya carter berdasarkan jarak tempuh dengan akurat
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>⚙️</Text>
                <Text style={styles.featureTitle}>Pengaturan</Text>
                <Text style={styles.featureDescription}>
                  Atur preferensi dan lihat informasi aplikasi
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
