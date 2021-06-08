import React, { useState } from "react";
import Header from "./components/Header/Header";
import Usermap from "./components/Usermap";

function App() {
  const [value, setValue] = useState("");

  const changeValue = (text) => {
    setValue(text);
  };
  return (
    <div className="App">
      <Header chang={changeValue} />
      <Usermap value={value} />
    </div>
  );
}

export default App;
