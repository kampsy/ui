# kampsy-ui Component Catalog (Consumer)

> Source: `src/lib/index.ts:1-120` + per-component `types.ts` + `src/docs/data/*.ts` examples + `src/routes/*/+page.svelte` best practices. No contributor internals.

## How to import (do not guess)

| Shape | Example |
|-------|---------|
| **Single** | `import { Button } from 'kampsy-ui'` ; `import { Badge } from 'kampsy-ui'` ; `import Note from 'kampsy-ui'` also works for default exports but `import { Button }` is canonical (`src/lib/index.ts:22`) |
| **Namespace** | `import * as Modal from 'kampsy-ui'` then `<Modal.Root>` etc. |
| **Icons** | `import { ArrowRight, Information } from 'kampsy-ui/icons'` (`src/lib/icons/index.ts`) |

Namespace components **require** their `Root` wrapper — state lives in `Root.svelte.ts` via `setContext` (`src/lib/modal/root.svelte.ts`, `src/lib/select/root.svelte.ts`, `src/lib/menu/root.svelte.ts`). Without `Root`, children throw.

---

## Single / default exports

### Button — `import { Button } from 'kampsy-ui'` (`src/lib/button/types.ts:4-6`, `src/lib/button/button.svelte:6-22`)

```ts
type ButtonSize = "tiny"|"small"|"medium"|"large" // default medium
type ButtonVariant = "default"|"secondary"|"tertiary"|"error"|"warning"
type ButtonShape = "square"|"circle"|"rounded"
interface ButtonProps extends HTMLButtonAttributes {
  buttonElement?: HTMLButtonElement
  class?: ClassValue
  shape?: ButtonShape
  size?: ButtonSize
  variant?: ButtonVariant
  prefix?: Snippet   // leading icon — Snippet, not Component
  suffix?: Snippet   // trailing icon — Snippet, not Component
  svgOnly?: boolean  // icon-only: MUST add shape + aria-label/aria-labelledby (dev warns button.svelte:39-45)
  shadow?: boolean   // often with shape="rounded"
  loading?: boolean  // shows spinner, aria-busy, blocks click
  disabled?: boolean
  type?: "button"|"submit"|"reset"
  onclick?: (e: MouseEvent) => void
  children?: Snippet // label
}
```

```svelte
<script>import { Button } from 'kampsy-ui'; import { ArrowLeft, ArrowRight, Copy } from 'kampsy-ui/icons';</script>
<Button variant="default" size="medium" onclick={() => {}}>Upload</Button>
<Button variant="secondary" size="small">Cancel</Button>
<Button variant="error">Delete Project</Button>

<!-- prefix/suffix are snippets -->
<Button>{#snippet prefix()}<ArrowLeft />{/snippet} Back {#snippet suffix()}<ArrowRight />{/snippet}</Button>

<!-- icon-only -->
<Button svgOnly shape="circle" aria-label="Copy deployment URL"><Copy /></Button>
<Button svgOnly shape="square" size="tiny" aria-label="Close"><Copy /></Button>

<!-- loading keeps focus, announces busy -->
<Button loading>Deploying</Button>

<!-- disabled -->
<Button disabled>Unavailable</Button>

<!-- submit in form -->
<Button type="submit" variant="default">Create project</Button>
```
Copy-paste strings live in `src/docs/data/button.ts:1-156`.

### Badge — `import { Badge } from 'kampsy-ui'` (`src/lib/badge/types.ts:5-17`)

```ts
type BadgeVariant = "gray"|"blue"|"purple"|"amber"|"red"|"pink"|"green"|"teal"|"inverted"|"trial"|"turbo"|"pill"
type BadgeContrast = "high"|"low" // low = subtle
type BadgeSize = "sm"|"md"|"lg" // default md
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  href?: string // when present renders <a>
  target?: string; rel?: string; download?: boolean|string
  variant?: BadgeVariant // default gray
  contrast?: BadgeContrast // default high
  size?: BadgeSize
  icon?: Component // Component, not Snippet (unlike Button)
  children?: Snippet
}
```

```svelte
<Badge variant="gray">Default</Badge>
<Badge variant="blue" contrast="low">Beta</Badge>
<Badge variant="inverted" href="/docs">Docs</Badge>
<Badge variant="turbo">TURBO</Badge>
<script>import { Information } from 'kampsy-ui/icons';</script>
<Badge icon={Information} variant="blue">With icon</Badge>
```

### Banner — `import { Banner } from 'kampsy-ui'` (`src/lib/banner/types.ts`)

Props: `button: { content: string, href: string }`, `children` (message). Renders mobile link + desktop bar with chevron.

```svelte
<Banner button={{ content: "Learn more", href: "/docs" }}>New: Edge Config GA</Banner>
```

### Note — `import Note from 'kampsy-ui'` / `import { default as Note }` (`src/lib/note/note.svelte:9-16`)

```ts
interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: "small"|"medium"|"large" // default medium
  type?: "success"|"error"|"warning"|"secondary"|"violet"|"cyan"|"default" // default default
  fill?: boolean // filled background vs border
  disabled?: boolean
  action?: Snippet // trailing action (button/link)
  children?: Snippet
}
```

```svelte
<Note type="default">Heads up: deploy will restart.</Note>
<Note type="success" fill>Project deployed</Note>
<Note type="error">Failed to save
  {#snippet action()}<Button size="tiny">Retry</Button>{/snippet}
</Note>
```

### Input — `import { Input, SearchInput } from 'kampsy-ui'` (`src/lib/input/types.ts:4-31`, `src/lib/input/input.svelte:13-29`)

```ts
type InputSize = "small"|"medium"|"large" // default medium — no "tiny"
interface InputProps extends HTMLInputAttributes {
  class?: ClassValue
  value?: string // bind:value
  label?: string
  error?: string // shows red ring + icon + aria-invalid + aria-describedby
  size?: InputSize
  prefix?: string|Component; suffix?: string|Component
  prefixStyling?: boolean; suffixStyling?: boolean // default true
  rounded?: boolean
  disabled?: boolean
}
interface SearchInputProps extends InputProps {
  cmdk?: boolean; loading?: boolean
}
```

```svelte
<script>import { Input, SearchInput } from 'kampsy-ui'; import { MagnifyingGlass } from 'kampsy-ui/icons'; let value=$state(''); let q=$state('');</script>
<Input bind:value label="Email" placeholder="you@acme.com" error={value ? undefined : 'Required'} />
<Input bind:value size="small" prefix={MagnifyingGlass} placeholder="Search…" />
<Input bind:value prefix="$" suffix="USD" />
<SearchInput bind:value={q} loading={false} placeholder="Search docs…" />
```

### Textarea — `import Textarea from 'kampsy-ui'` (`src/lib/textarea/textarea.svelte`)

Similar to `Input` but `rows`, `value` bind, `label`, `error`, `disabled`. Usage: `<Textarea bind:value label="Description" rows={4} />`.

### Checkbox — `import { Checkbox } from 'kampsy-ui'` (`src/lib/checkbox/types.ts:8-14`, `src/lib/checkbox/checkbox.svelte:12-20`)

```ts
interface CheckboxProps extends Omit<HTMLInputAttributes, "type"|"children"> {
  checked?: boolean // bind:checked
  indeterminate?: boolean
  disabled?: boolean
  children?: Snippet // label
}
```

```svelte
<script>import { Checkbox } from 'kampsy-ui'; let checked=$state(false);</script>
<Checkbox bind:checked>Remember me</Checkbox>
<Checkbox indeterminate>Select all</Checkbox>
```

### Calendar — `import Calendar from 'kampsy-ui'` (`src/lib/calendar/calendar.svelte`)

Date picker with `value` (Date | string). Pair with `Input` for date fields. See `src/routes/calendar/+page.svelte`.

### Tabs — `import Tabs from 'kampsy-ui'` (`src/lib/tabs/tabs.svelte:5-18`)

```ts
interface Props {
  disabled?: boolean
  selected?: string // bind:selected
  tabs?: Array<{ title: string; value: string; icon?: Component; disabled?: boolean; tooltip?: string }>
  type?: "default"|"secondary" // default = underline, secondary = pill
}
```

```svelte
<script>import Tabs from 'kampsy-ui'; let selected=$state('preview');</script>
<Tabs bind:selected type="default" tabs={[{title:'Preview',value:'preview'},{title:'Code',value:'code'}]} />
<Tabs bind:selected type="secondary" tabs={[{title:'All',value:'all',icon: GridSquare}]} />
```

### Pagination — `import Pagination from 'kampsy-ui'`

Props: `previous?: {title, href}`, `next?: {title, href}`, current page handling. See `src/routes/pagination/+page.svelte`.

### Progress — `import Progress from 'kampsy-ui'` ; `Spinner` ; `StatusDot` ; `Toggle` ; `Tooltip` ; `Description` ; `Text`/`TextGradient` ; `Error` ; `ProjectBanner` ; `ShowMore` ; `CodeSnippet` ; `Skeleton` ; `CopyButton` ; `ThemeSwitcher`

All single imports. Minimal props: `value`/`max` for Progress, `text` for Tooltip, `label` for Toggle. Check route pages for examples (`src/routes/progress/+page.svelte` etc.). Use storage.

---

## Namespace / compound exports

### Modal — `import * as Modal from 'kampsy-ui'` (`src/lib/modal/root.svelte:7-12`, `src/routes/modal/+page.svelte`)

```svelte
<script>import * as Modal from 'kampsy-ui'; let active=$state(false);</script>
<button onclick={() => active=true}>Open</button>
<Modal.Root bind:active sticky={false}>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Invite member</Modal.Title>
      <Modal.Subtitle>They will get an email.</Modal.Subtitle>
    </Modal.Header>
    <Modal.Body>Form here</Modal.Body>
    <Modal.Footer>
      <Modal.Action>
        <Button variant="secondary" onclick={() => active=false}>Cancel</Button>
        <Button onclick={() => active=false}>Invite</Button>
      </Modal.Action>
    </Modal.Footer>
  </Modal.Content>
</Modal.Root>
```
Parts: `Root` (`active` bind, `sticky`), `Content`, `Header`, `Title`, `Subtitle`, `Body`, `Footer`, `Action`.

### Select — `import * as Select from 'kampsy-ui'` (`src/lib/select/root.svelte:8-15`)

```ts
interface RootProps { value?: string // bind:value; error?: string; loading?: boolean; size?: "tiny"|"small"|"medium"|"large"; children: Snippet }
```

```svelte
<script>import * as Select from 'kampsy-ui'; let value=$state('');</script>
<Select.Root bind:value size="medium">
  <Select.Trigger><Select.Value placeholder="Choose" /></Select.Trigger>
  <Select.Content>
    <Select.Item value="svelte">Svelte</Select.Item>
    <Select.Item value="react">React</Select.Item>
  </Select.Content>
</Select.Root>
```
Handles mobile backdrop, `Esc`, `clickOutside` internally.

### Menu — `import * as Menu from 'kampsy-ui'` (`src/lib/menu/root.svelte:7-12`)

```svelte
<Menu.Root alignment="left">
  <Menu.Link href="/docs">Docs</Menu.Link>
  <Menu.Button onclick={() => {}}>Sign out</Menu.Button>
  <Menu.Item>Plain item</Menu.Item>
  <Menu.Content>…</Menu.Content>
</Menu.Root>
```

### Table — `import * as Table from 'kampsy-ui'` (`src/lib/table/table.svelte:4-7`)

```svelte
<Table.Root>
  <Table.Caption>Team members</Table.Caption>
  <Table.Head><Table.Row><Table.Header>Name</Table.Header><Table.Header>Role</Table.Header></Table.Row></Table.Head>
  <Table.Body>
    <Table.Row><Table.Cell>Ada</Table.Cell><Table.Cell>Admin</Table.Cell></Table.Row>
  </Table.Body>
  <Table.Footer>…</Table.Footer>
</Table.Root>
```
Subcomponents: `Root`, `Head`, `Body`, `Row`, `Cell`, `Header`, `Footer`, `Caption`, `Colgroup`, `Col`.

### Collapse — `import * as Collapse from 'kampsy-ui'` (`src/lib/collapse/root.svelte:5-8`)

```svelte
<Collapse.Root multiple={false}>
  <Collapse.Item><Collapse.Trigger>What is kampsy-ui?</Collapse.Trigger><Collapse.Content>Geist-inspired Svelte 5 kit.</Collapse.Content></Collapse.Item>
</Collapse.Root>
```

### Switch — `import * as Switch from 'kampsy-ui'`

```svelte
<Switch.Root><Switch.Control /></Switch.Root>
```
Not `import { Switch }`.

### Choicebox — `import * as Choicebox from 'kampsy-ui'`

```svelte
<Choicebox.Group><Choicebox.Item value="a" title="Hobby" description="…">…</Choicebox.Item></Choicebox.Group>
```

### SplitButton — `import * as SplitButton from 'kampsy-ui'`

Root + Button + Content + Item. Use when one primary + N secondary actions share a row (Button docs best practice).

### EmptyState — `import * as EmptyState from 'kampsy-ui'`

### Kbd — `import * as Kbd from 'kampsy-ui'` ; `Skeleton` ; `CopyButton`

```svelte
<Kbd.Root>⌘</Kbd.Root><Kbd.Group>…</Kbd.Group>
<Skeleton.Text lines={3} />
```

### Avatar — `import { Avatar } from 'kampsy-ui'` (`src/lib/avatar/types.ts:16-55`)

```ts
interface AvatarProps { size?: number // default 32; src?: string; username?: string; letter?: string; placeholder?: boolean; title?: string }
interface AvatarGroupProps { members: AvatarMember[]; size?: number; limit?: number; reverse?: boolean; overlap?: "auto"|number }
interface AvatarWithIconProps { size?: number; icon: Snippet; iconBackground?: boolean }
interface AvatarMember { username?: string; src?: string; letter?: string; title?: string }
```

```svelte
<Avatar username="vercel" size={32} />
<Avatar src="/ada.jpg" title="Ada" />
<Avatar letter="AK" />
<Avatar.Group members={[{username:'a'},{username:'b'},{src:'…'}]} limit={5} overlap="auto" />
<AvatarWithIcon size={32} iconBackground>{#snippet icon()}<UserPlus />{/snippet}</AvatarWithIcon>
```

---

## Icons — `kampsy-ui/icons` (`src/lib/icons/index.ts:1-61`)

~61 re-exports + Lucide passthrough. Common:

`ArrowLeft`, `ArrowRight`, `ArrowCircleUp`, `ChevronLeft/Right/Up/Down` (incl `Small`), `Sun`, `Moon`, `Shield`, `ShieldCheck`, `Error`, `LoaderCircle`, `GridSquare`, `ListUnordered`, `Check`, `CheckSquare`, `Hook`, `Webhook`, `Information`, `InformationFillSmall`, `UserPlus`, `Warning`, `CheckCircle`, `LogoGithub/Gitlab/Bitbucket/Slack/Facebook/TwitterX`, `MagnifyingGlass`, `LockClosed/Open`, `MoreHorizontal`, `Cross`, `Star`, `Minus`, `Copy`, `ChartBarPeak`, etc.

```svelte
<script>import { ArrowRight, Information } from 'kampsy-ui/icons';</script>
<ArrowRight />
```
Badge uses `icon={Information}` (Component). Button uses snippets: `{#snippet prefix()}<ArrowRight/>{/snippet}`.

---

## Copy-paste sources

- Raw code strings: `src/docs/data/button.ts`, `src/docs/data/input.ts`, `src/docs/data/badge.ts`, `src/docs/data/modal.ts`, `src/docs/data/select.ts`, `src/docs/data/table.ts`, `src/docs/data/tabs.ts`, `src/docs/data/note.ts`, `src/docs/data/avatar.ts`, `src/docs/data/collapse.ts`, `src/docs/data/menu.ts`, `src/docs/data/checkbox.ts`, etc.
- Rendered pages + Best Practices: `src/routes/button/+page.svelte:274-366` (9 Button rules), similar per route.
