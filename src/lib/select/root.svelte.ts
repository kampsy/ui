/**
 * @param {Object} initial - Initial state Select.Root.
 * @param {boolean} initial.isMobile - Whether the device is mobile.
 * @param {string} initial.error - Error state.
 * @param {string} initial.selected - Selected value.
 * @param {boolean} initial.isActive - Whether the select is active.
 * @param {string} initial.contentPosition - Content position.
 * @param {'tiny' | 'small' | 'medium' | 'large'} initial.size - Size of the select.
 * @param {number} initial.transY - Translation Y value.
 * @returns {Object} - Root state object.
 */
export function createRootState(initial: {
	isMobile: boolean;
	error: string;
	selected: string;
	isActive: boolean;
	contentPosition: string;
	size: 'tiny' | 'small' | 'medium' | 'large';
	transY: number;
}) {
	let isMobile = $state(initial.isMobile);
	let isError = $state(initial.error);
	let selected = $state(initial.selected);
	let isActive = $state(initial.isActive);
	let contentPosition = $state(initial.contentPosition);
	let transY = $state(initial.transY);

	function getIsMobile() {
		return isMobile;
	}
	function setIsMobile(value: boolean) {
		isMobile = value;
	}
	function getIsError() {
		return isError;
	}
	function setIsError(value: string) {
		isError = value;
	}
	function getSelected() {
		return selected;
	}
	function setSelected(value: string) {
		selected = value;
	}

	function getIsActive() {
		return isActive;
	}
	function setIsActive(value: boolean) {
		isActive = value;
	}

	function getContentPosition() {
		return contentPosition;
	}
	function setContentPosition(value: string) {
		contentPosition = value;
	}

	function setTransY(value: number) {
		transY = value;
	}
	function getTransY() {
		return transY;
	}

	return {
		size: initial.size,
		getIsMobile,
		setIsMobile,
		getIsError,
		setIsError,
		getSelected,
		setSelected,
		getIsActive,
		setIsActive,
		getContentPosition,
		setContentPosition,
		getTransY,
		setTransY
	};
}
