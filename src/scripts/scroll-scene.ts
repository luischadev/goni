import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let scrollSceneMedia: gsap.MatchMedia | null = null;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface SceneTimelineConfig {
  initialScale: number;
  finalScale: number;
  scaleStart: number;
  scaleDuration: number;
  textFadeStart: number;
  textFadeDuration: number;
  scrollEnd: string;
}

function buildScrollTimeline(
  section: HTMLElement,
  scaleTarget: HTMLElement,
  videoWrap: HTMLElement,
  textEl: HTMLElement,
  headlineWords: HTMLElement[],
  sublineWords: HTMLElement[],
  surroundCards: HTMLElement[],
  config: SceneTimelineConfig
): void {
  gsap.set([...headlineWords, ...sublineWords], { opacity: 0 });
  gsap.set(videoWrap, { opacity: 0 });
  gsap.set(textEl, { opacity: 1 });
  gsap.set(scaleTarget, { scale: config.initialScale, transformOrigin: "center center" });
  if (surroundCards.length) gsap.set(surroundCards, { opacity: 0 });

  const tl = gsap.timeline();

  tl.to(videoWrap, { opacity: 1, duration: 2.4, ease: "power1.inOut" }, 0);
  tl.to(
    headlineWords,
    { opacity: 1, stagger: { amount: 1.2 }, duration: 0.5, ease: "none" },
    0.35
  );
  tl.to(
    sublineWords,
    { opacity: 1, stagger: { amount: 1.4 }, duration: 0.5, ease: "none" },
    1.4
  );
  tl.to(
    scaleTarget,
    { scale: config.finalScale, duration: config.scaleDuration, ease: "power2.inOut" },
    config.scaleStart
  );

  if (surroundCards.length) {
    tl.to(
      surroundCards,
      { opacity: 1, duration: config.scaleDuration * 0.7, ease: "power1.inOut" },
      config.scaleStart + 0.55
    );
  }

  tl.to(
    textEl,
    { opacity: 0, duration: config.textFadeDuration, ease: "power1.in" },
    config.textFadeStart
  );

  ScrollTrigger.create({
    id: "scroll-scene",
    trigger: section,
    start: "top bottom",
    end: config.scrollEnd,
    scrub: 1,
    invalidateOnRefresh: true,
    animation: tl,
  });
}

export function initScrollScene(): void {
  const section = document.querySelector<HTMLElement>("[data-scroll-scene]");
  if (!section) return;

  const headlineWords = Array.from(
    section.querySelectorAll<HTMLElement>("[data-scene-headline-word]")
  );
  const sublineWords = Array.from(
    section.querySelectorAll<HTMLElement>("[data-scene-subline-word]")
  );
  const videoWrap = section.querySelector<HTMLElement>("[data-scene-video-wrap]");
  const textEl = section.querySelector<HTMLElement>("[data-scene-text]");
  const gridEl = section.querySelector<HTMLElement>("[data-scene-grid]");
  const stage = section.querySelector<HTMLElement>("[data-scene-stage]");

  if (!headlineWords.length || !sublineWords.length || !videoWrap || !textEl || !gridEl || !stage) {
    return;
  }

  scrollSceneMedia?.revert();
  scrollSceneMedia = gsap.matchMedia();

  ScrollTrigger.getAll()
    .filter((t) => t.vars["id"] === "scroll-scene")
    .forEach((t) => t.kill());

  if (prefersReducedMotion()) {
    gsap.set([...headlineWords, ...sublineWords], { opacity: 1 });
    gsap.set(section.querySelectorAll<HTMLElement>("[data-scene-surround]"), { opacity: 1 });
    section.setAttribute("data-scene-ready", "true");
    return;
  }

  const surroundCards = Array.from(
    section.querySelectorAll<HTMLElement>("[data-scene-surround]")
  );

  scrollSceneMedia.add("(max-width: 767px)", () => {
    const stageW = stage.offsetWidth;
    const stageH = stage.offsetHeight;
    const gridW2 = stageW - 16;

    const colW2 = (gridW2 - 24) / 4;
    const videoW2 = colW2 * 2 + 8;
    const videoH2 = videoW2 * (16 / 9);

    const START_COVERAGE = 0.92;
    const END_COVERAGE = 0.78;

    const initialScale = Math.min(
      (stageW * START_COVERAGE) / videoW2,
      stageH / videoH2
    );
    const finalScale = (stageW * END_COVERAGE) / videoW2;

    buildScrollTimeline(
      section, gridEl, videoWrap, textEl, headlineWords, sublineWords, surroundCards,
      {
        initialScale,
        finalScale,
        scaleStart: 2.7,
        scaleDuration: 1.8,
        textFadeStart: 3.9,
        textFadeDuration: 0.55,
        scrollEnd: "bottom 50%",
      }
    );
  });

  scrollSceneMedia.add("(min-width: 768px)", () => {
    const stageW = stage.offsetWidth;
    const stageH = stage.offsetHeight;
    const gridW = stageW - 16;
    const gridH = stageH - 16;

    const colW = (gridW - 24) / 4;
    const videoW = colW * 2 + 8;

    const rowUnit = (gridH - 16) / 4.5;
    const videoH = rowUnit * 2.5;

    const VIDEO_VIEWPORT_COVERAGE = 0.88;
    const fitScale = Math.min(stageW / videoW, stageH / videoH);
    const initialScale = fitScale * VIDEO_VIEWPORT_COVERAGE;

    buildScrollTimeline(
      section, gridEl, videoWrap, textEl, headlineWords, sublineWords, surroundCards,
      {
        initialScale,
        finalScale: 1.0,
        scaleStart: 3.1,
        scaleDuration: 2.2,
        textFadeStart: 4.8,
        textFadeDuration: 0.65,
        scrollEnd: "bottom 62%",
      }
    );
  });

  section.setAttribute("data-scene-ready", "true");
}
