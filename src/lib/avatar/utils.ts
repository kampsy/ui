import type { AvatarMember } from "./types.js"

export const DEFAULT_SIZE = 32

/** Avatar placeholder service. */
export function vercelAvatarUrl(username: string, size: number): string {
	return `https://i.pravatar.cc/${size}`
}

export function resolveAvatarSrc(
	{
		src,
		username,
	}: {
		src?: string
		username?: string
	},
	size: number,
): string | undefined {
	if (src) return src
	if (username) return vercelAvatarUrl(username, size)
	return undefined
}

/** Keep only the first two uppercase characters, strip emoji/punctuation. */
export function normalizeLetter(letter?: string): string | undefined {
	if (!letter) return undefined
	const cleaned = letter
		.replace(/[^a-zA-Z\s]/g, "")
		.replace(/\s+/g, "")
		.slice(0, 2)
		.toUpperCase()
	return cleaned || undefined
}

export function resolveTitle(member: AvatarMember): string | undefined {
	return member.title || member.username
}

export function resolveOverlapPx(size: number, overlap: "auto" | number | undefined): number {
	if (typeof overlap === "number") return overlap
	// auto gives a generous, evenly-spaced cluster scaled with size
	return Math.round(size / 3.5)
}
