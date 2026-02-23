function amountToCoins(amount, coins) {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
     while (amount >= coins[i]) {
       amount = amount - coins[i];
       result.push(coins[i]);
     }
  }

    console.log(result);
}
let coins =  [25, 10, 5, 2, 1];
amountToCoins(46,coins);