//remove by element
//filter method
/*filter function return a new array with elements which got filtered by the function . 
if the function returns true for a element it will be included
if the function return false it will not be included*/
let a = ['apple','orange','banana','grapes','jackfruit','orange'] 
let b = 'orange'
let c = a.filter((t)=>{
    return t !== b
})
console.log(c)
//remove by index
//splice()
let index_to_remove = 2
 a.splice(index_to_remove,1)
console.log(a)
//push()
//arr last element added
a.push('pears')
//pop()
//arrays last element deleted
a.pop()
//unshift()
//add first element
a.unshift('watermelon')
//shift()
//remove first element 
a.shift()
//reverse()
//given array get reversed
a.reverse()//['orange', 'jackfruit', 'grapes', 'orange', 'apple']
// slice()
//it doesn't affect original array
let d = a.slice(0,2)//['orange', 'jackfruit']
console.log(a)//['orange', 'jackfruit', 'grapes', 'orange', 'apple']
//indexOf()
//if the value present it will return the index of the value . if it does not present it return -1
let e = a.indexOf(3)
console.log(e)// -1
let f= a.indexOf('apple')
console.log(f)//4
//include()
// it return boolean 
a.includes('orange')//true
//join()
// it return string 
// it convert array to string 
let x = a.join(',')
console.log(x)// orange,jackfruit,grapes,orange,apple
 a.join() //orange,jackfruit,grapes,orange,apple
let y =a.join('') 
console.log(y)//orangejackfruitgrapesorangeapple
//map()
/* it will return new array which has elements what the function return
(new array will have same length as original array)*/
let m = [1,2,3] 
let n = m.map((o)=>{
    return o*2
})
console.log(n)//[2, 4, 6]
//forEach()
m.forEach((value,index) =>{
    console.log(value,index)
})