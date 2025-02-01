let A = { a: 1, b: 2 };
let B = { c: 3, d: 4 };
let C = {};
for (let i in A) {
  let D = A[i];
  C[i] = D;
}
for (let i in B) {
  let E = B[i];
  C[i] = E;
}
+console.log(C);
