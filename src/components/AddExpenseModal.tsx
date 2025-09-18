import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ReceiptItemIcon from "./icons/ReceiptItemIcon";
import BaseModal from "./ui/Modal";

interface AddExpensesModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddExpensesModal({
  visible,
  onClose,
}: AddExpensesModalProps) {
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState("");

  const renderTextInput = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    keyboardType: "default" | "numeric" = "default",
    suffix?: string,
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
        {suffix && <Text style={styles.suffix}>{suffix}</Text>}
      </View>
    </View>
  );

  const renderDropdown = (
    label: string,
    value: string,
    placeholder: string,
  ) => (
    <View style={styles.textField}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.inputContainer}>
        <View style={styles.dropdownContent}>
          <Text
            style={[styles.input, { color: value ? "#363636" : "#ADADAD" }]}
          >
            {value || placeholder}
          </Text>
          <Ionicons
            name="chevron-down"
            size={18}
            color="#999999"
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderFileUpload = () => (
    <View style={styles.textField}>
      <Text style={styles.label}>Receipt</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <View style={styles.uploadContent}>
          <Ionicons
            name="cloud-upload-outline"
            size={24}
            color="#777771"
          />
          <Text style={styles.uploadText}>Drag and Drop (or) Choose Files</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderTextArea = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
  ) => (
    <View style={styles.textField}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#ADADAD"
          multiline
          textAlignVertical="top"
        />
      </View>
    </View>
  );

  const renderToggle = () => (
    <View style={styles.toggleContainer}>
      <View style={styles.toggleInfo}>
        <Text style={styles.toggleLabel}>Set as Recurring Expense</Text>
        <Text style={styles.toggleHelper}>
          Enable this option to make the expense recurring and specify its
          frequency
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.toggle, isRecurring && styles.toggleActive]}
        onPress={() => setIsRecurring(!isRecurring)}
      >
        <View
          style={[styles.toggleThumb, isRecurring && styles.toggleThumbActive]}
        />
      </TouchableOpacity>
    </View>
  );

  const renderDatePicker = () => (
    <View style={styles.textField}>
      <Text style={styles.label}>Expense Date</Text>
      <TouchableOpacity style={styles.inputContainer}>
        <View style={styles.datePickerContent}>
          <Text style={[styles.input, { color: "#ADADAD" }]}>dd/mm/yy</Text>
          <Ionicons
            name="calendar-outline"
            size={16}
            color="#676767"
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Add expenses"
      subtitle="Simply upload a receipt of any work-related costs that you have made"
      icon={<ReceiptItemIcon />}
      showDivider={true}
    >
      <View style={styles.formContainer}>
        <View style={styles.formFields}>
          {renderDropdown("Category", category, "Select category")}
          {renderDropdown("Currency", currency, "NZD")}

          {renderTextInput(
            "Amount",
            amount,
            setAmount,
            "Enter amount",
            "numeric",
            "NZD",
          )}
          <Text style={styles.helperText}>
            List the amount that matches the invoice total
          </Text>

          {renderDatePicker()}

          {renderFileUpload()}

          {renderTextArea("Notes", notes, setNotes, "Write any notes here...")}

          {renderToggle()}

          {isRecurring && (
            <View style={styles.textField}>
              <Text style={styles.label}>Frequency</Text>
              <TouchableOpacity style={styles.inputContainer}>
                <View style={styles.dropdownContent}>
                  <Text
                    style={[
                      styles.input,
                      { color: frequency ? "#363636" : "#ADADAD" },
                    ]}
                  >
                    {frequency || "Daily"}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={18}
                    color="#999999"
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Submit</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#363636",
    letterSpacing: 0.02,
    flex: 1,
  },
  suffix: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#999999",
    letterSpacing: 0.02,
  },
  dropdownContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    height: 100,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadContent: {
    alignItems: "center",
    gap: 12,
  },
  uploadText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#ADADAD",
    letterSpacing: 0.02,
    textAlign: "center",
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    height: 126,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textArea: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#363636",
    letterSpacing: 0.02,
    flex: 1,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  toggleInfo: {
    flex: 1,
    gap: 4,
  },
  toggleLabel: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 20,
    color: "#676767",
    letterSpacing: 0.02,
  },
  toggleHelper: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#999999",
  },
  toggle: {
    width: 48,
    height: 28,
    backgroundColor: "#C8C8C8",
    borderRadius: 14,
    padding: 2,
    justifyContent: "center",
  },
  toggleActive: {
    backgroundColor: "#0cdb23",
  },
  toggleThumb: {
    width: 24,
    height: 24,
    backgroundColor: "#FEFEFE",
    borderRadius: 12,
    shadowColor: "#0C0C0D",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleThumbActive: {
    alignSelf: "flex-end",
  },
  datePickerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  helperText: {
    color: "#999999",
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    marginTop: -8,
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
