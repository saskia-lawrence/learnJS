let a = "ab12cdnm56k78";
let isNumber = function (str) {
  return !isNaN(Number(str));
};
let isAlphabet = function (str) {
  return /^[a-zA-z]+$/.test(str);
};

let parseAlphaNumeric = function (B) {
  let e = "";
  let f = "";
  for (let i in B) {
    let d = B[i];
    if (isNumber(d)) {
      e = e + d;
    }
    if (isAlphabet(d)) {
      f = f + d;
    }
  }
  return [e, f];
};
let s = parseAlphaNumeric(a);
console.log(s[0], s[1]);
