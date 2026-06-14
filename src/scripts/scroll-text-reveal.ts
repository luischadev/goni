import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealTriggers = new WeakMap<HTMLElement, ScrollTrigger>();

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function splitTextIntoWords(element: HTMLElement): HTMLElement[] {
  const existingWords = Array.from(
    element.querySelectorAll<HTMLElement>("[data-scroll-text-word]")
  );

  if (existingWords.length > 0) return existingWords;

  const text = element.textContent?.replace(/\s+/g, " ").trim() ?? "";
  element.setAttribute("aria-label", text);
  element.textContent = "";

  return text.split(" ").map((word, index, words) => {
    const span = document.createElement("span");
    span.dataset.scrollTextWord = "";
    span.className = "scroll-text-reveal__word";
    span.setAttribute("aria-hidden", "true");
    span.textContent = index === words.length - 1 ? word : `${word} `;
    element.append(span);
    return span;
  });
}

function initScrollTextReveal(element: HTMLElement): void {
  revealTriggers.get(element)?.kill();

  const words = splitTextIntoWords(element);

  if (words.length === 0) return;

  const updateWords = (progress: number) => {
    words.forEach((word, index) => {
      const wordProgress = Math.min(
        Math.max(progress * words.length - index, 0),
        1
      );

      word.style.setProperty(
        "--scroll-text-word-progress",
        `${wordProgress * 100}%`
      );
    });
  };

  if (prefersReducedMotion()) {
    updateWords(1);
    return;
  }

  updateWords(0);

  const trigger = ScrollTrigger.create({
    trigger: element,
    start: "top 78%",
    end: "bottom 42%",
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => updateWords(self.progress),
    onEnter: () => updateWords(0.05),
    onLeave: () => updateWords(1),
    onLeaveBack: () => updateWords(0),
  });

  revealTriggers.set(element, trigger);
  trigger.refresh();
}

export function initScrollTextReveals(): void {
  document
    .querySelectorAll<HTMLElement>("[data-scroll-text-reveal]")
    .forEach(initScrollTextReveal);
}
