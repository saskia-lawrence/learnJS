import React, { useState } from "react";

const App = () => {
  /*
  why using a state on a 'input' element?
        1. To set its value
        2. To get its value
  */

  let [str, setStr] = useState("");

  let setHandler = function () {
    setStr("abc");
  };
  let getHandler = function () {
    alert(str);
  };

  return (
    <>
      <input
        value={str}
        onChange={(event) => setStr(event.target.value)}
      ></input>
      <br></br>
      <button onClick={setHandler}>
        Set Value to above input element using state
      </button>
      <br></br>
      <button onClick={getHandler}>
        Get Value from above input element using state
      </button>
    </>
  );
};

export default App;
