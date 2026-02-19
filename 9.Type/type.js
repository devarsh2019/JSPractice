function findType(value) {
  return typeof value;
}
console.log("Type of", 10, findType(10));
console.log("Type of", "Devarsh", findType("Devarsh"));
console.log("Type of", true, findType(true));
console.log("Type of", undefined, findType(undefined));
console.log(
  "Type of",
  function () {},
  findType(function () {}),
);
console.log("Type of", {}, findType({}));
