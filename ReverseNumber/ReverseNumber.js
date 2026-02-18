function reverseNumber(value) {
  var reverse = 0;
  while (value > 0) {
    let lastDigit = value % 10;
    reverse = reverse * 10 + lastDigit;
    value = Math.floor(value / 10);
  }
  return reverse;
}
console.log(reverseNumber(32243));
