import type { VideoItem } from '../types'

// Thumbnails use Unsplash for realistic workplace/safety imagery.
// In production, replace with actual video thumbnails.

export const mockVideos: VideoItem[] = [
  {
    id: 'vid-001',
    slug: 'forklift-operator-vs-laws-of-physics',
    title: 'Forklift Operator vs. The Laws of Physics (Physics Won)',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=8pNaXd2WVW4',
    embedUrl: 'https://www.youtube-nocookie.com/embed/8pNaXd2WVW4',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-03-28T14:00:00Z',
    category: 'forklift-fails',
    tags: ['forklift', 'overloaded', 'warehouse', 'load-capacity', 'stability'],
    summary:
      "In what can only be described as a debate between a forklift, 4,000 lbs of drywall, and gravity — gravity delivers its verdict in spectacular fashion. The operator walked away. The load didn't.",
    whatWentWrong:
      "The operator exceeded the forklift's rated load capacity and elevated the forks too high while maneuvering on an uneven floor. No spotter was present. This is a textbook cascade failure: high center of gravity + lateral movement + no spotter = a forklift doing a very slow, very expensive somersault.",
    complianceTakeaway:
      'Under 29 CFR 1910.178(o)(2), operators must not exceed the rated capacity of the industrial truck. Forks must be kept as low as possible during travel (1910.178(n)(4)). Forklift operator certification is mandatory and must be evaluated every 3 years. Tip-over is the #1 cause of forklift fatalities.',
    oshaReference: '29 CFR 1910.178 – Powered Industrial Trucks',
    featured: true,
    trendingScore: 98,
  },
  {
    id: 'vid-002',
    slug: 'ppe-apparently-optional-rooftop',
    title: 'PPE Is Apparently Optional on This Rooftop (It Is Not)',
    sourcePlatform: 'youtube-shorts',
    sourceUrl: 'https://www.youtube.com/shorts/5GhTmlKyrts',
    embedUrl: 'https://www.youtube-nocookie.com/embed/5GhTmlKyrts',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-03-22T10:30:00Z',
    category: 'ppe-problems',
    tags: ['ppe', 'hard-hat', 'fall-protection', 'rooftop', 'construction'],
    summary:
      "A construction rooftop video making the rounds where hard hats appear to be treated as optional accessories. There's also a notable absence of fall protection, which — fun fact — causes roughly 365 deaths per year in construction alone.",
    whatWentWrong:
      "Workers are visible operating within the fall hazard zone without personal fall arrest systems (harness, lanyard, anchor) and without head protection below an active overhead work area. There's no visible guardrail, safety net, or personal fall arrest system in use despite workers being at a height where a fall would be fatal.",
    complianceTakeaway:
      'OSHA 29 CFR 1926.502 requires fall protection at heights of 6 feet or more in construction. Hard hat requirements are governed by 1926.100. Employers must provide and enforce the use of PPE. "I was hot" is not a recognized OSHA exemption.',
    oshaReference: '29 CFR 1926.502 – Fall Protection; 29 CFR 1926.100 – Head Protection',
    featured: true,
    trendingScore: 94,
  },
  {
    id: 'vid-003',
    slug: 'ladder-stood-on-its-own-terms',
    title: 'A Ladder That Stood On Its Own Terms. Those Terms Were Unsafe.',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=gMyTBQCezlE',
    embedUrl: 'https://www.youtube-nocookie.com/embed/gMyTBQCezlE',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-03-15T09:00:00Z',
    category: 'ladder-logic',
    tags: ['ladder', 'extension-ladder', 'angle', '4-to-1', 'setback'],
    summary:
      'An extension ladder is many things: a tool, a pathway, a philosophical test of judgment. What it is not is a free-standing structure. This one disagreed. The video has been viewed 2M+ times for a reason.',
    whatWentWrong:
      'The ladder was placed at an incorrect angle (far too steep, nearly vertical), was not tied off at the top, and was set up on a wet surface without non-slip feet. The worker also exceeded the maximum duty rating by carrying heavy materials while ascending. Every rung was an opportunity to reconsider. They chose adventure.',
    complianceTakeaway:
      "The 4-to-1 rule (1 foot out for every 4 feet of height) is specified in OSHA 29 CFR 1926.1053(b)(5). Extension ladders must extend 3 feet above the landing surface (1926.1053(b)(1)). Ladders must be inspected before use and secured against displacement. Don't skip the basics.",
    oshaReference: '29 CFR 1926.1053 – Ladders',
    featured: false,
    trendingScore: 87,
  },
  {
    id: 'vid-004',
    slug: 'chemical-storage-bingo-connecticut',
    title: 'Chemical Storage Bingo: Full Card at This Connecticut Facility',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=8qaOV9K7glA',
    embedUrl: 'https://www.youtube-nocookie.com/embed/8qaOV9K7glA',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-03-10T11:15:00Z',
    category: 'hazcom-headaches',
    tags: ['hazcom', 'chemicals', 'sds', 'labeling', 'storage', 'ghs'],
    summary:
      'A compliance review walkthrough of a facility storage room that appears to have achieved every possible HazCom violation simultaneously. Unlabeled containers, oxidizers stored next to flammables, and at least three unidentifiable substances in re-used water bottles.',
    whatWentWrong:
      'Unlabeled containers (GHS-required labels absent), incompatible chemicals stored together (oxidizers + flammables), safety data sheets not accessible to workers, and secondary containers with no labels. The water bottle situation alone is disqualifying — re-using containers for chemicals is a classic ingestion hazard.',
    complianceTakeaway:
      "OSHA's Hazard Communication Standard (29 CFR 1910.1200) requires all chemical containers to have GHS-compliant labels with pictograms, signal words, and hazard statements. SDSs must be readily accessible for every chemical. Incompatible chemicals must be segregated. Under GHS Rev 7 (now being adopted), labeling requirements are strengthened further.",
    oshaReference: '29 CFR 1910.1200 – Hazard Communication Standard (HazCom)',
    featured: true,
    trendingScore: 82,
  },
  {
    id: 'vid-005',
    slug: 'confined-space-unconfined-chaos',
    title: 'Confined Space Entry: A Masterclass in What Not To Do',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=BeaX0IRjyd8',
    embedUrl: 'https://www.youtube-nocookie.com/embed/BeaX0IRjyd8',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-03-05T08:00:00Z',
    category: 'osha-fails',
    tags: ['confined-space', 'permit-required', 'atmospheric-testing', 'retrieval-system'],
    summary:
      'Someone entering what appears to be a permit-required confined space with zero atmospheric testing, no attendant, and no retrieval system. Bonus: they brought a friend in to help, which is exactly how a single confined space incident becomes a double fatality.',
    whatWentWrong:
      "No atmospheric testing before entry, no trained attendant stationed outside, no rescue/retrieval equipment, no permit was issued, and the practice of sending a second rescuer in without equipment accounts for over 60% of confined space fatalities. The 'buddy system' is not a rescue plan.",
    complianceTakeaway:
      '29 CFR 1910.146 governs permit-required confined space entry. Requirements include: atmospheric testing before and during entry, a trained attendant who remains outside, a rescue/retrieval system, a completed entry permit, and an emergency response plan. Non-permit confined spaces also require hazard evaluation.',
    oshaReference: '29 CFR 1910.146 – Permit-Required Confined Spaces',
    featured: false,
    trendingScore: 79,
  },
  {
    id: 'vid-006',
    slug: 'safety-briefing-that-mentioned-safety-briefly',
    title: 'The Safety Briefing That Briefly Mentioned Safety',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=JJJMd4KMUuI',
    embedUrl: 'https://www.youtube-nocookie.com/embed/JJJMd4KMUuI',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-02-28T13:00:00Z',
    category: 'training-moments',
    tags: ['training', 'toolbox-talk', 'documentation', 'competent-person', 'orientation'],
    summary:
      "A 47-second 'safety orientation' video captured on a phone that covers the entirety of a construction project's safety program. It ends with 'any questions? No? Great.' No questions were asked because no one understood what just happened.",
    whatWentWrong:
      "Inadequate safety training that fails to cover site-specific hazards, PPE requirements, emergency procedures, or worker rights. The session wasn't documented, there's no record of worker comprehension, and no qualified safety professional conducted it. This would not hold up in any post-incident investigation.",
    complianceTakeaway:
      'OSHA requires employers to provide training in a language and vocabulary workers can understand. For construction, a competent person must conduct safety training relevant to the work being performed. Training must be documented with dates, topics covered, trainer credentials, and worker acknowledgment signatures.',
    oshaReference: '29 CFR 1926.21 – Safety Training and Education',
    featured: false,
    trendingScore: 74,
  },
  {
    id: 'vid-007',
    slug: 'live-electrical-panel-birthday-candles',
    title: 'Live Electrical Panel + Birthday Candles = A Real Video That Exists',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=dTMH8JF-18o',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dTMH8JF-18o',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-02-14T12:00:00Z',
    category: 'osha-fails',
    tags: ['electrical', 'lockout-tagout', 'arc-flash', 'energized-work', 'open-panel'],
    summary:
      'A workplace birthday celebration that someone decided to stage next to an open, energized electrical panel. There are candles. There is cake. There is an arc flash hazard capable of temperatures reaching 35,000°F. This is a real video.',
    whatWentWrong:
      'Open energized electrical panels expose workers to arc flash and shock hazards. No one appears to have done an arc flash risk assessment, there is no arc flash PPE (face shield, arc-rated clothing), and the panel should have been de-energized or properly guarded. Bringing an ignition source (candles) near electrical equipment is its own problem.',
    complianceTakeaway:
      'OSHA 1910.333 prohibits work on or near energized parts unless de-energized or protected by appropriate PPE. NFPA 70E provides arc flash protection standards that OSHA references. Energized electrical work requires a written work permit, qualified workers, and proper PPE. Cake is fine. Cake near live panels is not.',
    oshaReference: '29 CFR 1910.333 – Selection and Use of Work Practices (Electrical)',
    featured: true,
    trendingScore: 96,
  },
  {
    id: 'vid-008',
    slug: 'scaffolding-interpretive-construction',
    title: 'Scaffolding: An Interpretive Construction',
    sourcePlatform: 'youtube-shorts',
    sourceUrl: 'https://www.youtube.com/shorts/YF6s8A29I5s',
    embedUrl: 'https://www.youtube-nocookie.com/embed/YF6s8A29I5s',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-02-01T10:00:00Z',
    category: 'osha-fails',
    tags: ['scaffolding', 'planks', 'guardrails', 'capacity', 'competent-person'],
    summary:
      'A scaffolding setup that appears to have been designed by someone who saw a scaffold once, from a distance, in a fog. Missing planks, no guardrails, and a structural configuration that defies engineering. Surprisingly, also a TikTok trend.',
    whatWentWrong:
      'Missing scaffold planks leaving gaps where workers can fall, absent guardrails on all open sides, no midrail or toeboard, and the scaffold appears to be overloaded. No evidence a competent person performed the required scaffold inspection. Debris below the scaffold is additional evidence that something already fell.',
    complianceTakeaway:
      '29 CFR 1926.451 requires scaffolds to support 4x the intended load, have fully planked platforms, guardrails on all open sides, and be inspected by a competent person before each work shift. Scaffolding is responsible for 4,500 injuries and 60 deaths annually in the U.S.',
    oshaReference: '29 CFR 1926.451 – General Requirements for Scaffolds',
    featured: false,
    trendingScore: 71,
  },
  {
    id: 'vid-009',
    slug: 'eye-wash-station-day-1094-sealed',
    title: 'Eye Wash Station: Day 1,094. Still Sealed.',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=ev1Yq_kUTos',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ev1Yq_kUTos',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-01-20T09:00:00Z',
    category: 'hazcom-headaches',
    tags: ['eyewash', 'emergency-equipment', 'first-aid', 'inspection', 'flushing-fluid'],
    summary:
      'An eye wash station found during a routine compliance walkthrough with the original plastic factory seal still intact — in a facility that has been operating for three years. Workers using corrosives nearby. The station is, in this state, worse than useless.',
    whatWentWrong:
      "Eye wash stations must be flushed weekly to prevent microbial contamination and must have accessible, unobstructed flow at all times. This one has never been tested, which means it's incapable of delivering the 15-minute continuous flush required by ANSI Z358.1. A contaminated flush can cause additional eye injuries.",
    complianceTakeaway:
      'OSHA 29 CFR 1910.151(c) requires eyewash stations where eyes may be exposed to corrosive materials. ANSI Z358.1 (the referenced standard) requires plumbed stations to be activated weekly and deliver tepid water for 15 minutes. Emergency equipment must be accessible within 10 seconds of the hazard area.',
    oshaReference: '29 CFR 1910.151(c) – Medical Services and First Aid',
    featured: false,
    trendingScore: 68,
  },
  {
    id: 'vid-010',
    slug: 'fire-extinguisher-career-change',
    title: 'The Fire Extinguisher That Went Through a Career Change',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=cAz7rwyCmf4',
    embedUrl: 'https://www.youtube-nocookie.com/embed/cAz7rwyCmf4',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1563804447971-6e113ab80713?w=640&h=360&fit=crop&q=80',
    publishedAt: '2026-01-10T11:00:00Z',
    category: 'ppe-problems',
    tags: ['fire-extinguisher', 'inspection', 'annual-maintenance', 'access', 'obstruction'],
    summary:
      'A fire extinguisher spotted being used as a door prop, a desk anchor, and — in one glorious shot — a monitor stand. The inspection tag shows it was last serviced four years ago. The pressure gauge is in the red. It is not prepared for its original job.',
    whatWentWrong:
      'Fire extinguishers must be mounted in accessible, clearly marked locations and must not be obstructed. This one has been repurposed as general equipment and its pressure gauge indicates it no longer meets charge requirements. Four years past its last inspection means it has also missed annual maintenance.',
    complianceTakeaway:
      '29 CFR 1910.157 requires portable fire extinguishers to be visually inspected monthly, maintained annually, and kept accessible and unobstructed. They must be mounted at appropriate heights, distributed based on hazard class, and have current inspection tags. An uncharged extinguisher is a prop, not protection.',
    oshaReference: '29 CFR 1910.157 – Portable Fire Extinguishers',
    featured: false,
    trendingScore: 65,
  },
  {
    id: 'vid-011',
    slug: 'lockout-tagout-sequel-nobody-wanted',
    title: 'Lockout/Tagout: The Sequel Nobody Wanted',
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=K1Q7ofsOF4o',
    embedUrl: 'https://www.youtube-nocookie.com/embed/K1Q7ofsOF4o',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1581093458791-9f3c3250a8a0?w=640&h=360&fit=crop&q=80',
    publishedAt: '2025-12-18T08:30:00Z',
    category: 'osha-fails',
    tags: ['lockout-tagout', 'loto', 'energy-control', 'hazardous-energy', 'maintenance'],
    summary:
      'A maintenance worker servicing energized equipment with zero lockout/tagout procedures in place. Captured on a GoPro, apparently with pride. The machine has stored energy. The worker does not appear to know this. The audience does.',
    whatWentWrong:
      'No energy isolation, no lockout devices applied, no tagout tags placed, no verification that the machine is de-energized before service. The equipment has stored hydraulic and electrical energy. LOTO violations account for approximately 120 fatalities and 50,000 injuries per year in the U.S.',
    complianceTakeaway:
      'OSHA 29 CFR 1910.147 (Control of Hazardous Energy) requires a written energy control program, training for all affected and authorized employees, and proper energy isolation and lockout/tagout during all servicing and maintenance. Tagout alone (without lockout) is the weaker option and requires employer justification.',
    oshaReference: '29 CFR 1910.147 – Control of Hazardous Energy (LOTO)',
    featured: false,
    trendingScore: 88,
  },
  {
    id: 'vid-012',
    slug: 'hard-hat-fashion-week-spring-splinter-collection',
    title: "Hard Hat Fashion Week: Spring 'Splinter' Collection",
    sourcePlatform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=SES-R8EYrK4',
    embedUrl: 'https://www.youtube-nocookie.com/embed/SES-R8EYrK4',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=640&h=360&fit=crop&q=80',
    publishedAt: '2025-12-05T14:00:00Z',
    category: 'ppe-problems',
    tags: ['hard-hat', 'helmet', 'inspection', 'damage', 'class-e', 'replacement'],
    summary:
      'A viral collection of hard hats submitted by workers with cracks, UV degradation, paint stripping (which degrades the shell), and at least two that have clearly taken an impact and were put back on heads instead of replaced. This is not PPE. This is a hat.',
    whatWentWrong:
      'Hard hats that have absorbed an impact or show visible damage (cracks, dents, fading, paint) must be removed from service immediately. UV degradation from sun exposure compromises the dielectric and structural properties. Paint and harsh cleaners can degrade the resin shell. Many workers keep hard hats for 5-10 years when manufacturers recommend replacement every 5 years regardless of appearance.',
    complianceTakeaway:
      'OSHA 29 CFR 1910.135 requires head protection to meet ANSI/ISEA Z89.1 standards. Damaged hard hats must be immediately removed from service. Employers must inspect head protection before each use. A hard hat that has absorbed an impact provides false confidence — it should be destroyed, not reused.',
    oshaReference: '29 CFR 1910.135 – Head Protection',
    featured: false,
    trendingScore: 76,
  },
]
