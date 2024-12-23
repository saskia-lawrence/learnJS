let a = [1, 4, 5, 6];
let d = 0;
for (let i in a) {
  let b = a[i];
  let c = b * b;
  d = d + c;
}
console.log(d);
