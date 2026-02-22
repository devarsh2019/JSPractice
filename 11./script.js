function findNumber(value) {
  value.sort(function (a, b) {
    return a - b;
  });
  let secondLargest;
  let secondLowest;
  if (value.length < 2) {
    secondLargest = value[0];
    secondLowest = value[0];
  }
  secondLargest = value[1];
  secondLowest = value[value.length - 1];
  console.log(secondLargest);
  console.log(secondLowest);
}
let n = [1, 2, 3, 4, 5];
findNumber(n);
