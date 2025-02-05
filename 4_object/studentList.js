/*{
  kumar: { test1: true, test2: true, test3: false, test4: false },
  jay: { test1: true, test2: true, test3: false, test4: true },
  tom: { test1: false, test2: false, test3: false, test4: false }
}*/
let a = [ 'kumar' , 'jay' , 'tom' ]
let test1  = [true,true,false]
let test2  = [true,true,false]
let test3  = [false,false,false]
let test4  = [false,true,false]
let b = {}
let detail = function(x){
    let d = {}
    d.test1 =test1[x]
    d.test2 =test2[x]
    d.test3 =test3[x]
    d.test4 =test4[x]
    return d
}
for(let i=0;i<a.length;i++){
    let c= a[i]
    b[c]=detail(i)
}console.log(b)