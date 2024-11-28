import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// faire que le bouton j'achete monte au fur et à mesure du scroll dans le header

gsap.to(".buy-button", {
  top: 20,
  scrollTrigger: {
    trigger: ".buy-button",
    start: "top 50%",
    scrub: true,
  },
});

// création d'une timeline comportant mes animations pour le bouton acheter, le carousel scroll horizontal et les images apparaissant dans la section verte, afin qu'elles s'animent au fur et à mesure de l'avancée de l'utilisateur dans le site

gsap
  .timeline()
  .to(".horizontal-scroll-container", {
    xPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll",
      start: "top top",
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

// rendre le bouton "acheter" invisible à un certain moment dans le site
setTimeout(function () {
  const buttons = document.querySelectorAll(".buy-button");
  buttons.forEach((button) => (button.style.display = "none"));
}, 2000);
