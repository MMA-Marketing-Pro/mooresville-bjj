# Mooresville BJJ — Site Analysis

## Business Snapshot
- **Type:** Brazilian Jiu-Jitsu academy serving adults and kids in Mooresville, NC.
- **Address:** 243 Overhill Dr, Mooresville, NC 28117
- **Phone:** 704-360-0159 · **Email:** mooresvillebjj@gmail.com
- **Lineage:** Tom DeBlass affiliate (DeBlass is 2nd Degree BB under Ricardo Almeida → Renzo Gracie 4th Degree).
- **Stats they lead with:** 4 black-belt instructors, 100+ students, 5.0 stars (103 reviews on Google), 40+ years combined experience.
- **Programs:** Adult BJJ (Gi & No-Gi), Kids 5-7, Kids 8-12, Fitness & Weight Loss, Competition Class.
- **Specialty programs:** Tom DeBlass Affiliate, Heroes Jiu-Jitsu (free weekly class for first responders/veterans/teachers), Adopt A Cop BJJ (free training for active-duty patrol officers up to blue belt).
- **Pricing:** Adult $140/mo, Youth $110/mo. No contracts. No sign-up fees. No promotion charges. Family discounts.

## Instructors
| Name | Rank |
|---|---|
| Mike Bertram | Black Belt — 1 Stripe |
| Luke Moeller | Black Belt — 1 Stripe |
| Matt Jameson | Black Belt |
| Mike Peters | Black Belt |
| Brooke Bertram | Black Belt |
| Joseph Torres | Purple Belt — 2 Stripes |

## Page Inventory (14 pages → all rebuilding)
1. **Home** — hero, programs grid, stats strip, affiliations, testimonials.
2. **Instructors** — six bios with belt rank.
3. **Schedule** — currently empty placeholder; new site will get a structured weekly grid.
4. **Pricing** — Adult / Youth tiers + four no-contract guarantees.
5. **Memberships (Book a Trial Class)** — funnel page → re-built as `booking.html` per the kit's standard flow.
6. **Contact** — phone, email, address, map, message form.
7. **FAQs** — 5 long-form questions (BJJ basics, first class, dress, live training, school rules).
8. **Reviews** — 103 Google reviews; we'll feature 12-15 strongest with full text.
9. **Tom DeBlass Affiliation** — lineage / Renzo Gracie heritage page.
10. **Heroes Jiu-Jitsu Movement** — first-responder / military free class.
11. **Adopt A Cop BJJ** — free LEO training program.
12. **Competition** — competition class details.
13. **Fitness & Weight Loss** — fitness-angle page with two FAQs.
14. **Dress Code** — adults / women's / kids' uniform requirements.

## Current Site Issues
- **Generic Sitebuilder template** — light gray (`#EEEEEE`) body, no visual identity, "Share by:" watermark in the footer.
- **No hero energy** — the homepage opens with two H1 lines stacked on flat background; there's nothing that says "this is a black-belt-run combat sports academy."
- **Instructors page** is text-only — six names, six belt ranks, no photos, no fight records, no story, no proof of lineage above-fold.
- **Schedule page is literally empty** — just an H1, nothing else.
- **Reviews page** uses a third-party SociableKit widget that loads slow and looks like an embed.
- **Affiliations buried** — Tom DeBlass + Heroes + Adopt A Cop are the academy's strongest credibility plays but they live three clicks deep.
- **Mobile** — the GHL template handles mobile but offers nothing that converts: no sticky trial CTA, no obvious phone-tap, no hero-collapsed treatment.

## Design Decision — Precision Barracks Template (performance-athletic-skill)
Per user direction: model this site after **Precision Jiu-Jitsu — The Barracks**. That site uses:
- True-black `#0B0B0E` substrate with two-tier surface elevation (`#14141A` cards / `#1C1C24` modals).
- **Archivo Black** display + **Inter** body + **Rubik Mono One** stencil for one-word callouts ("DISCIPLINE.", "PRESSURE.", "PRECISION." style).
- Oversized kinetic marquees, military-industrial energy, performance-athletic register (Nike / Under Armour / Onnit).
- Lead modal + booking.html funnel.

For Mooresville BJJ we **reuse the Precision template DNA** — same dark substrate, same Archivo Black + Inter + Rubik Mono One stack, same kinetic marquees and stencil callouts — but **swap the accent from Precision's racing red to Mooresville's actual brand gold `#B79C54`** (the dominant color in the MOBJJ logo) so we honor the brand-analysis rule that we keep the client's real colors. Gold-on-true-black also lands a Tom DeBlass-affiliate "championship lineage" feel that fits the academy's positioning.

**Stencil callouts** for the Mooresville variant: **TECHNIQUE. PRESSURE. PRECISION. CONNECTION.** — pulling language directly from member reviews ("techniques are rock solid", "perfect balance between technique and sparring", "gain important competencies").

## Essential vs. Optional Pages
**Essential (must rebuild well):** Home, Instructors, Schedule, Pricing, Booking (memberships), Contact, FAQs, Reviews, Tom DeBlass Affiliation.

**High-value secondary:** Heroes Jiu-Jitsu, Adopt A Cop BJJ — both are unique credibility hooks no competitor in the area offers.

**Lower priority but build anyway:** Competition, Fitness & Weight Loss, Dress Code — operational utility pages.

All 14 source pages will be rebuilt (per the kit's "recreate every page" rule). Plus `booking.html` from the standard lead-capture flow → 15 total HTML files.
