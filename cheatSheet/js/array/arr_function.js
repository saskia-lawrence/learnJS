let a = ["apple", "orange", "banana", "grapes", "jackfruit", "orange"];

//remove by index
//splice()
let index_to_remove = 2;
a.splice(index_to_remove, 1);
console.log(a);


//push()
//will be added as last element 
a.push("pears");


//pop()
//last element will be deleted
a.pop();


//reverse()
//given array get reversed
a.reverse(); //['orange', 'jackfruit', 'grapes', 'orange', 'apple']


// slice()
//it doesn't affect original array
//returns a new array, which is part of the original array (works like substring function in String)
let d = a.slice(0, 2); //['orange', 'jackfruit']
console.log(a); //['orange', 'jackfruit', 'grapes', 'orange', 'apple']


//indexOf()
//if the value present, it will return the index of the value . if it does not present, it returns -1
let e = a.indexOf(3);
console.log(e); // -1
let f = a.indexOf("apple");
console.log(f); //4


//include()
// it returns boolean
a.includes("orange"); //true


//join()
// it returns string
// it converts array to string
let x = a.join(",");
console.log(x); // orange,jackfruit,grapes,orange,apple
a.join(); //orange,jackfruit,grapes,orange,apple
let y = a.join("");
console.log(y); //orangejackfruitgrapesorangeapple
