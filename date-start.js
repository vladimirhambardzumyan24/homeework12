function monthsInterval(dateStart, dateEnd) {
  if (dateStart > dateEnd) {
    let month = dateEnd;
    dateEnd = dateStart;
    dateStart = month;
  }
  console.log(dateStart > dateEnd);
  console.log(dateStart.getYear(), dateEnd.getYear());

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

  let minMount = dateStart.getMonth();
  let distance = Math.floor((dateEnd - dateStart) / 2628e6);
  let newMounts = [];
  let distYear = 1;
  for (let i = 0; i <= distance; i++) {
    if (minMount + i > 11) {
      newMounts.push(
        mounts[
          minMount +
            i -
            12 * ((minMount + i) % 11 === 0 ? distYear++ : distYear)
        ]
      );
    } else {
      newMounts.push(mounts[minMount + i]);
    }
  }
  return newMounts;
  // return dateEnd.getMonth()
  // return dateStart-dateEnd
}

let january = new Date(2017, 11, 1);
let march = new Date(2018, 0, 1);
console.log(monthsInterval(january, march));
