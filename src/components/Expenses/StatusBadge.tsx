import { StyleSheet, Text, View } from "react-native";
import type { ExpenseStatus } from "@/types";
import CheckIcon from "../icons/CheckIcon";
import TimeQuarterIcon from "../icons/TimeQuarterIcon";
import WarningIcon from "../icons/WarningIcon";

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
      default:
        return {
          text: "PENDING",
          color: "#FE9705",
          icon: (
            <TimeQuarterIcon
              color="#FE9705"
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
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 4,
    height: 16,
  },
  text: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 9.89,
    lineHeight: 16,
    letterSpacing: 0.02,
  },
});
