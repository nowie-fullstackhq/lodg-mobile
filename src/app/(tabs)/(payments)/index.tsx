import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ActionMethodCard from "@/components/ActionMethodCard";
import InvoiceQuoteModal from "@/components/InvoiceQuoteModal";
import CardReceivedIcon from "@/components/icons/CardReceivedIcon";
import MoneyIcon from "@/components/icons/MoneyIcon";
import ReceiptEditSmallIcon from "@/components/icons/ReceiptEditSmallIcon";
import TransactionItem from "@/components/TransactionItem";
import MainLayout from "@/layouts/MainLayout";
import { invoices } from "@/mock/invoices";
import { manual } from "@/mock/manual";
import { quotes } from "@/mock/quotes";

export default function PaymentsScreen() {
  const [showInvoiceQuoteModal, setShowInvoiceQuoteModal] = useState(false);

  const router = useRouter();

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

  const methods = [
    {
      id: "1",
      icon: <ReceiptEditSmallIcon />,
      title: "Send Quotes or Invoices",
      description:
        "Easily create and send quotes for client approval or generate invoices to get paid faster.",
      onPress: handleSendQuotesPress,
    },
    {
      id: "2",
      icon: <MoneyIcon />,
      title: "Upload an invoice",
      description:
        "Already been paid? No troubles. Simply upload the invoice you sent to your employer or client",
      onPress: () => {},
    },
    {
      id: "3",
      icon: <CardReceivedIcon />,
      title: "Direct debit",
      description:
        "Get your employer or client to pay you into your Lodg account",
      onPress: () => {},
    },
  ];

  return (
    <>
      <MainLayout username="John Doe">
        <View style={styles.content}>
          <ActionMethodCard
            title="Receive payments to Lodg"
            methods={methods}
          />

          <TransactionItem
            title="Invoices"
            data={invoices}
            type="invoice"
            onPress={() => router.push("/(tabs)/(payments)/invoices")}
          />
          <TransactionItem
            title="Quotes"
            data={quotes}
            type="invoice"
            onPress={() => router.push("/(tabs)/(payments)/invoices")}
          />
          <TransactionItem
            title="Manual Transaction"
            data={manual}
            type="invoice"
            onPress={() => router.push("/(tabs)/(payments)/invoices")}
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
