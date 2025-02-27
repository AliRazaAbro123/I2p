gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

// Logo animation (fade in from top with slight delay)
tl.from(".logo", {
  duration: 1,
  delay: 0.5, // Slightly earlier start
  opacity: 0,
  y: -100,
  ease: "power2.out",
});

// Content Image (faster slide-in with bounce effect)
tl.from(".content-image", {
  duration: 0.8,
  opacity: 0,
  y: 80,
  ease: "back.out(1.7)",
});

// Grouped Welcome Texts with Staggering
tl.from(
  ["#wellcome", "#wellcome-short-desc", "#wellcome-desc", "#wellcome-short"],
  {
    duration: 0.6,
    opacity: 0,
    y: 60,
    ease: "power2.out",
    stagger: 0.2, // Stagger for smooth sequential appearance
  }
);

// Call-to-Action Button (Scaling Pop Effect)
tl.from("#wellcome-btn", {
  duration: 0.6,
  opacity: 0,
  y: 50,
  scale: 0.9, // Subtle scale effect
  ease: "elastic.out(1, 0.5)", // Elastic for a bouncy effect
});

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".services-cards",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 100,
  scale: 0.7,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2, // Cards appear one after another
});
gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about-expertise",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: 1000,
  scale: 0.7,
  duration: 1,
  ease: "back.out(1.7)",
});
gsap.from(".expertise", {
  scrollTrigger: {
    trigger: ".about-expertise",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: -1000,
  scale: 0.7,
  duration: 1,
  ease: "back.out(1.7)",
});

gsap.from(".clients-images", {
  scrollTrigger: {
    trigger: ".third-section",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
});
gsap.from(".services-card", {
  scrollTrigger: {
    trigger: ".fourth-section",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 1000,
  scale: 0.7,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2, // Cards appear one after another
});
gsap.from(".team-container", {
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  duration: 2,
  ease: "back.out(1.7)",
});
