# Phase 1 — Foundation — Top Locations + Core Glossary

**Target:** Build 25 new programmatic SEO pages for Mooresville BJJ.
**Ship date:** _____________ (user fills in)

---

## Before you start — read these

You are continuing the Mooresville BJJ buildout. The first 14-page foundation site is already live in `sites/mooresville-bjj/`. This phase adds Phase 1 of a 6-month programmatic SEO roadmap.

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

## Pages to build in Phase 1


### A. Location pages (20)

5 services × 4 top neighborhoods = 20 pages.

| # | URL | Title (≤60ch) | H1 | Service | Neighborhood |
|---|---|---|---|---|---|
| 1 | `/locations/davidson/adult-bjj/` | Adult BJJ in Davidson NC | Mooresville BJJ | Adult Brazilian Jiu-Jitsu in Davidson | Adult BJJ | Davidson |
| 2 | `/locations/davidson/no-gi/` | No-Gi BJJ in Davidson NC | Mooresville BJJ | No-Gi Jiu-Jitsu in Davidson | No-Gi | Davidson |
| 3 | `/locations/davidson/kids-bjj-5-7/` | Kids BJJ Ages 5-7 in Davidson NC | MOBJJ | Kids Jiu-Jitsu (Ages 5-7) in Davidson | Kids 5-7 | Davidson |
| 4 | `/locations/davidson/kids-bjj-8-12/` | Kids BJJ Ages 8-12 in Davidson NC | MOBJJ | Kids Jiu-Jitsu (Ages 8-12) in Davidson | Kids 8-12 | Davidson |
| 5 | `/locations/davidson/self-defense/` | Self-Defense BJJ in Davidson NC | MOBJJ | Self-Defense in Davidson | Self-Defense | Davidson |
| 6-10 | `/locations/cornelius/{service}/` | (same pattern) | Brazilian Jiu-Jitsu in Cornelius | 5 services | Cornelius |
| 11-15 | `/locations/huntersville/{service}/` | (same pattern) | Brazilian Jiu-Jitsu in Huntersville | 5 services | Huntersville |
| 16-20 | `/locations/statesville/{service}/` | (same pattern) | Brazilian Jiu-Jitsu in Statesville | 5 services | Statesville |

**Per-page unique-content blocks (at least 4 of 8 from roadmap.md):**
- Neighborhood-specific intro — actual landmark in each town (Davidson College, Birkdale Village in Huntersville, Statesville Civic Center, Lake Norman waterfront for Cornelius, etc.)
- Commute time from the named neighborhood to 243 Overhill Dr (8 min Davidson, 10 min Cornelius, 12 min Huntersville, 14 min Statesville — verify with Google Maps before publishing)
- Schedule snippet showing the program's class times
- Coach attribution naming the actual instructor for that program
- Pricing reminder ($140 adult / $110 youth, no contract)
- Map embed centered on the neighborhood with MOBJJ pinned
- One handwritten paragraph specific to that audience (e.g., for Davidson Adult BJJ: "Davidson commuters appreciate that our adult Gi class doesn't start until 7 PM — easy run from Davidson College or downtown after work…")
- Member testimonial pulled from the 103 Google reviews

**Required schema per page:** `LocalBusiness` with `areaServed: { name: '{neighborhood}', addressRegion: 'NC' }` + `BreadcrumbList` + `Service` (with the service name + audience).

### B. Glossary pages (5)

| # | URL | Title | H1 | Topic |
|---|---|---|---|---|
| 21 | `/learn/what-is-brazilian-jiu-jitsu/` | What Is Brazilian Jiu-Jitsu? | MOBJJ | What Is Brazilian Jiu-Jitsu? | Foundation glossary |
| 22 | `/learn/what-is-no-gi-bjj/` | What Is No-Gi Jiu-Jitsu? | MOBJJ | What Is No-Gi BJJ? | No-Gi explained |
| 23 | `/learn/bjj-belt-system/` | BJJ Belt System Explained | MOBJJ | The Brazilian Jiu-Jitsu Belt System | White → Black ranking, kids belts, average promotion times |
| 24 | `/learn/what-is-rolling-in-bjj/` | What Is Rolling in BJJ? | MOBJJ | What Is "Rolling" in BJJ? | Live training explained, when you start, etiquette |
| 25 | `/learn/tom-deblass-affiliate/` | Tom DeBlass BJJ Affiliate Network | MOBJJ | What Tom DeBlass Affiliation Means | Lineage + competition record + why it matters |

**Per-page unique-content:** 800-1200 words of original explanation, comparison to similar terms, link to relevant location/persona pages, embedded YouTube tutorial if appropriate (linked, not auto-played), schema = `DefinedTerm` + `BreadcrumbList`.

### Internal linking (Phase 1)

- Add a `/locations/` hub page linked from the main nav under "Locations"
- Add a `/learn/` hub page linked from the footer
- Each location page links to the matching service page on the existing site (`/programs/...` if those exist; otherwise `/index.html#adult-bjj` style anchors)
- Each glossary page cross-links to two related glossary entries (you'll only have 5 in Phase 1, so each links to 2 others; full graph builds in later phases)

### Phase 1 sitemap delta

Add 25 new `<url>` entries to `sitemap.xml`. Set `priority` 0.6 for location pages, 0.5 for glossary pages, `changefreq` monthly.


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
- [ ] Commit message: `feat(seo): Phase 1 — Foundation — Top Locations + Core Glossary (25 pages)`
- [ ] `git push` to trigger Cloudflare Pages deploy
- [ ] Verify deploy URL serves the new pages (200 status on a sample of 5)
- [ ] Update Search Console with the new sitemap version

---

## Notes

- If you're unsure whether a neighborhood/landmark/school is real, flag it to the user instead of inventing one.
- If a persona page would cannibalize an existing page, skip it and note the conflict.
- Real photos > Unsplash placeholders — when MOBJJ provides photos for any neighborhood/persona, swap them in as part of this phase.
