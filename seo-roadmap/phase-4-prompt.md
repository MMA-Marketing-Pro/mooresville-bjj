# Phase 4 — Glossary Depth + Hyper-Local Landmarks

**Target:** Build 25 new programmatic SEO pages for Mooresville BJJ.
**Ship date:** _____________ (user fills in)

---

## Before you start — read these

You are continuing the Mooresville BJJ buildout. The first 14-page foundation site is already live in `sites/mooresville-bjj/`. This phase adds Phase 4 of a 6-month programmatic SEO roadmap.

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

## Pages to build in Phase 4


### A. Deeper glossary + tutorial pages (15)

| # | URL | Topic |
|---|---|---|
| 1 | `/learn/what-is-randori/` | Randori vs rolling vs sparring — terminology |
| 2 | `/learn/the-bjj-gi-explained/` | Gi (kimono) — fabric, weight, weaving, brand recommendations |
| 3 | `/learn/common-bjj-submissions/` | Top 10 BJJ submissions explained |
| 4 | `/learn/bjj-guard-positions/` | Closed, open, half, butterfly, spider — guard positions |
| 5 | `/learn/mount-position-bjj/` | Mount — what it is, how to escape |
| 6 | `/learn/side-control-bjj/` | Side control — pin, transition, escape |
| 7 | `/learn/bjj-tap-out-etiquette/` | When to tap, how to tap, tap-out culture |
| 8 | `/learn/how-long-bjj-black-belt/` | Average years to black belt |
| 9 | `/learn/is-bjj-safe-for-kids/` | Kids BJJ safety — research-backed |
| 10 | `/learn/bjj-for-self-defense-real/` | Does BJJ actually work for self-defense |
| 11 | `/learn/heroes-jiu-jitsu-explained/` | Heroes JJ Movement deep-dive — Tim Kennedy, Sheepdog Response, Independence Fund |
| 12 | `/learn/adopt-a-cop-bjj-process/` | Step-by-step Adopt-A-Cop application |
| 13 | `/learn/tom-deblass-biography/` | Tom DeBlass — competition record, UFC/Bellator, Ricardo Almeida lineage |
| 14 | `/learn/renzo-gracie-lineage/` | Renzo Gracie family tree → Almeida → DeBlass → MOBJJ |
| 15 | `/learn/bjj-first-class-checklist/` | What to bring + what happens in your first class |

**Schema for tutorials:** `HowTo` for the position pages (#4-#7); `DefinedTerm` for vocabulary; `Article` for the lineage / biography pages.

### B. Hyper-local landmark pages (10)

These target "BJJ near {landmark}" or commute-from-{landmark} long-tail.

| # | URL | Landmark |
|---|---|---|
| 1 | `/locations/near-lake-norman-high-school/` | Lake Norman High |
| 2 | `/locations/near-lowes-hq-mooresville/` | Lowe's Companies HQ (~9,000 employees in Mooresville) |
| 3 | `/locations/near-brawley-school-rd/` | Brawley School Rd corridor |
| 4 | `/locations/near-mooresville-high-school/` | Mooresville High |
| 5 | `/locations/near-lake-norman-medical-center/` | Lake Norman Regional Medical Center |
| 6 | `/locations/near-mooresville-fire-dept/` | Mooresville Fire Dept (paired with Heroes JJ angle) |
| 7 | `/locations/near-charlotte-motor-speedway/` | Charlotte Motor Speedway (Race City USA hook) |
| 8 | `/locations/davidson-college-students/` | Davidson College (student-targeted) |
| 9 | `/locations/lake-norman-region-bjj/` | Lake Norman regional roundup |
| 10 | `/locations/i-77-exit-36-bjj/` | I-77 Exit 36 corridor commuters |

**Per-page content:** Each MUST mention the landmark by name in the H1 + first paragraph + meta description, include actual driving directions / commute time, and link back to a parent service page.

### Internal linking (Phase 4)

- Each glossary page now cross-links to 3-5 related glossary entries (we have 20 by end of Phase 4)
- Each landmark page links to the closest neighborhood/zip page from Phases 1-3
- Add a "Learn" mega-menu in the main nav listing all 20 glossary URLs in 4 columns


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
- [ ] Commit message: `feat(seo): Phase 4 — Glossary Depth + Hyper-Local Landmarks (25 pages)`
- [ ] `git push` to trigger Cloudflare Pages deploy
- [ ] Verify deploy URL serves the new pages (200 status on a sample of 5)
- [ ] Update Search Console with the new sitemap version

---

## Notes

- If you're unsure whether a neighborhood/landmark/school is real, flag it to the user instead of inventing one.
- If a persona page would cannibalize an existing page, skip it and note the conflict.
- Real photos > Unsplash placeholders — when MOBJJ provides photos for any neighborhood/persona, swap them in as part of this phase.
