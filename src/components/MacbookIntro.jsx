import React, { useEffect, useRef, useCallback } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import "../styles/MacbookIntro.scss";

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const frameCount = 115;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_${index
    .toString()
    .padStart(4, "0")}.jpg`;

function MacbookScroll() {
  let localNavContainer = useRef(null);
  let macbookContainer = useRef(null);
  let macbookTitle = useRef(null);
  let macbookTitleH1 = useRef(null);
  let macbookTitleH2 = useRef(null);
  let macbookCanvas = useRef(null);
  let scrollContent = useRef(null);

  useEffect(() => {
    gsap.to(".macbookPro-intro", { visibility: "visible" });
    //landing animation
    let landingAnim = gsap.timeline();
    landingAnim
      .fromTo(
        [macbookTitleH1, macbookTitleH2],
        {
          y: 40,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 }
      )
      .fromTo(
        macbookCanvas,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "<0.1"
      )
      .fromTo(
        scrollContent,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        0
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
        pinSpacing: false,
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
        trigger: macbookContainer,
        start: "top+=130px top+=170px",
        end: "bottom bottom",
        scrub: 0.6,
        markers: true,
        pin: true,
      },
    });
    macbookContainerAnim
      .to(macbookTitle, { top: "-19%", opacity: 0, duration: 1 })
      .to(
        macbookObj,
        {
          frame: frameCount - 1,
          snap: "frame",
          onUpdate: render,
          duration: 2.5,
        },
        "<"
      );

    macbookImages[0].onload = render;
  }, []);

  return (
    <div className="macbookPro-intro">
      <div
        ref={(el) => (localNavContainer = el)}
        className="intro-ln-container"
      >
        <div className="intro-ln-content">
          <div className="intro-ln-title">
            <a href="#">
              MacBook&nbsp;Pro
              <span>16 吋機型</span>
            </a>
          </div>
          <div className="intro-ln-menu">
            <div className="intro-ln-menu-tray">
              <ul>
                <li>
                  <span>概覽</span>
                </li>
                <li>
                  <span>技術規格</span>
                </li>
              </ul>
            </div>
            <div className="intro-ln-action">
              <div className="intro-ln-action-button">
                <span>購買</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (macbookContainer = el)}
        className="macbookPro-intro-content"
      >
        <div
          ref={(el) => (macbookTitle = el)}
          className="macbookPro-intro-title"
        >
          <h1 ref={(el) => (macbookTitleH1 = el)}>Macbook Pro</h1>
          <h2 ref={(el) => (macbookTitleH2 = el)}>
            最強大，
            <br />
            速配最強者。
          </h2>
        </div>
        <div className="macbookPro-intro-anim">
          <canvas
            className="macbookPro-intro-canvas"
            width={1096}
            height={900}
            ref={(el) => (macbookCanvas = el)}
          />
          <div
            ref={(el) => (scrollContent = el)}
            className="macbookPro-intro-desc"
          >
            <p className="macbookPro-intro-desc-content">
              全新 MacBook&nbsp;Pro
              專為挑戰極限、改變世界的你而設計，是我們迄今所打造最強大的筆記型電腦。配備引人入勝的
              16 吋 Retina
              顯示器、超高速處理器、新一代繪圖處理、MacBook&nbsp;Pro
              歷來最大的電池容量，以及全新巧控鍵盤與龐大的儲存容量，這正是為強者而生，最極致的專業筆電。
            </p>
            <p className="macbookPro-intro-video">
              <a
                target="_blank"
                href="https://www.apple.com/105/media/tw/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/films/product/macbookpro-16-product-tpl-tw-2019_1280x720h.mp4"
                aria-label="觀看 MacBook Pro 16 吋影片"
                role="button"
              >
                <span>觀看影片</span>
                <PlayCircleOutlineIcon />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MacbookScroll;
