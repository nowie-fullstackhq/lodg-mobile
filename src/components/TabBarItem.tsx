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
        { backgroundColor: focused ? "#2256cb" : "transparent" },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: focused ? "#ffffff" : "transparent" },
        ]}
      >
        {icon}
      </View>
      <Text
        numberOfLines={1}
        style={[styles.title, { color: focused ? "#ffffff" : "#888888" }]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 13,
    paddingBottom: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 8.5,
    fontWeight: "700",
    marginTop: 6,
    fontFamily: "PlusJakartaSans",
    textAlign: "center",
  },
});
