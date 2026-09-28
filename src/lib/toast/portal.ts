import type { Attachment } from "svelte/attachments"

function getTopLayerHost(): HTMLElement {
	const dialogs = document.querySelectorAll<HTMLDialogElement>("dialog[open]")
	return dialogs.item(dialogs.length - 1) ?? document.body
}

export const portalToTopLayer: Attachment<HTMLElement> = (node: HTMLElement) => {
	const move = () => {
		const host = getTopLayerHost()
		if (node.parentElement !== host) host.appendChild(node)
	}

	move()

	const observer = new MutationObserver(move)
	observer.observe(document.body, {
		subtree: true,
		attributes: true,
		attributeFilter: ["open"],
	})

	return () => observer.disconnect()
}
