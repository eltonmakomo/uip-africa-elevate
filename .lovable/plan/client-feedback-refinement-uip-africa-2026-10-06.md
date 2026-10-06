# Client feedback refinement — UIP Africa

## 1. Hero
- New positioning headline: "Engineering built for the realities of today and the needs of tomorrow."
- Short supporting line covering African infrastructure impact, innovation and sustainability.
- Two clear actions: "View our projects" and "Talk to an engineer" (goes to Contact).
- Credibility strip on the banner: years in practice, projects delivered, disciplines, ISO/ZACE only if verified (otherwise omitted).
- Strong infrastructure image, set up so a real UIP photo can replace it in one place.

## 2. Remove Expertise
- Remove the Expertise page, its menu/footer links and the homepage section. Old /expertise address sends visitors to Services.

## 3. Disciplines vs Services
- Disciplines = what UIP specialises in (Civil, Structural, Water & Sanitation, Transportation, Geomatics) — short definitions, no overlap with services.
- Services = what UIP delivers for clients (design, project management, asset management, stormwater, surveys, feasibility, supervision) — each linking to its detail page.
- Each project and service tagged with its discipline so the three sections cross-link.

## 4. Projects
- Homepage: a balanced "Selected projects" grid across sectors; Pomona becomes one card among several.
- Projects page: all 26 live projects with filters by sector/discipline.
- Project detail pages restructured into: key facts panel (client, location, discipline, status, date/duration, value), Challenge, UIP's contribution, Engineering solution, Outcomes, gallery, related projects, enquiry CTA. Fields only shown where live-site content exists — nothing invented.

## 5. Visual identity
- Burgundy as the sole brand accent; warm neutral backgrounds, more white space.
- Tone down the coloured service tiles into a refined, mostly neutral card system with burgundy highlights.
- Consistent image ratios, typography scale and spacing across every page.

## 6. Homepage flow
Hero → Why UIP → Disciplines → Services → Selected projects → Impact/results (verified numbers) → About/experience → Clients → CTA band → Contact block (address, phone, email, short form).
- Insights section removed from the homepage (keeps its own page) to reduce length.

## 7. Navigation
- Menu: About, Disciplines, Services, Projects, People, Insights, Contact (button style).
- Every homepage Contact CTA goes to the Contact page; all cards/buttons audited.

## 8. Contact and polish
- Contact form with validation (required fields, email format, inline errors, success state). Sending remains via the visitor's email app unless you want real delivery (needs Lovable Cloud).
- Remove placeholder or unfinished bits (e.g. unverified claims, dead links).
- Lazy-loaded, sized images; reduced-motion support; accessibility pass (contrast, focus, alt text).

## Verification
- Automated check of every page and link on desktop, tablet and mobile; no overflow, broken images or console errors.

## Technical details
- Content stays in `src/lib/site-data.ts`; add `discipline`, `challenge`, `contribution`, `solution`, `outcomes` fields to projects (filled from live pages).
- Delete `src/routes/expertise.tsx` and `Expertise.tsx`; add redirect route.
- Contact form validated with zod; homepage Contact block reuses the same form component.
