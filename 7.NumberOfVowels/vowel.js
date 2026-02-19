var x = "The quick brown fox";

function numberOfVowels(value) {
  let count = 0;
  for (let char of value) {
    let vowels = "aeiou";
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
}
numberOfVowels(x);
