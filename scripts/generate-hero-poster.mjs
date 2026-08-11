import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const cacheDir = path.join(root, ".cache");
const cacheFile = path.join(cacheDir, "hero-video.sha");

function readHeroVideoPath() {
  // The hero video is shared across locales; the default one defines the poster.
  const contentPath = path.join(root, "src/lib/content/es/site.ts");
  const content = readFileSync(contentPath, "utf8");
  const match = content.match(/backgroundVideo:\s*\{[\s\S]*?url:\s*"([^"]+)"/);

  if (!match) {
    throw new Error("Could not find home hero backgroundVideo.url in content/es/site.ts");
  }

  return match[1];
}

function resolveVideoUrl(videoPath) {
  const base = process.env.PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, "");
  if (base) return `${base}${videoPath.startsWith("/") ? videoPath : `/${videoPath}`}`;

  const localCandidates = [
    path.join(root, "public", videoPath.replace(/^\//, "")),
    path.join(root, "public", "videos", path.basename(videoPath)),
  ];

  for (const candidate of localCandidates) {
    if (existsSync(candidate)) return candidate;
  }

  return videoPath;
}

function hashBuffer(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function hasFfmpeg() {
  const result = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" });
  return result.status === 0;
}

async function main() {
  const videoPath = readHeroVideoPath();
  const posterPath = videoPath.replace(/\.mp4$/i, "-poster.jpg");
  const posterOutput = path.join(root, "public", posterPath.replace(/^\//, ""));
  const videoSource = resolveVideoUrl(videoPath);

  mkdirSync(path.dirname(posterOutput), { recursive: true });
  mkdirSync(cacheDir, { recursive: true });

  let videoBuffer;

  if (/^https?:\/\//i.test(videoSource)) {
    const response = await fetch(videoSource);
    if (!response.ok) {
      throw new Error(`Failed to download hero video (${response.status}): ${videoSource}`);
    }
    videoBuffer = Buffer.from(await response.arrayBuffer());
  } else if (existsSync(videoSource)) {
    videoBuffer = readFileSync(videoSource);
  } else {
    console.warn(`[hero-poster] Video not found (${videoSource}). Skipping poster generation.`);
    return;
  }

  const nextHash = hashBuffer(videoBuffer);
  const previousHash = existsSync(cacheFile) ? readFileSync(cacheFile, "utf8").trim() : "";

  if (previousHash === nextHash && existsSync(posterOutput)) {
    console.log(`[hero-poster] Poster up to date: ${posterPath}`);
    return;
  }

  if (!hasFfmpeg()) {
    console.warn("[hero-poster] ffmpeg not found. Install ffmpeg to regenerate the hero poster.");
    return;
  }

  const tempVideo = path.join(cacheDir, "hero-source.mp4");
  writeFileSync(tempVideo, videoBuffer);

  const result = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-ss",
      "0.1",
      "-i",
      tempVideo,
      "-frames:v",
      "1",
      "-q:v",
      "2",
      "-update",
      "1",
      posterOutput,
    ],
    { stdio: "inherit" },
  );

  unlinkSync(tempVideo);

  if (result.status !== 0) {
    throw new Error("[hero-poster] ffmpeg failed to generate poster");
  }

  writeFileSync(cacheFile, nextHash);
  console.log(`[hero-poster] Generated ${posterPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
