import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACCENT = "#2563eb";

export default function About() {
  const scheme = useColorScheme();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const styles = makeStyles(colors);

  const version =
    (Constants.expoConfig?.version as string | undefined) ?? "1.0.0";

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 12, paddingBottom: 160 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backBtn}
            android_ripple={{ color: colors.backgroundSelected, borderless: true }}
          >
            <Ionicons name="chevron-back" size={22} color={colors.text} />
          </Pressable>
          <Text style={styles.topTitle}>Tentang Aplikasi</Text>
          <View style={{ width: 36 }} />
        </View>

        <View style={styles.heroCard}>
          <View style={styles.logo}>
            <Ionicons name="car-sport" size={36} color="#ffffff" />
          </View>
          <Text style={styles.appName}>Fortune Expedisi</Text>
          <Text style={styles.appTag}>Kalkulator Jasa Carter Kendaraan</Text>
          <View style={styles.versionBadge}>
            <Text style={styles.versionText}>v{version}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Detail</Text>
        <View style={styles.listCard}>
          <DetailRow
            colors={colors}
            label="Nama Aplikasi"
            value="Fortune Expedisi"
          />
          <Divider colors={colors} />
          <DetailRow colors={colors} label="Versi" value={version} />
          <Divider colors={colors} />
          <DetailRow colors={colors} label="Platform" value="Android • iOS" />
          <Divider colors={colors} />
          <DetailRow
            colors={colors}
            label="Kategori"
            value="Utilitas / Logistik"
          />
        </View>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <View style={styles.descCard}>
          <Text style={styles.descText}>
            Fortune Expedisi adalah aplikasi kalkulator jasa carter kendaraan
            yang membantu menghitung estimasi biaya perjalanan secara cepat dan
            akurat berdasarkan jarak tempuh.
          </Text>
          <Text style={[styles.descText, { marginTop: 12 }]}>
            Perhitungan terdiri dari dua komponen: biaya BBM (1 liter Rp 10.000
            per 9 km) dan biaya jasa (Rp 50.000 per jam pada kecepatan rata-rata
            50 km/jam).
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Rumus Tarif</Text>
        <View style={styles.listCard}>
          <FormulaRow
            colors={colors}
            icon="water"
            tint="#0ea5e9"
            title="BBM"
            formula="( jarak ÷ 9 ) × Rp 10.000"
          />
          <Divider colors={colors} />
          <FormulaRow
            colors={colors}
            icon="time"
            tint="#f59e0b"
            title="Jasa"
            formula="( jarak ÷ 50 ) × Rp 50.000"
          />
        </View>

        <Text style={styles.footer}>© 2026 Fortune Expedisi</Text>
      </ScrollView>
    </View>
  );
}

function DetailRow({
  colors,
  label,
  value,
}: {
  colors: typeof Colors.light | typeof Colors.dark;
  label: string;
  value: string;
}) {
  return (
    <View style={detailStyles.row}>
      <Text style={[detailStyles.label, { color: colors.textSecondary }]}>
        {label}
      </Text>
      <Text style={[detailStyles.value, { color: colors.text }]}>{value}</Text>
    </View>
  );
}

function FormulaRow({
  colors,
  icon,
  tint,
  title,
  formula,
}: {
  colors: typeof Colors.light | typeof Colors.dark;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  tint: string;
  title: string;
  formula: string;
}) {
  return (
    <View style={detailStyles.formulaRow}>
      <View style={[detailStyles.iconWrap, { backgroundColor: tint + "22" }]}>
        <Ionicons name={icon} size={18} color={tint} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[detailStyles.formulaTitle, { color: colors.text }]}>
          {title}
        </Text>
        <Text
          style={[detailStyles.formulaText, { color: colors.textSecondary }]}
        >
          {formula}
        </Text>
      </View>
    </View>
  );
}

function Divider({
  colors,
}: {
  colors: typeof Colors.light | typeof Colors.dark;
}) {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.backgroundSelected,
        marginHorizontal: 16,
      }}
    />
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
    topBar: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    backBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.backgroundElement,
    },
    topTitle: {
      flex: 1,
      textAlign: "center",
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
    heroCard: {
      backgroundColor: colors.backgroundElement,
      borderRadius: 20,
      alignItems: "center",
      paddingVertical: 24,
      paddingHorizontal: 20,
      marginBottom: 28,
    },
    logo: {
      width: 72,
      height: 72,
      borderRadius: 20,
      backgroundColor: ACCENT,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14,
      shadowColor: ACCENT,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    appName: {
      fontSize: 20,
      fontWeight: "800",
      color: colors.text,
      letterSpacing: -0.3,
    },
    appTag: {
      fontSize: 13,
      color: colors.textSecondary,
      marginTop: 4,
    },
    versionBadge: {
      marginTop: 12,
      backgroundColor: ACCENT + "22",
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 999,
    },
    versionText: {
      color: ACCENT,
      fontSize: 12,
      fontWeight: "700",
    },
    sectionTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.textSecondary,
      letterSpacing: 0.6,
      textTransform: "uppercase",
      marginBottom: 10,
    },
    listCard: {
      backgroundColor: colors.backgroundElement,
      borderRadius: 16,
      marginBottom: 24,
      overflow: "hidden",
    },
    descCard: {
      backgroundColor: colors.backgroundElement,
      borderRadius: 16,
      padding: 16,
      marginBottom: 24,
    },
    descText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.text,
    },
    footer: {
      textAlign: "center",
      color: colors.textSecondary,
      fontSize: 12,
      marginTop: 8,
    },
  });

const detailStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  label: {
    fontSize: 13,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
  },
  formulaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  formulaTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  formulaText: {
    fontSize: 12,
  },
});
