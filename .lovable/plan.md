# Normalize spacing across all pages

## What will change
- Establish one consistent vertical rhythm for inner-page banners, primary sections, content grids, and footer transitions.
- Reduce unusually large top and bottom gaps while preserving the homepage banner composition and intentionally tall image/service tiles.
- Tighten repeated card-grid offsets so Projects, Services, Insights, People, About, Contact, and detail pages align visually.
- Remove compounded spacing where adjoining elements both add large padding, especially the footer and Expertise opening sequence.

## Page coverage
- Home, About, Expertise, Disciplines, People, Services, Projects, Insights, and Contact.
- Every service, project, and insight detail page.
- Shared calls-to-action and footer used across the site.

## Technical details
- Normalize standard content bands from `py-24/md:py-32` or larger to a restrained shared rhythm around `py-16/md:py-24`.
- Tighten PageHero bottom spacing and the first section beneath it so adjacent padding does not create oversized empty bands.
- Reduce large grid offsets such as `mt-16` to consistent responsive values while retaining clear section hierarchy.
- Remove the footer's duplicate vertical padding layer.
- Remove the Expertise page's extra first-section top-padding override while preserving its cinematic image sequence.

## Verification
- Check all routes at desktop, tablet, and mobile widths for balanced spacing, no horizontal overflow, and no content collisions.
- Confirm navigation, images, dialogs, carousels, and detail-page links still work.
- Confirm the final build has no errors.
