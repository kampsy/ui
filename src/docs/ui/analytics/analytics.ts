import { browser } from '$app/environment'
import type { RecommendedEvents, CustomEvents } from './googleTagEvents.js'

export const googleTag = <T>(event: string, eventName: RecommendedEvents | CustomEvents, param: T) => {
    if (browser) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window?.gtag(event, eventName, param)
    } 
}