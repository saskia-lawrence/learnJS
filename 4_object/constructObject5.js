/*{
  L: [
    'a', 'k', 'h',
    'h', 'g', 'j',
    'h', 'd', 's'
  ],
  N: [ '9', '4', '6', '0', '4', '8' ],
  U: [ 'K', 'A', 'N' ]
}
*/
let a = 'akh9hg4K6Ajhd04sN8'
let b = {}
let d =0
let isNumber = function (str) {
  return !isNaN(Number(str));
};
let isAlphabet = function (str) {
  return /^[a-zA-z]+$/.test(str);
};
for(let i=0;i<a.length;i++){
    let c = a[i]
    if(isNumber(c)){
       if(b.N){
          b.N.push(c) 
       }
       else{
           b.N=[c]
       }
    }
    else if(c===c.toUpperCase()){
            if(b.U){
                b.U.push(c)
            }
            else{
                b.U=[c]
            }
        }
        else if(c===c.toLowerCase()){
            if(b.L){
                b.L.push(c)
            }
            else{
                b.L=[c]
            }
        }
}console.log(b)