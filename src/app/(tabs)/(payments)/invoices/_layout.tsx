import { Stack } from "expo-router";

export default function InvoicesStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ title: "Invoice List" }}
      />
      <Stack.Screen
        name="[id]"
        options={{ title: "Invoice Details" }}
      />
    </Stack>
  );
}
