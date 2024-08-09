
/**
 * Attaches a click event listener to the document body that triggers the provided function
 * when a click event occurs outside of the specified node.
 *
 * @param {HTMLElement} node - The element to check for outside clicks.
 * @param {F} fn - The function to be triggered when a click occurs outside of the node.
 * @return {Object} An object with a `destroy` method to remove the event listener.
 */
export const clickOutside = (node: HTMLElement,fn: Function): object => {
    const isOutside = (e: Event) => {
        if (node && !node.contains(e.target as Node) && !e.defaultPrevented) {
            fn();
        }
    };
    document.body.addEventListener('click', isOutside, true);
    return {
        destroy() {
            document.body.removeEventListener('click', isOutside, true);
        }
    };
};

export function runOnce(fn: Function | null): (event: Event) => void {
    return function(event: Event): void {
        if (fn) {
            // @ts-ignore
            fn.call(this, event);
        }
        fn = null
    }
}

export function preventDefault(fn: Function): (event: Event) => void {
    return function(event: Event): void {
        if (fn) {
            event.preventDefault();
            // @ts-ignore
            fn.call(this, event);
        }
    }
}

export function stopPropagation(fn: Function): (event: Event) => void {
    return function(event: Event): void {
        if (fn) {
            event.stopPropagation();
            // @ts-ignore
            fn.call(this, event);
        }
    }
}