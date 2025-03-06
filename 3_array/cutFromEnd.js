let a = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3];
let b = a.pop();
let c = a[0];
let d = [];
for (let i in c) {
  let e = c[i];
  if (i >= c.length - b) {
    d.push(e);
  }
}
console.log(d);
