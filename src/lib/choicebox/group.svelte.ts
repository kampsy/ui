
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