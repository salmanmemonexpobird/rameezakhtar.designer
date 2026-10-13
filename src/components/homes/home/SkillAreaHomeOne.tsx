'use client'
import React from 'react';
// skill images
import photoshopIcon from "@/assets/img/hero/shape/hero-photoshop-3d.png";
import illustratorIcon from "@/assets/img/hero/shape/hero-illustrator-3d.png";
import capCutIcon from "@/assets/img/hero/shape/hero-capcut-3d.png";
import canvaIcon from "@/assets/img/skill/canva.svg";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  subtitle: string;
  title: string;
  info: string;
  skill_items: {
    img: StaticImageData;
    title: string;
  }[];
}
const skill_content: DataType = {
  subtitle: "Advantage",
  title: "Skills & tools",
  info: "For those who know what they're looking for..",
  skill_items: [
    {
      img: photoshopIcon,
      title: "Photoshop",
    },
    {
      img: illustratorIcon,
      title: "Adobe Illustrator",
    },
    {
      img: capCutIcon,
      title: "CapCut",
    },
    {
      img: canvaIcon,
      title: "Canva",
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
                    <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-6">
                      <div className="tp-skill-item text-center">
                        <div
                          className="tp-skill-thumb tp-skill-thumb--icon-only d-flex align-items-center justify-content-center flex-column">
                          <div className="tp-skill-icon">
                            <span>
                              <Image src={inner_item.img} width={84} height={84} alt={`${inner_item.title} icon`} />
                            </span>
                          </div>
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
