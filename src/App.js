import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <Header loading={loading} />
      <Main loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
