import { Text, View } from "react-native";
import Header from "@/components/Header";
import TodaysMoney from "@/components/TodaysMoney";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#f6f6f6", paddingHorizontal: 24 }}>
      <Header username="John Doe" />
      <TodaysMoney />
      <Text>HomeScreen</Text>
    </View>
  );
}
