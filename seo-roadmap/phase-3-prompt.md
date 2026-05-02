# Phase 3 — Authority — Curation, Zip-Code Locations, Comparisons

**Target:** Build 25 new programmatic SEO pages for Mooresville BJJ.
**Ship date:** _____________ (user fills in)

---

## Before you start — read these

You are continuing the Mooresville BJJ buildout. The first 14-page foundation site is already live in `sites/mooresville-bjj/`. This phase adds Phase 3 of a 6-month programmatic SEO roadmap.

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

## Pages to build in Phase 3


### A. Curation pages (8)

These are "best in {Mooresville/Lake Norman}" listicles. MOBJJ ranks itself #1 (legitimately — it has the credentials) and lists 3-5 honest competitors with fair pros/cons. Lists like this rank well because they answer real "best near me" intent — even if they're partially self-promotional, they have to be HONEST about competitors or they get demoted.

| # | URL | Title | Topic |
|---|---|---|---|
| 1 | `/best-bjj-gym-in-mooresville/` | Best BJJ Gym in Mooresville NC (2026) | Honest Comparison | Adult BJJ |
| 2 | `/best-kids-martial-arts-mooresville/` | Best Kids Martial Arts in Mooresville NC | Kids martial arts |
| 3 | `/best-bjj-lake-norman/` | Best BJJ in Lake Norman / Iredell County | Regional |
| 4 | `/best-self-defense-classes-mooresville/` | Best Self-Defense Classes in Mooresville | Self-defense |
| 5 | `/best-after-school-martial-arts-mooresville/` | Best After-School Martial Arts in Mooresville | Kids after-school |
| 6 | `/best-fitness-classes-mooresville-weight-loss/` | Best Fitness Classes in Mooresville for Weight Loss | Adults fitness |
| 7 | `/best-family-martial-arts-mooresville/` | Best Family Martial Arts in Mooresville (Train Together) | Families |
| 8 | `/best-bjj-for-women-mooresville/` | Best Women's BJJ in Mooresville | Women |

**Required:** Each curation page MUST include 3-5 real competing schools with NAP, honest pros/cons, and a fair "why MOBJJ for you" closer. Schema = `ItemList` listing the schools.

### B. Zip-code-keyed location pages (12)

| # | URL | Zip / Area |
|---|---|---|
| 1 | `/locations/28117-bjj/` | 28117 (Mooresville/The Point) |
| 2 | `/locations/28115-bjj/` | 28115 (Mooresville downtown) |
| 3 | `/locations/28036-bjj/` | 28036 (Davidson) |
| 4 | `/locations/28031-bjj/` | 28031 (Cornelius) |
| 5 | `/locations/28078-bjj/` | 28078 (Huntersville) |
| 6 | `/locations/28166-bjj/` | 28166 (Troutman) |
| 7 | `/locations/28673-bjj/` | 28673 (Sherrills Ford) |
| 8 | `/locations/28682-bjj/` | 28682 (Terrell) |
| 9 | `/locations/28037-bjj/` | 28037 (Denver, NC) |
| 10 | `/locations/28625-bjj/` | 28625 (Statesville) |
| 11 | `/locations/28681-bjj/` | 28681 (Stony Point) |
| 12 | `/locations/28658-bjj/` | 28658 (Newton-Conover area) |

**Note:** These overlap with Phase 1/2 neighborhood pages by intent. Use canonical-tag aliasing — the zip-code URL canonicals to the matching neighborhood URL where one exists. New canonical pages only for zips that don't have a neighborhood page yet.

### C. Comparison pages (5)

| # | URL | Comparison |
|---|---|---|
| 1 | `/compare/bjj-vs-karate/` | BJJ vs Karate |
| 2 | `/compare/bjj-vs-wrestling/` | BJJ vs Wrestling |
| 3 | `/compare/bjj-vs-judo/` | BJJ vs Judo |
| 4 | `/compare/bjj-vs-mma/` | BJJ vs MMA |
| 5 | `/compare/bjj-vs-krav-maga/` | BJJ vs Krav Maga |

**Per-page content:** 1500+ words. Side-by-side comparison table. Honest pros/cons. Closer: "If you're in Mooresville and weighing these two…"

### Internal linking (Phase 3)

- All 8 curation pages link to relevant Phase 2 persona pages and Phase 1 location pages
- Comparison pages link to the matching glossary entry (e.g., bjj-vs-wrestling → /learn/what-is-rolling-in-bjj/)
- Add a "Compare" link to the main nav, leading to /compare/


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
- [ ] Commit message: `feat(seo): Phase 3 — Authority — Curation, Zip-Code Locations, Comparisons (25 pages)`
- [ ] `git push` to trigger Cloudflare Pages deploy
- [ ] Verify deploy URL serves the new pages (200 status on a sample of 5)
- [ ] Update Search Console with the new sitemap version

---

## Notes

- If you're unsure whether a neighborhood/landmark/school is real, flag it to the user instead of inventing one.
- If a persona page would cannibalize an existing page, skip it and note the conflict.
- Real photos > Unsplash placeholders — when MOBJJ provides photos for any neighborhood/persona, swap them in as part of this phase.
