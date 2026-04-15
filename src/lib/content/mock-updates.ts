import type { UpdateItem } from '../types'

export const mockUpdates: UpdateItem[] = [
  {
    id: 'upd-001',
    slug: 'osha-maximum-penalty-amounts-fy2025',
    title: 'OSHA Raises Maximum Penalty Amounts for FY 2025',
    summary:
      'OSHA has announced the annual inflation-adjusted increases to maximum civil penalty amounts effective January 15, 2025. Serious and Other-Than-Serious violations now carry a maximum of $16,550 per violation. Willful and Repeat violations top out at $165,514.',
    body: `## What Changed

OSHA adjusts its civil penalty amounts annually in accordance with the Federal Civil Penalties Inflation Adjustment Act Improvements Act of 2015. The adjustments for FY 2025 are as follows:

| Violation Type | Previous Maximum | New Maximum (FY 2025) |
|---|---|---|
| Serious | $15,625 | $16,550 |
| Other-Than-Serious | $15,625 | $16,550 |
| Willful or Repeat | $156,259 | $165,514 |
| Failure to Abate | $15,625/day | $16,550/day |
| Posting Requirements | $15,625 | $16,550 |

## Why It Matters

These increases apply to all citations issued after the effective date, regardless of when the violation occurred. Employers with outstanding citations should be aware that penalties assessed after January 15 may reflect the new amounts.

OSHA's penalty policy also considers factors including: **good faith**, **size of business**, **history of previous violations**, and **gravity of the violation**.

## What to Do

- Conduct a self-audit before OSHA does a programmed inspection
- Review any open citations and abatement timelines
- Train supervisors on violation avoidance — penalties for Repeat violations multiply quickly
- Small businesses: ask about OSHA's free on-site consultation program (separate from enforcement)`,
    publishedAt: '2025-01-15T10:00:00Z',
    category: 'penalty-update',
    tags: ['penalties', 'citations', 'fines', 'osha-enforcement', 'fy2025'],
    featured: true,
    alertLevel: 'high',
    sourceLinks: [
      {
        label: 'OSHA Official Penalty Announcement',
        url: 'https://www.osha.gov/penalties',
      },
      {
        label: 'Federal Register Notice',
        url: 'https://www.federalregister.gov/',
      },
      {
        label: 'Q1 2026 OSHA Regulatory Updates — Workplace Compliance Insights',
        url: 'https://workplacecomplianceinsights.com/articles/q1-2026-osha-regulatory-updates/',
      },
    ],
  },
  {
    id: 'upd-002',
    slug: 'hazcom-ghs-rev7-alignment',
    title: 'HazCom Standard Updated to Align with GHS Rev 7 — What Actually Changes',
    summary:
      "OSHA's final rule aligning the Hazard Communication Standard with the 7th edition of the UN Globally Harmonized System of Classification and Labelling of Chemicals is now in effect. Significant changes include new hazard classes, revised label requirements, and updated SDS formatting.",
    body: `## Background

OSHA's Hazard Communication Standard (HazCom, 29 CFR 1910.1200) was last majorly revised in 2012 to align with GHS Rev 3. The new rule updates the standard to GHS Rev 7, the current international edition.

## Key Changes

### New Hazard Classes
- **Desensitized Explosives** — new class with specific labeling requirements
- **Flammable Gases** expanded with new subcategories
- **Aerosols** — updated classification criteria

### Revised Label Requirements
- **Precautionary Statements** have been extensively revised
- Signal words, pictograms, and hazard statements updated for several substances
- Date of label revision now encouraged on new labels

### SDS Format Updates
- Section 9 (Physical/Chemical Properties) expanded with additional required fields
- Section 11 (Toxicological Information) requires more detail on endocrine disruption and repeated exposure
- SDSs must be updated within 6 months of new hazard information

## Compliance Timeline

| Phase | Deadline | Requirement |
|---|---|---|
| Chemical manufacturers/importers | 36 months from effective date | Updated SDSs and labels |
| Distributors | 48 months from effective date | Can ship old stock with new labels |
| Employers | 60 months from effective date | Update workplace hazard communication programs |

## Action Items

1. Contact your chemical suppliers for updated SDSs
2. Plan to update your written HazCom program
3. Schedule refresher training when new labels arrive  
4. Review secondary container labeling procedures`,
    publishedAt: '2025-07-20T09:00:00Z',
    category: 'standard-change',
    tags: ['hazcom', 'ghs', 'rev7', 'sds', 'labeling', 'chemical-safety'],
    featured: true,
    alertLevel: 'medium',
    sourceLinks: [
      {
        label: 'OSHA HazCom Final Rule',
        url: 'https://www.osha.gov/hazcom',
      },
      {
        label: 'Q1 2026 OSHA Regulatory Updates — Workplace Compliance Insights',
        url: 'https://workplacecomplianceinsights.com/articles/q1-2026-osha-regulatory-updates/',
      },
    ],
  },
  {
    id: 'upd-003',
    slug: 'walking-working-surfaces-clarification-general-industry',
    title: 'Walking-Working Surfaces Standard: New OSHA Enforcement Guidance',
    summary:
      'OSHA has issued new enforcement guidance clarifying several provisions of the 2016 Walking-Working Surfaces final rule (29 CFR 1910.21-30), particularly around personal fall protection systems, ladder safety, and dock board requirements. The guidance addresses common compliance questions.',
    body: `## Overview

The 2016 Walking-Working Surfaces final rule modernized decades-old standards and added personal fall protection system requirements for general industry. OSHA has now issued a memo to area directors clarifying enforcement priorities.

## Notable Clarifications

### Personal Fall Protection
- Employers may choose from **conventional fall protection** (guardrails, safety nets, personal fall arrest) based on feasibility
- The employer must document why alternative methods were selected when conventional systems are infeasible
- **Safety monitoring systems** are only permitted as a last resort and only when accompanied by a warning line system

### Fixed Ladders
- All fixed ladders over 24 feet installed **after** November 19, 2018 must have a ladder safety system (e.g., a self-retracting lifeline or ladder climb assist) — cages alone are no longer acceptable
- Existing fixed ladders installed **before** November 19, 2018 had until November 18, 2036 to comply

### Stairways
- Handrails must be between 30 and 37 inches above stair nosings
- Stairways with 4 or more risers or rising more than 30 inches require handrails

## What to Review

- Are your fixed ladders installed post-2018 compliant?
- Do your stairways meet the new handrail height requirements?
- Is your fall protection plan documented?`,
    publishedAt: '2026-02-10T11:00:00Z',
    category: 'enforcement-update',
    tags: ['walking-working-surfaces', 'fall-protection', 'ladders', 'stairways', 'guardrails'],
    featured: false,
    alertLevel: 'low',
    sourceLinks: [
      {
        label: 'OSHA Walking-Working Surfaces Standard',
        url: 'https://www.osha.gov/walking-working-surfaces',
      },
    ],
  },
  {
    id: 'upd-004',
    slug: 'niosh-heat-illness-prevention-guidance-outdoor-workers',
    title: 'NIOSH Issues Updated Heat Illness Prevention Guidance',
    summary:
      'NIOSH has released a revised edition of its Heat Stress Guide for Occupational Settings, updating recommended exposure limits (RELs) and providing new guidance for acclimatization programs, engineering controls, and worker monitoring. The previous edition dated from 2016.',
    body: `## What's New in the 2025 Edition

The National Institute for Occupational Safety and Health (NIOSH) periodically updates its recommended exposure limits and occupational health guidance. The 2025 Heat Stress update reflects new research on heat-related illness, climate trends, and effective intervention strategies.

## Updated Recommended Exposure Limits

NIOSH updated its RELs for heat stress based on physiological research. The new RELs account for:
- Air temperature and humidity (wet-bulb globe temperature)
- Metabolic work rate (light, moderate, heavy, very heavy)
- Acclimatization status

Key change: **lower action limits for unacclimatized workers**, particularly in the first 7-14 days on the job.

## Acclimatization Requirements

The guidance strongly recommends structured acclimatization programs:
- **Day 1**: No more than 20% of full heat exposure
- **Days 2-7**: Increase by 10-20% per day
- New workers and returning workers (absent >3 days) must be treated as unacclimatized

## Engineering Controls Prioritized

NIOSH emphasizes the hierarchy of controls. Before relying on PPE or administrative controls:
1. **Air conditioning** in rest areas and cabs
2. **Shade structures** and cool rest zones  
3. **Scheduling hot work** for cooler parts of the day
4. **Cool water** and electrolytes readily available

## Federal OSHA Heat Standard Status

OSHA's proposed Heat Illness Prevention Standard for outdoor and indoor workers is still pending as of publication. Several states (California, Washington, Oregon, Minnesota) have state-level heat illness standards in effect.`,
    publishedAt: '2026-01-08T10:00:00Z',
    category: 'guidance-release',
    tags: ['heat-illness', 'niosh', 'outdoor-workers', 'acclimatization', 'heat-stress-rel'],
    featured: false,
    alertLevel: 'medium',
    sourceLinks: [
      {
        label: 'NIOSH Heat Illness Page',
        url: 'https://www.cdc.gov/niosh/topics/heatstress/',
      },
      {
        label: 'Heat Illness Prevention in 2026 — Workplace Compliance Insights',
        url: 'https://workplacecomplianceinsights.com/articles/heat-illness-prevention-employer-guide-summer-2026/',
      },
    ],
  },
  {
    id: 'upd-005',
    slug: 'osha-silica-rule-enforcement-expanded-construction',
    title: 'OSHA Silica Enforcement Expanded: Higher Scrutiny for Additional Operations',
    summary:
      "OSHA's crystalline silica standard for construction (29 CFR 1926.1153) enforcement is expanding focus to additional high-exposure operations including hydraulic fracturing, countertop fabrication, and dental prosthetics manufacturing. New inspection targeting criteria released.",
    body: `## Background

OSHA's Silica standard for Construction (1926.1153, effective 2017) and General Industry (1910.1053, effective 2018) set a new Permissible Exposure Limit (PEL) of 50 micrograms per cubic meter (µg/m³) as an 8-hour TWA — 50% lower than the previous 100 µg/m³ PEL.

## New Enforcement Focus Areas

OSHA's enhanced targeting now includes:
- **Engineered stone countertop fabrication** — extremely high silica content in quartz products creates acute silicosis risk; multiple cluster cases now documented in Texas, California, and Colorado
- **Hydraulic fracturing operations** — workers near sand movers and blenders face elevated exposures
- **Dental prosthetics fabrication** — dry grinding of ceramic/zirconia crowns generates respirable silica

## Countertop Fabrication: High Alert

OSHA issued a Hazard Alert for engineered stone countertop fabrication. Key data:
- Quartz countertops contain 90-97% crystalline silica
- Dry cutting and grinding without engineering controls can generate exposures 10-100x the PEL
- **Accelerated silicosis** (fatal disease in workers as young as their 20s) has been documented in multiple U.S. states

## Compliance Requirements

For construction: **Table 1** of 1926.1153 specifies engineering and work practice controls for 18 common operations. Employers following Table 1 don't need to monitor exposure. For non-Table 1 operations, air monitoring is required.

General industry: Must conduct initial air monitoring to assess exposures. Exposures above the Action Level (25 µg/m³) require medical surveillance.`,
    publishedAt: '2026-03-01T10:00:00Z',
    category: 'enforcement-update',
    tags: ['silica', 'crystalline-silica', 'construction', 'countertop-fabrication', 'silicosis'],
    featured: true,
    alertLevel: 'high',
    sourceLinks: [
      {
        label: 'OSHA Silica Standard Page',
        url: 'https://www.osha.gov/silica-crystalline',
      },
      {
        label: 'OSHA Engineered Stone Hazard Alert',
        url: 'https://www.osha.gov/silica-crystalline/engineered-stone',
      },
      {
        label:
          'OSHA Cites Georgia Stone Manufacturers for Silica Violations — Workplace Compliance Insights',
        url: 'https://workplacecomplianceinsights.com/articles/osha-silica-enforcement-stone-fabrication-2026/',
      },
    ],
  },
  {
    id: 'upd-006',
    slug: 'nfpa-70e-2024-electrical-safety-changes',
    title: 'NFPA 70E 2024 Edition: Key Electrical Safety Changes Explained',
    summary:
      'The 2024 edition of NFPA 70E, Standard for Electrical Safety in the Workplace, has been released with several important changes including revised arc flash risk assessment requirements, updated PPE category tables, and new guidance on remote operation and battery energy storage systems.',
    body: `## About NFPA 70E

NFPA 70E is the primary consensus standard for electrical safety in the workplace. While not directly OSHA-enforceable, OSHA cites it as the recognized industry standard under the General Duty Clause and directly within 1910.333. The 2024 edition introduces meaningful changes.

## Key Changes

### Revised Arc Flash Risk Assessment
- Clearer requirements for **when an arc flash risk assessment is required** (vs. the simplified PPE table approach)
- Updated language clarifying that the **arc flash boundary** must be established before energized work begins
- Guidance added for assessing risk when equipment condition is unknown

### PPE Category Table Updates
- Arc flash PPE Category 1 minimum: **4 cal/cm² arc rating** (unchanged)
- New footnotes clarifying voltage and equipment type assumptions
- Rubber insulating gloves now more clearly required for Category 1 and above

### Battery Energy Storage Systems (BESS)
- New Article 360 added specifically for BESS safety
- Addresses thermal runaway hazard recognition
- PPE requirements for working on high-voltage battery systems

### Remote and Automated Operation
- New guidance for **remotely operated switching** as a method to avoid energized work
- Encourages engineering out the need for people in the arc flash boundary

## OSHA Connection

OSHA 29 CFR 1910.333 and 1910.269 reference NFPA 70E. If an incident occurs and your program doesn't meet NFPA 70E, expect a General Duty Clause citation. Update your electrical safety program to reference the 2024 edition.`,
    publishedAt: '2025-11-12T10:00:00Z',
    category: 'standard-change',
    tags: ['nfpa-70e', 'electrical-safety', 'arc-flash', 'ppe', 'energized-work'],
    featured: false,
    alertLevel: 'medium',
    sourceLinks: [
      {
        label: 'NFPA 70E 2024 Edition',
        url: 'https://www.nfpa.org/codes-and-standards/nfpa-70e-standard-for-electrical-safety-in-the-workplace',
      },
    ],
  },
  {
    id: 'upd-007',
    slug: 'cal-osha-indoor-heat-illness-prevention-proposal',
    title: 'Cal/OSHA Proposes Stricter Indoor Heat Illness Prevention Rule',
    summary:
      'California OSHA has proposed an Indoor Heat Illness Prevention standard that would require employers to take preventive measures when indoor temperatures reach 82°F, with additional requirements at 87°F. The proposed rule covers most indoor workplaces including warehouses, kitchens, and manufacturing.',
    body: `## Overview

Cal/OSHA already has an outdoor Heat Illness Prevention regulation. The proposed Indoor standard extends those protections to workers in covered indoor settings. California's warehouse workers, kitchen staff, and manufacturing workers face significant heat exposure — particularly in facilities without adequate climate control.

## Proposed Requirements

### Trigger Point: 82°F
When indoor temperatures reach **82°F** (28°C):
- Cool-down areas must be maintained at or below 82°F
- Workers must be allowed and encouraged to take preventive cool-down rests  
- Drinking water must be provided (cool, potable, 32–50°F)
- Pre-shift communication about heat hazards

### Enhanced Requirements: 87°F
When indoor temperatures reach **87°F** (31°C):
- All measures above, plus:
- Engineering controls must be implemented or infeasibility documented
- Observable symptoms monitoring program required
- High-heat procedures: buddy system or observation
- Emergency response procedures for heat illness

### Exemptions
- Air-conditioned buildings maintained below 87°F at all times
- Incidental exposure (brief entry, under 15 minutes per hour)

## Federal Standard Status

Federal OSHA's proposed heat standard is still navigating the rulemaking process. Cal/OSHA's standard is expected to be finalized ahead of the federal rule and will serve as a model for other states.

## Who's Affected

California employers in: warehouses, fulfillment centers, restaurant kitchens, food processing, laundries, manufacturing facilities, and any indoor workplace that can reach these temperatures.`,
    publishedAt: '2026-02-20T09:00:00Z',
    category: 'standard-change',
    tags: ['cal-osha', 'heat-illness', 'indoor-heat', 'warehouse', 'california'],
    featured: false,
    alertLevel: 'medium',
    sourceLinks: [
      {
        label: 'Cal/OSHA Proposed Indoor Heat Standard',
        url: 'https://www.dir.ca.gov/dosh/dosh_publications/HeatIllnessguideline.pdf',
      },
      {
        label: 'OSHA Heat Hazard NEP Update — Workplace Compliance Insights',
        url: 'https://workplacecomplianceinsights.com/articles/osha-heat-nep-update-2026-employer-guide/',
      },
    ],
  },
  {
    id: 'upd-008',
    slug: 'epa-rcra-hazardous-waste-generator-rule',
    title: 'EPA Revises RCRA Hazardous Waste Generator Requirements: Key Takeaways',
    summary:
      "EPA's Generator Improvements Rule revisions continue to be phased in, with key changes affecting how very small quantity generators (VSQGs), small quantity generators (SQGs), and large quantity generators (LQGs) classify, store, and manage hazardous waste. Some states have adopted these changes; others have not.",
    body: `## What is the Generator Improvements Rule?

EPA finalized the RCRA (Resource Conservation and Recovery Act) Generator Improvements Rule in 2016, with most provisions taking effect in 2018. Key changes aligned the regulations with actual generator practices and closed several loopholes. State adoption varies — check your state program.

## Key Changes That Remain Misunderstood

### Generator Category Re-evaluation
- Generators must **re-evaluate their category each calendar month** based on the volume of hazardous waste generated that month
- A facility that generates 220 lbs one month and 2,500 lbs the next must manage waste under **LQG requirements** for that second month
- Annual averages do not determine generator category

### Emergency Coordinator Requirements
- SQGs now must have an **emergency coordinator** either on-site or on-call 24/7
- LQGs must have a full contingency plan on file with the LEPC and NRC

### Labeling Requirements Tightened
- All containers must be labeled with the words "Hazardous Waste"
- Accumulation start date must be on all containers
- LQGs: containers must also list the hazardous constituents

### Satellite Accumulation
- Satellite areas (at the point of generation) can hold up to 55 gallons of hazardous waste or 1 quart of acutely hazardous waste
- Once the limit is reached, waste must be moved to the central accumulation area within 3 days

## State Adoption Status

RCRA is a "base plus" program — states can adopt EPA's rules or be more stringent. Several states (CA, NY, NJ, WA) have unique provisions. Always check your state hazardous waste program.`,
    publishedAt: '2025-10-05T10:00:00Z',
    category: 'guidance-release',
    tags: ['epa', 'rcra', 'hazardous-waste', 'generator', 'sqg', 'lqg', 'vsgq'],
    featured: false,
    alertLevel: 'low',
    sourceLinks: [
      {
        label: 'EPA RCRA Generator Improvements Rule',
        url: 'https://www.epa.gov/rcra/hazardous-waste-generator-improvements-final-rule',
      },
    ],
  },
]
