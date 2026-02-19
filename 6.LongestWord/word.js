var x = "'Web Development Tutorial";

function longestWord(value) {
  let arr = value.split(" ");
  let maxi = 0;
  let ans = "";
  for (let word of arr) {
    if (word.length > maxi) {
      ans = word;
      maxi = word.length;
    }
  }
  console.log(ans);
}
longestWord(x);
