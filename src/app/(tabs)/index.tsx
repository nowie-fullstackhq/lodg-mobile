import { Text, View } from "react-native";
import Button from "@/components/Button";
import Header from "@/components/Header";
import TodaysMoney from "@/components/TodaysMoney";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#f6f6f6", paddingHorizontal: 24 }}>
      <Header username="John Doe" />
      <TodaysMoney />
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          gap: 16,
        }}
      >
        <Button
          title="Add Expense"
          onPress={() => {}}
        />
        <Button
          title="Add Income"
          onPress={() => {}}
        />
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
}
