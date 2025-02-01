let a =100
let b = {}
let odd = function(x){
    let c  = []
    for(let j=1;j<=x;j++){
        //console.log(j)
        c.push(j)
    }return c
}
let even = function(y){
    let d = {}
    for(let k = 1; k<=y;k++){
        d[k]= k
    }return d
}
for(let i=1;i<=a;i++){
    if(i%2===0){
        b[i]=even (i)
    }
    else{
        b[i]=odd(i)
    }
}console.log(b)