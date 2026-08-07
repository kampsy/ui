import type { ClassValue } from "svelte/elements"

/** Single member inside an AvatarGroup. */
export interface AvatarMember {
	/** Username or entity name; used for Vercel avatar URL and accessible title. */
	username?: string
	/** Direct image URL. */
	src?: string
	/** 1–2 uppercase characters to display when no image is available. */
	letter?: string
	/** Accessible title for the member; falls back to username. */
	title?: string
}

/** Core avatar appearance. */
export interface AvatarProps {
	/** Diameter in px. Default: 32 */
	size?: number
	/** Image URL. If absent, username or letter fallback is used. */
	src?: string
	/** Username used for Vercel avatar URL and fallback title. */
	username?: string
	/** 1–2 uppercase characters shown when no image source resolves. */
	letter?: string
	/** Loading shell; never the final fallback. */
	placeholder?: boolean
	/** Accessible name for the entity; defaults to username. */
	title?: string
	class?: ClassValue
}

/** Group of stacked avatars. */
export interface AvatarGroupProps {
	members: AvatarMember[]
	/** Diameter in px. Default: 32 */
	size?: number
	/** Maximum visible avatars; remaining members become a +N badge. */
	limit?: number
	/** Put the last member visually on top instead of the first. */
	reverse?: boolean
	/** Auto scales negative spacing with size, or pass a number of px. */
	overlap?: "auto" | number
	class?: ClassValue
}

/** Avatar rendered with a centered icon. */
export interface AvatarWithIconProps {
	/** Diameter in px. Default: 32 */
	size?: number
	icon: Snippet
	/** Fill a subtle background behind the icon. */
	iconBackground?: boolean
	class?: ClassValue
}

import type { Snippet } from "svelte"
export type { Snippet }
