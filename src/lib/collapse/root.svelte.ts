
/**
 * Creates a state manager that returns an object with a getter and
 * setter for the collapse state.
 *
 * The collapse state is stored in the global state with the key 'collapse'.
 *
 * @param {Object} initial the initial state of the collapse
 * @param {boolean} initial.multiple the initial multiple value
 * @param {string} initial.item the initial collapsed item value
 * @returns {Object} an object with 'get' and 'set' methods
 */
export function createCollapseState(initial: { multiple ?: boolean | undefined; item: Array<string> }) {
    let multiple = $state(initial.multiple)
    let item = $state(initial.item)

    function getMultiple() {
        return multiple
    }
    function setMultiple(value: boolean) {
        multiple = value
    }

    function getItem() {
        return item
    }
    function setItem(value: string) {
        if (!item.includes(value)) {
            item.push(value);
        }
    }

    function deleteItem(value: string) {    
        item = item.filter(i => i !== value);
    }
    
    function clearItems() {
        item = [];
    }

    return {
        getMultiple,
        setMultiple,
        getItem,
        setItem,
        deleteItem,
        clearItems
    }
}