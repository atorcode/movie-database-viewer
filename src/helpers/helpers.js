const formatMinutes = (totalMinutes) => {
  if (typeof totalMinutes !== "number") {
    return;
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (minutes === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${minutes}m`;
  }
};

// Date will be given in the format: YYYY-MM-DD
const formatDate = (date) => {
  if (typeof date !== "string") {
    return;
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.substring(0, 4);
  const month = monthNames[+date.substring(5, 7) - 1];
  // convert to number and convert back to eliminate trailing 0
  const day = +date.substring(8).toString();

  return `${month} ${day}, ${year}`;
};

export { formatMinutes, formatDate };
