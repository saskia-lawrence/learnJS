let A = [
  "Apple",
  "banana",
  "carrot",
  "apricot",
  "beetroot",
  "calliflower",
  "cabbage",
  "cucumber",
];
let B = {};
for (let i = 0; i < A.length; i++) {
  let C = A[i];
  if (C[0] === "a" || C[0].toUpperCase() === "A") {
    //B.a.push(C);

    if (B.a) {
      B.a.push(C);
    } else {
      B.a = [C];
    }
  } else if (C[0] === "b" || C[0].toUpperCase() === "B") {
    //B.b.push(C);
    if (B.b) {
      B.b.push(C);
    } else {
      B.b = [C];
    }
  } else if (C[0] === "c" || C[0].toUpperCase() === "C") {
    // B.c.push(C);
    if (B.c) {
      B.c.push(C);
    } else {
      B.c = [C];
    }
  }
}
console.log(B);
