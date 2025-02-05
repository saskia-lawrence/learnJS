//2418
let a = 100;
let b = 0;
let c = 0;
for (let i = 1; i <= a; i++) {
  if (i % 3 === 0) {
    b = b + i;
  } else if (i % 5 === 0) {
    c = c + i;
  }
}
let d = b + c;
console.log(d);
