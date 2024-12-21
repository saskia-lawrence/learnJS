let a = "1234";

/**
 * 
 * @param {String} m - string value
 * @returns sum of the integer values in string
 */
let getSum = function (m) {
  let n = 0;
  for (let i in m) {
    let o = m[i];
    let p = parseInt(o);
    n = n + p;
  }
  return n;
};
let q = getSum(a);
console.log(q);
