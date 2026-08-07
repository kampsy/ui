/**
 * Custom semantic-release notes plugin.
 *
 * Replaces the default commit-based release notes with the full description of
 * merged pull requests associated with the commits in the release.
 */
module.exports = {
	generateNotes,
	getRepoSlug,
	dedupePRs,
	sanitizeBody,
	fallbackNotes,
	formatPR,
}

async function generateNotes(pluginConfig, context) {
	const { commits, logger } = context
	const { repositoryUrl } = context.options

	if (!commits || commits.length === 0) {
		logger.log("No commits found; skipping PR-based release notes.")
		return ""
	}

	const prs = await resolveMergedPRs(commits, repositoryUrl, logger)

	if (prs.length === 0) {
		logger.log("No merged PRs found; falling back to commit subjects.")
		return fallbackNotes(commits)
	}

	const unique = dedupePRs(prs)
	logger.log(`Found ${unique.length} merged PR(s) for release notes.`)

	return unique.map(pr => formatPR(pr, repositoryUrl)).join("\n\n---\n\n")
}

function getRepoSlug(repositoryUrl) {
	if (!repositoryUrl) return undefined
	const match = repositoryUrl.match(
		/github\.com[:/](?<owner>[\w.-]+)\/(?<repo>[\w.-]+?)(?:\.git)?$/,
	)
	return match?.groups ? `${match.groups.owner}/${match.groups.repo}` : undefined
}

async function resolveMergedPRs(commits, repositoryUrl, logger) {
	const slug = getRepoSlug(repositoryUrl)
	if (!slug) {
		logger.log("Could not determine GitHub repository slug from repositoryUrl.")
		return []
	}

	const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
	const prs = []

	for (const commit of commits) {
		const sha = commit.hash
		if (!sha) continue

		try {
			const pr = await fetchAssociatedPR(slug, sha, token)
			if (pr && pr.state === "MERGED") {
				prs.push(pr)
			}
		} catch (error) {
			logger.warn(`Failed to resolve PR for commit ${sha}: ${error.message}`)
		}
	}

	return prs
}

async function fetchAssociatedPR(slug, sha, token) {
	const url = `https://api.github.com/repos/${slug}/commits/${sha}/pulls`
	const headers = {
		Accept: "application/vnd.github.groot-preview+json",
		"User-Agent": "semantic-release-pr-notes",
	}
	if (token) {
		headers.Authorization = `Bearer ${token}`
	}

	const response = await fetch(url, { headers })
	if (!response.ok) {
		throw new Error(`GitHub API ${response.status}: ${await response.text()}`)
	}

	const pulls = await response.json()
	if (!Array.isArray(pulls) || pulls.length === 0) return undefined

	// Prefer the first merged PR associated with the commit.
	return pulls.find(pr => pr.state === "MERGED") || pulls[0]
}

function dedupePRs(prs) {
	const seen = new Set()
	return prs.filter(pr => {
		if (seen.has(pr.number)) return false
		seen.add(pr.number)
		return true
	})
}

function formatPR(pr, repositoryUrl) {
	const title = `#${pr.number}: ${pr.title}`
	const link = pr.html_url || (repositoryUrl ? `${repositoryUrl}/pull/${pr.number}` : "")
	const header = link ? `[${title}](${link})` : title
	const body = sanitizeBody(pr.body || "")
	return `## ${header}\n\n${body}`
}

function sanitizeBody(body) {
	// Remove common PR template sections that don't belong in release notes.
	return body
		.replace(/<!--[\s\S]*?-->/g, "")
		.replace(/## Type of Change[\s\S]*?(?=## |$)/gi, "")
		.replace(/## How Has This Been Tested\?[\s\S]*?(?=## |$)/gi, "")
		.replace(/## Checklist[\s\S]*?(?=## |$)/gi, "")
		.replace(/## Screenshots \(if applicable\)[\s\S]*?(?=## |$)/gi, "")
		.replace(/\n{3,}/g, "\n\n")
		.trim()
}

function fallbackNotes(commits) {
	const lines = commits.map(commit => `- ${commit.subject}`)
	return ["## Changes", "", ...lines].join("\n")
}
