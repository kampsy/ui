
function createSwitch() {

    let switchObj = $state({ name: '', selected: '' });

    return {
        
        get name() {
            return switchObj.name
        },
        setName: (value: string) => {
            switchObj = {
                name: value,
                selected: switchObj.selected
            };
        },
        get selected() {
            return switchObj.selected
        },
        setSelected: (value: string) => {
            switchObj = {
                name: switchObj.name,
                selected: value
            };
        }
    }
}

export const switchCont = createSwitch()