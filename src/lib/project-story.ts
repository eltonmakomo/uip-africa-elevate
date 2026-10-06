// Organises a project's published detail lines into a readable case-study story.
// Only uses text that already exists for the project — nothing is invented.

export type ProjectStory = {
  overview: string[];
  challenge: string[];
  contribution: string[];
  solution: string[];
  outcomes: string[];
  facts: string[];
};

type Key = keyof ProjectStory;

const isHeading = (line: string) => line.trim().endsWith(":");

export function buildProjectStory(details: readonly string[] = [], summary?: string): ProjectStory {
  const story: ProjectStory = { overview: [], challenge: [], contribution: [], solution: [], outcomes: [], facts: [] };
  let section: Key = "overview";

  for (const raw of details) {
    const line = raw.trim();
    if (!line) continue;
    const lower = line.toLowerCase();
    const long = line.length > 140;

    if (/challenge|constrain|driving the|problem/.test(lower) && (isHeading(line) || long)) {
      section = "challenge";
      if (isHeading(line)) continue;
    } else if (/(our approach|we applied|approach combined|uip africa was appointed|our appointment|our role|scope of work)/.test(lower)) {
      if (section === "overview" && /appointed|appointment/.test(lower)) {
        story.contribution.push(line);
        continue;
      }
      section = "contribution";
      story.contribution.push(line);
      section = "solution";
      continue;
    } else if (/(expected to deliver|completed development|outcome|impact|result|demonstrates|benefit)/.test(lower) && (isHeading(line) || long)) {
      section = "outcomes";
      if (isHeading(line)) continue;
    }

    if (section === "overview" && !long && story.overview.length > 0) {
      story.facts.push(line);
      continue;
    }
    if (isHeading(line)) continue;
    story[section].push(line);
  }

  if (!story.overview.length && summary) story.overview.push(summary);
  return story;
}
