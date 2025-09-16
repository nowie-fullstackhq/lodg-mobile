import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import PaymentMethodCard from "@/components/PaymentMethod";
import { invoices } from "@/mock/invoices";
import { quotes } from "@/mock/quotes";
import { manual } from "@/mock/manual";
import PaymentsItem from "@/components/PaymentsItem";

export default function PaymentsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.mainContent}>
          <Header username="John Doe" />
          <PaymentMethodCard />

          <PaymentsItem
            title="Invoices"
            data={invoices}
          />
          <PaymentsItem
            title="Quotes"
            data={quotes}
          />
          <PaymentsItem
            title="Manual Transaction"
            data={manual}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  mainContent: {
    paddingHorizontal: 24,
    gap: 16,
  },
});
