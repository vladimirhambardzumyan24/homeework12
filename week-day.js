function weekDays(day) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date(day).getDay()];
}

console.log(weekDays("12/07/2016"));
