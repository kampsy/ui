export function createModalState(initial: {
	isMobile: boolean
	isActive: boolean
	getSticky: () => boolean
	titleId: string
	descriptionId: string
	getDismissible: () => boolean
	onActiveChange: (value: boolean) => void
}) {
	let isMobile = $state(initial.isMobile)
	let isActive = $state(initial.isActive)
	let hasTitle = $state(false)
	let hasDescription = $state(false)

	function getIsMobile() {
		return isMobile
	}
	function setIsMobile(value: boolean) {
		isMobile = value
	}

	function getIsActive() {
		return isActive
	}
	function setIsActive(value: boolean) {
		isActive = value
		initial.onActiveChange(value)
	}
	function getHasTitle() {
		return hasTitle
	}
	function setHasTitle(value: boolean) {
		hasTitle = value
	}
	function getHasDescription() {
		return hasDescription
	}
	function setHasDescription(value: boolean) {
		hasDescription = value
	}
	function getTitleId() {
		return initial.titleId
	}
	function getDescriptionId() {
		return initial.descriptionId
	}

	return {
		getSticky: initial.getSticky,
		getDismissible: initial.getDismissible,
		getTitleId,
		getDescriptionId,
		getIsMobile,
		setIsMobile,
		getIsActive,
		setIsActive,
		getHasTitle,
		setHasTitle,
		getHasDescription,
		setHasDescription,
	}
}
