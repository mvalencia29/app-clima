import React from "react";
import "./App.css";

function App() {
  const handleChangeColor = () => {
    document.body.classList.toggle("is-dark-mode");
  };

  return (
    <div className="App">
      <p>FTGYUIJ</p>
      <button onClick={handleChangeColor}>Cambiar Color</button>
    </div>
  );
}

export default App;
