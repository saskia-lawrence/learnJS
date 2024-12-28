let A = [
  [1, 2, 3, 4, 5],
  [100, 62, 31, 18, 75],
  [7, 8, 9, 10, 12],
  [9, 600, 10, 17, 6],
];
let B = [];
let U = 0;

for (let i = 0; i < A.length; i++) {
  let C = A[i];

  for (let j = 0; j < C.length; j++) {
    let D = C[j];

    if (i === 0 || j === 0 || i === A.length - 1 || j === C.length - 1) {
      B.push(D);
    } else {
      U = U + D;
    }
  }
}
console.log(B);
console.log(U);
