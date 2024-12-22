/**
 

Prints star in both the diagonal in the matrix:

['*', '_', '_', '_', '*']
['_', '*', '_', '*', '_']
['_', '_', '*', '_', '_']
['_', '*', '_', '*', '_']
['*', '_', '_', '_', '*']




 */

let k = 5;
let y = [];
let z = "";
for (let i = 0; i < k; ++i) {
  // console.log("OuterLoop-" + i);
  let arr = [];

  y.push(arr);
  for (let j = 0; j < k; ++j) {
    // console.log("InnerLoop-" + j);

    if (i === j || i + j === k - 1) {
      arr.push("*");
    } else {
      arr.push("_");
    }
  }
  console.log(y[i]);
}
