import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import type { InvoiceData } from "@/types";
import { formatDisplayDate } from "@/utils";
import TransactionAmount from "../TransactionAmount";
import TransactionDetails from "../TransactionDetails";
import Avatar from "./Avatar";

interface ItemProps {
  invoice: InvoiceData;
  showBorder?: boolean;
}

export default function Item({ invoice, showBorder = true }: ItemProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/(tabs)/(payments)/invoices/[id]",
      params: { id: invoice.id },
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        showBorder ? styles.borderedContainer : styles.noBorder,
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Avatar
        username={invoice.clientName}
        hasAvatar={invoice.hasAvatar}
      />
      <TransactionDetails
        clientName={invoice.clientName}
        date={formatDisplayDate(invoice.date)}
      />
      <TransactionAmount
        amount={invoice.amount}
        currency={invoice.currency}
        status={invoice.status}
      />
    </TouchableOpacity>
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
