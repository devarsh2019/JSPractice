function countLetter(value, letter) {
  let count = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === letter) {
      count++;
    }
  }

  console.log(count);
}

countLetter("microsoft.com", "o");
