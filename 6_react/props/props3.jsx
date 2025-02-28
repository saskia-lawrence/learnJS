//JsonData.jsx
let object = {
    "armorTypes": {
      "type": [
        {
          "id": "1",
          "name": "armor",
          "type": "Armor"
        },
        {
          "id": "2",
          "name": "shield",
          "type": "Shield"
        },
        {
          "id": "3",
          "name": "helmet",
          "type": "Helmet"
        },
        {
          "id": "4",
          "name": "gloves",
          "type": "glove"
        },
        {
          "id": "5",
          "name": "boot",
          "type": "Boot"
        }
      ]
    }
  }
  export default object;
  //App.jsx
  import React, { useRef, useState } from "react";
import "./style.css";
import Obj from "./Obj";
import object from "./JsonData";
let a = object.armorTypes.type
let t = []
for(let i=0;i<a.length;i++){
  let b = a[i] 
  let c = (<Obj d={b.id} e={b.name} f={b.type}></Obj>)
  t.push(c)
 }
const App = () => {
  return (
    <div>
      {t}
    </div>
  );
};

export default App;
//Obj.jsx
import React from 'react';
function Obj(props) {
  return (
    <div>
      <p>{props.d}</p>
      <p>{props.e}</p>
      <p>{props.f}</p>
  </div>)
}
export default Obj;