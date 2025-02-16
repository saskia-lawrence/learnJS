let getResult = (c) =>{
    let d = []
    for(let j=0;j<c.length;j++){
        let e = c[j]
        let f =  <h1>{e}</h1>
        d.push(f)
    }return <div>{d}</div>
}
export default function App() {
     let A = [['a','b','c'],['1','2','3'],['d','e','f']]
    let s = []
     for(let i=0;i<A.length;i++){
        let b = A[i]
        let u = getResult(b)
         s.push(u)
    }
      return  <div>{s}</div>
}
