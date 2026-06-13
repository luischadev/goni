import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const horizontalTriggers = new WeakMap<HTMLElement, ScrollTrigger[]>();

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobileViewport(): boolean {
  return window.matchMedia("(max-width: 767px)").matches;
}

function killHorizontalTriggers(root: HTMLElement): void {
  const existing = horizontalTriggers.get(root);
  if (!existing) return;
  existing.forEach((trigger) => trigger.kill());
  horizontalTriggers.delete(root);
}

function getScrollDistance(viewport: HTMLElement, track: HTMLElement): number {
  return Math.max(track.scrollWidth - viewport.clientWidth, 0);
}

function initHorizontalScroll(root: HTMLElement): void {
  killHorizontalTriggers(root);

  const pinEl = root.querySelector<HTMLElement>("[data-horizontal-scroll-pin]");
  const viewport = root.querySelector<HTMLElement>(
    "[data-horizontal-scroll-viewport]"
  );
  const track = root.querySelector<HTMLElement>("[data-horizontal-scroll-track]");

  if (!pinEl || !viewport || !track) return;

  gsap.set(track, { clearProps: "transform" });
  root.classList.remove("horizontal-scroll--static");
  root.classList.remove("horizontal-scroll--carousel");

  if (isMobileViewport()) {
    root.classList.add("horizontal-scroll--carousel");
    return;
  }

  if (prefersReducedMotion()) {
    root.classList.add("horizontal-scroll--static");
    return;
  }

  const trigger = ScrollTrigger.create({
    trigger: pinEl,
    pin: pinEl,
    start: "top top",
    end: () => `+=${getScrollDistance(viewport, track)}`,
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const distance = getScrollDistance(viewport, track);
      gsap.set(track, { x: -distance * self.progress });
    },
  });

  horizontalTriggers.set(root, [trigger]);
  trigger.refresh();
}

export function initHorizontalScrollSections(): void {
  document
    .querySelectorAll<HTMLElement>("[data-horizontal-scroll]")
    .forEach(initHorizontalScroll);
}
