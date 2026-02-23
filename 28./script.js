function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  let name = "Devarsh";
  console.log(callback(name));
}

processUserInput(greet);
