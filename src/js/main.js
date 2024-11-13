import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-green-box-1", {
  left: "-10",
  opacity: 0,
  scrollTrigger: {
    trigger: ".section-green-box-1",
    start: "top bottom",
    scrub: true,
  },
});

gsap.from(".section-green-box-2", {
  right: "-20",
  opacity: 0,
  scrollTrigger: {
    trigger: ".section-green-box-2",
    start: "top bottom",
    scrub: true,
  },
});

gsap.from(".section-green-box-3", {
  left: "0",
  opacity: 0,
  scrollTrigger: {
    trigger: ".section-green-box-1",
    start: "top bottom",
    scrub: true,
  },
});

gsap.to(".buy-button", {
  top: 20,
  scrollTrigger: {
    trigger: ".buy-button",
    start: "top 50%",
    scrub: true,
  },
});

gsap.to(".horizontal-scroll-container", {
  xPercent: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true,
  },
});
