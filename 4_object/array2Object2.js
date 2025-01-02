let A = ["a", "b", "c", "d", "e", "f"];
let B = {};
for (let i = 0; i < A.length; i = i + 2) {
  let C = A[i];
  let D = A[i + 1];
  B[C] = D;
}
console.log(B);
