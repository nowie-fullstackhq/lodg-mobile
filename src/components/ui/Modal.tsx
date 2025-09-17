import type { ReactNode } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CrossIcon from "../icons/CrossIcon";

const { width, height } = Dimensions.get("window");

interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  showCloseButton?: boolean;
  showDivider?: boolean;
  animationType?: "none" | "slide" | "fade";
  position?: "bottom" | "center";
}

export default function BaseModal({
  visible,
  onClose,
  title,
  subtitle,
  icon,
  children,
  showCloseButton = true,
  showDivider = true,
  animationType = "none",
  position = "bottom",
}: BaseModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType={animationType}
      onRequestClose={onClose}
    >
      <View
        style={[styles.overlay, position === "center" && styles.centerOverlay]}
      >
        <View
          style={[styles.modal, position === "center" && styles.centerModal]}
        >
          <View style={styles.headerContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.titleContainer}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <Text style={styles.title}>{title}</Text>
              </View>
              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            {showCloseButton && (
              <TouchableOpacity
                onPress={onClose}
                style={styles.closeButton}
              >
                <CrossIcon />
              </TouchableOpacity>
            )}
          </View>

          {showDivider && <View style={styles.divider} />}

          <ScrollView>{children}</ScrollView>
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
  centerOverlay: {
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  modal: {
    backgroundColor: "#FEFEFE",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    width: width,
    maxHeight: height - 150,
  },
  centerModal: {
    borderRadius: 14,
    width: "100%",
    maxWidth: 400,
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
    marginBottom: 18,
  },
});
