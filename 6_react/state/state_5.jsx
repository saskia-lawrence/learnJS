//app.js
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Obj from "./obj";

export default function App() {
  let [values, setValues] = useState('hen')
  let getPersonInfo = (input_Value, _obj) => {
    let info;
    for (let i = 0; i < _obj.length; i++) {
      let a = _obj[i];
      if (input_Value === a.name) {
        info = a.info;
      }
    }
    return info;
  };

  let getInputText = (event) => {
    let element = document.getElementById("abc");
    let c = element.value;
    let d = getPersonInfo(c, Obj);
setValues(() => d)
       
  };

  return (
    <div>
      <input id="abc"></input>
      <h1>{values===undefined ?'no_person':values}</h1>
      <button onClick={getInputText}>click</button>
    </div>
  );
}
//obj.js
let Obj = [
    { name: "saskia", info: "goodgirl" },
    { name: "sandy", info: "vvvgoodgirl" },
  ];
  
  export default Obj;