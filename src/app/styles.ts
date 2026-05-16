import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export default function createStyles(
  colorSet: typeof Colors.light | typeof Colors.dark,
) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.background,
      paddingHorizontal: 24,
      paddingTop: 60,
    },
    header: {
      marginBottom: 32,
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: colorSet.text,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: 14,
      color: colorSet.textSecondary,
      marginTop: 4,
    },
    card: {
      backgroundColor: colorSet.backgroundElement,
      borderRadius: 16,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 3,
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      fontWeight: "600",
      color: colorSet.text,
      marginBottom: 8,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#e2e8f0",
      borderRadius: 12,
      backgroundColor: colorSet.background,
      marginBottom: 20,
    },
    input: {
      flex: 1,
      height: 50,
      paddingHorizontal: 16,
      fontSize: 16,
      color: colorSet.text,
    },
    suffix: {
      paddingHorizontal: 16,
      fontSize: 14,
      fontWeight: "600",
      color: colorSet.textSecondary,
    },
    button: {
      backgroundColor: "#2563eb",
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
    resultTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colorSet.text,
      marginBottom: 16,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    rowLabel: {
      fontSize: 14,
      color: colorSet.textSecondary,
    },
    rowValue: {
      fontSize: 14,
      fontWeight: "600",
      color: colorSet.text,
    },
    divider: {
      height: 1,
      backgroundColor: "#e2e8f0",
      marginVertical: 12,
    },
    totalLabel: {
      fontSize: 16,
      fontWeight: "800",
      color: colorSet.text,
    },
    totalValue: {
      fontSize: 18,
      fontWeight: "800",
      color: "#2563eb",
    },
    formulaText: {
      fontSize: 14,
      fontWeight: "700",
      color: colorSet.text,
      backgroundColor: "#e2e8f0",
      padding: 8,
      borderRadius: 8,
      marginTop: 4,
      overflow: "hidden",
    },
    formulaSubtext: {
      fontSize: 11,
      color: colorSet.textSecondary,
      marginTop: 4,
      fontStyle: "italic",
    },
    combinedCard: {
      backgroundColor: colorSet.backgroundElement,
      borderRadius: 14,
      padding: 20,
      borderWidth: 1,
      borderColor: "#e6eefb",
      marginBottom: 16,
    },
    combinedNote: {
      fontSize: 13,
      color: colorSet.text,
      marginTop: 4,
    },
    combinedSubtext: {
      fontSize: 12,
      color: colorSet.textSecondary,
      marginTop: 4,
    },
    itemRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },
    itemLeft: {
      flex: 1,
      paddingRight: 12,
    },
    itemLabel: {
      fontSize: 14,
      fontWeight: "600",
      color: colorSet.text,
    },
    itemFormula: {
      fontSize: 12,
      color: colorSet.textSecondary,
      marginTop: 2,
    },
  });
}
