export type InvoiceStatus = "paid" | "uploaded" | "sent" | "overdue";

export interface InvoiceData {
  id: string;
  clientName: string;
  amount: string;
  currency: string;
  date: string;
  status: InvoiceStatus;
  hasAvatar: boolean;
}
