import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateInvoiceModal from "@/components/CreateInvoiceModal";
import Item from "@/components/Invoice/Item";
import SettingsItemScreenHeader from "@/components/PageHeader";
import UploadInvoiceModal from "@/components/UploadInvoiceModal";
import PageLayout from "@/layouts/PageLayout";
import { invoices as invoicesData } from "@/mock/invoices";
import type { InvoiceData } from "@/types";
import { parseDate } from "@/utils";

const getMonthName = (dateString: string): string => {
  const date = parseDate(dateString);
  return date.toLocaleDateString("en-US", { month: "long" });
};

const groupInvoicesByMonth = (
  invoices: InvoiceData[],
): Record<string, InvoiceData[]> => {
  const sortedInvoices = [...invoices].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  const groups = sortedInvoices.reduce(
    (acc, invoice) => {
      const monthName = getMonthName(invoice.date);
      if (!acc[monthName]) {
        acc[monthName] = [];
      }
      acc[monthName].push(invoice);
      return acc;
    },
    {} as Record<string, InvoiceData[]>,
  );

  return groups;
};

const filterInvoicesByTab = (
  invoices: InvoiceData[],
  activeTab: string,
): InvoiceData[] => {
  switch (activeTab) {
    case "all":
      return invoices;
    case "generated":
      return invoices.filter(invoice => invoice.status !== "uploaded");
    case "uploaded":
      return invoices.filter(invoice => invoice.status === "uploaded");
    default:
      return invoices;
  }
};

const tabs = [
  { id: "all", label: "All", active: true },
  { id: "generated", label: "Generated", active: false },
  { id: "uploaded", label: "Uploaded", active: false },
];

export default function InvoiceListScreen() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedDate, setSelectedDate] = useState("Select Date Range");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const filteredInvoices = filterInvoicesByTab(invoicesData, activeTab);
  const invoicesByMonth = groupInvoicesByMonth(filteredInvoices);

  const handleCreatePress = () => {
    setShowCreateModal(true);
  };

  const handleCreateInvoice = (data: any) => {
    console.log("Creating invoice with data:", data);
  };

  const handleUploadPress = () => {
    setShowUploadModal(true);
  };

  const handleUploadInvoice = (data: any) => {
    console.log("Uploading invoice with data:", data);
  };

  const handleDatePickerPress = () => {
    console.log("Date picker pressed");
  };

  const renderMonthSection = (month: string, invoices: InvoiceData[]) => (
    <View
      key={month}
      style={{ marginBottom: 16 }}
    >
      <View style={styles.monthHeader}>
        <Text style={styles.monthText}>{month}</Text>
      </View>

      {invoices.map((invoice, index) => (
        <View
          key={invoice.id}
          style={[index < invoices.length - 1 && styles.itemWithBorder]}
        >
          <Item
            invoice={invoice}
            showBorder={false}
          />
        </View>
      ))}
    </View>
  );

  return (
    <>
      <PageLayout
        breadcrumb="Lodg / All Invoices"
        title="Payments"
      >
        <View style={styles.content}>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableTitle}>Invoices</Text>

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
                <TouchableOpacity
                  style={styles.createButton}
                  onPress={handleCreatePress}
                >
                  <Ionicons
                    name="add"
                    size={12}
                    color="#FEFEFE"
                  />
                  <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={handleUploadPress}
                >
                  <Ionicons
                    name="cloud-upload-outline"
                    size={12}
                    color="#FEFEFE"
                  />
                  <Text style={styles.buttonText}>Upload</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View style={styles.tabContainer}>
                {tabs.map(tab => (
                  <TouchableOpacity
                    key={tab.id}
                    style={[
                      styles.tab,
                      activeTab === tab.id && styles.activeTab,
                    ]}
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

              <View style={styles.invoiceList}>
                {Object.entries(invoicesByMonth).map(([month, invoices]) =>
                  renderMonthSection(month, invoices),
                )}
              </View>
            </View>
          </View>
        </View>
      </PageLayout>

      <CreateInvoiceModal
        visible={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />

      <UploadInvoiceModal
        visible={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />
    </>
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
  createButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    height: 34,
  },
  uploadButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    height: 34,
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
  invoiceList: {
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
