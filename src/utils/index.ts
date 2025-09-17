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
