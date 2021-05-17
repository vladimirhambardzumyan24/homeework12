function getBestStudent(object) {
  let sum = 0;
  let average = 0;
  let count = 0;
  let maxAverage = -Infinity;
  let maxAverageName;
  for (const key in object) {
    for (let i = 0; i < object[key].length; i++) {
      const element = object[key][i];
      sum += element;
      count++;
    }
    average = sum / count;
    count = 0;
    sum = 0;
    if (average > maxAverage) {
      maxAverage = average;
      maxAverageName = key;
    }
  }
  return maxAverageName;
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
