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

export { formatMinutes };
