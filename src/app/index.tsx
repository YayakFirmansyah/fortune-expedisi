import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { formatRupiah, hitungBiayaCarter } from "../utils/calculator";

type HasilKalkulasi = {
  bbm: number;
  jasa: number;
  total: number;
};

export default function Home() {
  const [jarakInput, setJarakInput] = useState<string>("");
  const [hasilKalkulasi, setHasilKalkulasi] = useState<HasilKalkulasi | null>(
    null
  );

  const handleHitung = () => {
    Keyboard.dismiss();
    const hasil = hitungBiayaCarter(Number(jarakInput)) as
      | HasilKalkulasi
      | null;
    setHasilKalkulasi(hasil);
  };

  return (
    // TouchableWithoutFeedback digunakan agar user bisa menutup keyboard dengan mengetuk area kosong
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Fortune Expedisi</Text>
          <Text style={styles.subtitle}>Kalkulator Jasa Carter Kendaraan</Text>
        </View>

        {/* Input Card */}
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

        {/* Result Card (Hanya Muncul Jika Ada Hasil) */}
        {hasilKalkulasi && (
          <View style={[styles.card, styles.resultCard]}>
            <Text style={styles.resultTitle}>Rincian Biaya</Text>

            <View style={styles.row}>
              <Text style={styles.rowLabel}>Biaya BBM (Pertalite)</Text>
              <Text style={styles.rowValue}>
                {formatRupiah(hasilKalkulasi.bbm)}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowLabel}>Biaya Jasa Driver</Text>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

// Desain Modern Minimalis (Styling)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc", // Warna latar abu-abu sangat muda
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3, // Shadow untuk Android
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    backgroundColor: "#f8fafc",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0f172a",
  },
  suffix: {
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: "600",
    color: "#64748b",
  },
  button: {
    backgroundColor: "#2563eb", // Biru solid profesional
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#94a3b8",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  resultCard: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e0e7ff",
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  rowLabel: {
    fontSize: 14,
    color: "#475569",
  },
  rowValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
  },
  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0f172a",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2563eb",
  },
});