import { StyleSheet, Text, View } from "react-native";
import type { Status } from "@/types";
import TransactionStatusBadge from "./TransactionStatusBadge";

interface TransactionAmountProps {
  amount: string;
  currency: string;
  status: Status;
  type?: "invoice" | "expense";
}

export default function TransactionAmount({
  amount,
  currency,
  status,
  type = "invoice",
}: TransactionAmountProps) {
  return (
    <View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
      <TransactionStatusBadge
        status={status}
        type={type}
      />
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
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    color: "#222529",
  },
  currency: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    color: "#222529",
  },
});
