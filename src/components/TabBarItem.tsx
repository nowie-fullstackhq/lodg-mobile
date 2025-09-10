import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface TabBarItemProps {
  source: ImageSourcePropType;
  title: string;
  focused: boolean;
}

export default function TabBarItem({
  source,
  title,
  focused,
}: TabBarItemProps) {
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
        <Image
          source={source}
          style={styles.icon}
        />
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
    paddingHorizontal: 20,
    paddingVertical: 13,
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
  icon: {
    width: 15,
    height: 15,
    tintColor: "#2256cb",
  },
  title: {
    fontSize: 8.5,
    fontWeight: "700",
    marginTop: 6,
    fontFamily: "PlusJakartaSans",
    textAlign: "center",
  },
});
