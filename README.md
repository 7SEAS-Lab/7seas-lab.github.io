# 7SEAS Lab

A static Astro website for **Scalable and Efficient AI for Science**, designed for https://7seas-lab.github.io.

## Develop

Use Node.js 24, then run:

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

The static website is generated in `dist/`.

## Publish to GitHub Pages

1. Push this folder to the `7SEAS-lab/7SEAS-lab.github.io` repository, on the `main` branch.
2. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the build source.
3. The included `.github/workflows/deploy.yml` builds and deploys on every push to `main`. It can also be triggered manually.

This organization site uses `/` as its base. If you deploy under a different repository path, configure `base` in `astro.config.mjs` and update absolute internal asset/page links accordingly.

## Edit content

- **About / Team:** `src/pages/index.astro` contains the continuous About and Team page. The Team navigation links to `/#team`; `/about/` and `/team/` redirect to the corresponding section.
- **Members:** edit `src/data/team.ts`. Co-founders appear first. Add confirmed additional members with `founder: false`. Set `page: true` to generate a personal page, or `false` to link their card to an external profile. Add portraits to `public/images/team/`.
- **Research:** edit `src/data/projects.ts`. Each record generates its own detail page. `members` refers to team member slugs.
- **Blog:** add Markdown files to `src/content/blog/`. Required frontmatter: `title`, `description`, `date`, `category`. Optional: `author`, `draft`. Published entries are ordered newest first, three per page. `draft: true` excludes a post from the build.
- **Publications:** edit **`src/data/publications.bib`** for the complete member bibliography. The explicit `labPublicationIds` list in `src/data/publications.ts` selects records for the main publications page and its downloadable BibTeX. Prior work remains on member profiles and relevant research pages. Citation.js parses BibTeX at build time. Entries sort by descending year, then title. Include a DOI or URL for every entry. The page supports author/title search, year filtering, and per-entry BibTeX.
- **Contact:** edit `src/data/site.ts`. The lab contact is 7seas@lists.kit.edu; individual team members are linked in the contact section.
- **Branding:** the supplied SVG logos are in `public/images/`. The original concept image remains available from the About page. CSS design tokens are in `src/styles/global.css`.

## Editorial and source notes

The team includes 17 members, with profiles and contact details verified against the linked institutional listings. Paul and Mishal’s portraits and contacts come from the Helmholtz AI team page; Deifilia’s KIT profile provides her contact and uses initials because no public portrait is available. BEAST is described from https://arxiv.org/html/2609.12815v1.

Four initial blog articles are editorial starting content written for this site, dated 14 October 2026. They introduce the lab and summarize existing research/software; review them before public release. They do not report new project releases or lab events.

The main publications page lists the curated 7SEAS records. Earlier work is shown on member profiles and relevant research pages. Project details link to their source repositories. Initial profiles and portraits were obtained from these public institutional pages:

- Charlotte Debus: https://www.scc.kit.edu/en/staff/13870.php
- RAI group: https://www.scc.kit.edu/en/aboutus/rai.php
- Markus Götz: https://www.scc.kit.edu/personen/11452.php
- Helmholtz AI team: https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/
- Kaleb Phipps: https://www.scc.kit.edu/personen/17242.php

Portrait source pages are credited on individual profiles. Direct Google Scholar profiles are included for Markus and Kaleb. Charlotte’s link searches for her quoted name because her exact profile ID was not verified; add `scholar` in her member data when confirmed. LinkedIn and ORCID links are included where identified.

Colors derived from the supplied logo: navy `#0a2a5c`, blue `#1d87b8`, and teal `#159da7`, on white. The application icons and project illustrations are SVGs implemented for the website.

Publication records are also displayed on matching member profiles. Set `publicationIds` on a research record in `src/data/projects.ts` to connect papers to a project; the publication list, member profiles, and research pages show these connections. Paul’s bibliography includes the 14 papers and doctoral thesis listed on his personal website, with publisher metadata where available. His research pages link to the corresponding sections of that website.
