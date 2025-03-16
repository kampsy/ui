export function createRootState(initial: {
	isMobile: boolean;
	isActive: boolean;
	alignment: 'left' | 'right';
	contentPosition: string;
	transY: number;
}) {
	let isMobile = $state(initial.isMobile);
	let isActive = $state(initial.isActive);
	let contentPosition = $state(initial.contentPosition);
	let transY = $state(initial.transY);

	function getIsMobile() {
		return isMobile;
	}
	function setIsMobile(value: boolean) {
		isMobile = value;
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
		alignment: initial.alignment,
		getIsMobile,
		setIsMobile,
		getIsActive,
		setIsActive,
		getContentPosition,
		setContentPosition,
		getTransY,
		setTransY
	};
}
