import "@testing-library/jest-dom";

// Polyfill window.matchMedia and scrollTo for jsdom test environment (used by GSAP ScrollTrigger)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

window.scrollTo = () => {};
