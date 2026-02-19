var x = 7;
var y = 12;

function primeNumber(value) {
  if (value <= 1) console.log(value, " is not a Prime Number");
  for (i = 2; i < value; i++) {
    if (value % i === 0) {
      console.log(value, " is not a Prime Number");
      return false;
    }
  }
  console.log(value, " is a Prime Number");
  return true;
}
primeNumber(x);
primeNumber(y);
