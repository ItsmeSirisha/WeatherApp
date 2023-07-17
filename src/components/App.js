import React, { useState } from "react";
import Home from "./Home";
import Weatherinfo from "./Weatherinfo";
import NoteContext from "../context/NoteContext";

//  Through provider we are passing hook so that we can use the hooks in other components
function App() {
  const [inputName, setInputName] = useState("");
  const [isvisible, setIsVisible] = useState(false);

  return (
    <div>
      <NoteContext.Provider value={{ inputName, setInputName, setIsVisible }}>
        {isvisible ? <Weatherinfo /> : <Home />}
      </NoteContext.Provider>
    </div>
  );
}

export default App;
