let a = Array.from({ length: 100 }, (_, i) => i + 1);
let b = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};
for (let i in a){
let c = a[i]
if(c%1===0){
    b[1].push(c)
}
if(c%2===0){
    b[2].push(c)
}
if(c%3===0){
    b[3].push(c)
}
if(c%4===0){
    b[4].push(c)
}
if(c%5===0){
    b[5].push(c)
}
}console.log(b)
