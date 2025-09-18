import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import type { ExpenseData } from "@/types";
import { formatDisplayDate } from "@/utils";
import TransactionAmount from "../TransactionAmount";
import TransactionDetails from "../TransactionDetails";
import Avatar from "./Avatar";

interface ItemProps {
  expense: ExpenseData;
  showBorder?: boolean;
}

export default function Item({ expense, showBorder }: ItemProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/(tabs)/(expenses)/expenses/[id]",
      params: { id: expense.id },
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
        type={expense.type}
        category={expense.category}
      />
      <TransactionDetails
        clientName={expense.title}
        date={formatDisplayDate(expense.date)}
      />
      <TransactionAmount
        amount={expense.amount}
        currency={expense.currency}
        status={expense.status}
        type="expense"
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
