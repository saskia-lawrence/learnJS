let str = {};
console.log(str);
if (str) {
  console.log("Yes");
} else {
  console.log("No");
}

/*

str       | Print
-----------------
undefined | No
''        | No
'abc'     | Yes
'abc'     | Yes
0         | No 
1         | Yes (Yes for all the integers other than 0)
23        | Yes
[]        | Yes
{}        | Yes


*/
