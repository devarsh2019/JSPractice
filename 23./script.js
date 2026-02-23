function firstNotRepeated(value) {
  let count = {};

  for (let i = 0; i < value.length; i++) {
    let char = value[i];
    count[char] = (count[char] || 0) + 1;
  }

 
  for (let i = 0; i < value.length; i++) {
    if (count[value[i]] === 1) {
      console.log(value[i]);
    }
  }
}

firstNotRepeated("abacddbec");
