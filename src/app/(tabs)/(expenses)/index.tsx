import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import ActionMethodCard from "@/components/ActionMethodCard";
import AIChipIcon from "@/components/icons/AIChipIcon";
import ReceiptItemIcon from "@/components/icons/ReceiptItemIcon";
import TransactionItem from "@/components/TransactionItem";
import MainLayout from "@/layouts/MainLayout";
import { expenses } from "@/mock/expenses";

export default function ExpensesScreen() {
  const router = useRouter();

  const methods = [
    {
      id: "1",
      icon: <ReceiptItemIcon />,
      title: "Add expenses",
      description:
        "Simply upload a receipt of any work-related costs that you have made.",
      onPress: () => {},
    },
    {
      id: "2",
      icon: <AIChipIcon />,
      title: "Use AI to Automatically Claim Expenses",
      description:
        "Connect your bank account to our AI-powered system, and we’ll automatically detect work-related expenses.",
      onPress: () => router.push("/(tabs)/(expenses)/prosaic"),
    },
  ];

  return (
    <MainLayout username="John Doe">
      <View style={styles.content}>
        <ActionMethodCard
          title="Manage expenses on Lodg"
          methods={methods}
        />
        <TransactionItem
          title="Expenses"
          data={expenses}
          type="expense"
          onPress={() => router.push("/(tabs)/(expenses)/expenses")}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 12,
    gap: 16,
  },
});
