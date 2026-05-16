import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createHomeStyles = (
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
      lineHeight: isTablet ? 24 : 20,
    },
    welcomeCard: {
      backgroundColor: colorSet.backgroundElement,
      borderRadius: 16,
      padding: isTablet ? 32 : 24,
      marginBottom: 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 3,
    },
    welcomeText: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: isTablet ? 28 : 24,
      color: colorSet.text,
      marginBottom: 16,
    },
    featureGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 16,
      marginTop: isTablet ? 24 : 16,
    },
    featureCard: {
      flex: isTablet ? 1 : undefined,
      minWidth: isTablet ? "45%" : "100%",
      backgroundColor: colorSet.background,
      borderRadius: 12,
      padding: isTablet ? 24 : 16,
      borderWidth: 1,
      borderColor: "#e2e8f0",
    },
    featureIcon: {
      fontSize: isTablet ? 32 : 24,
      marginBottom: 12,
    },
    featureTitle: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: "700",
      color: colorSet.text,
      marginBottom: 8,
    },
    featureDescription: {
      fontSize: isTablet ? 14 : 12,
      color: colorSet.textSecondary,
      lineHeight: isTablet ? 22 : 18,
    },
  });
};

export type HomeStyles = ReturnType<typeof createHomeStyles>;
