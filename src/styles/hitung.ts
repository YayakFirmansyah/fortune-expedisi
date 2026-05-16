import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createHitungStyles = (
  colorSet: typeof Colors.light | typeof Colors.dark,
  screenWidth: number,
) => {
  const isTablet = screenWidth >= 768;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.background,
      paddingHorizontal: isTablet ? 32 : 24,
      paddingTop: isTablet ? 80 : 60,
    },
    scrollContainer: {
      paddingBottom: 40,
    },
    header: {
      marginBottom: isTablet ? 40 : 32,
    },
    title: {
      fontSize: isTablet ? 36 : 28,
      fontWeight: "800",
      color: colorSet.text,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: isTablet ? 16 : 14,
      color: colorSet.textSecondary,
      marginTop: 8,
    },
    card: {
      backgroundColor: colorSet.backgroundElement,
      borderRadius: 16,
      padding: isTablet ? 32 : 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 3,
      marginBottom: 16,
    },
    label: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: "600",
      color: colorSet.text,
      marginBottom: isTablet ? 16 : 8,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#e2e8f0",
      borderRadius: 12,
      backgroundColor: colorSet.background,
      marginBottom: isTablet ? 32 : 20,
      height: isTablet ? 60 : 50,
    },
    input: {
      flex: 1,
      paddingHorizontal: isTablet ? 20 : 16,
      fontSize: isTablet ? 18 : 16,
      color: colorSet.text,
    },
    suffix: {
      paddingHorizontal: isTablet ? 20 : 16,
      fontSize: isTablet ? 16 : 14,
      fontWeight: "600",
      color: colorSet.textSecondary,
    },
    button: {
      backgroundColor: "#2563eb",
      height: isTablet ? 60 : 50,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonDisabled: {
      backgroundColor: "#94a3b8",
    },
    buttonText: {
      color: "#ffffff",
      fontSize: isTablet ? 18 : 16,
      fontWeight: "700",
    },
    resultTitle: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: "700",
      color: colorSet.text,
      marginBottom: isTablet ? 24 : 16,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: isTablet ? 16 : 12,
    },
    rowLabel: {
      fontSize: isTablet ? 16 : 14,
      color: colorSet.textSecondary,
    },
    rowValue: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: "600",
      color: colorSet.text,
    },
    divider: {
      height: 1,
      backgroundColor: "#e2e8f0",
      marginVertical: isTablet ? 20 : 12,
    },
    totalLabel: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: "800",
      color: colorSet.text,
    },
    totalValue: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: "800",
      color: "#2563eb",
    },
    formulaText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: "700",
      color: colorSet.text,
      backgroundColor: "#e2e8f0",
      padding: isTablet ? 12 : 8,
      borderRadius: 8,
      marginTop: isTablet ? 8 : 4,
      overflow: "hidden",
    },
    formulaSubtext: {
      fontSize: isTablet ? 13 : 11,
      color: colorSet.textSecondary,
      marginTop: 4,
      fontStyle: "italic",
    },
    combinedCard: {
      backgroundColor: colorSet.backgroundElement,
      borderRadius: 14,
      padding: isTablet ? 28 : 20,
      borderWidth: 1,
      borderColor: "#e6eefb",
      marginBottom: 16,
    },
    combinedNote: {
      fontSize: isTablet ? 15 : 13,
      color: colorSet.text,
      marginTop: 8,
    },
    combinedSubtext: {
      fontSize: isTablet ? 14 : 12,
      color: colorSet.textSecondary,
      marginTop: 4,
    },
    itemRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: isTablet ? 16 : 12,
    },
    itemLeft: {
      flex: 1,
      paddingRight: 12,
    },
    itemLabel: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: "600",
      color: colorSet.text,
    },
    itemFormula: {
      fontSize: isTablet ? 13 : 12,
      color: colorSet.textSecondary,
      marginTop: 2,
    },
  });
};

export type HitungStyles = ReturnType<typeof createHitungStyles>;
