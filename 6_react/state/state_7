//obj.js
let Obj = {
  fruits: [
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
    },
  ],
};
export default Obj;
//App.js
import logo from "./logo.svg";
import "./App.css";
import Obj from "./obj";
import Fruit from "./Fruit";
import { useState } from "react";

export default function App() {
  let [values, setValues] = useState("");
  let getInputText = (event) => {
    let d = event.target.innerHTML;
    let e = frooti(Obj, d);
    let v = <Fruit x={e.image} y={e.price} />;
    setValues(v);
  };
  let frooti = (obj, c) => {
    let a;
    for (let i = 0; i < obj.fruits.length; i++) {
      let b = obj.fruits[i];
      if (c === b.name) {
        a = b;
      }
    }
    return a;
  };
  let butt = (obj) => {
    let m = [];
    for (let i = 0; i < obj.fruits.length; i++) {
      let n = obj.fruits[i];
      let o = n.name;
      m.push(<button onClick={getInputText}>{o}</button>);
    }
    return m;
  };
  let shit = butt(Obj);
  return (
    <div>
      {values}
      {shit}
    </div>
  );
}
//Fruits
import React from "react";
function Fruit(props) {
  return (
    <div>
      <img src={props.x}/>
      <p>{props.y}</p>
    </div>
  );
}
export default Fruit;
