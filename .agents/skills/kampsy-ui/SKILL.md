---
name: kampsy-ui
description: Consumer guide to build UIs with kampsy-ui (Svelte 5 + Tailwind v4, Geist-inspired). Use when installing kampsy-ui, picking components, or scaffolding pages/forms/dashboards in a consumer SvelteKit app. Covers setup with auto-install, 30+ components, kui tokens, snippet APIs, and compound patterns.
---

# kampsy-ui — Build UIs as a Consumer

> **Audience:** You are an AI agent building a UI **inside a consumer project** that uses `kampsy-ui` (not editing `kampsy-ui` itself). No contributor docs, no `styles.ts` internals.

## When to use this skill

Trigger when the user asks to:
- `use kampsy-ui`, `add kampsy-ui`, `install kampsy-ui`
- build any UI with `Button`, `Input`, `Modal`, `Table`, `Select`, `Tabs`, `Badge`, `Note`, `Avatar`, etc.
- scaffold a form, dashboard, auth page, settings page, or data list
- fix missing `kui-*` styles / dark mode / Tailwind purge issues

If the task is Svelte syntax (`$state`, `$derived`, snippets), delegate to `svelte-code-writer` after finishing kampsy-ui wiring.

## Workflow — follow in order

### Step 1 — Ensure kampsy-ui is installed (auto-install, minimal)

**Do not skip.** Minimal means: only `pnpm add -D kampsy-ui@latest` (no `svelte-kit sync`, no extra deps).

1. **Detect package manager** (check in order):
   - `pnpm-lock.yaml` exists → `pnpm`
   - `pnpm-workspace.yaml` exists → `pnpm`
   - `package-lock.json` exists → `npm`
   - `yarn.lock` exists → `yarn`
   - `bun.lockb` exists → `bun`
   - default → `pnpm`

2. **Check if installed:**
   ```bash
   node -e "const p=require('./package.json'); const deps={...p.dependencies,...p.devDependencies}; process.exit(deps['kampsy-ui'] ? 0 : 1)"
   ```
   If exit 0 → already installed, report version and skip install.

3. **If missing, install (minimal):**
   ```bash
   pnpm add -D kampsy-ui@latest
   # npm fallback: npm i -D kampsy-ui@latest
   # yarn fallback: yarn add -D kampsy-ui@latest
   # bun fallback: bun add -d kampsy-ui@latest
   ```
   Verify: `node -e "console.log(require('./package.json').devDependencies['kampsy-ui'])"`.

4. **Wire CSS (required or tokens are purged).** Find the consumer's global CSS — check in order: `src/app.css`, `src/routes/layout.css`, `src/app.pcss`, `static/app.css`, or where `tailwindcss` is already imported (grep for `@import 'tailwindcss'`).

   Ensure it contains **exactly these 3 lines** (see `kampsy-ui` installation docs):
   ```css
   @import 'tailwindcss';
   @import "kampsy-ui/theme.css";
   @source "../node_modules/kampsy-ui/dist";
   ```
   - If the file is at `src/app.css` (standard SvelteKit), `@source` is `../node_modules/kampsy-ui/dist`.
   - If at `src/routes/layout.css` or deeper, adjust `../` count so it resolves to `node_modules/kampsy-ui/dist` from that file.
   - If file missing, create `src/app.css` with those 3 lines and ensure `src/routes/+layout.svelte` imports it: `import '../app.css';`.
   - Do not duplicate lines. Do not run `svelte-kit sync`.

5. **Peer check:** `svelte` must be `^5.45.6` (`package.json` peer). If not, warn: "kampsy-ui requires Svelte 5".

Reference: `kampsy-ui` exports `"."` → `dist/index.js`, `"./icons"` → `dist/icons`, `"./theme.css"` → `src/theme.css`.

### Step 2 — Pick the right component

**Do not invent.** Use the catalog below; full props in `references/components.md`, tokens in `references/tokens.md`.

#### Import shapes (critical)

| Shape | How to import | Components |
|-------|---------------|------------|
| **Single/default** | `import { Button } from 'kampsy-ui'` | `Badge`, `Banner`, `Button`, `Calendar`, `Checkbox`, `CopyButton`, `Description`, `Error`, `Input` (+ `SearchInput`), `Note`, `Pagination`, `Progress`, `ProjectBanner`, `ShowMore`, `Skeleton` (+ `Skeleton.Text`), `CodeSnippet`, `Spinner`, `StatusDot`, `Text`, `TextGradient`, `Textarea`, `ThemeSwitcher`, `Toggle`, `Tooltip`, `Tabs`, `Avatar` (single) |
| **Namespace/compound** | `import * as Modal from 'kampsy-ui'` then `<Modal.Root>` | `Avatar` (also has `Avatar.Group`/`AvatarWithIcon`), `Choicebox`, `Collapse`, `Kbd` (`KeyboardInput`), `Menu`, `Modal`, `Select`, `SplitButton`, `Switch`, `Table`, `EmptyState` |
| **Icons** | `import { ArrowRight } from 'kampsy-ui/icons'` | 80+ icons (see `references/components.md#icons`) — also `import ArrowRight from 'kampsy-ui/icons'` works |

> `Switch` is `Switch.Root` + `Switch.Control`, not `import { Switch }`. `Select` is `Select.Root` + `Select.Trigger`/`Select.Content`/`Select.Item`/`Select.Value`. `Table` is `Table.Root` etc.

#### Quick picker

| Task | Use | Import |
|------|-----|--------|
| Action / submit | `Button` | `import { Button } from 'kampsy-ui'` |
| Form field | `Input` `Textarea` `Checkbox` `Select` | See shapes above |
| Choice / radio | `Choicebox` , `Toggle` | `import * as Choicebox from 'kampsy-ui'` |
| Feedback / callout | `Note` `Banner` `Badge` | `import { Badge, Banner } from 'kampsy-ui'` ; `import Note from 'kampsy-ui'` |
| Overlay / dialog | `Modal` | `import * as Modal from 'kampsy-ui'` |
| Disclosure | `Collapse` | `import * as Collapse from 'kampsy-ui'` |
| Navigation | `Tabs` `Menu` | `import Tabs from 'kampsy-ui'` ; `import * as Menu from 'kampsy-ui'` |
| Data | `Table` `Pagination` `EmptyState` | `import * as Table from 'kampsy-ui'` |
| Loading | `Spinner` `Skeleton` `Progress` | `import { Spinner } from 'kampsy-ui'` |
| Utility | `Kbd` `Tooltip` `CopyButton` `ThemeSwitcher` | `import * as Kbd from 'kampsy-ui'` |

#### Valid enums (verbatim — do not invent)

- `Button.size`: `tiny|small|medium|large` (default `medium`)
- `Button.variant`: `default|secondary|tertiary|error|warning` — there is no `primary/success/ghost/violet`
- `Button.shape`: `square|circle|rounded`
- `Badge.variant`: `gray|blue|purple|amber|red|pink|green|teal|inverted|trial|turbo|pill`
- `Badge.contrast`: `high|low` (`low` = subtle), `Badge.size`: `sm|md|lg`
- `Note.type`: `success|error|warning|secondary|violet|cyan|default` (+ `fill?:boolean`, `size: small|medium|large`, `action?:Snippet`)
- `Input.size`: `tiny|small|medium|large` (+ `rounded?:boolean`, `prefix/suffix: string|Component`, `error?:string`, `label?:string`)
- `Tabs.type`: `default|secondary`
- `Checkbox`: `checked` bind, `indeterminate`, `disabled`
- Icons are **Components**, not strings; `Button`/`Badge` decorators are **Snippets** except `Badge.icon` which is `Component`.

### Step 3 — Scaffold with correct Svelte 5 + snippet syntax

**Always use runes:** `$state`, `$bindable`, `$derived`, `$props`, snippets. For Svelte syntax help, call `svelte-code-writer` (`list-sections` → `get-documentation`).

#### Pattern A — Single component + Snippet decorators

```svelte
<script lang="ts">
  import { Button, Input, Badge, Note } from 'kampsy-ui';
  import { ArrowLeft, ArrowRight } from 'kampsy-ui/icons';
  let value = $state('');
  let loading = $state(false);
</script>

<!-- Button: prefix/suffix are Snippets, not props -->
<Button variant="secondary" size="medium" {loading} onclick={() => (loading = true)}>
  {#snippet prefix()}<ArrowLeft />{/snippet}
  Save changes
  {#snippet suffix()}<ArrowRight />{/snippet}
</Button>

<!-- Icon-only: MUST have svgOnly + aria-label + shape -->
<Button svgOnly shape="circle" aria-label="Copy deployment URL" onclick={() => navigator.clipboard.writeText('...')}>
  <ArrowRight />
</Button>

<!-- Input: bind:value, label, error (shows icon + aria-invalid) -->
<Input bind:value label="Email" placeholder="you@acme.com" error={value ? undefined : 'Required'} />

<!-- Badge: icon is Component, not Snippet -->
<script>import { Information } from 'kampsy-ui/icons';</script>
<Badge variant="blue" contrast="high" size="md" icon={Information}>Beta</Badge>

<!-- Note: action is Snippet -->
<Note type="success" fill size="medium">
  Project deployed
  {#snippet action()}<Button size="tiny" variant="secondary">View</Button>{/snippet}
</Note>
```

#### Pattern B — Compound / namespace components (context-based)

```svelte
<script lang="ts">
  import * as Modal from 'kampsy-ui';
  import * as Select from 'kampsy-ui';
  import * as Table from 'kampsy-ui';
  import * as Collapse from 'kampsy-ui';
  let modalActive = $state(false);
  let selected = $state('');
</script>

<!-- Modal: bind:active is the source of truth -->
<Modal.Root bind:active={modalActive}>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Invite member</Modal.Title>
      <Modal.Subtitle>They will get an email invite.</Modal.Subtitle>
    </Modal.Header>
    <Modal.Body>
      <input placeholder="Email" />
    </Modal.Body>
    <Modal.Footer>
      <Modal.Action>
        <button onclick={() => (modalActive = false)}>Cancel</button>
        <button onclick={() => (modalActive = false)}>Invite</button>
      </Modal.Action>
    </Modal.Footer>
  </Modal.Content>
</Modal.Root>

<!-- Select: bind:value, handles mobile backdrop + Esc + clickOutside internally -->
<Select.Root bind:value={selected} size="medium">
  <Select.Trigger><Select.Value placeholder="Pick a framework" /></Select.Trigger>
  <Select.Content>
    <Select.Item value="svelte">Svelte</Select.Item>
    <Select.Item value="react">React</Select.Item>
  </Select.Content>
</Select.Root>

<!-- Table -->
<Table.Root>
  <Table.Head><Table.Row><Table.Header>Name</Table.Header></Table.Row></Table.Head>
  <Table.Body><Table.Row><Table.Cell>Acme</Table.Cell></Table.Row></Table.Body>
</Table.Root>

<!-- Collapse -->
<Collapse.Root>
  <Collapse.Item><Collapse.Trigger>What is kampsy-ui?</Collapse.Trigger><Collapse.Content>A Svelte 5 + Tailwind v4 UI kit.</Collapse.Content></Collapse.Item>
</Collapse.Root>
```

#### Additional snippets

```svelte
<!-- Tabs: bind:selected, type default|secondary -->
<script>import Tabs from 'kampsy-ui'; let selected = $state('preview');</script>
<Tabs bind:selected tabs={[{title:'Preview',value:'preview'},{title:'Code',value:'code',disabled:true,tooltip:'Soon'}]} />

<!-- Checkbox: bind:checked -->
<script>import { Checkbox } from 'kampsy-ui'; let checked=$state(false);</script>
<Checkbox bind:checked>Remember me</Checkbox>

<!-- Avatar group: limit + overlap -->
<script>import { Avatar } from 'kampsy-ui';</script>
<Avatar.Group members={[{username:'vercel'},{src:'…',title:'Ada'}]} size={32} limit={5} overlap="auto" />

<!-- Dark mode: pair every kui token -->
<div class="bg-kui-light-bg dark:bg-kui-dark-bg text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 border-kui-light-gray-200 dark:border-kui-dark-gray-400">
  ...
</div>
```

Full copy-paste recipes (auth, dashboard, settings) → `references/recipes.md`.

### Step 4 — Validate (minimal)

1. Ensure CSS wiring (§1.4) still present.
2. Run Svelte autofixer on new files:
   ```bash
   npx @sveltejs/mcp svelte-autofixer ./src/routes/+page.svelte --svelte-version 5
   # or inline: npx @sveltejs/mcp svelte-autofixer '<script>let x = $state(0)</script>' --svelte-version 5
   ```
3. Manual checklist (no extra build step):
   - [ ] `svgOnly` has `aria-label` or `aria-labelledby` (otherwise dev warns)
   - [ ] `prefix`/`suffix`/`action` passed as `{#snippet}` not as prop/component
   - [ ] `bind:value|active|checked|selected` used where component is controlled
   - [ ] No invented `variant`/`size` strings
   - [ ] Every `kui-light-*` paired with `dark:kui-dark-*`

For deeper Svelte help, use `svelte-code-writer`:
```bash
npx @sveltejs/mcp list-sections
npx @sveltejs/mcp get-documentation "$state,$derived,$effect,snippets"
```

## Anti-patterns — do not do this

| Wrong | Why | Correct |
|-------|-----|---------|
| `import Button from 'kampsy-ui/button'` | Wrong path, breaks tree-shake | `import { Button } from 'kampsy-ui'` |
| `<Button prefix={ArrowLeft}>` | `prefix` is `Snippet`, not `Component` | `{#snippet prefix()}<ArrowLeft/>{/snippet}` inside Button |
| `<Button variant="primary">` | No `primary`; valid are `default|secondary|tertiary|error|warning` | `variant="default"` or `variant="secondary"` |
| `<Badge icon={<Icon/>}>` | `Badge.icon` is `Component` | `icon={Information}` |
| `<Switch checked />` | Switch is `Switch.Root` + `Switch.Control` | `<Switch.Root><Switch.Control /></Switch.Root>` |
| Missing `@source "../node_modules/kampsy-ui/dist"` | Tailwind purges `kui-*` | Add the 3 CSS lines |
| Hard-coded hex instead of `bg-kui-light-gray-1000` | Breaks dark mode / consistency | Use `kui-*` tokens (see `references/tokens.md`) |

## References

- Full component catalog → `references/components.md`
- Design tokens (all `kui-*` scales) → `references/tokens.md`
- Copy-paste page recipes → `references/recipes.md`
- Svelte 5 syntax → `svelte-code-writer` skill
- Docs site → `https://ui.kampsy.xyz` (Button, Input, Modal, etc. pages)
