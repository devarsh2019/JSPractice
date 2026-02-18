var x = "dog";

function combinations(value) {
  for (i = 0; i < value.length; i++) {
    for (j = i; j < value.length; j++) {
      console.log(value.slice(i, j + 1));
    }
  }
}
console.log(combinations(x));
