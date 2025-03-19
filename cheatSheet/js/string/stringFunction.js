//toUpperCase()
let A = "xyz".toUpperCase();
console.log(A);//XYZ


//toLowerCase()
let B = "XYZ".toLowerCase();
console.log(B);//xyz


//includes()
let C = A.includes("X");
console.log(C);//true


//split()
let D = A.split("");
console.log(D);//['X','Y','Z']
let E = "abc,def".split(",");
console.log(E);//['abc', 'def']


//trim()
let F = " abc ".trim();
console.log(F);//abc


//substring()
let G = "saskia";
let H = G.substring(3);
console.log(H);//kia
let J = G.substring(1, 3);
console.log(J);//as


//startswith(), endswith()
let K = "saskia".startsWith("kia");
console.log(K);//false
let L = "saskia".endsWith("kia");
console.log(L);//true
