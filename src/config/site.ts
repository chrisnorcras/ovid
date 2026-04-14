export const siteConfig = {
  name: 'OccTok',
  description:
    'Where OSHA meets Oh No. Short-form workplace safety fails, compliance updates, and everything in between. Informational only — not legal advice.',
  tagline: 'Where OSHA Meets Oh No.',
  subTagline: 'Short-form safety fails. Real compliance consequences.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://occtok.com',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/occtok',
  },
  keywords: [
    'OSHA fails',
    'workplace safety videos',
    'compliance updates',
    'safety training moments',
    'occupational health humor',
    'OSHA violations',
    'workplace safety TikTok',
    'forklift fails',
    'PPE fails',
    'safety compliance',
    'occupational safety culture',
    'HazCom updates',
  ],
  disclaimer:
    'OccTok is an informational content hub. Nothing on this site constitutes legal advice or official safety guidance. Content is curated for educational and entertainment purposes. For compliance questions, consult a qualified safety professional or attorney.',
  stats: {
    videoCount: '120+',
    updateCount: '40+',
    categoryCount: '8',
  },
}

export type SiteConfig = typeof siteConfig
