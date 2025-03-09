import React, { useEffect, useState } from "react";
import Confetti from "js-confetti";
import "./style.css";

const confetti = new Confetti();

const App = () => {
  const [name, setName] = useState("");
  console.log("Rendering...");
  console.log("Rendering...");

  useEffect(() => {
    //realDom will available loaded.
    console.log("Inside useEffect. ");
  });
  console.log("Rendering...");
  console.log("Rendering...");

  return (
    <div>
      <p id="abcd">Use the input field below to rename this page!</p>
      <input
        onChange={({ target }) => setName(target.value)}
        value={name}
        type="text"
      />
    </div>
  );
};

export default App;
