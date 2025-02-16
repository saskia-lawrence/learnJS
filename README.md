 let f = {0:{a:'abc',
               b:'def'},
            1:{a:'123',
              b:'457'},
            2:{a:'mno',
              b:'stu'}}
   let g = []  
   let h = []
    for(let i in f){
        let l = f[i]
     for(let j in l){
         let m = l[j]
       if(j==='a'){
           g.push(f.m)
       }
     }
    }
    console.log(g)