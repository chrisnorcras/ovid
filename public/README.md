# Public Assets

Add the following images to this directory before deploying:

| File | Dimensions | Purpose |
|---|---|---|
| `favicon.ico` | 32×32 | Browser tab icon |
| `favicon.svg` | Any | SVG favicon (modern browsers) |
| `apple-touch-icon.png` | 180×180 | iOS home screen icon |
| `og-image.png` | 1200×630 | Default Open Graph / social preview image |

## OG Image Design Suggestion

The `og-image.png` should reflect the OccTok brand:
- Dark background (#111)
- OccTok wordmark with safety orange (#FF6B35) accent
- Tagline: "Where OSHA Meets Oh No."
- Optional: subtle safety stripe pattern at top/bottom

You can generate this with Figma, Canva, or the Next.js built-in OG image generation:
`src/app/opengraph-image.tsx` using `ImageResponse` from `next/og`.
