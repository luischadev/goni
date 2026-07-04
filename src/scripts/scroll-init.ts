import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whenScrollReady } from "./when-scroll-ready";
import { initScrollBackgroundSections } from "./scroll-background";
import { initScrollTextReveals } from "./scroll-text-reveal";
import { initScrollScene } from "./scroll-scene";

gsap.registerPlugin(ScrollTrigger);

let initGeneration = 0;

function finalizeScrollFeatures(): void {
  initScrollBackgroundSections();
  initScrollScene();
  ScrollTrigger.refresh();
}

export function scheduleScrollInit(): void {
  const generation = ++initGeneration;
  whenScrollReady(() => {
    if (generation !== initGeneration) return;
    finalizeScrollFeatures();
  });
}

// Inicialización inmediata: estado visual correcto antes del scroll del usuario
initScrollScene();
initScrollTextReveals();

scheduleScrollInit();
document.addEventListener("astro:page-load", () => {
  initScrollScene();
  initScrollTextReveals();
  scheduleScrollInit();
});
