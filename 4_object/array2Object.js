let A = [
  "apple",
  "banana",
  "carrot",
  "apricot",
  "beetroot",
  "calliflower",
  "cabbage",
];
let B = {
  a: [],
  b: [],
  c: [],
};
for (let i = 0; i < A.length; i++) {
  let C = A[i];
  if (C[0] === "a") {
    B.a.push(C);
  } else if (C[0] === "b") {
    B.b.push(C);
  } else if (C[0] === "c") {
    B.c.push(C);
  }
}
console.log(B);
