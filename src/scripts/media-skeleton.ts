/**
 * Minimal media skeleton: fade images in once decoded, with a soft shimmer
 * on `.media-skeleton` shells while waiting.
 */
export function initMediaSkeletons(root: ParentNode = document): void {
  const images = root.querySelectorAll<HTMLImageElement>("img[data-skeleton]");

  images.forEach((img) => {
    if (img.dataset.skeletonBound === "true") return;
    img.dataset.skeletonBound = "true";

    const shell = img.closest(".media-skeleton") ?? img;

    const markLoaded = () => {
      shell.classList.add("is-loaded");
      img.classList.add("is-loaded");
    };

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
      return;
    }

    img.addEventListener("load", markLoaded, { once: true });
    img.addEventListener("error", markLoaded, { once: true });
  });
}
