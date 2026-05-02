# Phase 6 — Fill Remaining Matrix + Refresh Phase-1 Pages

**Target:** Build 25 new programmatic SEO pages for Mooresville BJJ.
**Ship date:** _____________ (user fills in)

---

## Before you start — read these

You are continuing the Mooresville BJJ buildout. The first 14-page foundation site is already live in `sites/mooresville-bjj/`. This phase adds Phase 6 of a 6-month programmatic SEO roadmap.

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

## Pages to build in Phase 6


### A. Matrix-fill pages (15)

These are the gaps remaining from the services × personas × locations matrix. Run a quick audit of what's already shipped before building — don't duplicate. Likely candidates:

| # | URL | Gap filled |
|---|---|---|
| 1-3 | `/programs/kids-bjj-{persona}/` × 3 | Kids 8-12 for athletes / Kids 5-7 for shy kids / Kids competition |
| 4-6 | `/programs/womens-{service}/` × 3 | Women's beginner / Women's competition / Women's self-defense |
| 7-9 | `/programs/teens-{service}/` × 3 | Teen anti-bullying / Teen athletic edge / Teen first class |
| 10-12 | `/programs/{competition-tier}/` × 3 | White belt comp / Blue belt comp / Master's division |
| 13-15 | `/locations/{remaining}/` × 3 | Whatever neighborhoods didn't get coverage |

Validate against the URL inventory at the start of Phase 6 — if any of the above are already shipped, swap in the next-most-valuable matrix gap.

### B. Refresh / optimize Phase-1 pages (10)

For each of the 4 top-neighborhood × 5 services Phase-1 pages, pick 10 to refresh based on:

- Pages with low impressions in Search Console (rewrite intro to better match search intent)
- Pages with low CTR (rewrite title + meta to be more compelling)
- Pages where MOBJJ has new neighborhood-specific photos / testimonials → swap in
- Pages where the schedule snippet drifted from the live class times → update

| # | URL | Refresh focus |
|---|---|---|
| 1 | `/locations/davidson/adult-bjj/` | Add new Davidson member testimonial, refreshed photo |
| 2 | `/locations/davidson/kids-bjj-8-12/` | Update with summer-camp CTA (now that summer-camp page exists) |
| 3 | `/locations/cornelius/adult-bjj/` | Add Lake Norman waterfront landmark intro |
| ... | (repeat for 7 more based on data) | |

### C. Optimization passes (already built into the 10 above; track separately)

- Run `/seo-audit` against the entire site (now ~150 pages)
- Find any internal-link cul-de-sacs and add cross-links
- Run sitemap.xml diff vs. Search Console indexed-pages report — submit anything missing
- Audit Core Web Vitals on the heaviest pages

### Internal linking (Phase 6)

- Add a "Locations" mega-menu listing all 90+ location pages organized by area (Mooresville / Davidson-Cornelius-Huntersville / Statesville-Troutman / Edge suburbs)
- Add a "Programs by Audience" hub at `/programs/` listing all 30 persona pages

### After Phase 6 — handoff to ongoing optimization

After this phase ships, MOBJJ has 150+ programmatic pages plus the original 14-page foundation site. Ongoing work shifts from net-new-page production to:

1. Monthly Search Console audit — refresh underperformers
2. Quarterly competitor scan — add comparison pages for any new local competitor
3. Member-photo / video collection — replace remaining Unsplash placeholders
4. Google Business Profile sync — pull new GBP reviews into review pages
5. Seasonal campaigns — back-to-school, summer camp, January resolution surge

Hand the post-Phase-6 work back to the agency's normal monthly retainer cadence.


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
- [ ] Commit message: `feat(seo): Phase 6 — Fill Remaining Matrix + Refresh Phase-1 Pages (25 pages)`
- [ ] `git push` to trigger Cloudflare Pages deploy
- [ ] Verify deploy URL serves the new pages (200 status on a sample of 5)
- [ ] Update Search Console with the new sitemap version

---

## Notes

- If you're unsure whether a neighborhood/landmark/school is real, flag it to the user instead of inventing one.
- If a persona page would cannibalize an existing page, skip it and note the conflict.
- Real photos > Unsplash placeholders — when MOBJJ provides photos for any neighborhood/persona, swap them in as part of this phase.
