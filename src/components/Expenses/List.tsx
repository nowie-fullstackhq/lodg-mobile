import { FlatList, View } from "react-native";
import type { ExpenseData } from "@/types";
import NoData from "../NoData";
import TransactionListHeader from "../TransactionListHeader";
import Item from "./Item";

interface ListProps {
  data: ExpenseData[];
}

export default function List({ data }: ListProps) {
  return (
    <View>
      <TransactionListHeader
        title="Expenses"
        onPress={() => {}}
      />
      <View style={{ marginBottom: 40 }}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Item
                key={item.id}
                expense={item}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
          />
        ) : (
          <NoData />
        )}
      </View>
    </View>
  );
}
