import React, { useEffect, useRef, useCallback } from "react";
import "../styles/MacbookScroll.scss";

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const frameCount = 115;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_${index
    .toString()
    .padStart(4, "0")}.jpg`;

function MacbookScroll() {
  let localNavContainer = useRef(null);
  let macbookTitle = useRef(null);
  let macbookTitleH1 = useRef(null);
  let macbookTitleH2 = useRef(null);
  let macbookCanvas = useRef(null);

  useEffect(() => {
    //landing animation
    let landingAnim = gsap.timeline();
    landingAnim
      .fromTo(
        [macbookTitleH1, macbookTitleH2],
        {
          y: 40,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.15 }
      )
      .fromTo(
        macbookCanvas,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "<0.1"
      );
    //local Navbar
    let localNavAnim = gsap.timeline();
    localNavAnim.to(localNavContainer, {
      scrollTrigger: {
        y: 0,
        trigger: localNavContainer,
        start: "top top",
        endTrigger: "html",
        end: "bottom bottom",
        // markers: true,
        pin: true,
      },
    });
    //macbook canvas
    const macbookContext = macbookCanvas.getContext("2d");
    const macbookImages = [];
    const macbookObj = { frame: 0 };

    const render = () => {
      macbookContext.clearRect(0, 0, macbookCanvas.width, macbookCanvas.height);
      macbookContext.drawImage(macbookImages[macbookObj.frame], 0, 0);
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      macbookImages.push(img);
    }
    let macbookContainerAnim = gsap.timeline({
      scrollTrigger: {
        trigger: macbookCanvas,
        start: "top +=90px",
        end: "bottom +=50%",
        scrub: 0.6,
        markers: true,
        pin: true,
      },
    });
    macbookContainerAnim
      .to(macbookTitle, { y: -20, opacity: 0, duration: 0.5 })
      .to(
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
      <div ref={(el) => (localNavContainer = el)} className="ln-container">
        <div className="ln-content">
          <div className="ln-title">
            <a href="#">
              MacBook&nbsp;Pro
              <span>16 吋機型</span>
            </a>
          </div>
          <div className="ln-menu">
            <div className="ln-menu-tray">
              <ul>
                <li>
                  <span>概覽</span>
                </li>
                <li>
                  <span>技術規格</span>
                </li>
              </ul>
            </div>
            <div className="ln-actions">
              <div className="ln-action-button">
                <span>購買</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="macbook-container">
        <div ref={(el) => (macbookTitle = el)} className="macbook-title">
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
      </div>
      <div className="section-content">
        <p>
          全新 MacBook&nbsp;Pro
          專為挑戰極限、改變世界的你而設計，是我們迄今所打造最強大的筆記型電腦。配備引人入勝的
          16 吋 Retina 顯示器、超高速處理器、新一代繪圖處理、MacBook&nbsp;Pro
          歷來最大的電池容量，以及全新巧控鍵盤與龐大的儲存容量，這正是為強者而生，最極致的專業筆電。
        </p>
      </div>
    </div>
  );
}

export default MacbookScroll;
