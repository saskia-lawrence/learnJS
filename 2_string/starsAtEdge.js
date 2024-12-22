let a = 4;
let b = [];
for (let i = 0; i < a; ++i) {
  let c = "";

  for (let j = 0; j < a; ++j) {
    if (i === 0 || i === a - 1 || j === 0 || j === a - 1) {
      c = c + "*";
    } else {
      c = c + "_ ";
    }
  }
  b.push(c);
}
console.log(b);
