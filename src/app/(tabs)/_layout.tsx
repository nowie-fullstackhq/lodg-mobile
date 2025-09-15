import { Tabs } from "expo-router";
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
              icon={
                <HomeIcon
                  width={15}
                  height={15}
                  color="#2256cb"
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
                  color="#2256cb"
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
                  color="#2256cb"
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
                  color="#2256cb"
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
