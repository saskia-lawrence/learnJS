let a = [[1, 2, 3, 4, 5, 6], 4];
let b = a.pop();
let c = a[0];
let d = [];
for (let i in c) {
  let e = c[i];
  if (b > i) {
    d.push(e);
  }
}
console.log(d);
