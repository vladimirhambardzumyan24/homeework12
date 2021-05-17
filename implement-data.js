const formatDate = (date) => {
  let mounts = [
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
  let day = date.getDate();
  let mount = mounts[date.getMonth()];
  let year = date.getFullYear();

  return `${day} ${mount} ${year}`;
};

console.log("Expected output: ", formatDate(new Date("2021-02-16")));
