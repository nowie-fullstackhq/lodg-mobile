import { StyleSheet, Text, View } from "react-native";

interface DetailsProps {
  clientName: string;
  date: string;
}

export default function Details({ clientName, date }: DetailsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.clientName}>{clientName}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 3,
    flex: 1,
    height: 39,
  },
  clientName: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    color: "#222529",
  },
  date: {
    fontFamily: "PlusJakartaSans",
    fontSize: 9.89,
    lineHeight: 16,
    color: "#676767",
  },
});
