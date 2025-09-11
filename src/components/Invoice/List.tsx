import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import type { InvoiceData } from "@/types";
import TransactionListHeader from "../TransactionListHeader";
import Item from "./Item";

interface ListProps {
  data: InvoiceData[];
}

export default function List({ data }: ListProps) {
  return (
    <View>
      <TransactionListHeader
        title="Invoices"
        onPress={() => {}}
      />
      <View style={{ marginBottom: 40 }}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Item
                key={item.id}
                invoice={item}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
          />
        ) : (
          <View style={styles.noDataContainer}>
            <Image source={require("@/assets/images/Empty.svg")} />
            <Text style={styles.noDataText}>No items to show.</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  title: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  buttonText: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "400",
    fontSize: 14,
    color: "#2256CB",
  },
  noDataContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noDataText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    color: "#ADADAD",
  },
});
