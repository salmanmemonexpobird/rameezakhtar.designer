'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import quote from "@/assets/img/testimonial/quote.svg";

 
import StartIcon from '@/svg/icons/StartIcon';
import { gsap } from 'gsap';



interface DataType {
  subtitle: string;
  title: string;
  info: string;
  testimonial_slider_data: {
    id: number;
    rating: number;
    description: string;
  }[];
  testimonial_nav_data: {
    id: number;
    designation: string;
    company: string;
  }[];
}


const testimonial_content: DataType = {
  subtitle: "Testimonials",
  title: "What clients say",
  info: "Kind words from the brands I've worked with",
  testimonial_slider_data: [
    {
      id: 1,
      rating: 4.8,
      description: `"Rameez has an excellent eye for design and branding. He transformed our ideas into a clean, modern, and professional visual identity that perfectly reflects our brand's personality. Great creativity and attention to detail!"`,
    },
    {
      id: 2,
      rating: 4.6,
      description: `"Working with Rameez was a great experience. His social media designs were creative, engaging, and perfectly aligned with our brand. He consistently delivered high-quality work with fresh ideas."`,
    },
    {
      id: 3,
      rating: 5,
      description: `"Highly impressed with Rameez's creativity and design skills. He understands brand aesthetics, pays attention to the smallest details, and consistently produces premium-quality designs."`,
    },
  ],
  testimonial_nav_data: [
    {
      id: 1,
      designation: "Director",
      company: "Memon Builders",
    },
    {
      id: 2,
      designation: "Brand Manager",
      company: "Happy House",
    },
    {
      id: 3,
      designation: "CEO",
      company: "GoWestpoint",
    },
  ]
}

const { subtitle, title, info, testimonial_slider_data, testimonial_nav_data } = testimonial_content


// slider a
const slider_a = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
// slider b
const slider_b = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const TestimonialAreaHomeOne = ({ style }: any) => { 

  const bg_img = style ? null : "/assets/img/bg/distort-bg.png"

  useEffect(() => {
    let testi_Line_1 = document.querySelectorAll('.tp-testimonial-user-border');

    testi_Line_1.forEach((line, index) => {
      gsap.set(line, {
        width: 0
      });
      gsap.to(line, {
        scrollTrigger: {
          trigger: '.tp-testimonial-user-border',
          start: 'top 90%',
          end: "bottom 80%",
          markers: false,
        },
        width: "100%"
      });
    });

  })


  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const sliderRef = useRef<Slider | null>(null);


  return (
    <>
      <section style={{ backgroundImage: `url(${bg_img})`, paddingTop: style ? undefined : '100px' }} className={`tp-testimonial-area ${style ? 'sv-inner__customize pb-160 black-bg-3' : 'theme-bg tp-bg-light pb-80'} pt-100`}>
        <div className="container">
          {style ? null :
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-testimonial-section-title">
                  <div className="tp-section-title-wrapper tp_text_anim mb-50 text-center">
                    <div className="tp-section-title-inner tp_title_anim p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title">{title}</h3>
                    </div>
                    <p>{info}</p>
                  </div>
                </div>
              </div>
            </div>
          }

          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider ml-70 mr-70">

                <Slider
                  {...slider_a}
                  asNavFor={slider2 as Slider}
                  ref={(slider) => {
                    setSlider1(slider);
                    sliderRef.current = slider;
                  }}
                  className="tp-testimonial-slider-active swiper-container"
                >
                  {testimonial_slider_data.map((item, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="tp-testimonial-item theme-bg-2"
                        style={{ backgroundImage: 'url(/assets/img/testimonial/bg-distort.png)' }}>
                        <div className="tp-testimonial-quote">
                          <Image src={quote} alt="image-here" />
                        </div>
                        <div className="tp-testimonial-item-top d-flex align-items-center">

                          <div className="tp-testimonial-rating" aria-label={`${item.rating.toFixed(1)} out of 5 stars`}>
                            {[0, 1, 2, 3, 4].map((starIndex) => {
                              const fill = Math.min(Math.max(item.rating - starIndex, 0), 1) * 100;
                              return (
                                <span className="tp-testimonial-star" key={starIndex} aria-hidden="true">
                                  <StartIcon />
                                  <span className="tp-testimonial-star-fill" style={{ width: `${fill}%` }}>
                                    <StartIcon />
                                  </span>
                                </span>
                              );
                            })}
                          </div>

                          <p>{item.rating.toFixed(1)} Rating</p>
                        </div>
                        <div className="tp-testimonial-content">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>



                <div className="tp-testimonial-thumb-slider d-none">

                  <Slider
                    {...slider_b}
                    asNavFor={slider1 as Slider}
                    ref={slider => {
                      setSlider2(slider);
                    }}
                    className="tp-testimonial-nav swiper-container"
                  >
                    {testimonial_nav_data.map((item, index) => (
                      <div key={index} className="swiper-slide">
                        <div
                          className="tp-testimonial-user-item d-flex justify-content-center align-items-center">
                          <div className="tp-testimonial-user-content">
                            <h3 className="tp-testimonial-user-title">{item.company}</h3>
                            <span className="tp-testimonial-user-designation">{item.designation}</span>
                          </div>
                          <span className="tp-testimonial-user-border"></span>
                        </div>
                      </div>
                    ))}
                  </Slider>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;
