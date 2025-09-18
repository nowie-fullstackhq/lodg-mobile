export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};

export const formatDisplayDate = (dateString: string): string => {
  const date = parseDate(dateString);
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${month} ${day}, ${hours}:${minutes}`;
};

export const getMonthName = (dateString: string): string => {
  const date = parseDate(dateString);
  return date.toLocaleDateString("en-US", { month: "long" });
};

type DateItem = { date: string };

export const groupItemsByMonth = <T extends DateItem>(
  items: T[],
): Record<string, T[]> => {
  const sortedItems = [...items].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  const groups = sortedItems.reduce(
    (acc, item) => {
      const monthName = getMonthName(item.date);
      if (!acc[monthName]) {
        acc[monthName] = [];
      }
      acc[monthName].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );

  return groups;
};
