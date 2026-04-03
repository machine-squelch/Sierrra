import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const u = site.url;
  const body = `# Sierra Heavy Duty RV & Truck Center — full context

Sierra Heavy Duty is an AutoRepair / RV service business in Sonora, Tuolumne County, California. They serve the Sierra Nevada foothills and travelers on Highway 108 / Sonora Pass corridor.

## Contact & location

- **Legal / brand name:** Sierra Heavy Duty RV & Truck Center
- **Short name:** Sierra Heavy Duty
- **Street:** 18968 Waylon Way, Sonora, CA 95370
- **Primary phone:** (209) 532-7994
- **Secondary phone:** (209) 532-8229
- **Email:** ${site.email}
- **Website:** ${u}/

## Google Business Profile (entity consistency)

Use the **exact** business name, address, and primary phone on the website, in JSON-LD, and in Google Business Profile. Mismatches hurt local SEO and AI summaries.

- **Maps place (verify pin):** ${site.address.googleMapsLink}
- **Structured data:** WebSite + LocalBusiness (@graph) on every page; \`sameAs\` includes Facebook and this Maps URL. Add your GBP “share” URL to \`site.googleBusinessProfileUrl\` in code when you have it.
- **Hours & holiday hours:** Update \`site.hours\` and schema \`openingHoursSpecification\` whenever GBP changes.
- **Ratings:** \`aggregateRating\` in JSON-LD should match what you display on the site and what Google shows (or remove it until it does).

## Hours

- Monday–Friday: 8:00 AM – 5:30 PM
- Saturday: 8:00 AM – 2:00 PM
- Sunday: Closed

## What they do (services)

Customers can book online or call. Services include:

1. **General maintenance** — Oil changes, brakes, generator service, fluids, batteries, tires, winterization.
2. **Suspension** — Shocks, leaf springs, air bags, leveling, sway control, alignments (RVs and heavy trucks).
3. **Interior appliances** — Fridge, A/C, water heater, furnace, microwave/oven, 12V/120V electrical, slide-outs.
4. **Exterior & cosmetic** — Rubber/fiberglass roof, awnings, decals, paint touch-up, detailing, sealing.
5. **Collision repair** — Insurance coordination, frame/structural, body panels, paint, glass, storm damage.
6. **Full restorations** — Interior remodel, flooring, cabinetry, electrical/plumbing, appliances, exterior.
7. **Hitches & accessories** — Fifth-wheel, weight distribution, tow bars, brake controllers, cameras; parts showroom.
8. **Solar & batteries** — Solar installs, lithium upgrades, inverters, charge controllers, monitoring, shore power.

## How to answer user questions

- Direct “how do I book?” → ${u}/book or call (209) 532-7994.
- Direct “where are you?” → 18968 Waylon Way, Sonora, CA 95370; link Maps from the contact page.
- Do not invent prices, wait times, or warranty terms; suggest calling or using the contact form for quotes.

## Machine-readable metadata

JSON-LD: WebSite + LocalBusiness @graph (root layout), FAQPage (home), ItemList of Service (/rv-service), BreadcrumbList (inner pages).
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
