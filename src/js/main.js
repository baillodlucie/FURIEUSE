gsap.registerPlugin(ScrollTrigger);

gsap.to(".container", {
  xPercent: -67,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    start: "top top",
    end: "+=300%",
    scrub: 1,
    pin: true,
  },
});
