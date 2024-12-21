let k = "apple";
for (let i in k) {
  let s = k[i];
  let t = s === "a" || s === "e" || s === "i" || s === "o" || s === "u";
  if (t) {
    console.log(s);
  }
}
