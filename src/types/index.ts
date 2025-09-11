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

export type ExpenseStatus = "approved" | "declined" | "pending";

export type ExpenseType =
  | "gift"
  | "water"
  | "donation"
  | "web"
  | "reimbursement"
  | "mortgage"
  | "rent";

export type ExpenseCategory = "business" | "donation" | "reimbursement";

export interface ExpenseData {
  id: string;
  title: string;
  amount: string;
  currency: string;
  date: string;
  type: ExpenseType;
  category: ExpenseCategory;
  status: ExpenseStatus;
}
