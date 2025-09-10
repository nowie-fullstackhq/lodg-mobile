import { Image, type ImageSourcePropType, Text, View } from "react-native";

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
      style={{
        backgroundColor: focused ? "#2256cb" : "transparent",
        paddingHorizontal: 22,
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 70,
      }}
    >
      <View
        style={{
          backgroundColor: focused ? "#ffffff" : "transparent",
          padding: 8,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={source}
          style={{
            width: 15,
            height: 15,
            tintColor: "#2256cb",
          }}
        />
      </View>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 8.5,
          fontWeight: "700",
          marginTop: 6,
          color: focused ? "#ffffff" : "#888888",
          fontFamily: "PlusJakartaSans",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
