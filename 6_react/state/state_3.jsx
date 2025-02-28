import React, { useRef, useState } from "react";

import "./style.css";

const App = () => {
    let [a, setA] = useState(1);
    let [c, setC] = useState(1);
     let eventHandler = function (event) {
       let b = event.target.innerHTML;
       alert(b);
           setA(()=>b);
       setC(()=>b*b);
     };
     
     return (
       <div>
         <p>Wow, you've clicked that button:{a}, and its sq is {c} </p>
         <button onClick={eventHandler}>1</button>
         <button onClick={eventHandler}>2</button>
         <button onClick={eventHandler}>3</button>
         <button onClick={eventHandler}>4</button>
         <button onClick={eventHandler}>5</button>
       </div>
     );
   };
   
   export default App;
   