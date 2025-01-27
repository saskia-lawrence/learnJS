let a = 'bAnAnA'
//console.log(a)
//let m =a.toUpperCase()
//let n = a.toLowerCase()

let b = ''
for(let i in a){
let c= a[i]

if(c === c.toUpperCase()){
    b=b+ c.toLowerCase()
}
else if(c === c.toLowerCase()){
    b=b+ c.toUpperCase()
}
}
console.log(b)