import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CrossIcon from "./icons/CrossIcon";
import LogoutIcon from "./icons/LogoutIcon";

const { width } = Dimensions.get("window");

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
                  <LogoutIcon
                    width={15}
                    height={15}
                    color="#2256CB"
                  />
                </View>
                <Text style={styles.title}>Log Out?</Text>
              </View>
              <Text style={styles.subtitle}>
                You are currently logged in as {username}.
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

          <View style={styles.actionContainer}>
            <View style={styles.actionContent}>
              <View style={styles.confirmationContainer}>
                <Text style={styles.confirmationText}>
                  Are you sure you want to log out?
                </Text>
              </View>

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
    minHeight: 249,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 24,
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
    marginBottom: 18,
  },
  actionContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    minHeight: 98,
  },
  actionContent: {
    gap: 24,
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  confirmationContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationText: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#363636",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 24,
    width: "100%",
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 12,
    minWidth: 41,
    alignItems: "center",
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
    minWidth: 83,
    alignItems: "center",
  },
  confirmButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
    textAlign: "center",
  },
});
