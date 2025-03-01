//obj.js
let Obj =  [
    {
      id: "1",
      name: "armor",
      type: "Armor",
    },
    {
      id: "2",
      name: "shield",
      type: "Shield",
    },
    {
      id: "3",
      name: "helmet",
      type: "Helmet",
    },
    {
      id: "4",
      name: "gloves",
      type: "glove",
    },
    {
      id: "5",
      name: "boot",
      type: "Boot",
    },
  ];
  
  export default Obj;
//app.js
import logo from "./logo.svg";
import "./App.css";
import Obj from "./obj";
import Kite from "./Kite";
import { useState } from "react";

export default function App() {
  let [values, setValues] = useState("");
  let getInputText = () => {
    let element = document.getElementById("abc");
    let c = element.value;
    let d = getAns(c, Obj);
    setValues(d);
  };
  let getAns = (input_Element, _obj) => {
    let a = [];
    for (let i = 0; i < _obj.length; i++) {
      let b = _obj[i];
      if (input_Element >= parseInt(b.id)) {
        a.push(<Kite e={b.name} f={b.type} />);
      }
    }
    return a;
  };

  return (
    <div>
      <input id="abc"></input>
      {values}
      <button onClick={getInputText}>click</button>
    </div>
  );
}
//Kite.js
import React from "react";
import { useState } from "react";
function Kite(props) {
  return (
    <div>
      <p>{props.e}</p>
      <p>{props.f}</p>
    </div>
  );
}
export default Kite;
