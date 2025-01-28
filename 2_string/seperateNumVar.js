let a = "kdsjls470ams764msgs";
let isNumber = function (str) {
  return !isNaN(Number(str));
};
let isAlphabet = function (str) {
  return /^[a-zA-z]+$/.test(str);
};
let seperate = function (b) {
  let c = "";
  let d = "";
  for (let i in b) {
    let e = b[i];
    if (isNumber(e)) {
      c = c + e;
    } else if (isAlphabet(e)) {
      d = d + e;
    }
  }
  return d + c;
};
let u = seperate(a);
console.log(u);
