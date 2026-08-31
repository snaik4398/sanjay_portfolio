# sanjay-portfolio

The personal portfolio of Sanjay Naik, as a static Astro site. Content comes from the LaTeX
resume at `TestingArea/Resume/overleaf/sanjay aug 2 page.tex`: four roles across two
employers, three degrees, six skill groups, three certifications, and eight projects, each
with its own write-up page.

**Everything on the site is defined in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**
Site metadata, nav, bio, socials, skills, experience, education, certifications and projects
all live there, and `astro.config.ts` imports the site URL from it, so the domain is set in
one place too. No copy is hard-coded in a component.

The design language is Vercel's Geist: near-monochrome neutrals, hairline borders, one
violet accent, dark by default with a real light theme.

## Quickstart

```bash
nvm use 22
npm install
npm run dev
```

## Commands

| Command | What it does | When you want it |
|---|---|---|
| `npm run dev` | Starts the dev server on port 4321 | Day-to-day editing. No type checking. |
| `npm run build` | `astro check` then `astro build` into `dist/` | The gate before shipping. This is the only command that type-checks. |
| `npm run preview` | Serves the built `dist/` | Confirming the production output, not the dev output. |
| `npm run typecheck` | `astro check` alone | A fast type pass without a full build. |
| `npm audit` | Dependency vulnerability scan | Before a deploy. Currently reports 0. |

### Environment notes

- **Node 22 is required.** `engines.node` is `>=22.12.0` and `.nvmrc` pins `22`. This
  machine defaults to Node 20, so run `nvm use 22` first or the install fails.
- **The dev and preview servers are daemons.** Astro 7 backgrounds them: the command
  returns immediately, the server outlives the terminal, and Ctrl-C does not stop it. Use
  `npx astro dev status`, `npx astro dev logs` and `npx astro dev stop` (same three for
  `preview`). Starting a second one on a new port silently reuses the first.
- **Port conflicts** resolve by auto-increment. Pin one with `npm run dev -- --port 4400`.
- **`npm run dev` does not type-check.** A clean dev run says nothing about type errors;
  only `npm run build` does.

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 7, `output: 'static'`, TypeScript config |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite`, tokens in `@theme` |
| Language | TypeScript strict, checked by `astro check` in the build |
| Interactivity | Vanilla TypeScript in `<script>` blocks. No React. |
| Fonts | System stack. No webfont, so nothing blocks first paint. |
| SEO | `@astrojs/sitemap`, per-page canonical, Open Graph, JSON-LD |
| Hosting | Cloudflare Pages free tier |

## Layout

```
src/
├── data/portfolio.ts       <- THE ONLY FILE YOU EDIT. All content, all config.
├── lib/inline.ts           backtick to <code> tokenizer for project prose
├── layouts/BaseLayout.astro
├── components/             BackgroundFX, BaseHead, Header, Footer, ThemeToggle,
│                           Hero, Section, Skills, Experience, Education,
│                           Certifications, ProjectCard, Contact, SocialLinks,
│                           InlineText
└── pages/
    ├── index.astro         the single-page portfolio
    ├── projects/[slug].astro   one write-up per project
    └── 404.astro
```

To change anything, edit `src/data/portfolio.ts` and rebuild. Nothing else needs touching.

## Decisions

**One config file.** Content was split across `consts.ts`, `bio.ts`, `skills.ts`,
`career.ts` and `projects.ts`, which meant a single edit touched several files and the site
URL was duplicated between `consts.ts` and the Astro config. It is now one module, and the
Astro config is `.ts` purely so it can import from it.

**The phone number on the resume is not on the site.** A resume goes to named recipients;
this page is crawlable. Email and LinkedIn are the contact paths.

**Skill chips render without a logo when there is no logo.** Six of the resume's skill
groups are platform concepts (RBAC, HLD/LLD, Fault Tolerance) that have no icon. `icon` is
optional and text-only chips get symmetric padding. Every devicon URL was checked for a 200
before being committed, which is how `springboot/springboot-original` was caught: it 403s,
and the correct slug is `spring/spring-original`.

**Four job titles, two employers.** Karkinos was acquired by Jio Platform Limited, so the
intern role carries the Karkinos name and the three later titles carry Jio's. The hero
designation is "Senior Backend Engineer"; the experience entries keep the actual titles held.

**Every source file opens with a note.** Each `.astro` and `.ts` file starts with a comment
saying what it renders and, more usefully, the non-obvious decision inside it: why the mobile
menu is a `<details>`, why the role rotator has a pause button, why the stretched link needs a
positioned ancestor. That is the context that is expensive to reconstruct on a later read.

**Certifications ship collapsed.** A `<details>` element, closed by default: the section is
in the DOM and crawlable, but costs no vertical space until opened. `<details>` gives real
keyboard support with no JavaScript and no `aria-expanded` to keep in sync by hand. At 16
entries this matters more than it did at 3.

**One background canvas instead of alternating section fills.** The previous version
alternated tinted and untinted section backgrounds, which read as flat and empty. There is
now a single fixed layer (grid, two drifting accent glows, faint SVG grain) behind
transparent sections, so cards read as objects on a canvas. The glows animate `transform`
only and hold still under `prefers-reduced-motion`.

**`TimeLineData` from the old React portfolio was dropped.** It was never rendered and its
entries ("Founded JavaScript Mastery") came from the starter template.

**No contact form.** The React version posted through EmailJS, needing a publishable key and
a third-party account to mail one address. The contact section links to email and LinkedIn.

**Project links are filtered, not rendered dead.** Only the video transcoding platform has a
public repository. `realLinks()` drops the `#` placeholders so no visitor clicks an anchor
that goes nowhere.

### Where the certifications came from

`linkedin.com/in/sanjaynaikdev` returns **HTTP 999** to any non-browser client, so a plain
fetch cannot read it. The 16 entries in `CERTIFICATIONS` were pulled on **2026-08-31** with
the `harvestapi/linkedin-profile-scraper` Actor on Apify, which returns the profile's
`certifications[]` array with title, issuer, issue date and verification link. Cost was
about USD 0.004 for the one profile.

To refresh the list later, re-run that Actor against the profile URL and diff its
`certifications[]` against the array in the config. Fifteen of the sixteen come from the
profile; `Introduction to Generative AI` is on the resume but not on the profile, and is
flagged as such in a comment so it is an explicit choice rather than a stray entry.

Projects come from the resume's Projects section, which has fuller detail than the profile.

## Design and accessibility

`spec/frontend/design-system.md` is the source of truth for colour, type, spacing and
motion; `src/styles/global.css` implements it. Contrast ratios in that file are computed
with the WCAG relative-luminance formula, not eyeballed, and the two deliberate exceptions
(decorative hairline borders) are stated with their reasoning.

The UI was written against, and audited with, Vercel's
[Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines).

## Status

| Area | State |
|---|---|
| Build | Clean. `astro check` reports 0 errors, 0 warnings, 0 hints. |
| Routes | 10 pages: home, 8 project write-ups, 404. Sitemap generated. |
| Dependencies | 294 packages, 0 vulnerabilities. |
| Content | 4 roles (30 bullets), 3 degrees, 6 skill groups, 16 certifications, 8 projects. |
| Themes | Dark and light, persisted to `localStorage`, no flash on load. |
| Deploy | Not deployed. `SITE_URL` is still `https://example.com`. |

### Before the first deploy

1. Set `SITE.url` in `src/data/portfolio.ts`. That is the only place it appears;
   `astro.config.ts` imports it.
2. Update the sitemap URL in `public/robots.txt` to match.
3. Deploy: `npx wrangler pages deploy dist --project-name=sanjay-portfolio`, or connect the
   repository in the Cloudflare dashboard with build command `npm run build` and output
   directory `dist`.
4. Submit the sitemap to Google Search Console and Bing Webmaster Tools.

`public/profile.png` is the hero portrait carried over from the React repo. Replace it with
a purpose-shot image when one exists; it is also the Open Graph image.
