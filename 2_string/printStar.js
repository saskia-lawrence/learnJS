/**


print 
*
**
***
****

 */

for (let a = 0; a < 4; a++) {
  let b = "";
  for (let c = 0; c < 4; c++) {
    if (a + c >= 3) {
      b = b + "*";
    }
  }
  console.log(b);
}
