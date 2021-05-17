const getWeekOfMonth = (date) => {
  let day = date.getDate();

  return Math.ceil(day / 7);
};
const result = getWeekOfMonth(new Date(2017, 10, 9));
console.log(result);
