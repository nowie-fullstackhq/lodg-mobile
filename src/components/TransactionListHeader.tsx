import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TransactionListHeaderProps {
  title: string;
  onPress: () => void;
}
export default function TransactionListHeader({
  title,
  onPress,
}: TransactionListHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  title: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  buttonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    color: "#2256CB",
  },
});
