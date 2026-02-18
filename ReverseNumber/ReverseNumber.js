
var x = 32243;
var reverse = 0;
while (x > 0) {
  let lastDigit = x % 10;
  reverse = reverse * 10 + lastDigit;
  x = Math.floor(x / 10);
}
console.log("Reverse Number of 32243 " ,reverse);
