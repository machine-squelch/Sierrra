/**
 * Optimize shop photos for the site.
 *
 * 1. Drop originals in public/images/gallery/_raw/ (jpg, jpeg, png, webp).
 * 2. Run: npm run images:optimize
 *
 * Outputs WebP (max width 1600px, q82) as sierra-heavy-duty-<slug>.webp
 * and updates src/lib/gallery-data.json
 *
 * If _raw/ is empty, bootstraps hero + gallery crops from public/images/og-image.jpg
 * (replace with real photos when available).
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const RAW_DIR = path.join(ROOT, "public/images/gallery/_raw");
const OUT_DIR = path.join(ROOT, "public/images/gallery");
const OG = path.join(ROOT, "public/images/og-image.jpg");
const GALLERY_JSON = path.join(ROOT, "src/lib/gallery-data.json");

function slugify(name) {
  const base = path.basename(name, path.extname(name));
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72) || "photo";
}

function humanize(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

async function optimizeFile(filePath, slug) {
  const outName = `sierra-heavy-duty-${slug}.webp`;
  const outPath = path.join(OUT_DIR, outName);
  await sharp(filePath)
    .rotate()
    .resize(1600, 1000, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(outPath);
  return {
    src: `/images/gallery/${outName}`,
    alt: `Sierra Heavy Duty RV and Truck Center — ${humanize(slug)}`,
    caption: humanize(slug),
  };
}

async function bootstrapFromOg() {
  if (!fs.existsSync(OG)) {
    console.warn("optimize-gallery: og-image.jpg missing; skip bootstrap.");
    return [];
  }

  const meta = await sharp(OG).metadata();
  const w = meta.width || 1200;
  const h = meta.height || 630;
  const half = Math.floor(w / 2);

  await sharp(OG)
    .resize(1920, 1080, { fit: "cover" })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(ROOT, "public/images/hero-bg.jpg"));

  const slides = [];

  await sharp(OG)
    .resize(1600, 900, { fit: "cover" })
    .webp({ quality: 82 })
    .toFile(path.join(OUT_DIR, "sierra-heavy-duty-sonora-location-wide.webp"));
  slides.push({
    src: "/images/gallery/sierra-heavy-duty-sonora-location-wide.webp",
    alt: "Sierra Heavy Duty RV and Truck Center — Sonora, California shop",
    caption: "Family-owned RV & truck repair in Sonora",
  });

  if (half > 50) {
    await sharp(OG)
      .extract({ left: 0, top: 0, width: half, height: h })
      .resize(1600, 900, { fit: "cover" })
      .webp({ quality: 82 })
      .toFile(path.join(OUT_DIR, "sierra-heavy-duty-shop-work-area-west.webp"));
    slides.push({
      src: "/images/gallery/sierra-heavy-duty-shop-work-area-west.webp",
      alt: "Sierra Heavy Duty — service and work area",
      caption: "Service bay & work area",
    });

    await sharp(OG)
      .extract({ left: half, top: 0, width: w - half, height: h })
      .resize(1600, 900, { fit: "cover" })
      .webp({ quality: 82 })
      .toFile(path.join(OUT_DIR, "sierra-heavy-duty-shop-work-area-east.webp"));
    slides.push({
      src: "/images/gallery/sierra-heavy-duty-shop-work-area-east.webp",
      alt: "Sierra Heavy Duty — RV and truck service",
      caption: "RV & heavy truck service",
    });
  }

  console.log("optimize-gallery: bootstrapped hero-bg.jpg +", slides.length, "gallery slides from og-image.jpg");
  return slides;
}

async function main() {
  fs.mkdirSync(RAW_DIR, { recursive: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const rawFiles = fs.existsSync(RAW_DIR)
    ? fs.readdirSync(RAW_DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    : [];

  let slides;

  if (rawFiles.length > 0) {
    slides = [];
    rawFiles.sort();
    const heroSource = path.join(RAW_DIR, rawFiles[0]);
    await sharp(heroSource)
      .rotate()
      .resize(1920, 1080, { fit: "cover" })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(path.join(ROOT, "public/images/hero-bg.jpg"));
    console.log("optimize-gallery: hero-bg.jpg from", rawFiles[0]);
    for (const file of rawFiles) {
      const slug = slugify(file);
      const slide = await optimizeFile(path.join(RAW_DIR, file), slug);
      slides.push(slide);
      console.log("optimize-gallery:", file, "→", slide.src);
    }
  } else {
    slides = await bootstrapFromOg();
  }

  fs.writeFileSync(GALLERY_JSON, JSON.stringify({ slides }, null, 2) + "\n", "utf8");
  console.log("optimize-gallery: wrote", GALLERY_JSON, `(${slides.length} slides)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
