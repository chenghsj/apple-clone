import React from "react";
import "./App.css";
import MacbookScroll from "./components/MacbookScroll";
import Header from "./components/Header";

import { gsap } from "gsap/all";

function App() {
  return (
    <div className="App">
      <Header />
      <MacbookScroll />
    </div>
  );
}

export default App;
