import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import {
	generateNotes,
	getRepoSlug,
	dedupePRs,
	sanitizeBody,
	fallbackNotes,
	formatPR,
} from "../scripts/semantic-release-pr-notes.cjs"

describe("getRepoSlug", () => {
	it("extracts owner/repo from HTTPS URL", () => {
		expect(getRepoSlug("https://github.com/kampsy/ui.git")).toBe("kampsy/ui")
	})

	it("extracts owner/repo from SSH URL", () => {
		expect(getRepoSlug("git@github.com:kampsy/ui.git")).toBe("kampsy/ui")
	})

	it("returns undefined for non-GitHub URLs", () => {
		expect(getRepoSlug("https://gitlab.com/kampsy/ui.git")).toBeUndefined()
	})
})

describe("dedupePRs", () => {
	it("removes duplicate PRs by number", () => {
		const prs = [
			{ number: 1, title: "First" },
			{ number: 2, title: "Second" },
			{ number: 1, title: "First again" },
		]
		expect(dedupePRs(prs)).toHaveLength(2)
		expect(dedupePRs(prs).map(p => p.number)).toEqual([1, 2])
	})
})

describe("sanitizeBody", () => {
	it("strips PR template sections", () => {
		const body = `## Description
Some description.

## Type of Change
- [x] Feature

## Checklist
- [x] Done

## Screenshots (if applicable)
N/A`
		const cleaned = sanitizeBody(body)
		expect(cleaned).toContain("## Description")
		expect(cleaned).toContain("Some description.")
		expect(cleaned).not.toContain("## Type of Change")
		expect(cleaned).not.toContain("## Checklist")
		expect(cleaned).not.toContain("## Screenshots")
	})

	it("removes HTML comments", () => {
		expect(sanitizeBody("<!-- hidden --> visible")).toBe("visible")
	})
})

describe("fallbackNotes", () => {
	it("lists commit subjects", () => {
		const commits = [{ subject: "feat: add button" }, { subject: "fix: button color" }]
		expect(fallbackNotes(commits)).toContain("feat: add button")
		expect(fallbackNotes(commits)).toContain("fix: button color")
	})
})

describe("formatPR", () => {
	it("formats a PR with link and sanitized body", () => {
		const pr = {
			number: 50,
			title: "feat: example",
			html_url: "https://github.com/kampsy/ui/pull/50",
			body: "## Description\nExample body.\n\n## Type of Change\n- [x] Feature",
		}
		const formatted = formatPR(pr, "https://github.com/kampsy/ui")
		expect(formatted).toContain("## [#50: feat: example]")
		expect(formatted).toContain("Example body.")
		expect(formatted).not.toContain("Type of Change")
	})
})

describe("generateNotes", () => {
	const originalFetch = global.fetch

	beforeEach(() => {
		global.fetch = vi.fn()
	})

	afterEach(() => {
		global.fetch = originalFetch
		vi.restoreAllMocks()
	})

	function createContext(commits) {
		return {
			commits,
			logger: { log: vi.fn(), warn: vi.fn() },
			options: { repositoryUrl: "https://github.com/kampsy/ui.git" },
		}
	}

	it("returns empty string when no commits are provided", async () => {
		const result = await generateNotes({}, createContext([]))
		expect(result).toBe("")
	})

	it("falls back to commit subjects when no PR is associated", async () => {
		global.fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		})

		const result = await generateNotes(
			{},
			createContext([{ hash: "abc123", subject: "feat: add feature" }]),
		)

		expect(result).toContain("feat: add feature")
		expect(result).toContain("## Changes")
	})

	it("uses merged PR description as release notes", async () => {
		global.fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [
				{
					number: 50,
					title: "feat: example PR",
					state: "MERGED",
					html_url: "https://github.com/kampsy/ui/pull/50",
					body: "## Description\nExample release content.",
				},
			],
		})

		const result = await generateNotes(
			{},
			createContext([{ hash: "abc123", subject: "feat: example PR" }]),
		)

		expect(result).toContain("## [#50: feat: example PR]")
		expect(result).toContain("Example release content.")
	})

	it("ignores unmerged PRs", async () => {
		global.fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [
				{
					number: 50,
					title: "draft PR",
					state: "OPEN",
					html_url: "https://github.com/kampsy/ui/pull/50",
					body: "## Description\nDraft content.",
				},
			],
		})

		const result = await generateNotes(
			{},
			createContext([{ hash: "abc123", subject: "feat: draft PR" }]),
		)

		expect(result).not.toContain("Draft content.")
		expect(result).toContain("feat: draft PR")
	})
})
