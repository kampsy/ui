
/**
 * Creates a state manager for a Choicebox.Group component.
 *
 * The state manager is stored in the global state with the key 'choicebox'.
 *
 * @param {Object} initial the initial state of the Choicebox.Group
 * @param {string | Array<string>} initial.selected the initially selected value of the Choicebox.Group
 * @param {string} initial.name the name of the Choicebox.Group
 * @param {'radio' | 'checkbox'} initial.type the type of the Choicebox.Group
 * @param {boolean} initial.disabledParent whether the Choicebox.Group is disabled
 * @returns {Object} an object with a getter and setter for the selected value of the Choicebox.Group
 */
export function createGroupState(initial: {
    selected: string | Array<string>, name: string,
    type: 'radio' | 'checkbox', disabledParent: boolean
}) {
    let selected = $state(initial.selected);

    function get() {
        return selected
    }
    function set(value: string | Array<string>) {
        selected = value
    }

    return {
        name: initial.name,
        type: initial.type,
        disabledParent: initial.disabledParent,
        get,
        set
    }
}