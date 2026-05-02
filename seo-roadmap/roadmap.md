# Mooresville BJJ — 6-Month SEO Roadmap

**Client:** Mooresville Brazilian Jiu-Jitsu
**Location:** 243 Overhill Dr, Mooresville, NC 28117
**Metro:** Charlotte / Lake Norman / Iredell County
**Total planned pages:** **150** across 6 phased months
**Cadence:** ~25 pages per month
**Strategy:** Local SEO heavy — Locations + Personas dominate. Curation, Glossary, and Comparison playbooks fill in.

---

## Executive Summary

MOBJJ has strong organic-search fundamentals already (4 black belts, 100+ students, 5.0 / 103 Google reviews, Tom DeBlass lineage, plus two unique credibility hooks no competitor offers — Heroes Jiu-Jitsu free class and Adopt A Cop BJJ). The 14-page foundation site we just built captures the brand-search and direct-search audience. This roadmap adds 150 location-and-persona pages over 6 months to capture the long-tail discovery audience that doesn't yet know MOBJJ exists.

**Target search patterns:**
- `{service} in {neighborhood/town}` — primary local intent
- `{service} for {persona}` — segmented audience landing
- `best {thing} in Mooresville/Lake Norman` — branded curation
- `what is {term}` — top-of-funnel discovery
- `BJJ vs {competing martial art}` — comparison shopping

**Why this works for MOBJJ specifically:**
- The Lake Norman / I-77 corridor is a high-income, rapidly-growing metro with plenty of suburban search demand.
- No competitor in the area is running a Tom DeBlass-affiliate brand, free Heroes JJ class, or Adopt A Cop program — these become repeatable hooks across persona pages.
- The kids 5-7 and 8-12 split is unusual locally — most schools lump kids into one class. Persona pages exploit this.

---

## Keyword Matrix

| Pattern | Count | Pages Per Month | Example |
|---|---|---|---|
| `{service} in {neighborhood}` | 80 | 12-15 | "Brazilian Jiu-Jitsu in Davidson NC" |
| `{service} for {persona}` | 30 | 5 | "BJJ for Adults Over 40" |
| `best {X} in {city}` (curation) | 8 | 1-2 | "Best BJJ Gym in Mooresville" |
| `what is {term}` (glossary) | 15 | 2-3 | "What Is No-Gi Jiu-Jitsu?" |
| `BJJ vs {martial art}` (comparison) | 6 | 1 | "BJJ vs Wrestling" |
| `{technique} explained` (tutorial) | 8 | 1-2 | "BJJ Guard Positions Explained" |
| Pricing/offer landing | 3 | 0-1 | "$0 First-Class Trial" |
| **Total** | **150** | **~25/mo** | |

Full inventory in [`keywords.json`](./keywords.json).

---

## URL Structure Plan

| Page Type | URL Template | Example |
|---|---|---|
| Locations | `/locations/{neighborhood-slug}/{service-slug}/` | `/locations/davidson/adult-bjj/` |
| Personas | `/programs/{service-slug}-for-{persona-slug}/` | `/programs/bjj-for-adults-over-40/` |
| Curation | `/{best-x-slug}/` | `/best-bjj-gym-in-mooresville/` |
| Glossary | `/learn/{term-slug}/` | `/learn/what-is-no-gi-bjj/` |
| Comparisons | `/compare/{us-vs-them-slug}/` | `/compare/bjj-vs-wrestling/` |
| Tutorials | `/learn/{technique-slug}/` | `/learn/bjj-guard-positions/` |
| Offers | `/{offer-slug}/` | `/free-trial-class/` |

Cloudflare Pages handles trailing slashes automatically, so both `/learn/what-is-bjj` and `/learn/what-is-bjj/` resolve to the same file. Use **trailing slash** in canonical tags consistently.

---

## Phase Plan

### Phase 1 · Month 1 — Foundation (25 pages)

**Focus:** Ship the highest-traffic location pages first. Get 5 glossary pages indexed for top-of-funnel discovery.

| Pages | Pattern | Notes |
|---|---|---|
| 20 | `{service} in {top neighborhood}` | 5 services × 4 neighborhoods (Davidson, Cornelius, Huntersville, Statesville) |
| 5 | `what is {term}` glossary | Foundation glossary: BJJ, No-Gi, Belt system, Rolling, Tom DeBlass affiliation |

**Why first:** These are the lowest-competition, highest-volume pages. Davidson + Cornelius + Huntersville hit Charlotte-suburban income demographics where families pay for kids classes.

### Phase 2 · Month 2 — Persona expansion (25 pages)

**Focus:** Capture audience segmentation searches. The "BJJ for Adults Over 40" and "BJJ for Beginners" pages are high-value because they convert better than location pages.

| Pages | Pattern | Notes |
|---|---|---|
| 15 | `{service} for {persona}` | Beginners, Adults 40+, Women, Teens, First Responders, Police, Kids 5-7, Kids 8-12, Stress Relief, Weight Loss, etc. |
| 10 | More `{service} in {town}` | Troutman, Sherrills Ford, Terrell, Denver NC, Mt Mourne, The Point + Mooresville neighborhoods |

### Phase 3 · Month 3 — Authority & curation (25 pages)

**Focus:** Capture "best in Mooresville" / "best Lake Norman" branded curation queries. Add comparison content to capture top-funnel comparison shoppers.

| Pages | Pattern | Notes |
|---|---|---|
| 8 | `best {X} in {Mooresville/Lake Norman}` | Best BJJ in Mooresville, Best Kids Martial Arts in Mooresville, Best Self-Defense Mooresville, Best Family Martial Arts Lake Norman, etc. |
| 12 | Zip-code-keyed locations | 28117 BJJ, 28036 BJJ Davidson, 28031 Cornelius, 28078 Huntersville, etc. |
| 5 | `BJJ vs {martial art}` | BJJ vs Karate, BJJ vs Wrestling, BJJ vs Judo, BJJ vs MMA, BJJ vs Krav Maga |

### Phase 4 · Month 4 — Long-tail glossary + tutorials (25 pages)

**Focus:** Build cheap-to-rank educational content that builds topical authority and feeds internal links. Add 10 hyper-local "near {landmark}" pages.

| Pages | Pattern | Notes |
|---|---|---|
| 15 | Glossary + tutorials | Belt system deep-dive, Heroes JJ explained, Adopt-A-Cop process, Tom DeBlass biography, Renzo Gracie lineage explained, randori, the gi, common submissions, basic guard positions, mount position, side control, escapes, tap-out etiquette, BJJ for self-defense, kids BJJ safety |
| 10 | Hyper-local locations | Near Lake Norman High School, near Lowe's HQ Mooresville, near Brawley School Rd, near Lake Norman Regional Medical Center, near Mooresville Fire Dept, etc. |

### Phase 5 · Month 5 — Pricing/offers + edge geographies (25 pages)

**Focus:** Convert higher-intent traffic with offer-specific landing pages. Capture edge-suburb traffic from broader Iredell County and South Mecklenburg.

| Pages | Pattern | Notes |
|---|---|---|
| 10 | Offer pages | $0 first-class trial, no-contract guarantee details, family discount calculator, Heroes free class signup, Adopt A Cop application walkthrough, women's only intro week, BJJ summer camp, kids birthday party BJJ, tournament prep camp, NC BJJ open-mat schedule |
| 15 | Edge-suburb locations | Catawba, Lincolnton, Concord, Kannapolis, Salisbury, Iredell County BJJ, Davidson College students, UNCC commute analysis, North Mecklenburg BJJ, South Iredell BJJ, etc. |

### Phase 6 · Month 6 — Fill + optimize (25 pages)

**Focus:** Fill remaining matrix gaps, then optimize phase-1 pages with new local content (member testimonials, neighborhood-specific photos, refreshed local references).

| Pages | Pattern | Notes |
|---|---|---|
| 15 | Matrix fill | Remaining persona × service combos (kids women BJJ, kids teen overlap, adult competition × persona, etc.) |
| 10 | Refresh phase-1 location pages | Add neighborhood testimonials, rewrite intros with hyper-local landmarks, add map embeds, internal-link prune |

---

## Internal Linking Architecture

**Hub-and-spoke model:**

```
HOMEPAGE  →  SERVICE PAGES (existing site)
            └→ /programs/adult-bjj-for-{persona}/   [persona spokes]
            └→ /locations/{neighborhood}/{service}/  [location spokes]

LOCATIONS HUB  /locations/   (build in Phase 1)
            └→ /locations/davidson/                 [neighborhood hubs]
                └→ /locations/davidson/adult-bjj/
                └→ /locations/davidson/kids-bjj-8-12/
                ...

LEARN HUB  /learn/   (build in Phase 1)
            └→ /learn/what-is-no-gi-bjj/
            └→ /learn/bjj-belt-system/
            ...

COMPARE HUB  /compare/   (build in Phase 3)
            └→ /compare/bjj-vs-karate/
            ...
```

**Linking rules:**
- Every location page links to (a) the matching persona page, (b) the matching glossary entry, (c) two adjacent neighborhood location pages
- Every persona page links to (a) all three top neighborhoods, (b) the relevant glossary, (c) the schedule + pricing pages
- Every glossary page links to (a) two related glossary entries, (b) the most relevant program/location page, (c) the homepage
- Footer adds "Neighborhoods we serve" with a link to `/locations/`

---

## Schema Strategy by Page Type

| Page Type | Required JSON-LD |
|---|---|
| Homepage | `MartialArtsSchool` (already in place) + `WebSite` (already in place) |
| Location page | `LocalBusiness` with `areaServed: {neighborhood}` + `BreadcrumbList` |
| Persona page | `Service` with `audience.audienceType: {persona}` + `BreadcrumbList` |
| Glossary entry | `DefinedTerm` + `BreadcrumbList` |
| Curation ("best") | `ItemList` with the school's own placement + `BreadcrumbList` |
| Comparison | `Article` (compare-and-contrast) + `BreadcrumbList` |
| Tutorial | `HowTo` + `BreadcrumbList` |

---

## Content Uniqueness Rules (avoid thin-content penalty)

Every programmatic page MUST include at least 4 of the following per-page custom blocks:

1. **Neighborhood-specific intro** — name a real landmark, school, or business near the target geography. Not "in {city}" template variable. ("If you're driving down Brawley School Rd, the academy is 7 minutes from the Point peninsula…")
2. **Local commute / parking detail** — actual minutes from named intersections.
3. **Member testimonial naming the geography or persona** — pull from the 103 reviews; if no review for that exact persona/geography, pull a thematically-matched one + the date.
4. **Schedule snippet** — embed the relevant class times for that service (e.g., persona = Kids 5-7 → show only Kids 5-7 schedule).
5. **Coach attribution** — name which black belt teaches that service most often.
6. **Pricing reminder** — keep it consistent ($140/$110, no contract).
7. **Neighborhood map embed** — Google Maps embed centered on the named neighborhood with the academy pinned.
8. **One unique paragraph specific to that audience or location** — handwritten by the agent in the phase prompt, not templated. (E.g., for "BJJ for Adults Over 40": real talk about joint care, training intensity, recovery between classes.)

A page that hits 4+ of these blocks is NOT a thin variable swap — it's a real local landing page.

---

## Phase Prompts

Each phase has a paste-ready prompt the user can drop into a fresh Claude Code session when ready to ship.

- [`phase-1-prompt.md`](./phase-1-prompt.md) — Foundation: 20 location pages + 5 glossary
- [`phase-2-prompt.md`](./phase-2-prompt.md) — Persona expansion: 15 persona + 10 location
- [`phase-3-prompt.md`](./phase-3-prompt.md) — Authority: 8 curation + 12 zip-locations + 5 comparisons
- [`phase-4-prompt.md`](./phase-4-prompt.md) — Glossary depth + hyper-local: 15 glossary + 10 landmark-locations
- [`phase-5-prompt.md`](./phase-5-prompt.md) — Offers + edge suburbs: 10 offers + 15 edge-locations
- [`phase-6-prompt.md`](./phase-6-prompt.md) — Fill + optimize: 15 fill + 10 phase-1 refreshes

---

## Success Metrics by Phase

| Phase | Indexed pages | Organic sessions/mo (target) | Lead form submits/mo (target) |
|---|---|---|---|
| 1 (M1) | 25 (homepage + 14 + 25 new) | 800 | 15 |
| 2 (M2) | 50 new programmatic | 1,500 | 28 |
| 3 (M3) | 75 | 2,400 | 42 |
| 4 (M4) | 100 | 3,500 | 60 |
| 5 (M5) | 125 | 4,800 | 78 |
| 6 (M6) | 150 | 6,000 | 95 |

Targets are conservative against typical local-BJJ market sizes for a Lake Norman / Iredell County metro. Adjust after Phase 1 ships and we have a real Search Console baseline.

---

## Validation Flags (user should confirm before Phase 1 ships)

1. **Neighborhood list** — `keywords.json` lists 5 Mooresville neighborhoods (The Point, Brawley School Rd, Morrison Plantation, Curtis Pond, Mt Mourne) and 11 nearby towns. Confirm these are the actual high-search neighborhoods Mooresville prospects use, and add any we missed (e.g., specific subdivisions).
2. **Schedule data** — the schedule.html we just shipped uses typical times. Replace with the actual current schedule before any persona page links to specific class times.
3. **Heroes JJ + Adopt A Cop signup process** — the offer pages need exact application steps from MOBJJ. Get the actual onboarding flow before Phase 5.
4. **Member testimonials by persona** — Phase 1 content uses 3 reviews from the homepage. Phases 2-6 should pull additional reviews; ideally tag each Google review by persona/geography in advance.
5. **Real photos for top neighborhoods** — Phase 6 refresh assumes real on-mat photos of members from the named neighborhoods. Coordinate with MOBJJ to collect.

---

## Critical rules — repeated here so they don't get lost

- **No duplicate locations** — pick one canonical slug per neighborhood. If "The Point" and "Brawley School Rd" overlap geographically, pick the higher-volume one and 301-redirect the duplicate.
- **No cannibalization with the existing 14-page site** — the existing site owns "Mooresville BJJ" branded queries; the programmatic pages target geo + persona qualifiers.
- **Every new page must include "Powered by MMA Marketing Pro"** in the footer linking to https://www.mmamarketingpro.com (target=_blank, rel=noopener). The seo-audit step will catch any that miss it.
- **Update sitemap.xml** at the end of every phase. The existing sitemap currently lists 14 URLs — each phase appends 25 more.
