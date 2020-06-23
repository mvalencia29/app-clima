import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const handleChangeColor = () => {
    document.body.classList.toggle("is-dark-mode");
  };

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
