import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createBaseStyles = (
  colorSet: typeof Colors.light | typeof Colors.dark,
  screenWidth: number,
) => {
  const isTablet = screenWidth >= 768;
  const isMobile = screenWidth < 768;

  const containerPadding = isTablet ? 32 : 24;
  const containerPaddingTop = isTablet ? 80 : 60;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.background,
      paddingHorizontal: containerPadding,
      paddingTop: containerPaddingTop,
    },
    safeContainer: {
      flex: 1,
      backgroundColor: colorSet.background,
      paddingHorizontal: containerPadding,
      paddingVertical: containerPaddingTop,
    },
    maxWidthContainer: {
      maxWidth: 1200,
      alignSelf: "center",
      width: "100%",
    },
    scrollViewContent: {
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
      marginBottom: isTablet ? 12 : 8,
    },
    subtitle: {
      fontSize: isTablet ? 16 : 14,
      color: colorSet.textSecondary,
      marginTop: 4,
      lineHeight: isTablet ? 24 : 20,
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
      marginBottom: 12,
    },
    divider: {
      height: 1,
      backgroundColor: "#e2e8f0",
      marginVertical: 16,
    },
    flexRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    flexBetween: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};

export type BaseStyles = ReturnType<typeof createBaseStyles>;
