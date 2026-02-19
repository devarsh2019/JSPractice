var x = "webmaster";

function order(value) {
  let arr = value.split("");
  arr.sort();
  let ans = arr.join("");
  console.log(ans);
}
order(x);