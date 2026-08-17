import { describe, it, expect } from "vitest"
import {
	resolveItemLabelClass,
	resolveTitleClass,
	resolveDescriptionClass,
	resolveRadioContClass,
	resolveRadioDotClass,
	resolveCheckboxContClass,
	resolveCheckboxCheckClass,
	resolveGroupLabelClass,
	itemLabelBase,
	itemLabelDisabled,
	itemLabelSelected,
	itemLabelDefault,
	titleBase,
	titleDisabled,
	titleSelected,
	titleDefault,
	descriptionBase,
	descriptionDisabled,
	descriptionSelected,
	descriptionDefault,
	radioContBase,
	radioContDisabled,
	radioContSelected,
	radioContDefault,
	radioDotBase,
	radioDotSelected,
	radioDotDefault,
	checkboxContBase,
	checkboxContDisabled,
	checkboxContSelected,
	checkboxContDefault,
	checkboxCheckBase,
	checkboxCheckSelected,
	checkboxCheckDefault,
	legendBase,
	legendDisabled,
	legendDefault,
	focusStyles,
} from "./styles.js"

describe("resolveItemLabelClass", () => {
	it("returns default label styles", () => {
		const result = resolveItemLabelClass({})
		expect(result).toEqual(
			expect.arrayContaining([itemLabelBase, itemLabelDefault, focusStyles]),
		)
	})

	it("returns selected label styles", () => {
		const result = resolveItemLabelClass({ selected: true })
		expect(result).toEqual(
			expect.arrayContaining([itemLabelBase, itemLabelSelected, focusStyles]),
		)
	})

	it("returns disabled label styles", () => {
		const result = resolveItemLabelClass({ disabled: true })
		expect(result).toEqual(
			expect.arrayContaining([itemLabelBase, itemLabelDisabled, focusStyles]),
		)
	})
})

describe("resolveTitleClass", () => {
	it("returns default title styles", () => {
		const result = resolveTitleClass({})
		expect(result).toEqual(expect.arrayContaining([titleBase, titleDefault]))
	})

	it("returns selected title styles", () => {
		const result = resolveTitleClass({ selected: true })
		expect(result).toEqual(expect.arrayContaining([titleBase, titleSelected]))
	})

	it("returns disabled title styles", () => {
		const result = resolveTitleClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([titleBase, titleDisabled]))
	})
})

describe("resolveDescriptionClass", () => {
	it("returns default description styles", () => {
		const result = resolveDescriptionClass({})
		expect(result).toEqual(expect.arrayContaining([descriptionBase, descriptionDefault]))
	})

	it("returns selected description styles", () => {
		const result = resolveDescriptionClass({ selected: true })
		expect(result).toEqual(expect.arrayContaining([descriptionBase, descriptionSelected]))
	})

	it("returns disabled description styles", () => {
		const result = resolveDescriptionClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([descriptionBase, descriptionDisabled]))
	})
})

describe("resolveRadioContClass", () => {
	it("returns default radio container styles", () => {
		const result = resolveRadioContClass({})
		expect(result).toEqual(expect.arrayContaining([radioContBase, radioContDefault]))
	})

	it("returns selected radio container styles", () => {
		const result = resolveRadioContClass({ selected: true })
		expect(result).toEqual(expect.arrayContaining([radioContBase, radioContSelected]))
	})

	it("returns disabled radio container styles", () => {
		const result = resolveRadioContClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([radioContBase, radioContDisabled]))
	})
})

describe("resolveRadioDotClass", () => {
	it("returns transparent dot by default", () => {
		const result = resolveRadioDotClass({})
		expect(result).toEqual(expect.arrayContaining([radioDotBase, radioDotDefault]))
	})

	it("returns selected dot styles", () => {
		const result = resolveRadioDotClass({ selected: true })
		expect(result).toEqual(expect.arrayContaining([radioDotBase, radioDotSelected]))
	})
})

describe("resolveCheckboxContClass", () => {
	it("returns default checkbox container styles", () => {
		const result = resolveCheckboxContClass({})
		expect(result).toEqual(expect.arrayContaining([checkboxContBase, checkboxContDefault]))
	})

	it("returns selected checkbox container styles", () => {
		const result = resolveCheckboxContClass({ selected: true })
		expect(result).toEqual(expect.arrayContaining([checkboxContBase, checkboxContSelected]))
	})

	it("returns disabled checkbox container styles", () => {
		const result = resolveCheckboxContClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([checkboxContBase, checkboxContDisabled]))
	})
})

describe("resolveCheckboxCheckClass", () => {
	it("returns transparent check by default", () => {
		const result = resolveCheckboxCheckClass({})
		expect(result).toEqual(expect.arrayContaining([checkboxCheckBase, checkboxCheckDefault]))
	})

	it("returns selected check styles", () => {
		const result = resolveCheckboxCheckClass({ selected: true })
		expect(result).toEqual(expect.arrayContaining([checkboxCheckBase, checkboxCheckSelected]))
	})
})

describe("resolveGroupLabelClass", () => {
	it("returns default group label styles", () => {
		const result = resolveGroupLabelClass({})
		expect(result).toEqual(expect.arrayContaining([legendBase, legendDefault]))
	})

	it("returns disabled group label styles", () => {
		const result = resolveGroupLabelClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([legendBase, legendDisabled]))
	})
})
