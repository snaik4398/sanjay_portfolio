# Design system — sanjay-portfolio

Design language: **Vercel / Geist** — near-monochrome neutrals, 1px hairline borders,
small radii, generous whitespace, one functional accent. Dark is the default (the previous
React portfolio was dark-first); light is a real theme, not an afterthought.

The single accent is a violet carried over from the old portfolio's `primary: #854CE6`.
`#854CE6` itself measures **4.17:1 on black**, which fails body text, so each theme gets a
tuned tint instead of reusing one hex in both.

`src/styles/global.css` is the implementation of this file. This file is the source of truth.

## Color tokens

### Dark (default)

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#000000` | Page background |
| `--color-surface` | `#0a0a0a` | Cards, chips |
| `--color-surface-2` | `#141414` | Raised / hover surface |
| `--color-border` | `#262626` | Hairline borders |
| `--color-border-strong` | `#3f3f3f` | Hover / emphasised border |
| `--color-fg` | `#ededed` | Primary text |
| `--color-fg-muted` | `#a1a1a1` | Secondary text |
| `--color-accent` | `#a78bfa` | Links, active state, focus ring |
| `--color-accent-fg` | `#000000` | Text on a filled accent button |

### Light

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#fafafa` | Cards, chips |
| `--color-surface-2` | `#f4f4f5` | Raised / hover surface |
| `--color-border` | `#e5e5e5` | Hairline borders |
| `--color-border-strong` | `#c7c7c7` | Hover / emphasised border |
| `--color-fg` | `#171717` | Primary text |
| `--color-fg-muted` | `#525252` | Secondary text |
| `--color-accent` | `#6d28d9` | Links, active state, focus ring |
| `--color-accent-fg` | `#ffffff` | Text on a filled accent button |

## Measured contrast

Computed with the WCAG 2.1 relative-luminance formula, not eyeballed.

| Pair | Ratio | Requirement | Verdict |
|---|---|---|---|
| `#ededed` on `#000000` | 18.1:1 | 4.5:1 | pass |
| `#ededed` on `#0a0a0a` | 16.9:1 | 4.5:1 | pass |
| `#a1a1a1` on `#000000` | 8.1:1 | 4.5:1 | pass |
| `#a1a1a1` on `#0a0a0a` | 7.7:1 | 4.5:1 | pass |
| `#a78bfa` on `#000000` | 7.7:1 | 4.5:1 | pass |
| `#a78bfa` on `#0a0a0a` | 7.3:1 | 3:1 (focus ring) | pass |
| `#171717` on `#ffffff` | 17.6:1 | 4.5:1 | pass |
| `#525252` on `#ffffff` | 7.8:1 | 4.5:1 | pass |
| `#525252` on `#fafafa` | 7.5:1 | 4.5:1 | pass |
| `#6d28d9` on `#ffffff` | 7.1:1 | 4.5:1 | pass |
| `#6d28d9` on `#fafafa` | 6.8:1 | 4.5:1 | pass |

**Deliberate exceptions.** `--color-border` measures 1.4:1 (dark) and 1.3:1 (light) against
its page background. Both are decorative hairlines that never carry meaning on their own —
every bordered element is also distinguished by its background and its text. No control
relies on a border alone to communicate state; focus uses the accent ring at 7.7:1, and
project stage is communicated by a text label, not by colour.

**Rejected:** `#854CE6` as accent text on `#000000` (4.17:1) and status-coloured text on a
tinted status chip — the usual "green text on green tint" pattern lands near 3:1. Stage
chips therefore use foreground-colour text with a coloured dot beside it.

## Typography

System stack only — no webfont, so nothing blocks first paint.

```
--font-sans: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto,
             'Helvetica Neue', Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
```

| Step | Size | Use |
|---|---|---|
| `display` | `clamp(2.25rem, 6vw, 4rem)` | Hero `<h1>` |
| `h2` | `clamp(1.5rem, 3vw, 2rem)` | Section headings |
| `h3` | `1.125rem` | Card titles |
| `body` | `1rem` / `1.7` | Prose |
| `small` | `0.875rem` | Metadata, chips |
| `micro` | `0.75rem` | Eyebrow labels, uppercase, `0.08em` tracking |

Headings get `text-wrap: balance`; prose gets `text-wrap: pretty`. Numeric metadata
(CGPA, dates) uses `font-variant-numeric: tabular-nums`.

## Spacing, radii, shadows

- Spacing: Tailwind's default 4px scale. Section rhythm `py-20` mobile / `py-28` desktop.
- Container: `max-width: 72rem`, `padding-inline: 1.25rem`.
- Radii: `--radius-sm: 6px`, `--radius: 8px`, `--radius-lg: 12px`, `--radius-full: 9999px`.
- Shadows: none in dark (borders do the work); light mode uses a single
  `0 1px 2px rgb(0 0 0 / 0.05)` on cards. Vercel's surfaces are flat.

## Motion

- Transitions name their properties — `transform`, `opacity`, `background-color`,
  `border-color`, `color`. Never `transition: all`.
- Duration 150ms interactive, 250ms entrance. Easing `cubic-bezier(0.4, 0, 0.2, 1)`.
- The hero role rotator is the only looping animation. It runs longer than 5s, so it ships
  with a real pause button, and under `prefers-reduced-motion: reduce` it renders all four
  roles as static text and never animates.

## Accessibility floor

- `:focus-visible` ring on every interactive element: 2px accent, 2px offset.
- Skip-to-content link, hierarchical headings, `scroll-margin-top` on anchor targets.
- `color-scheme` on `<html>` and a `<meta name="theme-color">` per theme.
- Icon-only buttons carry `aria-label`; decorative SVG carries `aria-hidden="true"`.
- Every `<img>` has `alt`, `width` and `height`. Below-fold images are `loading="lazy"`.
