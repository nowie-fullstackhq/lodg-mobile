import { StyleSheet, Text, View } from "react-native";
import type { Status } from "@/types";
import CheckIcon from "./icons/CheckIcon";
import ReceiptIcon from "./icons/ReceiptIcon";
import TimeQuarterIcon from "./icons/TimeQuarterIcon";
import WarningIcon from "./icons/WarningIcon";

type StatusType = Status;

interface StatusBadgeProps {
  status: StatusType;
  type?: "invoice" | "expense";
}

export default function StatusBadge({
  status,
  type = "invoice",
}: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "paid":
        return {
          text: "INVOICE PAID",
          color: "#078E17",
          icon: (
            <CheckIcon
              color="#078E17"
              width={10}
              height={10}
            />
          ),
        };
      case "uploaded":
        return {
          text: "INVOICE UPLOADED",
          color: "#ADADAD",
          icon: (
            <ReceiptIcon
              color="#ADADAD"
              width={10}
              height={10}
            />
          ),
        };
      case "sent":
        return {
          text: "INVOICE SENT",
          color: "#FE9705",
          icon: (
            <TimeQuarterIcon
              color="#FE9705"
              width={10}
              height={10}
            />
          ),
        };
      case "overdue":
        return {
          text: "INVOICE OVERDUE",
          color: "#F27A80",
          icon: (
            <WarningIcon
              color="#F27A80"
              width={10}
              height={10}
            />
          ),
        };
      case "accepted":
        return {
          text: "ACCEPTED",
          color: "#078E17",
          icon: (
            <CheckIcon
              color="#078E17"
              width={10}
              height={10}
            />
          ),
        };
      case "approved":
        return {
          text: "APPROVED",
          color: "#078E17",
          icon: (
            <CheckIcon
              color="#078E17"
              width={10}
              height={10}
            />
          ),
        };
      case "declined":
        return {
          text: "DECLINED",
          color: "#F27A80",
          icon: (
            <WarningIcon
              color="#F27A80"
              width={10}
              height={10}
            />
          ),
        };
      case "pending":
        return {
          text: type === "invoice" ? "PENDING PAYMENT" : "PENDING",
          color: "#FE9705",
          icon: (
            <TimeQuarterIcon
              color="#FE9705"
              width={10}
              height={10}
            />
          ),
        };
      default:
        return {
          text: "UNKNOWN",
          color: "#ADADAD",
          icon: (
            <ReceiptIcon
              color="#ADADAD"
              width={10}
              height={10}
            />
          ),
        };
    }
  };

  const config = getStatusConfig();

  return (
    <View style={styles.container}>
      {config.icon}
      <Text style={[styles.text, { color: config.color }]}>{config.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    height: 16,
    justifyContent: "flex-end",
  },
  text: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 9.89,
    lineHeight: 16,
    letterSpacing: 0.02,
  },
});
