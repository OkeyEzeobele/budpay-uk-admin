export const formatNumber = (str, currency) => {
  const num = str === "" ? 0 : parseFloat(str);

  if (isNaN(num)) {
    return str;
  }

  if (currency) {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: currency,
    });
  } else {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
};

function parseDate(dateString) {
  const parts = dateString.split('/');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function formatDateTime(date) {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Date(date)
    .toLocaleString("en-US", options)
    .replace(",", "")
    .replace("PM", "pm")
    .replace("AM", "am");
}

export function parseAndFormatDate(dateString) {
  const parsedDate = parseDate(dateString);
  return formatDateTime(parsedDate);
}
