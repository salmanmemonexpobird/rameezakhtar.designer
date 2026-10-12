
import { gsap } from "gsap"; 

const blogAnimation = () => {
    const sidebarStickyTrigger = '.tp-blog-sidebar-sticky-area';
    const socialStickyTrigger = '.tp-blog-social-sticky-area';
    const addStickyAnimation = (target, start, end) => {
      gsap.to(target, {
        scrollTrigger: {
          trigger: target === '.tp-blog-sidebar-sticky' ? sidebarStickyTrigger : socialStickyTrigger,
          scrub: 1,
          start,
          end,
          pin: target,
          markers: false,
        },
      });
    };

    const mm = gsap.matchMedia();
    mm.add('(min-width: 991px)', () => {
      if (
        document.querySelector('.tp-blog-sidebar-sticky') &&
        document.querySelector(sidebarStickyTrigger)
      ) {
        addStickyAnimation('.tp-blog-sidebar-sticky', 'top 8%', 'bottom 115%');
      }

      if (
        document.querySelector('.tp-blog-social-sticky') &&
        document.querySelector(socialStickyTrigger)
      ) {
        addStickyAnimation('.tp-blog-social-sticky', 'top 10%', 'bottom bottom');
      }
    });

};

export default blogAnimation;
