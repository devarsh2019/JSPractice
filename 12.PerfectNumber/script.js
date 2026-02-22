function perfectNumber(value)
{
    let sum = 0;
    for (let i = 1; i < value; i++) {
        if (value % i === 0) {
          sum += i;
        }      
    }
    if (sum === value) {
      console.log(value + " is a perfect number");
    } else {
      console.log(value + " is not a perfect number");
    }
}

perfectNumber(6);
perfectNumber(20);