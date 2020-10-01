import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import MacbookScroll from "./components/MacbookScroll";
import Header from "./components/Header";

import { gsap } from "gsap/all";

function App() {
  // let app = useRef(null);

  useEffect(() => {
    // gsap.to(app, { duration: 0, css: { visibility: "visible" } });
  }, []);

  return (
    <div
      // ref={(el) => (app = el)}
      className="App"
    >
      <Header />
      <MacbookScroll />
    </div>
  );
}

export default App;
