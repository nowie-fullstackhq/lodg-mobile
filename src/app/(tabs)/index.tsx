import { ScrollView, View, StyleSheet} from "react-native";
import Balance from "@/components/Balance";
import Button from "@/components/Button";
import DashboardCard from "@/components/DashboardCard";
import ExpenseList from "@/components/Expenses/List";
import InvoiceList from "@/components/Invoice/List";
import MainLayout from "@/layouts/MainLayout";
import { expenses } from "@/mock/expenses";
import { invoices } from "@/mock/invoices";

export default function HomeScreen() {
  return (
    <MainLayout username="John Doe">
      <Balance />
      <View style={styles.buttonContainer}>
        <Button
          title="Add Expense"
          onPress={() => {}}
        />
        <Button
          title="Add Income"
          onPress={() => {}}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
        style={styles.cardsScrollView}
      >
        <DashboardCard
          title="Get $50 or a Free Month—Just for Sharing Lodg 💸"
          description={
            "Love Lodg? Share the love.\nRefer a mate, get $50 or 1 month free—your pick."
          }
          linkText="Contact us to learn more"
          onPress={() => console.log("First card pressed")}
          gradientColors={["#D8FFDC", "#78FD86"]}
          variant="light"
        />
        <DashboardCard
          title="Never Manually Upload Receipts Again ✨"
          description="Auto-track expenses and claim GST with secure bank feeds and smart AI."
          linkText="Read more"
          onPress={() => console.log("second card pressed")}
          gradientColors={["#1F2451", "#343A73"]}
          variant="dark"
        />
      </ScrollView>

      <View style={styles.listsContainer}>
        <InvoiceList data={invoices} />
        <ExpenseList data={expenses} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 16,
  },
  cardsScrollView: {
    marginTop: 20,
    marginHorizontal: -24,
  },
  cardsContainer: {
    paddingHorizontal: 24,
    gap: 14,
  },
  listsContainer: {
    marginTop: 12,
  },
});
