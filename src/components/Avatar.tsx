import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface AvatarProps {
  username: string;
  hasAvatar: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export default function Avatar({
  username,
  hasAvatar,
  backgroundColor = "#2256cb",
  textColor = "#ffffff",
}: AvatarProps) {
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
        hasAvatar ? styles.uploadBackground : { backgroundColor },
      ]}
    >
      {hasAvatar ? (
        <Ionicons
          name="cloud-upload-outline"
          size={16}
          color="#999999"
        />
      ) : (
        <Text style={[styles.initials, { color: textColor }]}>{initials}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBackground: {
    backgroundColor: "#F7F7F7",
  },
  initials: {
    fontSize: 14,
    fontFamily: "PlusJakartaSansBold",
  },
});
