# Footer, navigation and Expertise refinement

## Build
- Replace the compact footer with the supplied full black footer: white UIP logo and positioning line, two navigation columns, Harare contact details, copyright line, closing message, and a restrained top rule.
- Use the existing site destinations for every footer item and preserve the verified UIP contact details.
- Audit all header, footer, project, service, insight, and call-to-action links. Point each internal navigation action to its matching page; create a page only when a required destination is genuinely missing.
- Add a clear current-page state to the desktop and mobile menu, matching the reference interaction with a subtle animated underline/accent treatment.
- Refine the Expertise page to mirror the supplied reference: editorial sequence sections, stage-controlled changing imagery, previous/next controls, active-stage styling, captions, and responsive behavior using the already sourced reference imagery.

## Technical details
- Use TanStack `Link` for page navigation and retain ordinary anchors only for email, telephone, and true in-page jumps.
- Keep the existing Titillium Web typography and semantic UIP color tokens; add only narrowly scoped footer/menu/Expertise styles.
- Ensure every content route retains unique page metadata.

## Verification
- Check all internal destinations for valid pages.
- Test the current-page menu state and Expertise image changes.
- Review the footer and Expertise page at desktop and mobile sizes.
- Confirm the final preview builds without errors.
