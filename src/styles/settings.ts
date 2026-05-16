import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createSettingsStyles = (
  colorSet: typeof Colors.light | typeof Colors.dark,
  screenWidth: number,
) => {
  const isTablet = screenWidth >= 768;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.background,
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: isTablet ? 32 : 24,
      paddingVertical: isTablet ? 80 : 60,
    },
    maxWidth: {
      maxWidth: 1200,
      alignSelf: "center",
      width: "100%",
    },
    header: {
      marginBottom: isTablet ? 40 : 32,
    },
    title: {
      fontSize: isTablet ? 36 : 28,
      fontWeight: "800",
      color: colorSet.text,
      letterSpacing: -0.5,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: isTablet ? 16 : 14,
      color: colorSet.textSecondary,
    },
    section: {
      marginBottom: isTablet ? 40 : 32,
    },
    sectionTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: "700",
      color: colorSet.text,
      marginBottom: isTablet ? 20 : 16,
      marginTop: isTablet ? 24 : 16,
    },
    card: {
      backgroundColor: colorSet.backgroundElement,
      borderRadius: 16,
      padding: isTablet ? 32 : 24,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 3,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: isTablet ? 20 : 16,
    },
    label: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: "600",
      color: colorSet.text,
      flex: 1,
    },
    value: {
      fontSize: isTablet ? 16 : 14,
      color: colorSet.textSecondary,
      marginLeft: 12,
    },
    picker: {
      flex: 1,
      height: isTablet ? 50 : 44,
      marginLeft: isTablet ? 12 : 8,
    },
    divider: {
      height: 1,
      backgroundColor: "#e2e8f0",
      marginVertical: isTablet ? 20 : 16,
    },
    button: {
      backgroundColor: "#2563eb",
      height: isTablet ? 60 : 50,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      marginTop: isTablet ? 24 : 16,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: isTablet ? 18 : 16,
      fontWeight: "700",
    },
    info: {
      backgroundColor: "#e0f2fe",
      borderLeftWidth: 4,
      borderLeftColor: "#0284c7",
      borderRadius: 8,
      padding: isTablet ? 20 : 16,
      marginBottom: isTablet ? 24 : 16,
    },
    infoText: {
      fontSize: isTablet ? 14 : 12,
      color: "#0c4a6e",
      lineHeight: isTablet ? 22 : 18,
    },
  });
};

export type SettingsStyles = ReturnType<typeof createSettingsStyles>;
