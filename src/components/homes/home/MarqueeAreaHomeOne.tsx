'use client'
import React from 'react';
import Image from 'next/image';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SCALE = 1.35;

const clientLogos: { file: string; name: string; w: number; h: number; dark?: boolean }[] = [
  { file: 'client-01.png', name: "Asma Sidra", w: 123, h: 16 },
  { file: 'client-02.png', name: "Duravolt", w: 123, h: 20 },
  { file: 'client-03.png', name: "Deluxe Furnishing", w: 123, h: 24 },
  { file: 'client-04.png', name: "Deluxe Interiors", w: 123, h: 30 },
  { file: 'client-05.png', name: "Herbalight", w: 123, h: 48 },
  { file: 'client-06.png', name: "Learning Labs", w: 123, h: 37 },
  { file: 'client-07.png', name: "Ceres", w: 123, h: 26 },
  { file: 'client-08.png', name: "Santa Lucia", w: 89, h: 57 },
  { file: 'client-09.png', name: "Kapracoast", w: 123, h: 49 },
  { file: 'client-10.png', name: "Westpoint", w: 123, h: 18 },
  { file: 'client-11.png', name: "NutraWorld", w: 123, h: 22 },
  { file: 'client-12.png', name: "Grey Construction Group", w: 121, h: 52 },
  { file: 'client-13.png', name: "Simplified", w: 69, h: 53 },
  { file: 'client-14.png', name: "A&B Electronics", w: 59, h: 57 },
  { file: 'client-15.png', name: "Infuse Fragrances", w: 46, h: 57 },
  { file: 'client-16.png', name: "Usmani's Enterprises", w: 123, h: 32 },
  { file: 'client-17.png', name: "PMRC", w: 123, h: 42 },
  { file: 'client-18.png', name: "Beauty Elegant", w: 109, h: 56 },
  { file: 'client-19.png', name: "Daytrack Solar", w: 123, h: 56 },
  { file: 'client-20.png', name: "SOAL Technologies", w: 97, h: 57 },
  { file: 'client-21.png', name: "Nextstep", w: 123, h: 27 },
  { file: 'client-22.png', name: "Mehran Motors", w: 123, h: 32 },
  { file: 'client-23.png', name: "Empire Coach Line", w: 123, h: 22 },
  { file: 'client-24.png', name: "Nayza", w: 123, h: 28 },
  { file: 'client-25.png', name: "Suzuki Ittehad", w: 123, h: 55 },
  { file: 'client-26.png', name: "Client", w: 123, h: 49, dark: true },
  { file: 'client-27.png', name: "Suzuki SNA Motors", w: 107, h: 54 },
  { file: 'client-28.png', name: "Suzuki Motorways", w: 123, h: 54 },
  { file: 'client-29.png', name: "Bin Hashim", w: 121, h: 24 },
  { file: 'client-30.png', name: "Odo Concepts", w: 123, h: 52 },
  { file: 'client-31.png', name: "Suzuki Khalil Motors", w: 119, h: 57 },
  { file: 'client-32.png', name: "Toyota Society Motors", w: 62, h: 57 },
  { file: 'client-33.png', name: "Happy House", w: 121, h: 36 },
  { file: 'client-34.png', name: "Lavida", w: 123, h: 33 },
  { file: 'client-35.png', name: "Memon Builders", w: 123, h: 43 },
  { file: 'client-36.png', name: "Westpoint Smart Accessories", w: 123, h: 22 },
  { file: 'client-37.png', name: "Stylish", w: 75, h: 57 },
  { file: 'client-38.png', name: "Tekberry", w: 123, h: 30 },
];

const MarqueeAreaHomeOne = () => {
  return (
    <div className="tp-marquee-area z-index-5">
      <div className="tp-marquee-wrapper">
        <div className="tp-marquee-slider">
          <Swiper
            modules={[Autoplay, FreeMode]}
            className="tp-marquee-slider-active"
            slidesPerView="auto"
            spaceBetween={20}
            loop
            speed={5000}
            grabCursor
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.75,
              momentumVelocityRatio: 0.8,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {clientLogos.map((logo) => (
              <SwiperSlide key={logo.file} className="tp-marquee-item">
                <div className={`tp-marquee-logo-frame ${logo.dark ? 'tp-marquee-logo-frame--dark' : ''}`}>
                  <Image
                    src={`/assets/img/marquee/client-logos/${logo.file}`}
                    alt={`${logo.name} logo`}
                    width={Math.round(logo.w * SCALE)}
                    height={Math.round(logo.h * SCALE)}
                    draggable={false}
                    unoptimized
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MarqueeAreaHomeOne;
