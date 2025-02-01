// {
//  abc:    [ 'a', 'ab', 'abc' ],
//  hello: [ 'h', 'he', 'hel', 'hell', 'hello' ]
// }

let a = ['abc','hello']
let b ={}
let well = function(u){
    let v = []
    let s = ''
for(let i in u){
 let w= u[i]
 s=s+w
v.push(s)
}
   return v
}
for(let i in a){
    let c =a[i]
    b[c]=well(c)
}console.log(b)