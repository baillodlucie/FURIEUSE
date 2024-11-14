import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".buy-button", {
  top: 20,
  scrollTrigger: {
    trigger: ".buy-button",
    start: "top 50%",
    scrub: true,
  },
});

gsap
  .timeline()
  .to(".horizontal-scroll-container", {
    xPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll",
      start: "top top",
      // end: "+=300%",
      scrub: true,
      pin: true,
    },
  })
  .from(".section-green-box-1", {
    left: "-20",
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".section-green-box-1",
      start: "top bottom",
      scrub: true,
    },
  })
  .from(".section-green-box-2", {
    right: "-20",
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".section-green-box-2",
      start: "top bottom",
      scrub: true,
    },
  })
  .from(".section-green-box-3", {
    left: "0",
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".section-green-box-3",
      start: "top bottom",
      scrub: true,
    },
  });

setTimeout(function () {
  const buttons = document.querySelectorAll(".buy-button");
  buttons.forEach((button) => (button.style.display = "none"));
}, 2000);
