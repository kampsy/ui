import { expect, test } from "@playwright/test"

test("modal exposes its title and description accessibly", async ({ page }) => {
	await page.goto("/modal")

	const trigger = page.getByRole("button", { name: "Open Modal" }).first()
	await trigger.click()

	const modal = page.getByRole("dialog", { name: "Create Token" })
	await expect(modal).toBeVisible()
	await expect(modal).toHaveAccessibleDescription(
		/Enter a unique name for your token to differentiate it from other tokens/,
	)
})

test("Escape closes the modal and restores focus to its trigger", async ({ page }) => {
	await page.goto("/modal")

	const trigger = page.getByRole("button", { name: "Open Modal" }).first()
	await trigger.click()
	await expect(page.getByRole("dialog", { name: "Create Token" })).toBeVisible()

	await page.keyboard.press("Escape")
	await expect(page.getByRole("dialog", { name: "Create Token" })).toBeHidden()
	await expect(trigger).toBeFocused()
})
