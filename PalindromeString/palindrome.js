var x = "madam";
var y = "nurses run";

function chkPalindrome(value) {
  let original = value;
  value = value.toLowerCase();
  value = value.replaceAll(" ", "");

  let arr = value.split("");
  arr.reverse();
  let reverse = arr.join("");
  if (reverse === value) {
    console.log(original, " is Palindrome String");
  } else {
    console.log(original, " is not Palindrome String");
  }
}
chkPalindrome(x);
chkPalindrome(y);
