import type { MediaAsset } from "./types";

/**
 * Resolves a media path or URL to an absolute URL suitable for <img>/<video>.
 *
 * - Absolute URLs (http/https) pass through unchanged.
 * - Relative paths are prefixed with PUBLIC_MEDIA_BASE_URL when set
 *   (CDN, S3, Cloudinary, Strapi uploads domain, etc.).
 * - Without a base URL, relative paths are returned as-is (local /public).
 */
export function resolveMediaUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return "";

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const base = import.meta.env.PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, "");
  if (!base) return pathOrUrl;

  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export function resolveMediaAsset(asset: MediaAsset): MediaAsset {
  return {
    ...asset,
    url: resolveMediaUrl(asset.url),
  };
}

/** True when a video asset should be rendered (external CDN or absolute URL). */
export function isExternalMediaUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
