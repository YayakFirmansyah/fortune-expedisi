import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { createHitungStyles } from "@/styles/hitung";
import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { formatRupiah, hitungBiayaCarter } from "../utils/calculator";

type HasilKalkulasi = {
  bbm: number;
  jasa: number;
  total: number;
};

export default function Hitung() {
  const scheme = useColorScheme();
  const { width: screenWidth } = useWindowDimensions();
  const themeKey: "light" | "dark" = scheme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];
  const styles = createHitungStyles(colors, screenWidth);
  const [jarakInput, setJarakInput] = useState<string>("");
  const [hasilKalkulasi, setHasilKalkulasi] = useState<HasilKalkulasi | null>(
    null,
  );

  const handleHitung = () => {
    Keyboard.dismiss();
    const jarakAman = jarakInput.replace(",", ".");
    const hasil = hitungBiayaCarter(Number(jarakAman)) as HasilKalkulasi | null;
    setHasilKalkulasi(hasil);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Fortune Expedisi</Text>
          <Text style={styles.subtitle}>Kalkulator Jasa Carter Kendaraan</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Estimasi Jarak Tempuh (KM)</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contoh: 45"
              placeholderTextColor="#9ca3af"
              keyboardType="numeric"
              value={jarakInput}
              onChangeText={setJarakInput}
            />
            <Text style={styles.suffix}>KM</Text>
          </View>

          <TouchableOpacity
            style={[styles.button, !jarakInput && styles.buttonDisabled]}
            onPress={handleHitung}
            disabled={!jarakInput}
          >
            <Text style={styles.buttonText}>Kalkulasi Harga</Text>
          </TouchableOpacity>
        </View>

        {hasilKalkulasi && (
          <View style={[styles.card, styles.combinedCard]}>
            <Text style={styles.resultTitle}>Rincian Tarif</Text>

            <View style={styles.itemRow}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemLabel}>BBM</Text>
                <Text style={styles.itemFormula}>( jarak ÷ 9 ) × Rp10.000</Text>
              </View>
              <Text style={styles.rowValue}>
                {formatRupiah(hasilKalkulasi.bbm)}
              </Text>
            </View>

            <View style={styles.itemRow}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemLabel}>Jasa</Text>
                <Text style={styles.itemFormula}>
                  ( jarak ÷ 50 ) × Rp50.000
                </Text>
              </View>
              <Text style={styles.rowValue}>
                {formatRupiah(hasilKalkulasi.jasa)}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total Harga</Text>
              <Text style={styles.totalValue}>
                {formatRupiah(hasilKalkulasi.total)}
              </Text>
            </View>
          </View>
        )}

        <View style={{ height: 160 }} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
