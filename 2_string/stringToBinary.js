let a ='apple'
let stringToBinary =function(b)
{
    let e = ''
    for(let i in b)
    {
        let c = b[i]
        let d = c==='a'||c==='e'||c==='i'||c==='o'||c==='u'
        if(d)
        {
e=e+0
        }
        else
        {
            e=e+1
        }
    }return e
}
let t = stringToBinary(a)
console.log(t)