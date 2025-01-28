let a = "3apple 2abc 5t";
let b = a.split(" ");
let v = [];
let is = function (x, y) {
  let c = "";
  for (let i = 0; i < x; i++) {
    c = c + y;
  }
  return c;
};
for (let i in b) {
  let e = b[i];
  let d = e.substring(1);
  let f = e.substring(0, 1);
  //console.log(d)
  let u = is(f, d);
  v.push(u);
}
let r = v.join(" ");
console.log(r);
