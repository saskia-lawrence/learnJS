import React, { useState } from "react";

const App = () => {
  let [str, setStr] = useState("");

  return 
    <>
        {str && <p>'Not shown'</p>}
        {!str && <p>'shown'</p>}

    </>;
};

export default App;
