import React, { useEffect, useRef } from "react";
import "../styles/MacbookRetina.scss";

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function MacbookRetina() {
  let componentContainer = useRef(null);
  let hardwareBlend = useRef(null);
  let toImage = useRef(null);
  let macbookImg = useRef(null);
  let proQuote = useRef(null);
  let proName = useRef(null);

  useEffect(() => {
    let hardwareRatio = window.innerWidth / (1136 - 248);

    gsap.defaults({ ease: "none", duration: 1 });
    let toImageAnim = gsap.timeline({
      scrollTrigger: {
        trigger: componentContainer,
        scrub: 0.2,
        start: "top-=40% top",
        end: "bottom bottom",
        // markers: true,
      },
    });
    toImageAnim.fromTo(
      hardwareBlend,
      {
        clipPath: "polygon(16% 0%, 84% 0%, 84% 100%, 16% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }
    );

    let hardwareBlendAnim = gsap.timeline({
      scrollTrigger: {
        trigger: componentContainer,
        scrub: 0.5,
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: true,
        pinReparent: true,
      },
    });
    hardwareBlendAnim
      .set(macbookImg, { scale: hardwareRatio })
      .fromTo(
        proName,
        { opacity: 0 },
        { opacity: 1, delay: 0.2, duration: 0.5 }
      )
      .fromTo(
        toImage,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 3,
          delay: 0.5,
        }
      )
      .to(proName, { opacity: 0, duration: 0.1 }, "<1")
      .fromTo(proQuote, { opacity: 0 }, { opacity: 1, duration: 0.15 }, "<0.8")
      .to(macbookImg, { scale: 1, delay: 0.5 })
      .to(proQuote, { scale: 0.8, opacity: 0, duration: 0.3 }, "<");
  }, []);

  return (
    <div className="section no-pad-top">
      <div className="section-content">
        <h2 className="typography-section-headline section-eyebrow">
          Retina 顯示器
        </h2>
        <h3 className="typography-section-headline section-headline">
          以大器、優雅的空間，
          <br />
          演繹大器、優雅的<span className="nowrap">作品。</span>
        </h3>
      </div>

      <div className="section-sticky-hero">
        <div className="sticky-container">
          {/* <div className="text-block-1-container">
            <div className="text-block-1 section-content">
              <div className="pro-quote">
                <p className="typography-headline">
                  <span className="nowrap">極限</span>就是用來
                  <span className="nowrap">挑戰的。</span>
                </p>
                <p className="quote-name typography-body bold">Chris Burkard</p>
              </div>
              <div className="pro-name">
                <p className="typography-body bold">Chris Burkard</p>
                <p className="typography-body job-title">探險攝影師</p>
              </div>
            </div>
          </div> */}
          <div
            ref={(el) => (componentContainer = el)}
            className="component-container"
          >
            <div className="text-container text-block-2">
              <div ref={(el) => (proQuote = el)} className="pro-quote">
                <p className="typography-headline quote-text">
                  <span className="nowrap">極限</span>就是用來
                  <span className="nowrap">挑戰的。</span>
                </p>
                <p className="typography-eyebrow-elevated bold">
                  Chris Burkard
                </p>
              </div>
              <div ref={(el) => (proName = el)} className="pro-name">
                <p className="typography-body bold">Chris Burkard</p>
                <p className="typography-body job-title">探險攝影師</p>
              </div>
            </div>
            <div ref={(el) => (hardwareBlend = el)} className="hardware-blend">
              <figure
                ref={(el) => (toImage = el)}
                className="figure-image to-image"
              ></figure>
              <div
                className="figure-image macbook-image"
                ref={(el) => (macbookImg = el)}
              >
                <figure className="figure-image from-image"></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content hero-description"></div>
    </div>
  );
}

export default MacbookRetina;