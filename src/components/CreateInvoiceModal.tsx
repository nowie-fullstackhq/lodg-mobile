import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ReceiptEditSmallIcon from "./icons/ReceiptEditSmallIcon";
import BaseModal from "./ui/Modal";

interface CreateInvoiceModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function CreateInvoiceModal({
  visible,
  onClose,
}: CreateInvoiceModalProps) {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [includeGST, setIncludeGST] = useState(false);

  const renderTextInput = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    keyboardType: "default" | "email-address" | "numeric" = "default",
  ) => (
    <View style={styles.textField}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#ADADAD"
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );

  const renderDatePicker = () => (
    <View style={styles.textField}>
      <Text style={styles.label}>Invoice Due Date</Text>
      <TouchableOpacity style={styles.inputContainer}>
        <View style={styles.datePickerContent}>
          <Text style={[styles.input, { color: "#ADADAD" }]}>
            Select invoice date
          </Text>
          <Ionicons
            name="calendar-outline"
            size={16}
            color="#676767"
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderRowInputs = (
    leftLabel: string,
    leftValue: string,
    leftOnChange: (text: string) => void,
    leftPlaceholder: string,
    rightLabel: string,
    rightValue: string,
    rightOnChange: (text: string) => void,
    rightPlaceholder: string,
  ) => (
    <View style={styles.rowContainer}>
      <View style={[styles.textField, styles.halfWidth]}>
        <Text style={styles.label}>{leftLabel}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={leftValue}
            onChangeText={leftOnChange}
            placeholder={leftPlaceholder}
            placeholderTextColor="#ADADAD"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={[styles.textField, styles.halfWidth]}>
        <Text style={styles.label}>{rightLabel}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={rightValue}
            onChangeText={rightOnChange}
            placeholder={rightPlaceholder}
            placeholderTextColor="#ADADAD"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Create and send invoice"
      subtitle="Generate and send an invoice to your employer or client to get paid"
      icon={<ReceiptEditSmallIcon />}
      showDivider={true}
    >
      <View style={styles.formContainer}>
        <View style={styles.formFields}>
          {renderTextInput(
            "Your Client's  Full Name",
            clientName,
            setClientName,
            "Enter client name",
          )}

          {renderTextInput(
            "Your Client's Email",
            clientEmail,
            setClientEmail,
            "Enter client email address",
            "email-address",
          )}

          {renderDatePicker()}

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, includeGST && styles.checkboxChecked]}
              onPress={() => setIncludeGST(!includeGST)}
            >
              {includeGST && (
                <Ionicons
                  name="checkmark"
                  size={12}
                  color="#2256CB"
                />
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Add GST Tax</Text>
            <TouchableOpacity style={styles.infoIcon}>
              <Ionicons
                name="information-circle-outline"
                size={15}
                color="#676767"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {renderTextInput(
            "Description",
            description,
            setDescription,
            "Description goes here",
          )}

          {renderRowInputs(
            "Quantity",
            quantity,
            setQuantity,
            "Enter quantity",
            "Unit Price",
            unitPrice,
            setUnitPrice,
            "Enter unit price",
          )}

          <TouchableOpacity style={styles.addItemButton}>
            <Ionicons
              name="add"
              size={12}
              color="#2256CB"
            />
            <Text style={styles.addItemText}>Add Item</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {renderTextInput(
            "Additional Notes",
            notes,
            setNotes,
            "Add any additional notes or terms",
          )}
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Preview Invoice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 24,
  },
  formFields: {
    gap: 16,
  },
  textField: {
    gap: 8,
  },
  halfWidth: {
    flex: 1,
  },
  label: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    height: 42,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  input: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#363636",
    letterSpacing: 0.02,
  },
  datePickerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
    gap: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#F0F7FE",
    borderColor: "#2256CB",
  },
  checkboxLabel: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  infoIcon: {
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#EDEDED",
  },
  addItemButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 18,
    gap: 8,
    borderWidth: 1,
    borderColor: "#2256CB",
    borderRadius: 12,
    height: 42,
  },
  addItemText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 36,
  },
  cancelButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 42,
  },
  cancelButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
    textAlign: "center",
  },
  createButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 42,
  },
  createButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
    textAlign: "center",
  },
});
