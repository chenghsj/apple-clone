import React from "react";
import "./App.css";
import MacbookScroll from "./components/MacbookScroll";
import MacbookPro16 from "./components/MacbookPro16";
import Header from "./components/Header";

import { gsap } from "gsap/all";

function App() {
  return (
    <div className="App">
      <Header />
      <MacbookPro16 />
    </div>
  );
}

export default App;
