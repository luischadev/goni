import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whenScrollReady } from "./when-scroll-ready";
import { initScrollBackgroundSections } from "./scroll-background";
import { initScrollTextReveals } from "./scroll-text-reveal";
import { initScrollScene } from "./scroll-scene";

gsap.registerPlugin(ScrollTrigger);

let touchScrollNormalized = false;
let initGeneration = 0;

function normalizeTouchScroll(): void {
  if (touchScrollNormalized || !ScrollTrigger.isTouch) return;
  ScrollTrigger.normalizeScroll(true);
  touchScrollNormalized = true;
}

function finalizeScrollFeatures(): void {
  normalizeTouchScroll();
  initScrollTextReveals();
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

// Estado inicial de la scroll-scene de inmediato (evita flash del grid completo)
initScrollScene();

scheduleScrollInit();
document.addEventListener("astro:page-load", () => {
  initScrollScene();
  scheduleScrollInit();
});
