import { browser } from "$app/environment"
import type { RecommendedEvents, CustomEvents } from "./googleTagEvents.js"

export const googleTag = <T>(
	event: string,
	eventName: RecommendedEvents | CustomEvents,
	param: T,
) => {
	if (browser) {
		// oxlint-disable-next-line typescript/ban-ts-comment
		// @ts-ignore
		window?.gtag(event, eventName, param)
	}
}
