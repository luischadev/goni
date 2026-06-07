import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScrollStacks } from "./scroll-stack";

gsap.registerPlugin(ScrollTrigger);

const PEEK_Y = 56;
const PEEK_SCALE = 0.05;
const EXIT_SCALE = 0.04;

const deckTriggers = new WeakMap<HTMLElement, ScrollTrigger[]>();

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getPinDistance(): number {
  return Math.max(window.innerHeight * 0.7, 460);
}

function getExitY(): number {
  return Math.max(window.innerHeight * 1.1, 720);
}

function killDeckTriggers(root: HTMLElement): void {
  const existing = deckTriggers.get(root);
  if (!existing) return;
  existing.forEach((trigger) => trigger.kill());
  deckTriggers.delete(root);
}

function setCard(item: HTMLElement, rel: number): void {
  let y: number;
  let scale: number;
  let z: number;

  if (rel <= 0) {
    y = rel * getExitY();
    scale = 1 + rel * EXIT_SCALE;
    z = 500 + Math.round(-rel * 10);
  } else {
    y = rel * PEEK_Y;
    scale = 1 - rel * PEEK_SCALE;
    z = 500 - Math.round(rel * 10);
  }

  gsap.set(item, {
    y,
    scale,
    opacity: 1,
    zIndex: z,
    transformOrigin: "center top",
  });
}

function initCardDeck(root: HTMLElement): void {
  killDeckTriggers(root);

  const pinEl = root.querySelector<HTMLElement>("[data-card-deck-pin]");
  const items = Array.from(
    root.querySelectorAll<HTMLElement>("[data-card-deck-item]")
  );

  if (!pinEl || items.length === 0) return;

  items.forEach((item, index) => {
    item.style.setProperty("--deck-index", String(index));
    gsap.set(item, { clearProps: "transform,opacity,zIndex" });
  });

  root.classList.remove("card-deck--static");

  if (prefersReducedMotion() || items.length === 1) {
    root.classList.add("card-deck--static");
    return;
  }

  items.forEach((item, index) => setCard(item, index));

  const trigger = ScrollTrigger.create({
    trigger: pinEl,
    pin: pinEl,
    start: "center center",
    end: () => `+=${(items.length - 1) * getPinDistance()}`,
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const progressIndex = self.progress * (items.length - 1);
      items.forEach((item, index) => setCard(item, index - progressIndex));
    },
  });

  deckTriggers.set(root, [trigger]);
  trigger.refresh();
}

export function initCardDecks(): void {
  document
    .querySelectorAll<HTMLElement>("[data-card-deck]")
    .forEach(initCardDeck);

  // El pin del deck altera el layout; recalcula los scroll-stacks de áreas.
  initScrollStacks();
}
