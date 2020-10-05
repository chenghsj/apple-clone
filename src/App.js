import React from "react";
import MacbookPro16 from "./components/MacbookPro16";
import Header from "./components/Header";

import "./App.css";

// import LocomotiveScroll from "locomotive-scroll";
// import { gsap, ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
// https://codepen.io/GreenSock/pen/1dc38ca14811bc76e25c4b8c686b653d?editors=0010

function App() {
  return (
    <div className="App">
      <Header />
      <MacbookPro16 />
    </div>
  );
}

export default App;

// useEffect(() => {
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".App"),
//     smooth: true,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);
//   ScrollTrigger.scrollerProxy(".App", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector(".App").style.transform
//       ? "transform"
//       : "fixed",
//   });
//   ScrollTrigger.defaults({
//     scroller: ".App",
//   });
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
// }, []);
