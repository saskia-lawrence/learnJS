let A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
let p = [];
let q = [];
let l = [];
for (let i = 0; i < A.length; i++) {
  let B = A[i];
  for (let j = 0; j < B.length; j++) {
    let C = B[j];
    if (i === j) {
      p.push(C);
    }
    if (i + j === B.length - 1) {
      q.push(C);
    }
  }
}
for (let s = 0; s < p.length; s++) {
  let u = p[s];
  let v = q[s];
  let t = p[s] + q[s];
  l.push(t);
}
console.log(l);
