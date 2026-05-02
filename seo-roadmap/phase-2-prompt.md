# Phase 2 — Persona Expansion + Tier-2 Locations

**Target:** Build 25 new programmatic SEO pages for Mooresville BJJ.
**Ship date:** _____________ (user fills in)

---

## Before you start — read these

You are continuing the Mooresville BJJ buildout. The first 14-page foundation site is already live in `sites/mooresville-bjj/`. This phase adds Phase 2 of a 6-month programmatic SEO roadmap.

Read these files BEFORE generating anything:

1. `sites/mooresville-bjj/content-profile.json` — the scraped business content
2. `sites/mooresville-bjj/brand-kit.json` — the gold-on-warm-black brand kit
3. `sites/mooresville-bjj/seo-roadmap/keywords.json` — neighborhoods, services, personas, glossary terms
4. `sites/mooresville-bjj/seo-roadmap/roadmap.md` — full 6-month plan + URL structure + linking rules + content uniqueness rules
5. `sites/mooresville-bjj/styles.css` — design tokens you must reuse (do NOT rewrite the design)
6. `sites/mooresville-bjj/index.html` — reference for navbar, footer, lead modal HTML
7. `.agent/skills/site-redesign/SKILL.md` — design system + lead-modal mandate + mobile bar
8. `.agent/skills/seo-audit/SKILL.md` — what `/seo-audit` will check after this phase
9. `.agent/skills/programmatic-seo/SKILL.md` — playbook reference

---

## Mandatory rules (no exceptions)

1. **Reuse the existing design system.** Use `styles.css` as-is. Every new page imports it via `<link rel="stylesheet" href="../../styles.css">` (or correct relative path based on the URL depth).
2. **Lead capture flow.** Every CTA on every new page MUST open the lead modal — same modal block as the existing pages, same submit-to-`/booking.html`. Copy the modal HTML from `index.html`.
3. **Powered by MMA Marketing Pro.** Every new page MUST include the agency attribution line in the footer:
   ```html
   <p class="powered-by">Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a></p>
   ```
4. **Content uniqueness.** Every page MUST include at least 4 of the 8 unique-content blocks listed in roadmap.md (neighborhood intro, commute detail, member testimonial, schedule snippet, coach attribution, pricing reminder, map embed, custom paragraph).
5. **Internal linking.** Every page links to (a) the existing site nav, (b) at least 2 sibling programmatic pages, (c) the homepage + booking.
6. **Schema markup.** Add the JSON-LD types listed in roadmap.md per page type.
7. **Update `sitemap.xml`** at the end of the phase — append every new URL.
8. **Run `/seo-audit`** after generation. Fix anything it flags before committing.
9. **Commit + push** to `MMA-Marketing-Pro/mooresville-bjj` GitHub repo. Cloudflare Pages auto-deploys on push.
10. **Mobile quality bar.** Every page must pass the same mobile checks as the foundation site (viewport meta + viewport-fit=cover, .nav.open backdrop-filter override, .nav-mobile z-index 200, 44×44px tap targets, hero/page-header mobile padding overrides, body scroll lock).

---

## Pages to build in Phase 2


### A. Persona pages (15)

| # | URL | Title | Persona |
|---|---|---|---|
| 1 | `/programs/bjj-for-beginners/` | BJJ for Beginners in Mooresville NC | MOBJJ | Beginners |
| 2 | `/programs/bjj-for-adults-over-40/` | BJJ for Adults Over 40 | Mooresville BJJ | Adults 40+ |
| 3 | `/programs/bjj-for-adults-over-50/` | BJJ for Adults Over 50 | Mooresville BJJ | Adults 50+ |
| 4 | `/programs/bjj-for-women/` | Women's BJJ in Mooresville NC | MOBJJ | Women |
| 5 | `/programs/bjj-for-teens/` | BJJ for Teens (13-17) | Mooresville BJJ | Teens |
| 6 | `/programs/bjj-for-first-responders/` | Free BJJ for First Responders & Veterans | MOBJJ | First Responders / Vets / Teachers |
| 7 | `/programs/bjj-for-police-officers/` | Free BJJ for Police Officers | Adopt A Cop | Active-duty Police |
| 8 | `/programs/bjj-for-stress-relief/` | BJJ for Stress Relief in Mooresville | MOBJJ | Stress relief |
| 9 | `/programs/bjj-for-weight-loss/` | BJJ for Weight Loss in Mooresville | MOBJJ | Weight loss adults |
| 10 | `/programs/bjj-for-self-defense/` | BJJ for Real-World Self-Defense | MOBJJ | Self-defense focused |
| 11 | `/programs/kids-bjj-with-adhd/` | Kids BJJ for ADHD & Focus | Mooresville BJJ | Kids with ADHD |
| 12 | `/programs/kids-bjj-for-bullying/` | Kids BJJ for Bullying & Confidence | MOBJJ | Anti-bullying parents |
| 13 | `/programs/kids-bjj-shy-kids/` | Kids BJJ for Shy or Anxious Kids | MOBJJ | Anxious / shy kids |
| 14 | `/programs/bjj-for-tournament-prep/` | BJJ Tournament Prep | MOBJJ Competition Class | Competitors |
| 15 | `/programs/bjj-for-mma-fighters/` | BJJ for MMA Fighters | Mooresville BJJ | MMA practitioners cross-training |

**Per-page content:** 1000+ words. Each persona page MUST include a section titled "Why MOBJJ specifically for {persona}" with a real, handwritten reason — not a template. Include 1-2 testimonials matched to the persona. Schema: `Service` with `audience.audienceType` set + `BreadcrumbList`.

### B. Tier-2 location pages (10)

| # | URL | Neighborhood / Town |
|---|---|---|
| 1-3 | `/locations/troutman/{adult-bjj, kids-bjj-8-12, no-gi}/` | Troutman |
| 4-5 | `/locations/sherrills-ford/{adult-bjj, kids-bjj-8-12}/` | Sherrills Ford |
| 6 | `/locations/terrell/adult-bjj/` | Terrell |
| 7 | `/locations/denver-nc/adult-bjj/` | Denver, NC |
| 8 | `/locations/the-point-mooresville/adult-bjj/` | The Point peninsula |
| 9 | `/locations/morrison-plantation/kids-bjj-8-12/` | Morrison Plantation |
| 10 | `/locations/mt-mourne/adult-bjj/` | Mt Mourne |

Same per-page content + schema rules as Phase 1 location pages.

### Internal linking (Phase 2)

- Each persona page links to the 4 top neighborhoods (Davidson, Cornelius, Huntersville, Statesville location pages from Phase 1)
- Each Phase 1 location page is updated to add a "Programs for you" sidebar with links to the 3 most-relevant Phase 2 persona pages
- Update the homepage hero CTA region to include "BJJ for Beginners →" link


---

## Post-build checklist

- [ ] All 25 HTML files generated and saved under the correct URL paths
- [ ] Each page imports `styles.css` via the correct relative path
- [ ] Each page has the lead modal block + Powered by MMA Marketing Pro attribution
- [ ] Each page hits 4+ unique-content blocks (no thin variable-swaps)
- [ ] Each page has BreadcrumbList JSON-LD + at least one page-type-specific schema
- [ ] `sitemap.xml` updated with all 25 new URLs
- [ ] Internal links added: each page links to 2+ siblings + homepage + booking
- [ ] `/seo-audit` run on the new pages, all issues resolved
- [ ] Mobile QA pass — open at 375px and 768px to confirm hero/page-header look right
- [ ] Commit message: `feat(seo): Phase 2 — Persona Expansion + Tier-2 Locations (25 pages)`
- [ ] `git push` to trigger Cloudflare Pages deploy
- [ ] Verify deploy URL serves the new pages (200 status on a sample of 5)
- [ ] Update Search Console with the new sitemap version

---

## Notes

- If you're unsure whether a neighborhood/landmark/school is real, flag it to the user instead of inventing one.
- If a persona page would cannibalize an existing page, skip it and note the conflict.
- Real photos > Unsplash placeholders — when MOBJJ provides photos for any neighborhood/persona, swap them in as part of this phase.
