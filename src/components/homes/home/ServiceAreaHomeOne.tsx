'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import tool_photoshop from "@/assets/img/hero/shape/hero-photoshop-3d.png";
import tool_illustrator from "@/assets/img/hero/shape/hero-illustrator-3d.png";
import tool_chatgpt from "@/assets/img/hero/shape/hero-chatgpt-3d.png";
import tool_capcut from "@/assets/img/hero/shape/hero-capcut-3d.png";
import tool_gemini from "@/assets/img/hero/shape/hero-gemini-3d.png";
import tool_freepik from "@/assets/img/hero/shape/hero-freepik-spaces-3d-v2.png";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  accordion_data: {
    id: number;
    tab_id: string;
    question: string;
    answer: string;
    some_features: string[];
  }[];
}

const service_content: DataType = {
  subtitle: "Services",
  title: <>Solutions <br /> I provide.</>,
  sm_des: <>From logos and branding to campaigns and website pages, <br /> I turn your ideas into clear, creative designs.</>,
  accordion_data: [
    {
      id: 1,
      tab_id: "One",
      question: "UX Design",
      answer: "I design simple, user-friendly experiences that guide people to exactly what they need. From research and wireframes to polished screens, every decision is made around the user.",
      some_features: [
        "User flows & wireframes",
        "Interface design",
        "Usability-focused layouts",
      ]
    },
    {
      id: 2,
      tab_id: "Two",
      question: "Website Pages Design",
      answer: "I design clean, modern website pages, from landing pages to full multi-page layouts, that look great on every screen and are built to turn visitors into customers.",
      some_features: [
        "Landing pages",
        "Responsive page layouts",
        "Web banners & graphics",
      ]
    },
    {
      id: 3,
      tab_id: "Three",
      question: "Branding",
      answer: "I create memorable brand identities that tell your story and stand out in the market, from your first logo to a complete visual identity.",
      some_features: [
        "Logo design",
        "Brand identity & guidelines",
        "Stationery & packaging",
      ]
    },
    {
      id: 4,
      tab_id: "Four",
      question: "Campaigns",
      answer: "I design eye-catching campaign creatives that get attention and drive results, keeping the message and look consistent across every platform.",
      some_features: [
        "Social media campaigns",
        "Ad creatives & banners",
        "Print & promotional material",
      ]
    }
  ]
}

const { subtitle, title, sm_des, accordion_data } = service_content;

const design_tools = [
  tool_photoshop,
  tool_illustrator,
  tool_chatgpt,
  tool_capcut,
  tool_gemini,
  tool_freepik,
];


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

  const handleItemClick = (index: number) => {
    setActive(index);
  }

  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="tp-sv">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Clients</p>
            </div>
            <div className="row gx-0">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70" style={{ paddingTop: "100px", }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">{title}</h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    {design_tools.map((tool, index) => (
                      <p data-tp-throwable-el="" key={index}>
                        <span
                          className="tp-services-capsule-item tp-services-capsule-item-icon"
                        >
                          <Image src={tool} alt="design-tool-icon" />
                        </span>
                      </p>
                    ))}
                  </div>

                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">

                    {accordion_data.map((item, i) => (
                      <div key={i} onClick={() => handleItemClick(i)} className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}>
                        <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                          <button
                            className={`accordion-button ${i === 1 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? 'true' : 'false'}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 1 ? 'show' : ''}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;
