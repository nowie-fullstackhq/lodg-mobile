import { router } from "expo-router";
import { View } from "react-native";
import type { InvoiceData } from "@/types";
import NoData from "../NoData";
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
        onPress={() => router.push("/(tabs)/(payments)/invoices")}
      />
      <View style={{ marginBottom: 40, gap: 16 }}>
        {data.length > 0 ? (
          data.slice(0, 5).map(item => (
            <Item
              key={item.id}
              invoice={item}
            />
          ))
        ) : (
          <NoData />
        )}
      </View>
    </View>
  );
}
