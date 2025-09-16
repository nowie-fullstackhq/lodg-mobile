import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardReceivedIcon from "./icons/CardReceivedIcon";
import MoneyIcon from "./icons/MoneyIcon";
import ReceiptEditIcon from "./icons/ReceiptEditIcon";

const paymentMethods = [
  {
    id: "1",
    icon: <ReceiptEditIcon />,
    title: "Send Quotes or Invoices",
    description:
      "Easily create and send quotes for client approval or generate invoices to get paid faster.",
  },
  {
    id: "2",
    icon: <MoneyIcon />,
    title: "Upload an invoice",
    description:
      "Already been paid? No troubles. Simply upload the invoice you sent to your employer or client",
  },
  {
    id: "3",
    icon: <CardReceivedIcon />,
    title: "Direct debit",
    description:
      "Get your employer or client to pay you into your Lodg account",
  },
];

export default function PaymentMethodCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receive payments to Lodg</Text>
      <View style={styles.methodsContainer}>
        {paymentMethods.map(method => (
          <TouchableOpacity
            key={method.id}
            style={styles.methodItem}
          >
            <View style={styles.iconContainer}>{method.icon}</View>
            <View style={styles.textContainer}>
              <Text style={styles.methodTitle}>{method.title}</Text>
              <Text style={styles.methodDescription}>{method.description}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#999999"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    padding: 20,
    gap: 24,
  },
  title: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  methodsContainer: {
    gap: 30,
  },
  methodItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  methodTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#222529",
  },
  methodDescription: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
});
