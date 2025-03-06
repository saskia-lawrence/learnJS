//remove by element
let a = ['apple','orange','banana','grapes','jackfruit','orange'] 
let b = 'orange'
let c = a.filter((t)=>{
    return t !== b
})
console.log(c)
//remove by index
let index_to_remove = 2
 a.splice(index_to_remove,1)
console.log(a)