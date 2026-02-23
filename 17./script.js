function countLetters(value) {
  let count = {};

  for (let i = 0; i < value.length; i++) {
    let char = value[i];

    if (value[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

    console.log(count);
}

countLetters("hello");
