let A = [
  "Apple",
  "banana",
  "carrot",
  "apricot",
  "beetroot",
  "calliflower",
  "cabbage",
  "cucumber",
  "dragonfruit",
];
let B = {};
for (let i = 0; i < A.length; i++) {
  let C = A[i];
  let Y = C[0].toLowerCase();

  if (B[Y]) {
    B[Y].push(C);
  } else {
    B[Y] = [C];
  }
}
console.log(B);
