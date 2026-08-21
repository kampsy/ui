# kampsy-ui Page Recipes (Consumer, Copy-Paste)

> All examples are Svelte 5 + `kampsy-ui` consumer code. Each assumes Step 1 of `SKILL.md` (install + 3 CSS lines) is done. Validate with `npx @sveltejs/mcp svelte-autofixer --svelte-version 5`.

---

## 1. Auth / Form Page — Input + Checkbox + Button + Note

Classic login with inline validation, loading, and callout. Based on `src/routes/input/+page.svelte`, `src/routes/checkbox/+page.svelte`, `src/routes/button/+page.svelte:275-366` best practices, `src/docs/data/input.ts`.

```svelte
<script lang="ts">
  import { Button, Input, Checkbox, Note } from 'kampsy-ui';
  import { ArrowRight } from 'kampsy-ui/icons';
  let email = $state('');
  let password = $state('');
  let remember = $state(false);
  let loading = $state(false);
  let error = $state<string | undefined>(undefined);

  let emailError = $derived(!email ? 'Email is required' : !email.includes('@') ? 'Enter a valid email' : undefined);
  let canSubmit = $derived(!emailError && !!password && !loading);

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    loading = true;
    error = undefined;
    await new Promise(r => setTimeout(r, 900));
    // replace with real auth
    if (password.length < 6) { error = 'Password too short'; loading = false; return; }
    loading = false;
    // redirect
  }
</script>

<div class="mx-auto max-w-md space-y-6 rounded-xl border border-kui-light-gray-200 dark:border-kui-dark-gray-400 bg-kui-light-bg dark:bg-kui-dark-bg p-6">
  <h1 class="text-xl font-semibold text-kui-light-gray-1000 dark:text-kui-dark-gray-1000">Sign in to Acme</h1>
  {#if error}
    <Note type="error" fill>{error}</Note>
  {/if}
  <form class="space-y-4" onsubmit={onSubmit}>
    <Input bind:value={email} label="Email" type="email" placeholder="you@acme.com" error={emailError} autocomplete="email" />
    <Input bind:value={password} label="Password" type="password" placeholder="••••••••" autocomplete="current-password" />
    <label class="flex items-center gap-2">
      <Checkbox bind:checked={remember}>Remember me</Checkbox>
    </label>
    <Button type="submit" variant="default" size="medium" loading={loading} disabled={!canSubmit} shadow={false}>
      {#snippet suffix()}<ArrowRight />{/snippet}
      Continue
    </Button>
  </form>
  <p class="text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900">
    No account? <a href="/signup" class="underline text-kui-light-gray-1000 dark:text-kui-dark-gray-1000">Sign up</a>
  </p>
</div>
```

Best practice reminders (from Button docs):
- Title Case label (`Continue`, not `submit`).
- `loading` keeps button focusable + `aria-busy`; don't swap to spinner.
- Disable only when action is impossible (missing input) — pair with `Tooltip` if you need to explain why disabled.

---

## 2. Dashboard / Data List — Table + Badge + Avatar + Pagination + EmptyState + SearchInput

Team directory with search, status badges, avatar group, empty state, and pagination.

```svelte
<script lang="ts">
  import * as Table from 'kampsy-ui';
  import { Badge, Input, SearchInput } from 'kampsy-ui';
  import * as EmptyState from 'kampsy-ui';
  import Pagination from 'kampsy-ui';
  import { Avatar } from 'kampsy-ui';
  import { MagnifyingGlass } from 'kampsy-ui/icons';

  let q = $state('');
  let page = $state(1);
  let members = $state([
    { id: '1', name: 'Ada Lovelace', role: 'Admin', status: 'active' as const, username: 'ada' },
    { id: '2', name: 'Grace Hopper', role: 'Member', status: 'invited' as const, username: 'grace' },
  ]);
  let filtered = $derived(members.filter(m => !q || m.name.toLowerCase().includes(q.toLowerCase())));
</script>

<div class="space-y-4">
  <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex items-center gap-3">
      <h2 class="text-lg font-semibold text-kui-light-gray-1000 dark:text-kui-dark-gray-1000">Team</h2>
      <Badge variant="gray" contrast="low" size="sm">{filtered.length} members</Badge>
    </div>
    <div class="flex items-center gap-3">
      <Avatar.Group members={filtered.slice(0,5).map(m => ({ username: m.username }))} size={28} limit={5} overlap="auto" />
      <div class="w-64">
        <SearchInput bind:value={q} placeholder="Search members…" />
      </div>
    </div>
  </div>

  {#if filtered.length === 0}
    <EmptyState.Root>
      <EmptyState.Header>
        <EmptyState.Title>No members found</EmptyState.Title>
        <EmptyState.Description>Try a different search or invite someone.</EmptyState.Description>
      </EmptyState.Header>
      <EmptyState.Footer>
        <!-- put Button here -->
      </EmptyState.Footer>
    </EmptyState.Root>
  {:else}
    <div class="overflow-hidden rounded-xl border border-kui-light-gray-200 dark:border-kui-dark-gray-400">
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Header>Name</Table.Header>
            <Table.Header>Role</Table.Header>
            <Table.Header>Status</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {#each filtered as m (m.id)}
            <Table.Row>
              <Table.Cell>
                <span class="inline-flex items-center gap-2">
                  <Avatar username={m.username} size={28} />
                  {m.name}
                </span>
              </Table.Cell>
              <Table.Cell>{m.role}</Table.Cell>
              <Table.Cell>
                <Badge variant={m.status === 'active' ? 'green' : 'amber'} size="sm">{m.status}</Badge>
              </Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </div>
    <div class="flex justify-center">
      <Pagination previous={{title:'Prev',href:'#'}} next={{title:'Next',href:'#'}} />
    </div>
  {/if}
</div>
```

Tokens: card `border-kui-light-gray-200 dark:border-kui-dark-gray-400` + `rounded-xl` per `src/theme.css` usage.

---

## 3. Settings / Dialog Flow — Tabs + Select + Modal + Input + Toggle/Checkbox

Settings page with tabs, select, and a destructive modal.

```svelte
<script lang="ts">
  import Tabs from 'kampsy-ui';
  import * as Modal from 'kampsy-ui';
  import * as Select from 'kampsy-ui';
  import { Button, Input, Checkbox, Note } from 'kampsy-ui';
  let tab = $state('general');
  let framework = $state('');
  let email = $state('you@acme.com');
  let modalActive = $state(false);
  let confirmName = $state('');
</script>

<div class="mx-auto max-w-2xl space-y-6">
  <Tabs bind:selected={tab} type="default" tabs={[
    {title:'General', value:'general'},
    {title:'Team', value:'team'},
    {title:'Billing', value:'billing', disabled:true, tooltip:'Coming soon'}
  ]} />

  {#if tab === 'general'}
    <div class="space-y-4 rounded-xl border border-kui-light-gray-200 dark:border-kui-dark-gray-400 p-6">
      <Note type="secondary">Changes are saved automatically.</Note>
      <Input bind:value={email} label="Workspace email" />
      <Select.Root bind:value={framework} size="medium">
        <Select.Trigger><Select.Value placeholder="Choose framework" /></Select.Trigger>
        <Select.Content>
          <Select.Item value="svelte">SvelteKit</Select.Item>
          <Select.Item value="next">Next.js</Select.Item>
          <Select.Item value="remix">Remix</Select.Item>
        </Select.Content>
      </Select.Root>
      <Checkbox bind:checked={() => false} children={() => 'Email notifications'} />
      <!-- use bind:checked with $state in real code -->
    </div>

    <div class="rounded-xl border border-kui-light-red-400 dark:border-kui-dark-red-400 p-6 space-y-3">
      <h3 class="font-medium text-kui-light-red-900 dark:text-kui-dark-red-900">Danger zone</h3>
      <p class="text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900">Delete this workspace and all its data.</p>
      <Button variant="error" onclick={() => modalActive = true}>Delete workspace</Button>
    </div>

    <Modal.Root bind:active={modalActive}>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Delete workspace?</Modal.Title>
          <Modal.Subtitle>Type the workspace name to confirm.</Modal.Subtitle>
        </Modal.Header>
        <Modal.Body>
          <Input bind:value={confirmName} label="Workspace name" placeholder="acme" />
        </Modal.Body>
        <Modal.Footer>
          <Modal.Action>
            <Button variant="secondary" onclick={() => modalActive=false}>Cancel</Button>
            <Button variant="error" disabled={!confirmName} onclick={() => modalActive=false}>Delete workspace</Button>
          </Modal.Action>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  {/if}
</div>
```

Destructive copy follows Button docs best practice: `Delete workspace` button → toast `Workspace deleted`.

---

## 4. FAQ / Help — Collapse + Note + CodeSnippet

```svelte
<script>import * as Collapse from 'kampsy-ui'; import Note from 'kampsy-ui'; import CodeSnippet from 'kampsy-ui';</script>
<Collapse.Root>
  <Collapse.Item>
    <Collapse.Trigger>How do I install?</Collapse.Trigger>
    <Collapse.Content>
      <CodeSnippet code={`pnpm add -D kampsy-ui@latest`} />
      <Note type="success" fill size="small">Add the 3 CSS lines from SKILL.md Step 1.4</Note>
    </Collapse.Content>
  </Collapse.Item>
  <Collapse.Item>
    <Collapse.Trigger>How do I theme?</Collapse.Trigger>
    <Collapse.Content>Use <code>bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000</code> pairs (see tokens.md).</Collapse.Content>
  </Collapse.Item>
</Collapse.Root>
```

---

## 5. Command Bar Hint — Kbd

```svelte
<script>import * as Kbd from 'kampsy-ui';</script>
<span class="inline-flex items-center gap-1 text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900">
  Press <Kbd.Root>⌘</Kbd.Root> <Kbd.Root>K</Kbd.Root> to search
</span>
```

---

## Checklist before shipping

- [ ] `@source` wiring present (Step 1.4)
- [ ] Variants/sizes from enums only
- [ ] Snippet decorators for Button/Note, Component for Badge icon
- [ ] `bind:` for controlled components
- [ ] Dark pairs for every `kui-*`
