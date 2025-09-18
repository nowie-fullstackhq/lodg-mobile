import { StyleSheet, View } from "react-native";
import type { ExpenseData, InvoiceData } from "@/types";
import ExpenseItem from "./Expenses/Item";
import InvoiceItem from "./Invoice/Item";
import NoData from "./NoData";
import TransactionListHeader from "./TransactionListHeader";

type TransactionData = InvoiceData | ExpenseData;

interface TransactionItemProps {
  title: string;
  data: TransactionData[];
  type: "invoice" | "expense";
  onPress: () => void;
}

export default function TransactionItem({
  title,
  data,
  type,
  onPress,
}: TransactionItemProps) {
  const renderItem = (item: TransactionData, showBorder: boolean) => {
    if (type === "invoice") {
      return (
        <InvoiceItem
          invoice={item as InvoiceData}
          showBorder={showBorder}
        />
      );
    }
    return (
      <ExpenseItem
        expense={item as ExpenseData}
        showBorder={showBorder}
      />
    );
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <TransactionListHeader
          title={title}
          onPress={onPress}
        />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.divider} />
        <View style={styles.listContent}>
          {data.length > 0 ? (
            data.map((item, index) => (
              <View
                key={item.id}
                style={[index < data.length - 1 && styles.itemWithBorder]}
              >
                {renderItem(item, false)}
              </View>
            ))
          ) : (
            <NoData />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
  listContainer: {
    gap: 16,
  },
  divider: {
    height: 2,
    backgroundColor: "#DCECFD",
  },
  listContent: {
    paddingBottom: 12,
  },
  itemWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F7F7F7",
  },
});
