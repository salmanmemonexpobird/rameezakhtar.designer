

import { Gsap as gsap } from '@/plugins';

export function scrollTextAnimation () {
  if(typeof window !== "undefined") {
   	/* services animation start */
	if (document.querySelector('.tp-services-bg-text') && document.querySelector('.tp-services-bg-text-animation')) {
		gsap.set('.tp-services-bg-text', {
			x: window.innerWidth / 4
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-services-bg-text-animation',
				start: '0% 0%',
				end: 'bottom -10%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.tp-services-bg-text', {
				x: () => -window.innerWidth / 10
			});
	}

	/* portfolio animation start */
	if (document.querySelector('.tp-portfolio-bg-text') && document.querySelector('.tp-portfolio-bg-text-animation')) {
		gsap.set('.tp-portfolio-bg-text', {
			x: '25%'
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-portfolio-bg-text-animation',
				start: '-500 0%',
				end: 'bottom -10%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.tp-portfolio-bg-text', {
				x: '-80%'
			});
	}

	if (document.querySelector('.portfolio-list-scroll-text') && document.querySelector('.portfolio-list-scroll-text-animation')) {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.portfolio-list-scroll-text-animation',
				start: '-500 0%',
				end: 'bottom -10%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.portfolio-list-scroll-text', {
				x: '-80%'
			});
	}
  }
}
