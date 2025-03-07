//filter method
/*
filter function returns a new array with elements which got filtered by the callback function. 
if the callback function returns true for a element, it will be included
if the callback function returns false, it will not be included
*/

//Example : below filter function will filter the original, by element's length
let a = ["apple", "orange", "banana", "grapes", "jackfruit", "orange"];
let c = a.filter((t) => {
  return t.length <= 6;
});
console.log(c); // ['apple', 'orange', 'banana', 'grapes', 'orange']

//-------------------

//map()
/* 
it will return new array which has elements what the callback function returns
(new array will have same length as original array, but elements in the new array will be different)
*/
let m = [1, 2, 3];
let n = m.map((o) => {
  return o * 2;
});
console.log(n); //[2, 4, 6]
