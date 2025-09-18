import { useState } from "react";
import CreateInvoiceModal from "@/components/CreateInvoiceModal";
import InvoiceItem from "@/components/Invoice/Item";
import ListScreen from "@/components/ListScreen";
import UploadInvoiceModal from "@/components/UploadInvoiceModal";
import { invoices as invoicesData } from "@/mock/invoices";
import type { InvoiceData } from "@/types";

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
  { id: "all", label: "All" },
  { id: "generated", label: "Generated" },
  { id: "uploaded", label: "Uploaded" },
];

export default function InvoiceListScreen() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const renderInvoiceItem = (invoice: InvoiceData, showBorder: boolean) => (
    <InvoiceItem
      invoice={invoice}
      showBorder={showBorder}
    />
  );

  const actionButtons = [
    {
      label: "Create",
      icon: "add" as const,
      onPress: () => setShowCreateModal(true),
      style: "primary" as const,
    },
    {
      label: "Upload",
      icon: "cloud-upload-outline" as const,
      onPress: () => setShowUploadModal(true),
      style: "primary" as const,
    },
  ];

  return (
    <>
      <ListScreen
        pageTitle="Payments"
        title="Invoices"
        breadcrumb="Lodg / All Invoices"
        data={invoicesData}
        tabs={tabs}
        filterFunction={filterInvoicesByTab}
        renderItem={renderInvoiceItem}
        actionButtons={actionButtons}
      />

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
