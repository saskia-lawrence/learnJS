let a = ' ab  cd ef'
let b = ''
for(let i in a){
    let c = a[i]
    if(c === ' '){
        b=b+'S'
    }
    else{
        b=b+c
    }
}console.log(b)