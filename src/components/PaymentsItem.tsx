import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import type { InvoiceData } from "@/types";
import Item from "./Invoice/Item";
import NoData from "./NoData";
import TransactionListHeader from "./TransactionListHeader";

interface PaymentsItemProps {
  title: string;
  data: InvoiceData[];
}

export default function PaymentsItem({ title, data }: PaymentsItemProps) {
  return (
    <View style={styles.sectionContainer}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <TransactionListHeader
          title={title}
          onPress={() => router.push("/(tabs)/invoices")}
        />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.divider} />
        <View style={styles.listContent}>
          {data.length > 0 ? (
            data.map((invoice, index) => (
              <View
                key={invoice.id}
                style={[index < data.length - 1 && styles.itemWithBorder]}
              >
                <Item
                  invoice={invoice}
                  showBorder={false}
                />
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
