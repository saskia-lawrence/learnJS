//false
let a = 48;
let b = true;
let isPrimeNumber = function (x, y) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      y = false;
    }
    return y;
  }
};
let u = isPrimeNumber(a, b);
console.log(u);
