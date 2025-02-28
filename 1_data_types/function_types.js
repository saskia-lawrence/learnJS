//Way 1 -> putting function into a variable
let func1 = function (a) {
  return a + 1;
};

//Way 2 -> declaring a function with the function name
//Usually this is the way used for functional components (With first letter caps)
function func2(a) {
  return a + 1;
}
console.log(func2(5));

//Way 3 -> Arrow function
//Array function must have Arrow '=>'

//If there are parameters, it optional to have paranthesis
let func3_1 = (a) => {
  //this function has one parameter, so it does not need paranthesis
  return a + 1;
};
console.log(func3_1(2)); //prints 3

let func3_2 = () => {
  //this function has no parameter, so it must have paranthesis
  return 1;
};

console.log(func3_2()); //prints 1

let func3_3 = (a) =>
  //if your function has only one line, then it does not need braces. It returns the last line.
  a + 1;

console.log(func3_3(9)); //prints 10
