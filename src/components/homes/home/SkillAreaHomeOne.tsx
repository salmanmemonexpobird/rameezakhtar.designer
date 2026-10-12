'use client'
import React from 'react';
// skill images
import skill_img_7 from "@/assets/img/skill/figma.png";
import skill_img_8 from "@/assets/img/skill/sketch.png";
import skill_img_9 from "@/assets/img/skill/photoshop.png";
import skill_img_10 from "@/assets/img/skill/xd.png";
import skill_img_11 from "@/assets/img/skill/in.png";
import skill_img_12 from "@/assets/img/skill/ai.png";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  subtitle: string;
  title: string;
  info: string;
  skill_items: {
    img: StaticImageData;
    title: string;
    percent: number;
  }[];
}
const skill_content: DataType = {
  subtitle: "Advantage",
  title: "Skills & tools",
  info: "For those who know what they're looking for..",
  skill_items: [
    {
      img: skill_img_7,
      title: "Figma",
      percent: 95,
    },
    {
      img: skill_img_8,
      title: "Sketch",
      percent: 82
    },
    {
      img: skill_img_9,
      title: "Photoshop",
      percent: 98
    },
    {
      img: skill_img_10,
      title: "Adobe XD",
      percent: 85
    },
    {
      img: skill_img_11,
      title: "InVision",
      percent: 90
    },
    {
      img: skill_img_12,
      title: "Illustrator",
      percent: 80
    }
  ]
}
const { subtitle, title, info, skill_items } = skill_content

const SkillAreaHomeOne = () => {
  return (
    <>
      <section className="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix theme-bg-2" style={{ backgroundImage: 'url(/assets/img/skill/bg-distort.png)' }}>
        <div className="tp-skill-shape">
          <span className="tp-skill-shape-1"></span>
          <span className="tp-skill-shape-2"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-section-title">
                <div className="tp-section-title-wrapper tp_text_anim mb-70 text-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title">{title}</h3>
                  </div>
                  <p>{info}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-tab-content tp-skill-radius">
                <div className="row">
                  {skill_items.map((inner_item, index) =>
                    <div key={index} className="col-xl-2 col-lg-3 col-md-3 col-6">
                      <div className="tp-skill-item text-center">
                        <div
                          className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                          <div className="tp-skill-icon">
                            <span>
                              <Image src={inner_item.img} alt="image-here" />
                            </span>
                          </div>
                          <h3 className="tp-skill-count"><span>{inner_item.percent}</span>%</h3>
                        </div>
                        <div className="tp-skill-content">
                          <h3 className="tp-skill-title">{inner_item.title}</h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillAreaHomeOne;
