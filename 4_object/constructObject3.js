let A = "abc";
let B = "asdkfjabsdkhfbcsdjgfc";

let O = {};

for (let i = 0; i < A.length; ++i) {
  let c = A[i];
  let s = c + B.split(c)[1] + c;
  O[c] = s;
}

