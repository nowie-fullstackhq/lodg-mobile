import { Image, StyleSheet, Text, View } from "react-native";
import type { InvoiceStatus } from "@/types";

interface TransactionStatusBadgeProps {
  status: InvoiceStatus;
}

export default function TransactionStatusBadge({
  status,
}: TransactionStatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "paid":
        return {
          text: "INVOICE PAID",
          color: "#078E17",
          icon: require("@/assets/icons/icon-check.svg"),
        };
      case "uploaded":
        return {
          text: "INVOICE UPLOADED",
          color: "#ADADAD",
          icon: require("@/assets/icons/icon-receipt.svg"),
        };
      case "sent":
        return {
          text: "INVOICE SENT",
          color: "#FE9705",
          icon: require("@/assets/icons/icon-time-quarter-to.svg"),
        };
      case "overdue":
        return {
          text: "INVOICE OVERDUE",
          color: "#F27A80",
          icon: require("@/assets/icons/icon-warning.svg"),
        };
      default:
        return {
          text: "UNKNOWN",
          color: "#ADADAD",
          icon: require("@/assets/icons/icon-receipt.svg"),
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
    justifyContent: "center",
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
