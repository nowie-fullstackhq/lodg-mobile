import type { InvoiceData } from "@/types";

export const invoices: InvoiceData[] = [
  {
    id: "1",
    clientName: "Alia Garcia",
    amount: "26,199",
    currency: "NZD",
    date: "Nov 11, 18:01",
    status: "paid",
    hasAvatar: false,
  },
  {
    id: "2",
    clientName: "Alia Garcia",
    amount: "26,199",
    currency: "NZD",
    date: "Nov 11, 18:01",
    status: "uploaded",
    hasAvatar: true,
  },
  {
    id: "3",
    clientName: "Ed Gar",
    amount: "26,199",
    currency: "NZD",
    date: "Nov 11, 18:01",
    status: "sent",
    hasAvatar: false,
  },
  {
    id: "4",
    clientName: "Alia Garcia",
    amount: "26,199",
    currency: "NZD",
    date: "Nov 11, 18:01",
    status: "uploaded",
    hasAvatar: true,
  },
  {
    id: "5",
    clientName: "Ed Gar",
    amount: "26,199",
    currency: "NZD",
    date: "Nov 11, 18:01",
    status: "overdue",
    hasAvatar: false,
  },
];
