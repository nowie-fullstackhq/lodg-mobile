import { useState } from "react";
import { StyleSheet, View } from "react-native";
import InvoiceQuoteModal from "@/components/InvoiceQuoteModal";
import PaymentMethodCard from "@/components/PaymentMethod";
import PaymentsItem from "@/components/PaymentsItem";
import MainLayout from "@/layouts/MainLayout";
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
    <>
      <MainLayout username="John Doe">
        <View style={styles.content}>
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
      </MainLayout>

      <InvoiceQuoteModal
        visible={showInvoiceQuoteModal}
        onClose={() => setShowInvoiceQuoteModal(false)}
        onCreateQuote={handleCreateQuote}
        onGenerateInvoice={handleGenerateInvoice}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
    gap: 16,
  },
});
