var x = "the quick brown fox";

function upperCaseLetter(value) {
  let arr = value.split(" ");
  let newarr = arr.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  let ans = newarr.join(" ");
  console.log(ans);
}
upperCaseLetter(x);
