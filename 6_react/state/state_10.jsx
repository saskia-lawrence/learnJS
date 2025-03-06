//list.js
const produce = [
    "Carrots",
    "Cucumbers",
    "Bell peppers",
    "Avocados",
    "Spinach",
    "Kale",
    "Tomatoes",
    "Bananas",
    "Lemons",
    "Ginger",
    "Onions",
    "Potatoes",
    "Sweet potatoes",
    "Purple cabbage",
    "Broccoli",
    "Mushrooms",
    "Cilantro",
  ];
  
  const pantryItems = [
    "Chia",
    "Goji berries",
    "Peanut butter",
    "Bread",
    "Cashews",
    "Pumpkin seeds",
    "Peanuts",
    "Olive oil",
    "Sesame oil",
    "Tamari",
    "Pinto beans",
    "Black beans",
    "Coffee",
    "Rice",
    "Dates",
    "Quinoa",
  ];
  let _exports;
  export default _exports = { produce, pantryItems };
//App.js
import "./App.css";
import { useState } from "react";
import list from "./list.js";

export default function App() {
  console.log(list);
  let [cart, setCart] = useState(getResult('Carrots',[]));
  function getResult(a, prevCart) {
    //console.log(a)
    //console.log(prevCart)
    if (prevCart.includes(a)) {
      return prevCart;
    } else {
      prevCart.push(a);

      return prevCart;
    }
  }
  function removeProduct(event) {
    let b = event.target.innerHTML 
    setCart((prevCart)=>{
      prevCart = prevCart.filter((t)=>{
        return t !== b
      })
      return prevCart
    })
    }

    function loadCart() {
       let u = []
    for(let k=0;k<cart.length;k++){
      let l = cart[k]
      let t = (<li onClick={removeProduct}>{l}</li>)
      u.push(t)
    }
     return u  
  }
  function eventHandler({ target }) {
    let a = target.innerHTML;
    setCart((prevCart) => {
      let v = getResult(a, prevCart);
      console.log(v);
      return [...v]; // if object, have braces instead []
    });
  }
  let getAns = function (q) {
    let x = [];
    let m = [];
    for (let i = 0; i < q.produce.length; i++) {
      let y = q.produce[i];
      let z = <button onClick={eventHandler}>{y}</button>;
      x.push(z);
    }
    for (let j = 0; j < q.pantryItems.length; j++) {
      let n = q.pantryItems[j];
      let o = <button onClick={eventHandler}>{n}</button>;
      m.push(o);
    }
    return { x, m };
  };
  let { x, m } = getAns(list);
let w = loadCart()
  return (
    <div>
      <h1>Grocery Item</h1>
      <ul>{w}</ul>
      <h1>Produce:</h1>
      {x}
      <h1>PantryItems:</h1>
      {m}
      
    </div>
  );
}
