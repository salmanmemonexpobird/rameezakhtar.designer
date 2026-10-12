"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import portfolio_img_1 from "@/assets/img/portfolio/westpoint-accessories.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/social-media-posts.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/beauty-product-creatives.jpg";

import UpArrowIconPortfolio from '@/svg/home/PortfolioIcons/UpArrowIconPortfolio';
import RitghtArrowIconPortfolio from '@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio';

const portfolio_content = {
  title: 'Some projects',
  portfolio_data: [
    {
      id: 2,
      img: portfolio_img_2,
      bg_img: "/assets/img/portfolio/social-media-posts.jpg",
      title: 'Suzuki Creatives',
      category: 'Graphic Design',
      link: 'https://www.behance.net/gallery/217716707/Suzuki-Social-Media-Post',
      external: true,
    },
    {
      id: 3,
      img: portfolio_img_3,
      bg_img: "/assets/img/portfolio/beauty-product-creatives.jpg",
      title: "Beauty Product Creatives",
      category: 'Product Creatives',
      link: 'https://www.behance.net/gallery/255735175/Beauty-Product-Creatives',
      external: true,
    }
  ]
}
const { title, portfolio_data } = portfolio_content


const PortfolioAreaHomeOne = () => {

  return (
    <>
      <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix" id="tp-portfolio">
        <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
          <p>{title}</p>
          <p>{title}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-wrapper pr-30 pt-55">
                <div className="tp-section-title-wrapper mb-60">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                  </div>
                </div>
                <div className="tp-portfolio-item-wrapper">
                  <div className="tp-portfolio-item mb-70">
                    <Link href="https://www.behance.net/gallery/248306549/Smart-Watch-Website-UI-Designs" target="_blank" rel="noopener noreferrer">
                      <div className="tp-portfolio-thumb img-1 w-img fix " style={{ height: 560 }}>
                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: 'url(/assets/img/portfolio/portfolio-2.jpg)' }}></div>
                        <div className="tp-portfolio-thumb-img" style={{ height: '100%' }}>
                          <Image data-speed="0.95" loading="eager" unoptimized style={{ width: '100%', height: 'auto', position: 'relative', top: -23 }} src={portfolio_img_1} alt="Westpoint Accessories - Smart Watch Website UI Designs" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">Westpoint Accessories</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">01</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>UI Design</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2 d-none d-lg-block">
                  <Link href="https://www.behance.net/VisualsByRameez" target="_blank" rel="noopener noreferrer"
                    className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                    <span className="tp-btn-circle-text-2">
                      Explore <br /> All Project
                      <span className="tp-btn-circle-arrow-2">
                        <UpArrowIconPortfolio />
                      </span>
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-item-wrapper pl-50">
                {portfolio_data.map((item, i) =>
                  <div key={i} className="tp-portfolio-item mb-70">
                    <Link href={item.link} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      <div className="tp-portfolio-thumb img-2 w-img fix" style={{ height: 480 }}>

                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: `url(${item.bg_img})`, height: "auto" }}></div>
                        <div className="tp-portfolio-thumb-img" style={{ height: '100%' }}>
                          <Image data-speed="0.95" loading="eager" unoptimized style={{ width: '100%', height: 'auto', position: 'relative', top: -23 }} src={item.img} alt={item.title} />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">02</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{item.category}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;