//obj.js
const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];
export default colorNames;
//App.js
import logo from "./logo.svg";
import "./App.css";
import colorNames from "./obj";
import { useState } from "react";

export default function App() {
  let [color, setColor] = useState("yellow");
  let divStyle = {backgroundColor : color}
  function eventHandler(event) {
let x = event.target.innerHTML
setColor(x)
  } 
  function colorButton(b) {
    let c = []
    for(let i=0;i<b.length;i++){
        let d = b[i]
        c.push( <button onClick={eventHandler}>{d}</button>)
    }
    return c
}  
let a = colorButton(colorNames)
  return (
    <div style={divStyle}>
     {a}
    </div>
  );
}
