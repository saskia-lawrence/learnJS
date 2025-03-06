//2



let a = "abcOKdefOK";
let countOK = function (b) {
  let d = 0;
  for (let i = 0; i <= a.length; i++) {
    let c = b[i] + b[i + 1];
    if (c === "OK") {
      d = d + 1;
    }
  }
  return d;
};
let e = countOK(a);
console.log(e);
