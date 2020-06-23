import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const handleChangeColor = () => {
    document.body.classList.toggle("is-dark-mode");
  };

  return (
    <div className="App">
      <Header />
      <button onClick={handleChangeColor}>Cambiar Color</button>
    </div>
  );
}

export default App;
