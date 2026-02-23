function subsetsOfTwo(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[j], arr[i]]); 
    }
  }

  console.log(result);
}

subsetsOfTwo([1, 2, 3]);
