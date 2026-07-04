/**
 * Ejecuta `run` cuando fuentes y recursos críticos están listos,
 * y el layout ya se estabilizó (doble rAF).
 */
export function whenScrollReady(run: () => void): void {
  const exec = (): void => {
    requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });
  };

  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  const loadReady = new Promise<void>((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    window.addEventListener("load", () => resolve(), { once: true });
  });

  void Promise.all([fontsReady, loadReady]).then(exec);
}
