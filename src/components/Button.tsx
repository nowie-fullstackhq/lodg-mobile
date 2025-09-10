import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function Button({
  title,
  onPress,
  disabled = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.iconContainer}>
        <Image
          source={require("@/assets/icons/Plus.svg")}
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2256cb",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 8,
    minHeight: 44,
    flex: 1,
  },
  iconContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 6,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: "#2256cb",
  },
  text: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 12,
    lineHeight: 24,
    color: "#ffffff",
  },
});
