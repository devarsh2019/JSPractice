function identityMatrix(value) {
  let matrix = [];

  for (let i = 0; i < value; i++) {
    let row = [];

    for (let j = 0; j < value; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }

    matrix.push(row);
  }

  console.log(matrix);
}
identityMatrix(3);
