import { StyleSheet, Text, View } from "react-native";
import EmptyIcon from "./icons/EmptyIcon";

export default function NoData() {
  return (
    <View style={styles.container}>
      <EmptyIcon />
      <Text style={styles.text}>No items to show.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    color: "#ADADAD",
    paddingTop: 12,
  },
});
