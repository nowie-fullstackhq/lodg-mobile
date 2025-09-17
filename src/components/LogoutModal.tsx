import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoutIcon from "./icons/LogoutIcon";
import BaseModal from "./ui/Modal";

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
  username: string;
}

export default function LogoutModal({
  visible,
  onClose,
  onCancel,
  onConfirm,
  username,
}: LogoutModalProps) {
  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Log Out?"
      subtitle={`You are currently logged in as ${username}.`}
      icon={
        <LogoutIcon
          width={15}
          height={15}
          color="#2256CB"
        />
      }
    >
      <View style={styles.actionContent}>
        <Text style={styles.confirmationText}>
          Are you sure you want to log out?
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onCancel}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={onConfirm}
          >
            <Text style={styles.confirmButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  actionContent: {
    gap: 24,
  },
  confirmationText: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#363636",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
  },
  cancelButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    flex: 1,
  },
  cancelButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
    textAlign: "center",
  },
  confirmButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    alignItems: "center",
    flex: 1,
  },
  confirmButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
    textAlign: "center",
  },
});
