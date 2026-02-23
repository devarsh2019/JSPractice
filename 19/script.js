function largerThanNumber(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
    console.log(num + " Larger than numbers are : " + result);
}

largerThanNumber([10, 25, 5, 40, 15], 20);
