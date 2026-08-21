# kampsy-ui Design Tokens (`src/theme.css:1-227`)

> Tailwind v4 `@theme` tokens. Consumer must pair every `kui-light-*` with its `dark:kui-dark-*` counterpart. Dark mode toggles via `.dark` class on `<html>` (see `ThemeSwitcher`).

## How to use

```svelte
<div class="bg-kui-light-bg dark:bg-kui-dark-bg
            text-kui-light-gray-1000 dark:text-kui-dark-gray-1000
            border-kui-light-gray-200 dark:border-kui-dark-gray-400">
  …
</div>
```

Do not hard-code hex — use tokens so dark mode + future palette changes work.

## Setup (must be present or tokens purge)

In `src/app.css` (or `src/routes/layout.css`):

```css
@import 'tailwindcss';
@import "kampsy-ui/theme.css";
@source "../node_modules/kampsy-ui/dist";
```

`@variant dark (&:where(.dark, .dark *));` is already in `kampsy-ui/theme.css:1`.

Border default is overridden (`src/theme.css:211-227`): light `kui-light-gray-200`, dark `kui-dark-gray-200`.

---

## Gray scale (core)

| Step | Light | Dark |
|------|-------|------|
| 1000 (foreground) | `kui-light-gray-1000` `#171717` | `kui-dark-gray-1000` `#ededed` |
| 900 | `kui-light-gray-900` `hsla(0,0%,30%,1)` | `kui-dark-gray-900` `hsla(0,0%,63%,1)` |
| 800 | `kui-light-gray-800` `49%` | `kui-dark-gray-800` `49%` |
| 700 | `kui-light-gray-700` `56%` | `kui-dark-gray-700` `56%` |
| 600 | `kui-light-gray-600` `66%` | `kui-dark-gray-600` `53%` |
| 500 | `kui-light-gray-500` `79%` | `kui-dark-gray-500` `27%` |
| 400 | `kui-light-gray-400` `92%` | `kui-dark-gray-400` `18%` |
| 300 | `kui-light-gray-300` `90%` | `kui-dark-gray-300` `16%` |
| 200 | `kui-light-gray-200` `92%` | `kui-dark-gray-200` `12%` |
| 100 | `kui-light-gray-100` `95%` | `kui-dark-gray-100` `10%` |
| bg | `kui-light-bg` `#fff` | `kui-dark-bg` `#000` |
| bg-secondary | `kui-light-bg-secondary` `98%` | `kui-dark-bg-secondary` `0%` |

Alpha grays also exist: `kui-light-gray-alpha-100` … `1000` and `kui-dark-gray-alpha-100` … `1000` (for subtle borders / hover).

## Usage guidance (from components)

- **Page bg:** `bg-kui-light-bg dark:bg-kui-dark-bg`
- **Card/border:** `border-kui-light-gray-200 dark:border-kui-dark-gray-400` + `bg-kui-light-bg` / `bg-kui-light-gray-100` for subtle cards
- **Primary text:** `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000`
- **Secondary/muted:** `text-kui-light-gray-900 dark:text-kui-dark-gray-900`
- **Placeholder/disabled:** `text-kui-light-gray-600` / `kui-dark-gray-600`
- **Button default:** `bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000` + `text-white dark:text-kui-dark-bg` (`src/lib/button/styles.ts:41-43`)
- **Button secondary:** `bg-kui-light-bg` + `border-kui-light-gray-200` → hover `bg-kui-light-gray-100` (`src/lib/button/styles.ts:44-47`)
- **Focus ring:** `focus-visible:ring-kui-light-gray-500` (`src/lib/button/styles.ts:5`)

---

## Chromatic scales (100 → 1000 each)

Each color has **light** and **dark** ramps in `oklch` (light) + `oklch` (dark) for correct contrast. Steps: `100|200|300|400|500|600|700|800|900|1000`.

### Blue — info / primary accent

Light: `kui-light-blue-100` `97.3%` → `1000` `26.9%` (`src/theme.css:31-40`)
Dark:  `kui-dark-blue-100` `22%` → `1000` `96.7%` (`src/theme.css:133-142`)

Use: `Note type="success"` uses `blue-400` border, `blue-900` text (`src/lib/note/note.svelte:55-56`). Badge `blue` (`src/lib/badge/styles.ts`).

### Red — error / destructive

Light: `kui-light-red-100` `96.3%` → `1000` `24.9%` (`src/theme.css:42-51`)
Dark:  `kui-dark-red-100` `22%` → `1000` `95.4%` (`src/theme.css:144-153`)

Use: `Button variant="error"` → `bg-kui-light-red-800` (`src/lib/button/styles.ts:51`), `Note type="error"`.

### Amber — warning

Light: `kui-light-amber-100` `97.4%` → `1000` `30.9%` (`src/theme.css:53-62`)
Dark:  `kui-dark-amber-100` `22.6%` → `1000` `96.6%` (`src/theme.css:155-164`)

Use: `Button variant="warning"` → `bg-kui-light-amber-700`, `Note type="warning"`.

### Green — success

Light: `kui-light-green-100` `97.6%` → `1000` `29.3%` (`src/theme.css:64-73`)
Dark:  `kui-dark-green-100` `23%` → `1000` `96.6%` (`src/theme.css:166-175`)

Use: Badge `green`, status indicators.

### Teal — cyan

Light: `kui-light-teal-100` `97.6%` → `1000` `32.2%` (`src/theme.css:75-84`)
Dark:  `kui-dark-teal-100` `22.1%` → `1000` `96.3%` (`src/theme.css:177-186`)

Use: `Note type="cyan"` (`teal-400` border), Badge `teal`.

### Purple — violet

Light: `kui-light-purple-100` `96.6%` → `1000` `24%` (`src/theme.css:86-95`)
Dark:  `kui-dark-purple-100` `22.3%` → `1000` `96%` (`src/theme.css:188-197`)

Use: `Note type="violet"`, Badge `purple`.

### Pink

Light: `kui-light-pink-100` `95.6%` → `1000` `26.1%` (`src/theme.css:97-106`)
Dark:  `kui-dark-pink-100` `22.6%` → `1000` `95.6%` (`src/theme.css:199-208`)

Use: Badge `pink`.

---

## Common token combos (copy)

```svelte
<!-- Page -->
<div class="min-h-screen bg-kui-light-bg dark:bg-kui-dark-bg text-kui-light-gray-1000 dark:text-kui-dark-gray-1000">

<!-- Card -->
<div class="rounded-xl border border-kui-light-gray-200 dark:border-kui-dark-gray-400 bg-kui-light-bg dark:bg-kui-dark-bg p-6">

<!-- Subtle card / Note secondary -->
<div class="rounded-md border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 bg-kui-light-gray-alpha-200 dark:bg-kui-dark-gray-alpha-200">

<!-- Muted text -->
<p class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-sm">…</p>

<!-- Separator -->
<hr class="border-kui-light-gray-200 dark:border-kui-dark-gray-400" />

<!-- Focus ring (Button already includes it) -->
<button class="focus-visible:ring-2 focus-visible:ring-kui-light-gray-500 dark:focus-visible:ring-kui-dark-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-kui-light-bg dark:focus-visible:ring-offset-kui-dark-bg">…
```

## When NOT to use `kui-*`

For marketing gradients, use `TextGradient` component. For data-viz, use chart lib colors, not `kui-*`.

## Reference files

- Full token definitions: `src/theme.css`
- How components use tokens: `src/lib/button/styles.ts`, `src/lib/note/note.svelte`, `src/lib/badge/styles.ts`, `src/lib/input/styles.ts`
