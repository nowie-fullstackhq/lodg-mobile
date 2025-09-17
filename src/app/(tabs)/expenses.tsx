import { StyleSheet, Text, View } from "react-native";
import MainLayout from "@/layouts/MainLayout";

export default function ExpensesScreen() {
  return (
    <MainLayout username="John Doe">
      <View style={styles.content}>
        <Text>ExpensesScreen</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
    gap: 16,
  },
});
