import { View } from "react-native";
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
      <View style={{ marginBottom: 40, gap: 16 }}>
        {data.length > 0 ? (
          data.map(item => (
            <Item
              key={item.id}
              expense={item}
            />
          ))
        ) : (
          <NoData />
        )}
      </View>
    </View>
  );
}
