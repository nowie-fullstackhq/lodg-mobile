import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PageLayout from "@/layouts/PageLayout";
import { groupItemsByMonth } from "@/utils";

interface Tab {
  id: string;
  label: string;
}

interface ActionButton {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  style?: "primary" | "secondary";
}

interface ListScreenProps<T> {
  pageTitle: string;
  title: string;
  breadcrumb: string;
  data: T[];
  tabs: Tab[];
  filterFunction: (items: T[], activeTab: string) => T[];
  renderItem: (item: T, showBorder: boolean) => React.ReactNode;
  actionButtons: ActionButton[];
}

export default function ListScreen<T extends { id: string; date: string }>({
  pageTitle,
  title,
  breadcrumb,
  data,
  tabs,
  filterFunction,
  renderItem,
  actionButtons,
}: ListScreenProps<T>) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "all");
  const [selectedDate, setSelectedDate] = useState("Select Date Range");

  const filteredItems = filterFunction(data, activeTab);
  const itemsByMonth = groupItemsByMonth(filteredItems);

  const handleDatePickerPress = () => {
    console.log("Date picker pressed");
  };

  const renderMonthSection = (month: string, items: T[]) => (
    <View
      key={month}
      style={{ marginBottom: 16 }}
    >
      <View style={styles.monthHeader}>
        <Text style={styles.monthText}>{month}</Text>
      </View>

      {items.map((item, index) => (
        <View
          key={item.id}
          style={[index < items.length - 1 && styles.itemWithBorder]}
        >
          {renderItem(item, false)}
        </View>
      ))}
    </View>
  );

  return (
    <PageLayout
      breadcrumb={breadcrumb}
      title={pageTitle}
    >
      <View style={styles.content}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableTitle}>{title}</Text>

            <TouchableOpacity
              style={styles.datePickerContainer}
              onPress={handleDatePickerPress}
            >
              <View style={styles.datePickerContent}>
                <Text style={styles.datePickerText}>{selectedDate}</Text>
                <View style={styles.datePickerIcon}>
                  <Ionicons
                    name="calendar-outline"
                    size={16}
                    color="#676767"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.actionButtons}>
              {actionButtons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.actionButton,
                    button.style === "secondary"
                      ? styles.secondaryButton
                      : styles.primaryButton,
                  ]}
                  onPress={button.onPress}
                >
                  <Ionicons
                    name={button.icon}
                    size={12}
                    color="#FEFEFE"
                  />
                  <Text style={styles.buttonText}>{button.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.tabContainer}>
              {tabs.map(tab => (
                <TouchableOpacity
                  key={tab.id}
                  style={[styles.tab, activeTab === tab.id && styles.activeTab]}
                  onPress={() => setActiveTab(tab.id)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === tab.id && styles.activeTabText,
                    ]}
                  >
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.itemList}>
              {Object.entries(itemsByMonth).map(([month, items]) =>
                renderMonthSection(month, items),
              )}
            </View>
          </View>
        </View>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
  },
  tableContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
  },
  tableHeader: {
    padding: 20,
    gap: 16,
  },
  tableTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  datePickerContainer: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    height: 42,
    justifyContent: "center",
  },
  datePickerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 12,
    height: 40,
  },
  datePickerText: {
    flex: 1,
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#ADADAD",
  },
  datePickerIcon: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
    borderRadius: 12,
    height: 34,
  },
  primaryButton: {
    backgroundColor: "#2256CB",
  },
  secondaryButton: {
    backgroundColor: "#6B7280",
  },
  buttonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
  },
  listContainer: {
    gap: 12,
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 16,
    backgroundColor: "#F0F7FE",
    borderBottomWidth: 3,
    borderBottomColor: "rgba(34, 86, 203, 0.1)",
    position: "relative",
  },
  tab: {
    paddingHorizontal: 8,
    paddingBottom: 12,
    marginRight: 16,
    position: "relative",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#2256CB",
    marginBottom: -3,
  },
  tabText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0.28,
    color: "#676767",
  },
  activeTabText: {
    color: "#2256CB",
  },
  itemList: {
    gap: 0,
  },
  monthHeader: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 42,
    justifyContent: "center",
  },
  monthText: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  itemWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F7F7F7",
  },
});
