
/**
 * Detects the operating system of the user, given a user agent string.
 *
 * @returns The name of the operating system, or "unknown" if it could not be determined.
 */
export function detectOperatingSystem() {
    if (typeof window === "undefined") return "unknown";

    const userAgent = navigator.userAgent;

    // Check for iOS devices
    if (
        /iPad|iPhone|iPod/.test(userAgent) ||
        (userAgent.includes("Mac") && "ontouchend" in document)
    ) {
        return "iOS";
    }

    // List of common OS platforms to check
    const osList = ["Windows", "Android", "Unix", "Mac", "Linux", "BlackBerry"];

    // Find and return the matching OS
    const detectedOS = osList.find(os => new RegExp(os, "i").test(userAgent));

    return detectedOS || "unknown";
}


export const androidDisableScrolling = () => {
    document.body.style.overflowY = 'hidden';
}

export const androidEnableScrolling = () => {
    document.body.style.overflowY = 'scroll';
}

export const androidEnableDisableScrolling = (isOpen: boolean) => {
    if (isOpen) {
        androidDisableScrolling();
    } else {
        androidEnableScrolling();
    }
}

//TODO: the scrolling flickers on iOS when scrolling replace with a better solution.
export const iosDisableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

export const iosEnableScrolling = () => {
    window.onscroll = function () { };
}

export const iosEnableDisableScrolling = (isOpen: boolean) => {
    if (isOpen) {
        iosDisableScrolling();
    } else {
        iosEnableScrolling();
    }
}

export const preventScroll = (isOpen: boolean) => {
    const os = detectOperatingSystem();

    if (os === "iOS" || os === "Mac") {
        iosEnableDisableScrolling(isOpen);
    } else if (os === "Android" || os === "Linux" || os === "Windows") {
        androidEnableDisableScrolling(isOpen);
    }
}