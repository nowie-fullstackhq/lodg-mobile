export type Status =
  | "paid"
  | "uploaded"
  | "sent"
  | "overdue"
  | "approved"
  | "declined"
  | "pending"
  | "accepted";

export interface InvoiceData {
  id: string;
  clientName: string;
  amount: string;
  currency: string;
  date: string;
  status: Status;
  hasAvatar: boolean;
}

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
  status: Status;
}
