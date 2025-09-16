import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CalculatorIcon from "./icons/CalculatorIcon";
import CrossIcon from "./icons/CrossIcon";
import PencilIcon from "./icons/PencilIcon";
import ReceiptEditIcon from "./icons/ReceiptEditIcon";
import ReceiptEditSmallIcon from "./icons/ReceiptEditSmallIcon";
import SettingsThinIcon from "./icons/SettingsThinIcon";

const { width } = Dimensions.get("window");

interface InvoiceQuoteModalProps {
  visible: boolean;
  onClose: () => void;
  onCreateQuote: () => void;
  onGenerateInvoice: () => void;
}

export default function InvoiceQuoteModal({
  visible,
  onClose,
  onCreateQuote,
  onGenerateInvoice,
}: InvoiceQuoteModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.headerContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.iconContainer}>
                  <ReceiptEditSmallIcon />
                </View>
                <Text style={styles.title}>Send Quotes or Invoices</Text>
              </View>
              <Text style={styles.subtitle}>
                Easily create and send quotes for client approval or generate
                invoices to get paid faster.
              </Text>
            </View>
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeButton}
            >
              <CrossIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.primaryOption}
              onPress={onCreateQuote}
            >
              <View style={styles.optionIconContainer}>
                <View style={styles.primaryIconBackground}>
                  <CalculatorIcon />
                </View>
                <View style={styles.badge}>
                  <PencilIcon />
                </View>
              </View>
              <View style={styles.optionContent}>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTitle}>Create Quote</Text>
                  <Text style={styles.optionDescription}>
                    Send a detailed price quote to your client for review before
                    finalizing payment.
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#2256CB"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryOption}
              onPress={onGenerateInvoice}
            >
              <View style={styles.optionIconContainer}>
                <View style={styles.secondaryIconBackground}>
                  <ReceiptEditIcon />
                </View>
                <View style={styles.badge}>
                  <SettingsThinIcon />
                </View>
              </View>
              <View style={styles.optionContent}>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTitle}>Generate Invoice</Text>
                  <Text style={styles.optionDescription}>
                    Generate and send an invoice to your employer or client to
                    get paid
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#2256CB"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "#FEFEFE",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    width: width,
    minHeight: 537,
    gap: 24,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  contentContainer: {
    flex: 1,
    gap: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconContainer: {
    width: 28,
    height: 28,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.32,
    color: "#222529",
    flex: 1,
  },
  subtitle: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  closeButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#EDEDED",
  },
  optionsContainer: {
    gap: 16,
  },
  primaryOption: {
    backgroundColor: "#F0F7FE",
    borderWidth: 1,
    borderColor: "#2256CB",
    borderRadius: 14,
    padding: 16,
    gap: 16,
  },
  secondaryOption: {
    backgroundColor: "#FEFEFE",
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 14,
    padding: 16,
    gap: 16,
  },
  optionIconContainer: {
    position: "relative",
    width: 64,
    height: 64,
  },
  primaryIconBackground: {
    width: 64,
    height: 64,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryIconBackground: {
    width: 64,
    height: 64,
    backgroundColor: "#FEFEFE",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 24,
    height: 24,
    backgroundColor: "#B6FFBD",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
  },
  optionTextContainer: {
    flex: 1,
    gap: 4,
  },
  optionTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.32,
    color: "#222529",
  },
  optionDescription: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
});
