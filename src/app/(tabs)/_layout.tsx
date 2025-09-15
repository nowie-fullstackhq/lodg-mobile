import { Tabs } from "expo-router";
import { Pressable } from "react-native";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ExpensesIcon from "@/components/icons/ExpensesIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import PaymentsIcon from "@/components/icons/PaymentsIcon";
import TabBarItem from "@/components/TabBarItem";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 119,
          backgroundColor: "#FEFEFE",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 35,
          paddingHorizontal: 12,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#888888",
        tabBarButton: ({ children, onPress }) => (
          <Pressable
            onPress={onPress}
            style={{ justifyContent: "center", alignItems: "center" }}
            android_ripple={{
              foreground: true,
            }}
          >
            {children}
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              icon={
                <HomeIcon
                  width={15}
                  height={15}
                  color="#2256CB"
                />
              }
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
              icon={
                <PaymentsIcon
                  width={15}
                  height={15}
                  color="#2256CB"
                />
              }
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
              icon={
                <ExpensesIcon
                  width={15}
                  height={15}
                  color="#2256CB"
                />
              }
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
              icon={
                <CalendarIcon
                  width={15}
                  height={15}
                  color="#2256CB"
                />
              }
              title="Asset Schedule"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
