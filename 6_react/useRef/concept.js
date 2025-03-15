import React, { useEffect, useRef } from "react";

const App = () => {
  const myRef = useRef();

  let handleSubmit_1 = () => {
    let inputElm = document.getElementById("myInputID");
    changeBgmColour(inputElm, "red");
    console.log(inputElm);
  };

  let handleSubmit_2 = () => {
    let inputElm = myRef.current;
    console.log(inputElm);

    changeBgmColour(inputElm, "green");
  };

  let changeBgmColour = (elm, clr) => {
    elm.style.backgroundColor = clr;
  };
  return (
    <div>
      <br></br>
      <input id="myInputID" ref={myRef} type="text"></input>
      <br></br>
      <button onClick={handleSubmit_1}>ChangeInputColour (Using ID)</button>
      <br></br>
      <button onClick={handleSubmit_2}>ChangeInputColour (Using useRef)</button>
    </div>
  );
};

export default App;
