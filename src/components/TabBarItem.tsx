import type { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

interface TabBarItemProps {
  icon: ReactElement;
  title: string;
  focused: boolean;
}

export default function TabBarItem({ icon, title, focused }: TabBarItemProps) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: focused ? "#2256CB" : "transparent" },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: focused ? "#FEFEFE" : "#FFFFFF",
            borderRadius: focused ? 5 : 12,
          },
        ]}
      >
        {icon}
      </View>
      <Text
        numberOfLines={1}
        style={[styles.title, { color: focused ? "#FEFEFE" : "#888888" }]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 73,
    height: 73,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 4,
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 8.5,
    fontFamily: "PlusJakartaSansBold",
    textAlign: "center",
    lineHeight: 16,
  },
});
