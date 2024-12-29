let A = [
  "Apple",
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
  if (C[0] === "a" || C[0].toUpperCase() === "A") {
    B.a.push(C);
  } else if (C[0] === "b" || C[0].toUpperCase() === "B") {
    B.b.push(C);
  } else if (C[0] === "c" || C[0].toUpperCase() === "C") {
    B.c.push(C);
  }
}
console.log(B);
