import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TransactionItem from "@/components/TransactionItem";
import type { InvoiceData } from "@/types";

interface TransactionListProps {
  title: string;
  onPress: () => void;
  data: InvoiceData[];
}

export default function TransactionList({
  title,
  onPress,
  data,
}: TransactionListProps) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 40 }}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TransactionItem
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
