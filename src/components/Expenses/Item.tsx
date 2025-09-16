import { StyleSheet, View } from "react-native";
import type { ExpenseData } from "@/types";
import TransactionAmount from "../TransactionAmount";
import TransactionDetails from "../TransactionDetails";
import Avatar from "./Avatar";

interface ItemProps {
  expense: ExpenseData;
}

export default function Item({ expense }: ItemProps) {
  return (
    <View style={styles.container}>
      <Avatar
        type={expense.type}
        category={expense.category}
      />
      <TransactionDetails
        clientName={expense.title}
        date={expense.date}
      />
      <TransactionAmount
        amount={expense.amount}
        currency={expense.currency}
        status={expense.status}
        type="expense"
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
