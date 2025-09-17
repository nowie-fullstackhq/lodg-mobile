import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Item from "@/components/Invoice/Item";
import BaseModal from "@/components/ui/Modal";
import PageLayout from "@/layouts/PageLayout";
import { invoices } from "@/mock/invoices";
import { formatDisplayDate } from "@/utils";

export default function InvoiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const invoice = invoices.find(inv => inv.id === id);

  if (!invoice) {
    return (
      <PageLayout
        breadcrumb="Lodg  /  All Invoices"
        title="Payments"
      >
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Invoice not found</Text>
        </View>
      </PageLayout>
    );
  }

  const isUploaded = invoice.status === "uploaded";

  const handleDownload = () => {
    console.log("Download invoice:", id);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleMenuPress = () => {
    console.log("Menu pressed for uploaded invoice");
  };

  const handleFileDownload = () => {
    console.log("Download file:", "File_name_goes_here.png");
  };

  const confirmDelete = () => {
    console.log("Delete invoice:", id);
    setShowDeleteModal(false);
  };

  const renderDetailRow = (label: string, value: string) => (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );

  const renderTableRow = (description: string, quantity: string) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{description}</Text>
      <Text style={styles.tableCell}>{quantity}</Text>
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
    <>
      <PageLayout
        breadcrumb="Lodg  /  All Invoices"
        title="Payments"
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Invoice Details</Text>

              <View style={styles.details}>
                <Item
                  invoice={invoice}
                  showBorder={false}
                />

                <View style={styles.detailsContainer}>
                  <View style={styles.detailsHeader}>
                    <Text style={styles.detailsTitle}>
                      {isUploaded
                        ? "Uploaded invoice details"
                        : "Generated invoice details"}
                    </Text>
                    {isUploaded && (
                      <TouchableOpacity onPress={handleMenuPress}>
                        <Ionicons
                          name="ellipsis-vertical"
                          size={14}
                          color="#2256CB"
                        />
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={styles.detailsList}>
                    {renderDetailRow("Sent to", invoice.clientName)}
                    {renderDetailRow("Currency", invoice.currency)}
                    {renderDetailRow("Amount", invoice.amount)}
                    {renderDetailRow("Notes", "Notes goes here")}

                    {isUploaded ? (
                      renderDetailRow(
                        "Date Uploaded",
                        formatDisplayDate(invoice.date),
                      )
                    ) : (
                      <>
                        {renderDetailRow(
                          "Client's Full Name",
                          invoice.clientName,
                        )}
                        {renderDetailRow(
                          "Client's Email",
                          "aliagarcia@email.com",
                        )}
                        {renderDetailRow("Invoice Due Date", "15 Nov 2024")}
                        {renderDetailRow(
                          "Date Created",
                          formatDisplayDate(invoice.date),
                        )}
                        {renderDetailRow("GST Tax", "N/A")}
                      </>
                    )}
                  </View>

                  {isUploaded && renderFileUpload()}

                  {/* Items Table */}
                  <View style={styles.itemsTable}>
                    <View style={styles.tableHeaderRow}>
                      <Text style={styles.tableHeaderText}>Description</Text>
                      <Text style={styles.tableHeaderText}>Quantity</Text>
                    </View>

                    <View style={styles.tableBody}>
                      {renderTableRow("Sample", "1")}
                      {renderTableRow("Sample", "1")}
                      {renderTableRow("Sample", "1")}
                    </View>
                  </View>

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
                        Get File URL
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={handleDelete}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={12}
                        color="#EB5757"
                      />
                      <Text style={styles.deleteButtonText}>
                        Delete Invoice
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </PageLayout>

      <BaseModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Invoice?"
        subtitle="This action cannot be undone."
        icon={
          <Ionicons
            name="trash-outline"
            size={15}
            color="#EB5757"
          />
        }
      >
        <View style={styles.modalContent}>
          <Text style={styles.confirmationText}>
            Are you sure you want to delete this invoice? This action cannot be
            undone.
          </Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowDeleteModal(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmDelete}
            >
              <Text style={styles.confirmButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BaseModal>
    </>
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
  itemsTable: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 8,
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: "#DCECFD",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    paddingVertical: 5,
  },
  tableHeaderText: {
    flex: 1,
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
    textAlign: "center",
  },
  tableBody: {
    gap: 5,
    paddingVertical: 5,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    fontFamily: "PlusJakartaSans",
    fontSize: 9.89,
    lineHeight: 16,
    color: "#676767",
    textAlign: "center",
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
  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: "#EB5757",
    borderRadius: 12,
    height: 34,
  },
  deleteButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#EB5757",
  },
  modalContent: {
    gap: 24,
  },
  confirmationText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#676767",
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  cancelButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
  },
  confirmButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#EB5757",
    borderRadius: 12,
    alignItems: "center",
  },
  confirmButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
  },
});
