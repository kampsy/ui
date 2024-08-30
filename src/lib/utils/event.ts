
/**
 * Attaches a click event listener to the document body that triggers the provided function
 * when a click event occurs outside of the specified node.
 *
 * @param {HTMLElement} node - The element to check for outside clicks.
 * @param {F} fn - The function to be triggered when a click occurs outside of the node.
 * @return {Object} An object with a `destroy` method to remove the event listener.
 */
export const clickOutside = (node: HTMLElement, fn: (event: Event) => void): { destroy(): void } => {
    const handleClick = (event: Event) => {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
            fn(event);
        }
    };
    document.body.addEventListener('click', handleClick, true);
    return {
        destroy() {
            document.body.removeEventListener('click', handleClick, true);
        }
    };
};


/**
 * Given an event, determines whether the component should be placed at the top
 * or bottom of the viewport. The algorithm works by comparing the position of
 * the target element from the top of the viewport to the position of the target
 * element from the bottom of the viewport. The position with the greater value
 * indicates which direction the component should be placed.
 *
 * @param {Event} evt - The event from which to determine the component position.
 * @return {string} 'top' or 'bottom'
 */
export const componentPosition = (evt: Event): 'top' | 'bottom' => {
    const target = evt.currentTarget as HTMLElement;
    const { top, bottom } = target.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    const positionFromTop = top;
    const positionFromBottom = viewportHeight - bottom;

    return positionFromTop > positionFromBottom ? 'bottom' : 'top';
};


/**
 * Returns a function that will only run the provided function once, and
 * then replace itself with a no-op function.
 *
 * @param {function(event: T): void | null} fn - The function to be run once.
 * @return {function(event: T): void} - A new function that will run the provided function once, and then do nothing.
 */
export function runOnce<T extends Event>(fn: ((event: T) => void) | null): (event: T) => void {
    return function (event: T): void {
        if (fn) {
            fn(event); // Directly calling `fn` without `call` as `this` is usually not needed.
            fn = null; // Ensure the function only runs once.
        }
    };
}

/**
 * Returns a function that will prevent the default action of the event, and
 * then calls the provided function if it exists.
 *
 * @param {function(event: T): void | null} fn - The function to be called after preventing the default action.
 * @return {function(event: T): void} - A new function that will prevent the default action and then call the provided function if it exists.
 */
export function preventDefault<T extends Event>(fn?: (event: T) => void): (event: T) => void {
    return function (event: T): void {
        if (fn) {
            event.preventDefault();
            fn(event); // Directly calling `fn` without `call` since `this` is usually not needed.
        }
    };
}


/**
 * Returns a function that will stop the propagation of the event, and
 * then calls the provided function if it exists.
 *
 * @param {function(event: T): void | null} fn - The function to be called after stopping the event propagation.
 * @return {function(event: T): void} - A new function that will stop the event propagation and then call the provided function if it exists.
 */
export function stopPropagation<T extends Event>(fn?: (event: T) => void): (event: T) => void {
    return function (event: T): void {
        if (fn) {
            event.stopPropagation();
            fn(event);  // Directly calling `fn` without `call` since `this` is usually not needed.
        }
    };
}