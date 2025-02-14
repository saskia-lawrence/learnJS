/*{ AAAA: [ 'gg', 'jj', 'lll' ], BBBB: [ 'qqq', 'ee', 'yy' ] }*/
let A = ["AAAA=gg,jj,lll","BBBB=qqq,ee,yy"]
let B = {}
for(let i=0;i<A.length;i++){
    let a=A[i]
    let b=a.split('=') 
     let c = b[1].split(',')
    B[b[0]]=c
      
   }  console.log(B)