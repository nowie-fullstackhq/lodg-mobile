import { StyleSheet, View } from "react-native";
import type { InvoiceData } from "@/types";
import Avatar from "./Avatar";
import TransactionAmount from "./TransactionAmount";
import TransactionDetails from "./TransactionDetails";

interface TransactionItemProps {
  invoice: InvoiceData;
}

export default function TransactionItem({ invoice }: TransactionItemProps) {
  return (
    <View style={styles.container}>
      <Avatar
        username={invoice.clientName}
        hasAvatar={invoice.hasAvatar}
        backgroundColor="#F0F7FE"
        textColor="#2256CB"
      />
      <TransactionDetails
        clientName={invoice.clientName}
        date={invoice.date}
      />
      <TransactionAmount
        amount={invoice.amount}
        currency={invoice.currency}
        status={invoice.status}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    gap: 12,
    height: 85,
    backgroundColor: "#FDFDFD",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 8,
  },
});
