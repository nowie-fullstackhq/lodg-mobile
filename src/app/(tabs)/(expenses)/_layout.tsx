import { Stack } from "expo-router";

export default function ExpensesStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ title: "Expenses" }}
      />
      <Stack.Screen
        name="expenses"
        options={{ title: "Expenses" }}
      />
    </Stack>
  );
}
