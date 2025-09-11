import { StyleSheet, Text, View } from "react-native";
import type { ExpenseStatus } from "@/types";
import StatusBadge from "./StatusBadge";

interface AmountProps {
  amount: string;
  currency: string;
  status: ExpenseStatus;
}

export default function Amount({ amount, currency, status }: AmountProps) {
  return (
    <View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
      <StatusBadge status={status} />
    </View>
  );
}

const styles = StyleSheet.create({
  amountContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    paddingBottom: 4,
  },
  amount: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 14,
    color: "#222529",
  },
  currency: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 14,
    color: "#222529",
  },
});
