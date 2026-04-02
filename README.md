# Sierra Heavy Duty RV & Truck Center — Website

Production website for [sierraheavyduty.com](https://sierraheavyduty.com), built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Heroicons
- **Validation:** Zod
- **SEO:** JSON-LD structured data, dynamic sitemap, robots.txt

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer + JSON-LD)
│   ├── page.tsx            # Homepage
│   ├── rv-service/page.tsx # Full services page
│   ├── contact/page.tsx    # Contact page with form
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # sitemap.xml generation
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with services dropdown
│   │   └── Footer.tsx      # Footer with contact info & hours
│   ├── ui/
│   │   ├── Button.tsx      # Reusable CTA button
│   │   ├── SectionHeading.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ReviewCard.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── ServicesGrid.tsx
│       ├── TrustSection.tsx
│       ├── FAQ.tsx
│       ├── CTABanner.tsx
│       └── ContactForm.tsx # Client component with Zod validation
└── lib/
    ├── site.ts             # Business info (address, phones, hours)
    ├── schema.ts           # JSON-LD generators (LocalBusiness, FAQ)
    ├── validation.ts       # Zod schemas for form data
    └── reviews.ts          # Review data (ready for Google Places API)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services grid, trust signals, reviews, FAQ, CTA |
| `/rv-service` | Detailed service page with 8 service sections and anchor nav |
| `/contact` | Contact form (Zod-validated), map embed, hours, phone/email |

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

### Static Export

```bash
npm run build
# Output in .next/ — deploy to any static host
```

### Docker

```bash
docker build -t sierra-heavy-duty .
docker run -p 3000:3000 sierra-heavy-duty
```

## Customization

### Business Info
Edit `src/lib/site.ts` to update address, phone numbers, hours, and social links.

### Hero Image
Place a hero background image at `public/images/hero-bg.jpg`. The hero section uses it as a CSS background with an overlay.

### Reviews
Edit `src/lib/reviews.ts` to update placeholder reviews, or integrate with the Google Places API for live reviews.

### Contact Form
The form currently simulates submission. Connect it to your backend API, email service (Resend, SendGrid), or form provider (Formspree, Basin).

## Build

```bash
npm run build
```

All pages are statically generated for maximum performance.
