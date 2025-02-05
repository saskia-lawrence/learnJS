//2418
let a = 100;
let b = 0;
for (let i = 1; i <= a; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    b = b + i;
  }
}
console.log(b);
