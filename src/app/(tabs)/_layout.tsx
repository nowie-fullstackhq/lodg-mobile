import TabBarItem from "@/components/TabBarItem";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          padding: 40,
          paddingLeft: 24,
          paddingRight: 24,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          height: 119,
          backgroundColor: "#fff",
          borderColor: "#fff",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#888888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              source={require("@/assets/icons/Home.svg")}
              title="Dashboard"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              source={require("@/assets/icons/Payments.svg")}
              title="Payments"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              source={require("@/assets/icons/Expenses.svg")}
              title="Expenses"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              source={require("@/assets/icons/Calendar.svg")}
              title="Asset Schedule"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
