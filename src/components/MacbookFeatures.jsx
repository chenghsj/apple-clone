import React, { useState, useEffect, useRef } from "react";
import "../styles/MacbookFeatures.scss";

import { gsap, ScrollTrigger, Power2 } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function MacbookFeatures() {
  const featuresRef = useRef([]);
  let featuresContent = useRef(null);
  let featuresVideo = useRef(null);

  useEffect(() => {
    // console.log(featuresRef.current);
    let features = featuresRef.current;
    let featuresAnim = gsap.timeline({
      scrollTrigger: {
        trigger: featuresContent,
        start: "top-=40% center-=5%",
        end: "bottom bottom",
        scrub: 0.5,
        // markers: true,
      },
    });
    featuresAnim
      .fromTo(
        features,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 1, ease: Power2.out, duration: 2 }
      )
      .to(featuresVideo, { onEnter: () => featuresVideo.play() }, 0);
  }, []);

  return (
    <section className="section-features section no-pad-top">
      <div ref={(el) => (featuresContent = el)} className="features-content">
        {FeaturesList.map((feature, outerIndex) => {
          return (
            <div
              ref={(el) => (featuresRef.current[outerIndex] = el)}
              key={`feature-row-${outerIndex}`}
              className="features-row"
            >
              {feature.map((item, innerIndex) => {
                let outer = outerIndex === 2;
                let inner = innerIndex % 2 === 0;
                return (
                  <div
                    key={`feature-item-${innerIndex}`}
                    className={`features-item-${inner ? "left" : "right"}`}
                  >
                    <p className="features-label">
                      <span className="features-label-bold">
                        {item.feature}
                      </span>
                      <br />
                      {item.desc}
                    </p>
                    {outer || <div className="features-badge-line"></div>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <video
        muted
        ref={(el) => (featuresVideo = el)}
        className="features-video"
        src="https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero_stats/large_2x.mp4"
      ></video>
    </section>
  );
}

export default MacbookFeatures;

const FeaturesList = [
  [
    { feature: "16 吋 Retina 顯示器", desc: "提供引人入勝的觀賞體驗。" },
    { feature: "最多達 8 核心處理器", desc: "可處理繁重的工作。" },
  ],
  [
    {
      feature: "最多達 8TB SSD 儲存裝置",
      desc: "在筆記型電腦中擁有最高容量。",
    },
    {
      feature: "最多達 64GB 記憶體",
      desc: "適合剪輯大型檔案，並可流暢進行多工處理。",
    },
  ],
  [
    {
      feature: [
        "AMD Radeon Pro",
        <br key={`feature-label-br`} />,
        " 5000M 系列繪圖處理器",
      ],
      desc: "可進行快速算圖與順暢播放。",
    },
    {
      feature: [
        "六揚聲器音響系統與",
        <br key={`feature-label-br`} />,
        "錄音室等級麥克風",
      ],
      desc: "帶來生動的聲音和超純淨的錄音品質。",
    },
  ],
];
