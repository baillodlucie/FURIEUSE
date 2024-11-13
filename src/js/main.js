import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".box-1", {
  left: "0",
  opacity: 0,
  scrollTrigger: {
    trigger: ".box-1",
    start: "top bottom",
    scrub: true,
  },
});

gsap.from(".box-2", {
  right: "0",
  opacity: 0,
  scrollTrigger: {
    trigger: ".box-2",
    start: "top bottom",
    scrub: true,
  },
});

gsap.from(".box-3", {
  left: "0",
  opacity: 0,
  scrollTrigger: {
    trigger: ".box-3",
    start: "top bottom",
    scrub: true,
  },
});
