import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import InvoiceQuoteModal from "@/components/InvoiceQuoteModal";
import PaymentMethodCard from "@/components/PaymentMethod";
import PaymentsItem from "@/components/PaymentsItem";
import { invoices } from "@/mock/invoices";
import { manual } from "@/mock/manual";
import { quotes } from "@/mock/quotes";

export default function PaymentsScreen() {
  const [showInvoiceQuoteModal, setShowInvoiceQuoteModal] = useState(false);

  const handleSendQuotesPress = () => {
    setShowInvoiceQuoteModal(true);
  };

  const handleCreateQuote = () => {
    console.log("Create Quote pressed");
    setShowInvoiceQuoteModal(false);
    // TODO: Navigate to create quote screen
  };

  const handleGenerateInvoice = () => {
    console.log("Generate Invoice pressed");
    setShowInvoiceQuoteModal(false);
    // TODO: Navigate to generate invoice screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.mainContent}>
          <Header username="John Doe" />
          <PaymentMethodCard onSendQuotesPress={handleSendQuotesPress} />

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

      <InvoiceQuoteModal
        visible={showInvoiceQuoteModal}
        onClose={() => setShowInvoiceQuoteModal(false)}
        onCreateQuote={handleCreateQuote}
        onGenerateInvoice={handleGenerateInvoice}
      />
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
