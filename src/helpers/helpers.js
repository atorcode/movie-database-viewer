import { v4 as uuidv4 } from "uuid";

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
  if (!date || typeof date !== "string") {
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

// Takes an array and the singular form of a string then returns a plural form if the given array has more than one element.
const singularOrPlural = (singularForm, arr) => {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    typeof singularForm !== "string"
  ) {
    return;
  }
  if (arr.length === 1) {
    return singularForm;
  }
  if (arr.length > 1) {
    if (singularForm.slice(-1).toLowerCase() === "y") {
      return singularForm.slice(0, -1) + "ies";
    } else {
      return singularForm + "s";
    }
  }
};

// local storage for favorited movies
const handleStorage = (
  props,
  notifications,
  setNotifications,
  setFavoriteMovies
) => {
  const { id, title } = props;
  const uuid = uuidv4();
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, JSON.stringify(props));
    setNotifications([...notifications, { title, action: "add", id: uuid }]);
  } else {
    localStorage.removeItem(id);
    setNotifications([...notifications, { title, action: "remove", id: uuid }]);
  }
  // set stateful favoriteMovies array to match whatever is in localStorage
  setFavoriteMovies(
    Object.keys(localStorage).map((id) => {
      return JSON.parse(localStorage.getItem(id));
    })
  );
};

export { formatMinutes, formatDate, singularOrPlural, handleStorage };
