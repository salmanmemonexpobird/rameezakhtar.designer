'use client';
import React, { type JSX } from 'react';
import { CopyRight } from '@/components/common/SocialLinks';
import BehanceIconFooter from '@/svg/home/FooterIcons/BehanceIconFooter';
import LinkedInIconFooter from '@/svg/home/FooterIcons/LinkedInIconFooter';


interface DataType {
  title: string;
  title_2: JSX.Element;
  footer_data: {
    id: number;
    name: string;
    user_name: string;
    link: string;
    icon: React.JSX.Element;
  }[];
}

const footer_content: DataType = {
  title: "Open to full-time opportunities. Let's build something great together.",
  title_2: <>Open to full-time opportunities. <br /> Let&apos;s build something great.</>,
  footer_data: [
    {
      id: 1,
      name: "Behance",
      user_name: "@VisualsByRameez",
      link: "https://www.behance.net/VisualsByRameez",
      icon: <BehanceIconFooter />,
    },
    {
      id: 2,
      name: "LinkedIn",
      user_name: "@rameez-akhtar",
      link: "https://www.linkedin.com/in/rameez-akhtar-07b1bb2a0/",
      icon: <LinkedInIconFooter />,
    },
  ]
}

const { title_2, footer_data } = footer_content





const FooterOne = ({ style }: any) => {
  const bg_img = style ? "/assets/img/footer/overly-bg-2.png" : "/assets/img/skill/bg-distort.png";





  return (
    <>
      <footer>
        <div className={`tp-footer-bg ${style ? "tp-footer__customize  black-bg-3" : "tp-footer-bg-light theme-bg-2"} p-relative fix z-index-1`}
          style={{ backgroundImage: `url(${bg_img})` }}>
          <div className="tp-footer-circle-1">
            <span></span>
          </div>
          <div className="tp-footer-circle-2">
            <span></span>
          </div>
          <div className="tp-footer-circle-3" data-speed=".7">
            <span></span>
          </div>
          <div className={`tp-footer-area ${style ? "tp-footer-inner__customize" : ""} pb-80 pt-120`}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-footer-content text-center">
                    <h3 className={`tp-footer-title ${style ? "" : "big"} tp_title_anim`}>{title_2}</h3>
                  </div>
                </div>
              </div>
              <div className="row gx-50">
                {footer_data.map((item, index) => (
                  <div key={index} className="col-xl-6 col-lg-6 col-md-6" style={{ marginBottom: "30px" }}>
                    <a href={item.link} target={item.link === "#" ? undefined : "_blank"} rel="noopener noreferrer">
                      <div className="tp-footer-social-item d-flex align-items-center justify-content-between">
                        <span className="tp-footer-anim-border"></span>
                        <div className="tp-footer-social-text z-index-1">
                          <span className="child-1">{item.name}</span>
                          <span className="child-2">{item.user_name}</span>
                        </div>
                        <div className="tp-footer-social-icon z-index-1">
                          <span>
                            {item.icon}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tp-copyright-area pb-20">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-left text-center text-md-start">
                    <p><CopyRight /></p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-right text-center text-md-end">
                    <span>{new Date().getFullYear()} Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;