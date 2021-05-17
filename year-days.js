function dayOfYear(data) {
  let time = new Date(data);
  let startTime = new Date(time.getFullYear(), 0, 0);
  let differencTime = time - startTime;
  let dayOfSeconds = 1000 * 60 * 60 * 24;
  let days = Math.floor(differencTime / dayOfSeconds);
  return days;
}

console.log(dayOfYear("1/9/2019"));
