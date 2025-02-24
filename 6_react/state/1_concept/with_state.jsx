import React from "react";
import { useState } from "react";

const App = () => {
  let [a, setA] = useState(1);

  const handleClick = () => {
    a = a + 1;
    setA(a);
    console.log(a);
  };

  return (
    <>
      <div>{a}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default App;
