let a = 'sam@12.in'
let b = a.split('@')
let c = b[1].split('.')
//console.log(c)
if(b[0].length>0&&c[0].length>0&&c[1].length>0){
console.log('true')
}
else{
    console.log('false')
}