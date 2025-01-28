let a = "die with sMile";
let b = a.split(" ");
let r = [];
for (let i in b) {
  let c = b[i];
  let d = c.substring(1);
  let e = c.substring(0, 1);
  let f = d.toLowerCase();
  let g = e.toUpperCase();
  let h = g + f;
  r.push(h);
}
let s = r.join(" ");
console.log(s);
