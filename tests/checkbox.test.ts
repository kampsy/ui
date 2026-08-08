import { expect, test } from "@playwright/test"

test("indeterminate checkbox does not change on click", async ({ page }) => {
	await page.goto("/checkbox")

	const indeterminateCheckbox = page.getByRole("checkbox", { name: "Option 1" }).nth(1)
	await expect(indeterminateCheckbox).toHaveJSProperty("indeterminate", true)
	await expect(indeterminateCheckbox).not.toBeChecked()

	await page.getByText("Option 1").nth(1).click()

	await expect(indeterminateCheckbox).toHaveJSProperty("indeterminate", true)
	await expect(indeterminateCheckbox).not.toBeChecked()
})

test("unchecked checkbox still toggles on click", async ({ page }) => {
	await page.goto("/checkbox")

	const defaultCheckbox = page.getByRole("checkbox", { name: "Option 1" }).first()
	await expect(defaultCheckbox).not.toBeChecked()

	await page.getByText("Option 1").first().click()

	await expect(defaultCheckbox).toBeChecked()
})
