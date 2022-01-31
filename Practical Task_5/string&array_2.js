let text = "Каждый охотник желает знать, где сидит фазан";
let str = text.split(" ");
let newArr = str.map(function (a) {
  return a[0];
});
console.log(newArr);