import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Balance from "@/components/Balance";
import Button from "@/components/Button";
import DashboardCard from "@/components/DashboardCard";
import ExpenseList from "@/components/Expenses/List";
import Header from "@/components/Header";
import InvoiceList from "@/components/Invoice/List";
import { expenses } from "@/mock/expenses";
import { invoices } from "@/mock/invoices";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#f6f6f6", paddingHorizontal: 24 }}>
          <Header username="John Doe" />
          <Balance />
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
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            gap: 14,
          }}
          style={{
            marginTop: 20,
          }}
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
        <View
          style={{
            backgroundColor: "#f6f6f6",
            paddingHorizontal: 24,
            marginTop: 12,
          }}
        >
          <InvoiceList data={invoices} />
          <ExpenseList data={expenses} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
