import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface InvoiceAvatarProps {
  username: string;
  hasAvatar: boolean;
}

export default function InvoiceAvatar({
  username,
  hasAvatar,
}: InvoiceAvatarProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials(username);

  return (
    <View
      style={[
        styles.container,
        !hasAvatar ? styles.avatarBackground : styles.uploadBackground,
      ]}
    >
      {!hasAvatar ? (
        <Text style={styles.initials}>{initials}</Text>
      ) : (
        <Ionicons
          name="cloud-upload-outline"
          size={16}
          color="#999999"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarBackground: {
    backgroundColor: "#F0F7FE",
  },
  uploadBackground: {
    backgroundColor: "#F7F7F7",
  },
  initials: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0.02,
    color: "#2256CB",
  },
});
