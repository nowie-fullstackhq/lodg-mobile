import { Stack } from "expo-router";

export default function PaymentsStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ title: "Payments" }}
      />
      <Stack.Screen
        name="invoices"
        options={{ title: "Invoices" }}
      />
    </Stack>
  );
}
