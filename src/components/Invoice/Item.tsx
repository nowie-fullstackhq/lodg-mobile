import { StyleSheet, View } from "react-native";
import type { InvoiceData } from "@/types";
import TransactionAmount from "../TransactionAmount";
import TransactionDetails from "../TransactionDetails";
import Avatar from "./Avatar";

interface ItemProps {
  invoice: InvoiceData;
  showBorder?: boolean;
}

export default function Item({ invoice, showBorder = true }: ItemProps) {
  return (
    <View
      style={[
        styles.container,
        showBorder ? styles.borderedContainer : styles.noBorder,
      ]}
    >
      <Avatar
        username={invoice.clientName}
        hasAvatar={invoice.hasAvatar}
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
  },
  borderedContainer: {
    backgroundColor: "#FDFDFD",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 8,
  },
  noBorder: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    height: 77,
  },
});
