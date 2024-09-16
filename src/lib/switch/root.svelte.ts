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