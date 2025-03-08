import React, { useState } from "react";

const App = () => {
  let [str, setStr] = useState("");

  return 
    <>
        {str && <p>'IamHere'</p>}
    </>;
};

export default App;
