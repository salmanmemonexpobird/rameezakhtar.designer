'use client';
import { gsap } from 'gsap';
import Link from 'next/link';
import NavMenu from './menu/NavMenu';
import React, { useEffect, useState } from 'react';

import CvDownloadButton from '@/components/common/CvDownloadButton';


const HeaderOne = () => {


  // header border bottom animation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Testimonial 3 Image Animation
      gsap.set(".tp-header-border", { width: 0, });
      gsap.to(".tp-header-border", {
        scrollTrigger: {
          trigger: ".tp-header-area",
          start: "center center",
          markers: false
        },
        duration: 1,
        ease: "none",
        width: "100%",
      })
    }
  }, [])


  // sticky header 
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
      } else if (currentScrollTop <= 500) {
        document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
      } else {
        document.querySelector('.tp-int-menu')?.classList.add('tp-header-pinned');
      }
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);



  return (
    <>
      <header>

        <div className="tp-header-area tp-header-mob-space tp-header-transparent p-relative">
          <span className="tp-header-border"></span>
          <div className="container container-large">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-5 col-6">
                <div className="logo">
                  <Link className="logo-white" href="/">
                    <span className="tp-logo-signature">Rameez Akhtar</span>
                  </Link>
                  <Link className="logo-black" href="/">
                    <span className="tp-logo-signature">Rameez Akhtar</span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="main-menu d-flex justify-content-center">
                  <nav className="tp-main-menu-content">
                    <NavMenu />
                  </nav>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-7 col-6">
                <div className="tp-header-right d-flex align-items-center justify-content-end">

                  <div className="tp-header-cv ml-10 d-none d-md-block">
                    <CvDownloadButton />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </header>

      <header>

        <div className="tp-header-area tp-header-mob-space tp-header-transparent p-relative tp-int-menu tp-header-sticky-cloned">
          <div className="container container-large">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-5 col-6">

                <div className="logo">
                  <Link className="logo-white" href="/">
                    <span className="tp-logo-signature">Rameez Akhtar</span>
                  </Link>
                  <Link className="logo-black" href="/">
                    <span className="tp-logo-signature">Rameez Akhtar</span>
                  </Link>
                </div>

              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="main-menu d-flex justify-content-center">
                  <nav className="tp-main-menu-content">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-7 col-6">
                <div className="tp-header-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-cv ml-10 d-none d-md-block">
                    <CvDownloadButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

    </>
  );
};

export default HeaderOne;
