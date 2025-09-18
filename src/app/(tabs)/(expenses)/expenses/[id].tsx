import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Item from "@/components/Expenses/Item";
import PageLayout from "@/layouts/PageLayout";
import { expenses } from "@/mock/expenses";

export default function ExpenseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const expense = expenses.find(inv => inv.id === id);

  if (!expense) {
    return (
      <PageLayout
        breadcrumb="Lodg  /  All Expenses"
        title="Expense"
      >
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Invoice not found</Text>
        </View>
      </PageLayout>
    );
  }

  const handleDownload = () => {
    console.log("Download invoice:", id);
  };

  const handleMenuPress = () => {
    console.log("Menu pressed for uploaded invoice");
  };

  const handleFileDownload = () => {
    console.log("Download file:", "File_name_goes_here.png");
  };

  const renderDetailRow = (label: string, value: string) => (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );

  const renderFileUpload = () => (
    <View style={styles.fileUploadContainer}>
      <Text style={styles.detailLabel}>File Uploaded</Text>
      <View style={styles.filePreview}>
        <View style={styles.fileIconContainer}>
          <Ionicons
            name="document-outline"
            size={20}
            color="#2256CB"
          />
        </View>
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>File_name_goes_here.png</Text>
          <TouchableOpacity onPress={handleFileDownload}>
            <View style={styles.fileDownloadButton}>
              <Text style={styles.fileDownloadText}>Get File URL</Text>
              <Ionicons
                name="chevron-forward"
                size={14}
                color="#2256CB"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
      <PageLayout
        breadcrumb="Lodg  /  All Expenses"
        title="Expense"
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Invoice Details</Text>

              <View style={styles.details}>
                <Item
                  expense={expense}
                  showBorder={false}
                />

                <View style={styles.detailsContainer}>
                  <View style={styles.detailsHeader}>
                    <Text style={styles.detailsTitle}>
                     Business expense details
                    </Text>
                    
                      <TouchableOpacity onPress={handleMenuPress}>
                        <Ionicons
                          name="ellipsis-vertical"
                          size={14}
                          color="#2256CB"
                        />
                      </TouchableOpacity>
                  </View>

                  <View style={styles.detailsList}>
                    {renderDetailRow("Expense Type", expense.type)}
                    {renderDetailRow("Home Office Expense Category", expense.category)}
                    {renderDetailRow("Total Property Area", "[Numeric Number]")}
                    {renderDetailRow("Business Workspace Area", "[Numeric Number]")}
                    {renderDetailRow("Home Office Percentage", "[Numeric Number]")}
                    {renderDetailRow("Claimable Amount", expense.amount)}
                    {renderDetailRow("Notes", "Notes")}
                  </View>

                  {renderFileUpload()}

                  <View style={styles.actionButtons}>
                    <TouchableOpacity
                      style={styles.downloadButton}
                      onPress={handleDownload}
                    >
                      <Ionicons
                        name="download-outline"
                        size={12}
                        color="#2256CB"
                      />
                      <Text style={styles.downloadButtonText}>
                        View this File
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  errorText: {
    fontSize: 16,
    color: "#676767",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
  },
  cardHeader: {
    padding: 20,
    gap: 16,
  },
  cardTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  invoiceSummaryContainer: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 14,
    paddingBottom: 12,
  },
  details: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 14,
    paddingBottom: 12,
  },
  detailsContainer: {
    padding: 24,
    gap: 24,
    borderTopWidth: 1,
    borderTopColor: "#E4E4E4",
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#222529",
    letterSpacing: 0.02,
  },
  detailsList: {
    gap: 20,
  },
  detailRow: {
    gap: 4,
  },
  detailLabel: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  detailValue: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  fileUploadContainer: {
    gap: 4,
  },
  filePreview: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 8,
    backgroundColor: "#F0F7FE",
    borderRadius: 8,
  },
  fileIconContainer: {
    width: 32,
    height: 40,
    backgroundColor: "#FEFEFE",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  fileInfo: {
    flex: 1,
    gap: 2,
  },
  fileName: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  fileDownloadButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  fileDownloadText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  downloadButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: "#2256CB",
    borderRadius: 12,
    height: 34,
  },
  downloadButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
  },
});
