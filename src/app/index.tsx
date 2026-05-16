import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACCENT = "#2563eb";

function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 11) return "Selamat pagi";
  if (hour < 15) return "Selamat siang";
  if (hour < 18) return "Selamat sore";
  return "Selamat malam";
}

export default function Home() {
  const scheme = useColorScheme();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const styles = makeStyles(colors, width >= 768);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 16, paddingBottom: 160 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.greeting}>{greeting()},</Text>
            <Text style={styles.brand}>Fortune Expedisi</Text>
          </View>
          <View style={styles.avatar}>
            <Ionicons name="car-sport" size={22} color="#fff" />
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/hitung")}
          style={({ pressed }) => [
            styles.heroCard,
            pressed && { opacity: 0.92 },
          ]}
        >
          <View style={styles.heroLeft}>
            <Text style={styles.heroEyebrow}>KALKULATOR CARTER</Text>
            <Text style={styles.heroTitle}>Hitung estimasi{"\n"}biaya perjalanan</Text>
            <View style={styles.heroCta}>
              <Text style={styles.heroCtaText}>Mulai Hitung</Text>
              <Ionicons name="arrow-forward" size={16} color="#fff" />
            </View>
          </View>
          <View style={styles.heroIcon}>
            <Ionicons name="calculator" size={56} color="rgba(255,255,255,0.95)" />
          </View>
        </Pressable>

        <Text style={styles.sectionTitle}>Cara Kerja</Text>
        <View style={styles.stepsCard}>
          <StepRow
            colors={colors}
            number="1"
            title="Masukkan jarak"
            description="Ketik estimasi jarak tempuh dalam kilometer."
          />
          <View style={styles.stepDivider} />
          <StepRow
            colors={colors}
            number="2"
            title="Tekan Kalkulasi"
            description="Sistem hitung BBM dan jasa secara otomatis."
          />
          <View style={styles.stepDivider} />
          <StepRow
            colors={colors}
            number="3"
            title="Lihat rincian"
            description="Total tarif tampil lengkap beserta rumusnya."
          />
        </View>

        <Text style={styles.sectionTitle}>Komponen Tarif</Text>
        <View style={styles.tariffGrid}>
          <TariffCard
            colors={colors}
            icon="water"
            tint="#0ea5e9"
            label="Biaya BBM"
            value="Rp 10.000"
            unit="per 9 km"
          />
          <TariffCard
            colors={colors}
            icon="time"
            tint="#f59e0b"
            label="Biaya Jasa"
            value="Rp 50.000"
            unit="per jam (50 km/jam)"
          />
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="bulb" size={20} color={ACCENT} />
          <Text style={styles.tipText}>
            Tarif dihitung dari rumus tetap. Hasil bersifat estimasi dan dapat
            disesuaikan saat negosiasi.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function StepRow({
  colors,
  number,
  title,
  description,
}: {
  colors: typeof Colors.light | typeof Colors.dark;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <View style={stepStyles.row}>
      <View style={stepStyles.badge}>
        <Text style={stepStyles.badgeText}>{number}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[stepStyles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[stepStyles.desc, { color: colors.textSecondary }]}>
          {description}
        </Text>
      </View>
    </View>
  );
}

function TariffCard({
  colors,
  icon,
  tint,
  label,
  value,
  unit,
}: {
  colors: typeof Colors.light | typeof Colors.dark;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  tint: string;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <View
      style={[
        tariffStyles.card,
        { backgroundColor: colors.backgroundElement },
      ]}
    >
      <View
        style={[
          tariffStyles.iconWrap,
          { backgroundColor: tint + "22" },
        ]}
      >
        <Ionicons name={icon} size={20} color={tint} />
      </View>
      <Text style={[tariffStyles.label, { color: colors.textSecondary }]}>
        {label}
      </Text>
      <Text style={[tariffStyles.value, { color: colors.text }]}>{value}</Text>
      <Text style={[tariffStyles.unit, { color: colors.textSecondary }]}>
        {unit}
      </Text>
    </View>
  );
}

const makeStyles = (
  colors: typeof Colors.light | typeof Colors.dark,
  isTablet: boolean,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: isTablet ? 32 : 20,
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 24,
    },
    greeting: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 4,
    },
    brand: {
      fontSize: 24,
      fontWeight: "800",
      color: colors.text,
      letterSpacing: -0.5,
    },
    avatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: ACCENT,
      alignItems: "center",
      justifyContent: "center",
    },
    heroCard: {
      backgroundColor: ACCENT,
      borderRadius: 24,
      padding: 24,
      flexDirection: "row",
      alignItems: "center",
      overflow: "hidden",
      shadowColor: ACCENT,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 10,
      marginBottom: 28,
    },
    heroLeft: {
      flex: 1,
    },
    heroEyebrow: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 11,
      fontWeight: "700",
      letterSpacing: 1.2,
      marginBottom: 8,
    },
    heroTitle: {
      color: "#ffffff",
      fontSize: 22,
      fontWeight: "800",
      lineHeight: 28,
      marginBottom: 18,
    },
    heroCta: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      gap: 6,
      backgroundColor: "rgba(255,255,255,0.18)",
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 999,
    },
    heroCtaText: {
      color: "#ffffff",
      fontSize: 13,
      fontWeight: "700",
    },
    heroIcon: {
      marginLeft: 12,
      opacity: 0.9,
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 12,
    },
    stepsCard: {
      backgroundColor: colors.backgroundElement,
      borderRadius: 18,
      padding: 18,
      marginBottom: 28,
    },
    stepDivider: {
      height: 1,
      backgroundColor: colors.backgroundSelected,
      marginVertical: 14,
    },
    tariffGrid: {
      flexDirection: "row",
      gap: 12,
      marginBottom: 24,
    },
    tipCard: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 10,
      backgroundColor: colors.backgroundElement,
      borderRadius: 14,
      padding: 16,
      borderLeftWidth: 3,
      borderLeftColor: ACCENT,
    },
    tipText: {
      flex: 1,
      fontSize: 13,
      lineHeight: 19,
      color: colors.textSecondary,
    },
  });

const stepStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: ACCENT + "22",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: ACCENT,
    fontWeight: "800",
    fontSize: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  desc: {
    fontSize: 12,
    lineHeight: 18,
  },
});

const tariffStyles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 2,
  },
  unit: {
    fontSize: 11,
  },
});
