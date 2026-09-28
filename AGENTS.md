# Agent Guidelines for kampsy-ui

## Project Overview

Svelte 5 UI component library using TypeScript, TailwindCSS v4, and Vite. Components use Svelte 5 runes ($props, $derived, $bindable) and snippets for reusable templates.

## Build Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Build package only
pnpm package

# Preview production build
pnpm preview
```

## Lint/Format Commands

```bash
# Check formatting (Oxfmt) and lint (Oxlint)
pnpm lint

# Auto-format code with Oxfmt
pnpm format

# Type check
pnpm check

# Type check with watch mode
pnpm check:watch
```

## Test Commands

```bash
# Run all tests
pnpm test

# Unit tests only (Vitest)
pnpm test:unit

# Run single unit test file
pnpm exec vitest run src/path/to/file.test.ts

# Run unit tests in watch mode
pnpm exec vitest

# Integration tests only (Playwright)
pnpm test:integration

# Run single integration test
pnpm exec playwright test tests/test.ts
```

## Code Style Guidelines

### Formatting (mirrors `.oxfmtrc.json`)

- **Indentation**: Tabs, `tabWidth: 2`
- **Quotes**: Double (`singleQuote: false`)
- **Semicolons**: None (`semi: false`)
- **Trailing commas**: All
- **Print width**: 95 characters
- **Arrow parens**: Avoid
- **Bracket spacing**: True, brackets on new line
- **Sort Tailwind classes**: True
- **Line endings**: Unix-style (LF)

### TypeScript

- Enable `strict: true` in tsconfig
- Use explicit types for component props via interfaces
- Extend HTML element types (e.g., `HTMLButtonAttributes`)
- Use `type` for unions, `interface` for object shapes
- Module resolution: NodeNext

### Svelte 5 Conventions

```svelte
<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import type { Component, Snippet } from "svelte"

	interface Props extends HTMLButtonAttributes {
		variant?: "primary" | "secondary"
		children: Snippet
	}

	let { variant = "primary", children, ...rest }: Props = $props()
	let computedClass = $derived.by(() => calculateClass(variant))
</script>
```

- Use `$props()` for component props
- Use `$derived.by()` for computed values
- Use `$bindable()` for two-way binding
- Use `$state()` for local reactive state
- Define snippets with `{#snippet name()}` and render with `{@render name()}`
- Use `$props.id()` for unique IDs

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.svelte`, `UserProfile.svelte`)
- **Files**: Lowercase for utilities (e.g., `utils.ts`, `types.ts`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Interfaces**: PascalCase with Props suffix for component props
- **Types**: PascalCase
- **Multi-part components**: Use index.ts with namespace exports

### Imports

```typescript
// Group: external libs, then Svelte imports, then internal
import { fade } from "svelte/transition"
import type { Component, Snippet } from "svelte"
import type { HTMLButtonAttributes } from "svelte/elements"
import LoaderCircle from "$lib/icons/loader-circle.svelte"
```

- Use Svelte's `$lib` alias for internal imports
- Import types with `type` keyword when possible
- Use `.js` extension in imports (e.g., `./index.js`)

### Tailwind Classes

- Use semantic color tokens: `bg-kui-light-gray-1000`, `dark:bg-kui-dark-gray-1000`
- Prefer arbitrary values for specific sizes: `h-[40px]`, `rounded-[6px]`
- Group related classes logically
- Extract repeated patterns into constants/objects
- Support dark mode with `dark:` prefix

### Component Structure

1. Script block with TypeScript
2. Interface definition for Props (extending HTML types)
3. `$props()` destructuring with defaults
4. `$state()` for local state
5. Helper objects/constants
6. `$derived.by()` for computed values
7. Snippet definitions
8. Template markup with conditional rendering

### Error Handling

- Use TypeScript's strict null checks
- Provide default values for optional props
- Validate prop values with TypeScript unions
- Use early returns in snippets for conditional rendering

### Lint Suppressions

- Never suppress lint, `svelte-check`, or type errors with comments (`eslint-disable`, `oxlint-disable`, `svelte-ignore`, `@ts-ignore`, `@ts-expect-error`, etc.).
- Fix the root cause instead. If a rule is wrong globally, change config (`.oxlintrc.json`, `tsconfig.json`) with justification — don't silence per-line.

### Pre-commit Verification

- Always run `pnpm format`, then `pnpm lint`, then `pnpm check` before committing. All three must be clean.

### Exports

Export components from `src/lib/index.ts`:

```typescript
// Default export for single component
export { default as Button } from "./button/button.svelte"

// Namespace export for multi-part components
export * as Menu from "./menu/index.js"
```

## Testing Guidelines

- Unit tests use Vitest with describe/it/expect pattern
- Place tests alongside source files with `.test.ts` extension
- Test files should import from `.js` sources

## Commit Convention

Follow conventional commits: `category(scope): message`

Categories: `feat`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`

Example: `feat(button): add loading state to button component`
