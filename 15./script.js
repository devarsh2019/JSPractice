function power(b, n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * b;
  }

    console.log(result);
}
power(2, 3);
