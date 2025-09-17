import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MoneyIcon from "./icons/MoneyIcon";
import UploadCloudIcon from "./icons/UploadCloudIcon";
import BaseModal from "./ui/Modal";

interface UploadInvoiceModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function UploadInvoiceModal({
  visible,
  onClose,
}: UploadInvoiceModalProps) {
  const [currency, setCurrency] = useState("NZD");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const renderRowInputs = (
    leftLabel: string,
    leftValue: string,
    leftOnChange: (text: string) => void,
    leftPlaceholder: string,
    leftIsSelect: boolean,
    rightLabel: string,
    rightValue: string,
    rightOnChange: (text: string) => void,
    rightPlaceholder: string,
  ) => (
    <View style={styles.rowContainer}>
      <View style={[styles.textField, styles.halfWidth]}>
        <Text style={styles.label}>{leftLabel}</Text>
        {leftIsSelect ? (
          <TouchableOpacity style={styles.inputContainer}>
            <View style={styles.selectContent}>
              <Text style={styles.input}>{leftValue}</Text>
              <Ionicons
                name="chevron-down"
                size={16}
                color="#676767"
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={leftValue}
              onChangeText={leftOnChange}
              placeholder={leftPlaceholder}
              placeholderTextColor="#ADADAD"
            />
          </View>
        )}
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

  const renderFileUpload = () => (
    <View style={styles.textField}>
      <Text style={styles.label}>Upload Invoice</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <View style={styles.uploadContent}>
          <UploadCloudIcon />
          <Text style={styles.uploadText}>Drag and Drop (or) Choose Files</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderNotesInput = () => (
    <View style={styles.textField}>
      <Text style={styles.label}>Additional Notes</Text>
      <View style={styles.notesInputContainer}>
        <TextInput
          style={styles.notesInput}
          value={notes}
          onChangeText={setNotes}
          placeholder="Enter your notes here..."
          placeholderTextColor="#ADADAD"
          multiline
          textAlignVertical="top"
        />
      </View>
    </View>
  );

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Upload an invoice"
      subtitle="Already been paid? No troubles. Simply upload the invoice you sent to your employer or client."
      icon={<MoneyIcon />}
      showDivider={true}
    >
      <View style={styles.formContainer}>
        <View style={styles.formFields}>
          {renderRowInputs(
            "Currency",
            currency,
            setCurrency,
            "Select currency",
            true, // This makes it a select field
            "Amount",
            amount,
            setAmount,
            "Amount",
          )}

          {renderFileUpload()}

          {renderNotesInput()}
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Submit</Text>
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
  selectContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
    gap: 16,
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
  notesInputContainer: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    height: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  notesInput: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#363636",
    letterSpacing: 0.02,
    flex: 1,
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
  uploadButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 42,
  },
  uploadButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
    textAlign: "center",
  },
});
