//to find diagonal matrix
let a = [
  [1, 2, 3, 4, 7],
  [5, 6, 7, 8, 3],
  [3, 9, 5, 6, 7],
  [3, 5, 2, 6, 7],
  [3, 9, 5, 6, 7],
];
for (let i in a) {
  i = parseInt(i);
  let b = a[i];
  for (let j in b) {
    j = parseInt(j);
    if (i + j === 4) {
      b[j] = 0;
    }
  }
  console.log(a[i]);
}
//console.log(a[0],);
