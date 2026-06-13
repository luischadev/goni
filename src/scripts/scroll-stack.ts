import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADER_OFFSET = 96;
const SCALE_DELTA = 0.11;
const SHADOW_ALPHA = 0.08;
const STACK_BACKGROUND_BLUE = "var(--palette-blue-light)";
const STACK_BACKGROUND_CREAM = "var(--color-surface-soft)";

const stackTriggers = new WeakMap<HTMLElement, ScrollTrigger[]>();

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobileViewport(): boolean {
  return window.matchMedia("(max-width: 767px)").matches;
}

function killStackTriggers(root: HTMLElement): void {
  const existing = stackTriggers.get(root);
  if (!existing) return;
  existing.forEach((trigger) => trigger.kill());
  stackTriggers.delete(root);
}

function initScrollStack(root: HTMLElement): void {
  killStackTriggers(root);
  root.style.removeProperty("--scroll-stack-background");

  const items = Array.from(
    root.querySelectorAll<HTMLElement>("[data-scroll-stack-item]")
  );

  if (items.length === 0) return;

  items.forEach((item, index) => {
    const panel = item.querySelector<HTMLElement>("[data-scroll-stack-panel]");

    item.style.setProperty("--stack-index", String(index));
    item.style.zIndex = String(index + 1);
    gsap.set(item, { opacity: 1, clearProps: "transform" });
    if (panel) {
      gsap.set(panel, { clearProps: "scale,transform,boxShadow" });
    }
  });

  root.classList.remove("scroll-stack--static");

  if (prefersReducedMotion()) {
    root.classList.add("scroll-stack--static");
    return;
  }

  const mobile = isMobileViewport();
  const created: ScrollTrigger[] = [];

  const setBackground = (color: string) => {
    root.style.setProperty("--scroll-stack-background", color);
  };

  setBackground(STACK_BACKGROUND_CREAM);

  const initialBackgroundTrigger = ScrollTrigger.create({
    trigger: items[0],
    start: mobile ? `top bottom-=${HEADER_OFFSET}` : "top 80%",
    invalidateOnRefresh: true,
    onEnter: () => setBackground(STACK_BACKGROUND_BLUE),
    onEnterBack: () => setBackground(STACK_BACKGROUND_BLUE),
    onLeaveBack: () => setBackground(STACK_BACKGROUND_CREAM),
  });

  const finalBackgroundTrigger = ScrollTrigger.create({
    trigger: items[items.length - 1],
    start: mobile ? `top bottom-=${HEADER_OFFSET}` : "top 80%",
    invalidateOnRefresh: true,
    onEnter: () => setBackground(STACK_BACKGROUND_CREAM),
    onEnterBack: () => setBackground(STACK_BACKGROUND_CREAM),
    onLeaveBack: () => setBackground(STACK_BACKGROUND_BLUE),
  });

  created.push(initialBackgroundTrigger);
  created.push(finalBackgroundTrigger);

  items.forEach((item, index) => {
    if (index === items.length - 1) return;

    const nextItem = items[index + 1];
    const panel = item.querySelector<HTMLElement>("[data-scroll-stack-panel]");

    const trigger = ScrollTrigger.create({
      trigger: nextItem,
      start: mobile ? "top 55%" : "top 80%",
      end: mobile
        ? `top top+=${HEADER_OFFSET + index * 8}`
        : `top top+=${HEADER_OFFSET}`,
      scrub: mobile ? 0.35 : 0.6,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (!panel) return;

        const progress = self.progress;
        gsap.set(panel, {
          scale: 1 - progress * SCALE_DELTA,
          transformOrigin: "center top",
          boxShadow: `0 24px 80px rgba(15, 24, 34, ${
            SHADOW_ALPHA * (1 - progress)
          })`,
        });
      },
    });

    created.push(trigger);
  });

  stackTriggers.set(root, created);
  created.forEach((trigger) => trigger.refresh());
}

export function initScrollStacks(): void {
  document
    .querySelectorAll<HTMLElement>("[data-scroll-stack]")
    .forEach(initScrollStack);
}
