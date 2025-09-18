import ExpenseItem from "@/components/Expenses/Item";
import ListScreen from "@/components/ListScreen";
import { expenses as expensesData } from "@/mock/expenses";
import type { ExpenseData } from "@/types";

const filterExpensesByTab = (
  expenses: ExpenseData[],
  activeTab: string,
): ExpenseData[] => {
  switch (activeTab) {
    case "all":
      return expenses;
    default:
      return expenses;
  }
};

const tabs = [{ id: "all", label: "All" }];

export default function ExpenseListScreen() {
  const renderExpenseItem = (expense: ExpenseData, showBorder: boolean) => (
    <ExpenseItem
      expense={expense}
      showBorder={showBorder}
    />
  );

  const actionButtons = [
    {
      label: "Add",
      icon: "add" as const,
      onPress: () => {},
      style: "primary" as const,
    },
  ];

  return (
    <ListScreen
      pageTitle="Expense"
      title="Expenses"
      breadcrumb="Lodg / All Expenses"
      data={expensesData}
      tabs={tabs}
      filterFunction={filterExpensesByTab}
      renderItem={renderExpenseItem}
      actionButtons={actionButtons}
    />
  );
}
