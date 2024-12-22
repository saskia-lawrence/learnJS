/**
 

Prints star in below shape:

['_', '*', '_', '*', '_']
['*', '_', '*', '_', '*']
['_', '*', '_', '*', '_']
['*', '_', '*', '_', '*']
['_', '*', '_', '*', '_']




 */

let k = 5;
let y = [];
for (let i = 0; i < k; ++i) {
  let arr = [];
  y.push(arr);
  for (let j = 0; j < k; ++j) {
    if ((i + j) % 2 === 0) {
      arr.push("_");
    } else {
      arr.push("*");
    }
  }
  console.log(y[i]);
}
