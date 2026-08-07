export { default as Avatar } from "./avatar.svelte"
export { default as AvatarGroup } from "./avatar-group.svelte"
export { default as AvatarWithIcon } from "./avatar-with-icon.svelte"

export type {
	AvatarProps,
	AvatarMember,
	AvatarGroupProps,
	AvatarWithIconProps,
} from "./types.js"

export { resolveAvatarSrc, resolveOverlapPx, normalizeLetter, resolveTitle } from "./utils.js"
export { resolveAvatarClass, sizeStyle, fontSizeStyle } from "./styles.js"
