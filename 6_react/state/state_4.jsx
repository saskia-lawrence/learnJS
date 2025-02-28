/*The length of paragraph is 9

paragraph */
import React, { useRef, useState } from "react";
import "./style.css";

const App = () => {
  let [a, setA] = useState("paragraph");

  function eventChanger(event) {
    let b = event.target.change;
    setA(() => b);
  }
  return (
    <div>
      <p>
        The length of {a} is {a.length}
      </p>
      <input value={a} onChange={eventChanger} />
    </div>
  );
};

export default App;
