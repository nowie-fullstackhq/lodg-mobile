import { Stack } from "expo-router";

export default function ExpensesStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ title: "Expenses List" }}
      />
      <Stack.Screen
        name="[id]"
        options={{ title: "Expense Details" }}
      />
    </Stack>
  );
}
