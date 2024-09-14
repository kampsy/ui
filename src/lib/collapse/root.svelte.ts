
/**
 * Creates a state manager that returns an object with a getter and
 * setter for the collapse state.
 *
 * The collapse state is stored in the global state with the key 'collapse'.
 *
 * @param {Object} initial the initial state of the collapse
 * @param {string} initial.item the initial collapsed item value
 * @returns {Object} an object with 'get' and 'set' methods
 */
export function createCollapseState(initial: { item: string }) {
    let item = $state(initial.item)

    function get() {
        return item
    }
    function set(value: string) {
        item = value
    }
    return {
        get,
        set
    }
}