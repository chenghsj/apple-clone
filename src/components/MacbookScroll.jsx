import React, { useEffect, useRef } from "react";
import "../styles/MacbookScroll.scss";

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const frameCount = 115;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_${index
    .toString()
    .padStart(4, "0")}.jpg`;

function MacbookScroll() {
  let macbookContainer = useRef(null);
  let macbookTitle = useRef(null);
  let macbookTitleH1 = useRef(null);
  let macbookTitleH2 = useRef(null);
  let macbookCanvas = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      [macbookTitleH1, macbookTitleH2],
      {
        y: 40,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 2, stagger: 0.15 }
    ).fromTo(
      macbookCanvas,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      "<0.1"
    );
  }, []);

  useEffect(() => {
    gsap.to(macbookContainer, { css: { visibility: "visible" } });

    const macbookContext = macbookCanvas.getContext("2d");
    const macbookImages = [];
    const macbookObj = { frame: 0 };

    const render = () => {
      macbookContext.drawImage(macbookImages[macbookObj.frame], 0, 0);
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      macbookImages.push(img);
    }
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: macbookCanvas,
        start: "top +=52px",
        end: "bottom +=50%",
        scrub: 0.5,
        markers: true,
        pin: true,
      },
    });
    tl.to(macbookTitle, { y: -20, opacity: 0, duration: 0.5 }).to(
      macbookObj,
      {
        frame: frameCount - 1,
        snap: "frame",
        onUpdate: render,
        duration: 2.5,
      },
      0
    );

    macbookImages[0].onload = render;
  }, []);

  return (
    <div className="macbook-scroll">
      <div ref={(el) => (macbookContainer = el)} className="macbook-container">
        <div className="macbook-title" ref={(el) => (macbookTitle = el)}>
          <h1 ref={(el) => (macbookTitleH1 = el)}>Macbook Pro</h1>
          <h2 ref={(el) => (macbookTitleH2 = el)}>
            最強大，
            <br />
            速配最強者。
          </h2>
        </div>

        <canvas
          className="macbook-canvas"
          width={1096}
          height={900}
          ref={(el) => (macbookCanvas = el)}
        />
        {/* <canvas className="macbookImage"></canvas> */}
      </div>
    </div>
  );
}

export default MacbookScroll;
