# Phase 5 — Offer Pages + Edge Suburbs

**Target:** Build 25 new programmatic SEO pages for Mooresville BJJ.
**Ship date:** _____________ (user fills in)

---

## Before you start — read these

You are continuing the Mooresville BJJ buildout. The first 14-page foundation site is already live in `sites/mooresville-bjj/`. This phase adds Phase 5 of a 6-month programmatic SEO roadmap.

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

## Pages to build in Phase 5


### A. Offer / conversion-focused pages (10)

| # | URL | Offer / topic |
|---|---|---|
| 1 | `/free-trial-class/` | $0 first-class trial signup walkthrough |
| 2 | `/no-contract-guarantee/` | Our no-contract / no-signup-fee policy in detail |
| 3 | `/family-discount/` | Family discount calculator + how to claim |
| 4 | `/heroes-jiu-jitsu-signup/` | Free Heroes JJ class — what to bring, how to register, schedule |
| 5 | `/adopt-a-cop-application/` | Adopt A Cop step-by-step application + acceptance criteria |
| 6 | `/womens-only-intro-week/` | Women's only intro week (TBD with MOBJJ) |
| 7 | `/summer-camp-bjj-mooresville/` | Summer BJJ camp (kids 5-12) |
| 8 | `/kids-birthday-party-mooresville/` | Kids BJJ birthday party packages |
| 9 | `/bjj-tournament-prep-camp/` | 6-week tournament prep cycle |
| 10 | `/open-mat-schedule-mooresville/` | Open mat days, visiting policies, gym etiquette |

**Schema:** `Offer` with priceCurrency, validFrom/validThrough, eligibleCustomerType where relevant.

### B. Edge-suburb / wider-metro location pages (15)

| # | URL | Town |
|---|---|---|
| 1 | `/locations/catawba/adult-bjj/` | Catawba |
| 2 | `/locations/lincolnton/adult-bjj/` | Lincolnton |
| 3 | `/locations/concord-nc/adult-bjj/` | Concord, NC (~23 mi) |
| 4 | `/locations/kannapolis/adult-bjj/` | Kannapolis |
| 5 | `/locations/salisbury-nc/adult-bjj/` | Salisbury, NC |
| 6 | `/locations/iredell-county-bjj/` | Iredell County roundup |
| 7 | `/locations/north-mecklenburg-bjj/` | North Mecklenburg roundup |
| 8 | `/locations/south-iredell-bjj/` | South Iredell roundup |
| 9 | `/locations/davidson-college-bjj/` | Davidson College students (split from landmark) |
| 10 | `/locations/uncc-students-bjj/` | UNC Charlotte students (commute analysis) |
| 11-15 | `/locations/{remaining-edge-suburb}/{service}/` | Up to 5 more based on demand validation |

**Edge-suburb caveat:** These pages serve as catchment-net pages. They convert at lower rates than tier-1 neighborhoods but together capture meaningful long-tail volume. Be honest in the copy that MOBJJ is a 20-30 minute drive and explain why members from these areas still choose it.

### Internal linking (Phase 5)

- Offer pages each get a prominent CTA on the existing pricing.html and memberships.html (add a "Special offers" sidebar)
- Edge-suburb pages link to the closest tier-1 neighborhood


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
- [ ] Commit message: `feat(seo): Phase 5 — Offer Pages + Edge Suburbs (25 pages)`
- [ ] `git push` to trigger Cloudflare Pages deploy
- [ ] Verify deploy URL serves the new pages (200 status on a sample of 5)
- [ ] Update Search Console with the new sitemap version

---

## Notes

- If you're unsure whether a neighborhood/landmark/school is real, flag it to the user instead of inventing one.
- If a persona page would cannibalize an existing page, skip it and note the conflict.
- Real photos > Unsplash placeholders — when MOBJJ provides photos for any neighborhood/persona, swap them in as part of this phase.
