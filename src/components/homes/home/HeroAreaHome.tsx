'use client' 
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, type JSX } from 'react';
import { scroller } from 'react-scroll';
import HeroHand from "@/assets/img/hero/hero-hand.png";
import HeroArrowIcon from '@/svg/home/HeroIcons/HeroArrowIcon';
import { HeroSocialLinks } from '@/components/common/SocialLinks';
import PhotoshopIcon3D from '@/assets/img/hero/shape/hero-photoshop-3d.png';
import IllustratorIcon3D from '@/assets/img/hero/shape/hero-illustrator-3d.png';
import ChatGPTIcon3D from '@/assets/img/hero/shape/hero-chatgpt-3d.png';
import CapCutIcon3D from '@/assets/img/hero/shape/hero-capcut-3d.png';
import GeminiIcon3D from '@/assets/img/hero/shape/hero-gemini-3d.png';
import FreepikSpacesIcon3D from '@/assets/img/hero/shape/hero-freepik-spaces-3d-v2.png';
import HeroImage from '@/assets/img/hero/hero-img-hd.png';

interface DataType {
  slide_text: string[];
  sub_title: string;
  title_1: string;
  words: string[];
  title_2: string;
  sm_info: JSX.Element;
  btn_text: JSX.Element;
}

const hero_content: DataType = {
  slide_text: [
    "Graphic Designer",
    "Graphic Designer",
  ],
  sub_title: "Hello There!",
  title_1: "I am Rameez",
  words: ["UX", "Design System", "Website Pages", "Branding", "Campaign"],
  title_2: "designer",
  sm_info: <>Graphic designer helping brands stand out <br /> with thoughtful UX, branding and campaigns.</>,
  btn_text: <>Get <br /> In Touch</>,

}
const { slide_text, sub_title, title_1, words, title_2, sm_info, btn_text } = hero_content;

// scroll to tp-sv section 
const scrollTo = () => {
  scroller.scrollTo('tp-sv', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};


const HeroAreaHome = () => {
  const [typed, setTyped] = useState('');
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setTyped(word.slice(0, charIndex));
      let delay = deleting ? 50 : 90;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(words[0]);
      return;
    }
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <section className="tp-hero-area p-relative tp-btn-trigger z-index-1 fix theme-bg-2" id="tp-hero">
        <div className="tp-hero-social-wrapper">
          <span className="tp-hero-social-bar"></span>
          <div className="tp-hero-social">
            <HeroSocialLinks />
          </div>
        </div>
        <div className="tp-hero-shape">
          <div className="tp-hero-shape-1 background-white-mode" style={{ backgroundImage: 'url(/assets/img/hero/hero-overlay.png)' }}></div>
          <div className="tp-hero-shape-1 background-dark-mode" style={{ backgroundImage: 'url(/assets/img/hero/hero-overlay-2.png)' }}></div>
          <span className="tp-hero-shape-2"></span>
        </div>
        <div className="tp-hero-bottom-text-wrapper">
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="tp-hero-left-wrapper">
                <div className="tp-hero-content tp_text_anim p-relative z-index-1">
                  <span className="singleLine">{sub_title} <Image src={HeroHand} alt="waving-hand" /></span>
                  <h3 className="tp-hero-title">
                    <span className="tp-hero-title-line">{title_1}</span>
                    <span className="tp-hero-typed-line">
                      <span className="tp-hero-typed">{typed || '​'}</span>
                      <span className="tp-hero-typed-cursor"></span>
                    </span>
                    <span className="tp-hero-title-line">{title_2}</span>
                  </h3>
                  <p>{sm_info}</p>
                  <div className="tp-hero-btn wrap">
                    <div className="tp-hover-btn-wrapper tp-btn-bounce">
                      <Link href="https://www.linkedin.com/in/rameez-akhtar-07b1bb2a0/" target="_blank" rel="noopener noreferrer" className="tp-hover-btn tp-hover-btn-item tp-btn-circle square">
                        <span className="tp-btn-circle-text" >
                          {btn_text}
                        </span>
                        <span className="tp-btn-circle-arrow">
                          <HeroArrowIcon />
                        </span>
                        <i className="tp-btn-circle-dot"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-hero-scroll smooth">
                    <a className="pointer" onClick={scrollTo}>
                      <span className="tp-hero-scroll-bar"></span>
                      <span className="tp-hero-scroll-mouse"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="tp-hero-thumb-wrapper text-center text-lg-end p-relative z-index-1">
                <div className="tp-hero-thumb-shape">
                  <Image
                    className="tp-hero-app-icon tp-hero-app-icon--chatgpt"
                    data-speed="1.18"
                    src={ChatGPTIcon3D}
                    width={76}
                    height={76}
                    loading="eager"
                    unoptimized
                    alt="3D ChatGPT icon"
                  />
                  <Image
                    className="tp-hero-app-icon tp-hero-app-icon--capcut"
                    data-speed="1.3"
                    src={CapCutIcon3D}
                    width={72}
                    height={72}
                    loading="eager"
                    unoptimized
                    alt="3D CapCut icon"
                  />
                  <Image
                    className="tp-hero-app-icon tp-hero-app-icon--gemini"
                    data-speed="1.24"
                    src={GeminiIcon3D}
                    width={82}
                    height={82}
                    loading="eager"
                    unoptimized
                    alt="3D Gemini icon"
                  />
                  <Image
                    className="tp-hero-app-icon tp-hero-app-icon--illustrator"
                    data-speed="1.36"
                    src={IllustratorIcon3D}
                    width={80}
                    height={80}
                    loading="eager"
                    unoptimized
                    alt="3D Adobe Illustrator icon"
                  />
                  <Image
                    className="tp-hero-app-icon tp-hero-app-icon--freepik"
                    data-speed="1.28"
                    src={FreepikSpacesIcon3D}
                    width={74}
                    height={74}
                    loading="eager"
                    unoptimized
                    alt="3D Freepik Spaces icon"
                  />
                  <Image
                    className="tp-hero-app-icon tp-hero-app-icon--photoshop"
                    data-speed="1.4"
                    src={PhotoshopIcon3D}
                    width={78}
                    height={78}
                    loading="eager"
                    unoptimized
                    alt="3D Photoshop icon"
                  />
                  <span className="tp-hero-thumb-shape-3"></span>
                </div>
                <div className="tp-hero-thumb">
                  <Image
                    src={HeroImage}
                    style={{ height: 'auto' }}
                    sizes="(max-width: 991px) 88vw, 42vw"
                    priority
                    unoptimized
                    alt="rameez-akhtar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroAreaHome;
