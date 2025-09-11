import { StyleSheet, View } from "react-native";
import type { InvoiceData } from "@/types";
import Amount from "./Amount";
import Avatar from "./Avatar";
import Details from "./Details";

interface ItemProps {
  invoice: InvoiceData;
}

export default function Item({ invoice }: ItemProps) {
  return (
    <View style={styles.container}>
      <Avatar
        username={invoice.clientName}
        hasAvatar={invoice.hasAvatar}
      />
      <Details
        clientName={invoice.clientName}
        date={invoice.date}
      />
      <Amount
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
