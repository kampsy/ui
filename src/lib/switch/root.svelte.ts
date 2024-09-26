
/**
 * Creates a state manager for a switch component.
 *
 * @param {Object} initial - The initial state of the switch component.
 * @param {string} initial.selected - The initially selected value of the switch component.
 * @param {string} initial.name - The name of the switch component.
 * @param {('small' | 'medium' | 'large')} initial.size - The size of the switch component.
 * @param {boolean} initial.fullWidth - Whether the switch component should take up the full width of its container.
 * @returns {Object} An object with methods to get and set the selected value of the switch component.
 */
export function createRootState(initial: {
    selected: string,
    name: string,
    size: 'small' | 'medium' | 'large',
    fullWidth: boolean
}) {

    let selected = $state(initial.selected);

    function getSelected() {
        return selected
    }
    function setSelected(value: string) {
        selected = value
    }

    return {
        name: initial.name,
        size: initial.size,
        fullWidth: initial.fullWidth,
        getSelected,
        setSelected
    }
}