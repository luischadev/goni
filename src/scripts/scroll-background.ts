import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const backgroundTriggers = new WeakMap<HTMLElement, ScrollTrigger>();

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initScrollBackgroundSection(section: HTMLElement): void {
  backgroundTriggers.get(section)?.kill();
  section.classList.remove("scroll-background--active");

  if (prefersReducedMotion()) return;

  const start = section.dataset.scrollBackgroundStart ?? "top 70%";
  const end = section.dataset.scrollBackgroundEnd ?? "bottom 30%";

  const trigger = ScrollTrigger.create({
    trigger: section,
    start,
    end,
    invalidateOnRefresh: true,
    onEnter: () => section.classList.add("scroll-background--active"),
    onEnterBack: () => section.classList.add("scroll-background--active"),
    onLeave: () => section.classList.remove("scroll-background--active"),
    onLeaveBack: () => section.classList.remove("scroll-background--active"),
  });

  backgroundTriggers.set(section, trigger);
  trigger.refresh();
}

export function initScrollBackgroundSections(): void {
  document
    .querySelectorAll<HTMLElement>("[data-scroll-background]")
    .forEach(initScrollBackgroundSection);
}
