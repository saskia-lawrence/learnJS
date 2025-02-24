import React from "react";

const App = () => {
  let a = 1;

  const handleClick = () => {
    a = a + 1;
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
