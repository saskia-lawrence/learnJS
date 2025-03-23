//Way 1: Surrrounded by single or double quotes
let a = "hello";
let K = "acv\ndef"; // '\n' means next line
console.log(K);
let Q = "qwe\tmnb"; // '\t' means tab
console.log(Q);
let Z = "ddd" + a + "lllll"; //dynamic string
console.log(Z);

//------------------------------------------------------

//Way 2: Surrrounded by ``
let c = `mind`;
//muliple lines and tabs are allowed within the string declaration
let d = `abc def  
                ghi  
         lmn tuv       
                  13              xyz
         154`;
console.log(d);

let M = `abccc${c}pppp
            ppp`;
console.log(M);
