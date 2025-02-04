/*{ '1': 't', '2': 'v', a: 'c', k: 'n' }
{ b: 'd', r: '4', s: 't', o: 'm' }
*/
let a =[['a','b','c','d'],['1','r','t','4'],['2','s','v','t'],['k','o','n','m']]
let b = {}
let f = {}
for (let i=0;i<a.length;i++){
    let c = a[i]
    for(let j = 0;j<c.length;j=j+4){
        let d = c[j]
        let e = c[j+1]
        let g = c[j+2]
        let h = c[j+3]
     b[d]=g
     f[e]=h
    }
}console.log(b)
console.log(f)