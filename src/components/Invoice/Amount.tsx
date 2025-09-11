import { StyleSheet, Text, View } from "react-native";
import type { InvoiceStatus } from "@/types";
import InvoiceStatusBadge from "./InvoiceStatusBadge";

interface AmountProps {
  amount: string;
  currency: string;
  status: InvoiceStatus;
}

export default function Amount({ amount, currency, status }: AmountProps) {
  return (
    <View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
      <InvoiceStatusBadge status={status} />
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
