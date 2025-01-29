let a = [1, 2, 3, 4, 2, 4, 6, 5, 7, 5, 5];
let w = [];
let count = function (x, y) {
  c = 0;
  for (let i = 0; i < x.length; i++) {
    let d = x[i];
    if (d === y) {
      c = c + 1;
    }
  }
  return c;
};
for (let j = 0; j < a.length; j++) {
  let u = a[j];
  let v = count(a, u);
  let t = false;
  if (v > 1) {
    t = w.includes(u);
  }
  if (v === 1 || !t) {
    w.push(u);
  }
}
console.log(w);
