import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const u = site.url;
  const body = `# Sierra Heavy Duty RV & Truck Center

> Family-owned RV and heavy-duty truck repair in Sonora, California (Sierra Nevada foothills). Established service since the 1950s.

## Site

- [Home](${u}/)
- [RV & truck services (full list)](${u}/rv-service)
- [Schedule service](${u}/book)
- [Contact](${u}/contact)

## Facts for assistants

- **Phone:** (209) 532-7994 (also (209) 532-8229)
- **Email:** ${site.email}
- **Address:** 18968 Waylon Way, Sonora, CA 95370
- **Hours:** Mon–Fri 8:00 AM–5:30 PM, Sat 8:00 AM–2:00 PM, Sun closed

## Optional

- [Facebook](${site.social.facebook})
- Extended site summary: ${u}/llms-full.txt
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
