"use client";
import { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import { throwableAnimation } from "@/utils/throwableAnimation";
import ScrollToTop from "@/components/common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";

import animationTitle from "@/utils/animationTitle";
import animationTitleChar from "@/utils/animationTitleChar";
import servicesPanel from "@/utils/servicesPanel";
import PortfolioPanel from "@/utils/PortfolioPanel";
import blogAnimation from "@/utils/blogAnimation";
import linesAnimation from "@/utils/linesAnimation";
import { buttonAnimation } from "@/utils/buttonAnimation";
import { scrollTextAnimation } from "@/utils/scrollTextAnimation";
import textInvert from "@/utils/textInvert";
import ContextProvider from "@/context/app-context";

import {
  Gsap as gsap,
  ScrollSmoother,
  ScrollTrigger,
} from "@/plugins";
import AnimateMouse from "@/components/common/animated-mouse";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
  const pathname = usePathname();

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1.35,
      effects: true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });

    return () => smoother.kill();
  }, []);

  useEffect(() => {
    const area = document.querySelector<HTMLElement>(".tp-port-3-area");
    const pinnedContent = document.querySelector<HTMLElement>(
      ".tp-port-3-content-left",
    );

    // This section only exists on portfolio-details-3. Initializing it on
    // every route caused the missing-element production warnings.
    if (!area || !pinnedContent) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1199px)", () => {
      const trigger = ScrollTrigger.create({
          trigger: area,
          start: "top -60%",
          end: "bottom 120%",
          pin: pinnedContent,
          pinSpacing: false,
      });

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, [pathname]);

  useEffect(() => {
    throwableAnimation();
    servicesPanel();
    PortfolioPanel();
    animationTitle();
    animationTitleChar();
    blogAnimation();
    linesAnimation();
    buttonAnimation();
    scrollTextAnimation();
    textInvert();
  }, [pathname]);

  return (
    <ContextProvider>
      {children}
      <ToastContainer position="top-right" />
      <AnimateMouse/>
      <ScrollToTop />
    </ContextProvider>
  );
};

export default Wrapper;
