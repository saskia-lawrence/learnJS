//obj.js
let Obj = [
    {
      name: "Cabbage",
      photo_url: "https://www.freepngimg.com/thumb/categories/2970.png",
      quantity: "One Unit",
      id: 2,
      price: 30,
    },
    {
      name: "Capsicum",
      photo_url:
        "https://www.nicepng.com/png/detail/52-525615_green-bell-pepper-png-green-capsicum-png.png",
      quantity: "One Unit",
      id: 7,
      price: 5,
    },
    {
      name: "Garlic",
      photo_url:
        "https://www.freepngimg.com/thumb/garlic/2-2-garlic-transparent-thumb.png",
      quantity: "One Unit",
      id: 10,
      price: 20,
    },
    {
      name: "Beetroot",
      photo_url: "https://pngimg.com/uploads/beet/beet_PNG28.png",
      quantity: "One Unit",
      id: 11,
      price: 20,
    },
    {
      name: "Tomatoes",
      photo_url: "https://www.freepngimg.com/thumb/categories/2985.png",
      quantity: "One Unit",
      id: 13,
      price: 5,
    },
    {
      name: "Celeriac",
      photo_url:
        "https://w7.pngwing.com/pngs/252/146/png-transparent-celeriac-leaf-vegetable-food-celery-herbes-leaf-vegetable-food-plant-stem-thumbnail.png",
      quantity: "One Bunch",
      id: 16,
      price: 5,
    },
    {
      name: "Carrots",
      photo_url: "https://www.freepngimg.com/thumb/categories/2971.png",
      quantity: "One Kg",
      id: 18,
      price: 60,
    },
    {
      name: "Onions",
      photo_url:
        "https://www.freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png",
      quantity: "One Kg",
      id: 19,
      price: 120,
    },
    {
      name: "Potatoes",
      photo_url:
        "https://www.freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png",
      quantity: "One container",
      id: 20,
      price: 80,
    },
  ];
  export default Obj;
//Fruit.js
import React from "react";
function Fruit(props) {
  return (
    <div>
      <h1>{props.x}</h1>
      <img src={props.y} />
    </div>
  );
}
export default Fruit;
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
    let f = [];
    for (let j = 0; j < e.length; j++) {
      let z = e[j];
      let v = <Fruit key={j} x={z.name} y={z.photo_url} />;
      f.push(v);
    }
    setValues(f);
    console.log(e);
  };
  let frooti = (obj, c) => {
    let l = [];
    for (let i = 0; i < obj.length; i++) {
      let b = obj[i];
      if (c >= b.price) {
        l.push(b);
      }
    }
    return l;
  };
  let butt = () => {
    let a = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0) {
        a.push(<button onClick={getInputText}>{i}</button>);
      }
    }
    return a;
  };
  let shit = butt(Obj);
  return (
    <div>
      {shit}
      {values}
    </div>
  );
}
