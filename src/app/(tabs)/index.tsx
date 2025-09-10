import { Text, View } from "react-native";
import Header from "@/components/Header";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#f6f6f6" }}>
      <Header username="John Doe" />
      <Text>HomeScreen</Text>
    </View>
  );
}
