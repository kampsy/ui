export function createRootState(initial: {
    isMobile: boolean, selected: string, isActive: boolean,
    contentPosition: string, size: 'tiny' | 'small' | 'medium' | 'large', transY: number
}) {
    let isMobile = $state(initial.isMobile);
    let selected = $state(initial.selected);
    let isActive = $state(initial.isActive);
    let contentPosition = $state(initial.contentPosition);
    let transY = $state(initial.transY);


    function getIsMobile() {
        return isMobile
    }
    function setIsMobile(value: boolean) {
        isMobile = value
    }

    function getSelected() {
        return selected
    }
    function setSelected(value: string) {
        selected = value
    }

    function getIsActive() {
        return isActive
    }
    function setIsActive(value: boolean) {
        isActive = value
    }

    function getContentPosition() {
        return contentPosition
    }
    function setContentPosition(value: string) {
        contentPosition = value
    }

    function setTransY(value: number) {
        transY = value
    }
    function getTransY() {
        return transY
    }

    return {
        size: initial.size,
        getIsMobile,
        setIsMobile,
        getSelected,
        setSelected,
        getIsActive,
        setIsActive,
        getContentPosition,
        setContentPosition,
        getTransY,
        setTransY
    }
}