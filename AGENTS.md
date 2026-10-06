<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Project case-study sections (challenge, contribution, solution, outcomes) are derived at render time from each project's published `details` via `src/lib/project-story.ts` — keeps content sourced from the live site without hand-splitting 26 records.
- Disciplines (technical fields) and services (lifecycle phases) are kept separate; disciplines cross-link to services by slug and to projects by sector match.
