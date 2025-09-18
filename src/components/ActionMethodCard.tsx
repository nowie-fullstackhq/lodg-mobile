import { Ionicons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ActionMethod {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  onPress: () => void;
}

interface ActionMethodCardProps {
  title: string;
  methods: ActionMethod[];
  containerStyle?: object;
  showChevron?: boolean;
}

export default function ActionMethodCard({
  title,
  methods,
  containerStyle,
  showChevron = true,
}: ActionMethodCardProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.methodsContainer}>
        {methods.map(method => (
          <TouchableOpacity
            key={method.id}
            style={styles.methodItem}
            onPress={method.onPress}
          >
            <View style={styles.iconContainer}>{method.icon}</View>
            <View style={styles.textContainer}>
              <Text style={styles.methodTitle}>{method.title}</Text>
              <Text style={styles.methodDescription}>{method.description}</Text>
            </View>
            {showChevron && (
              <Ionicons
                name="chevron-forward"
                size={16}
                color="#999999"
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    padding: 20,
    gap: 24,
  },
  title: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  methodsContainer: {
    gap: 30,
  },
  methodItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  methodTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#222529",
  },
  methodDescription: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
});
