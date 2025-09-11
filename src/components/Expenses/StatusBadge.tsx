import { Image, StyleSheet, Text, View } from "react-native";
import type { ExpenseStatus } from "@/types";

interface StatusBadgeProps {
  status: ExpenseStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "approved":
        return {
          text: "APPROVED",
          color: "#078E17",
          icon: require("@/assets/icons/icon-check.svg"),
        };
      case "declined":
        return {
          text: "DECLINED",
          color: "#F27A80",
          icon: require("@/assets/icons/icon-warning.svg"),
        };
      default:
        return {
          text: "PENDING",
          color: "#FE9705",
          icon: require("@/assets/icons/icon-time-quarter-to.svg"),
        };
    }
  };

  const config = getStatusConfig();

  return (
    <View style={styles.container}>
      <Image
        source={config.icon}
        style={[styles.icon, { tintColor: config.color }]}
      />
      <Text style={[styles.text, { color: config.color }]}>{config.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 4,
    height: 16,
  },
  icon: {
    width: 10,
    height: 10,
  },
  text: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 9.89,
    lineHeight: 16,
    letterSpacing: 0.02,
  },
});
