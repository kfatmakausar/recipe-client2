import React from "react";
import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import NavBarContainer from "../components/containers/NavBarContainer";

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <header className="App-header">
        <RoutesContainer />
      </header>
    </div>
  );
}

export default App;
