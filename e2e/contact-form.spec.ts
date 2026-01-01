import { test, expect } from "@playwright/test"

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("should display contact form", async ({ page }) => {
    // Navigate to contact section
    const contactSection = page.locator("#contact")
    await expect(contactSection).toBeVisible()

    // Check form fields are present
    await expect(page.getByLabel(/name/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/phone/i)).toBeVisible()
    await expect(page.getByLabel(/message/i)).toBeVisible()
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible()
  })

  test("should show validation errors for empty form", async ({ page }) => {
    // Try to submit empty form
    await page.getByRole("button", { name: /send message/i }).click()

    // Should show validation errors
    await expect(page.getByText(/name must be at least/i)).toBeVisible()
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible()
    await expect(page.getByText(/please enter a valid phone/i)).toBeVisible()
    await expect(page.getByText(/message must be at least/i)).toBeVisible()
  })

  test("should validate email format", async ({ page }) => {
    await page.getByLabel(/name/i).fill("Test User")
    await page.getByLabel(/email/i).fill("invalid-email")
    await page.getByLabel(/phone/i).fill("+1 555 123 4567")
    await page.getByLabel(/message/i).fill("This is a test message for the form.")

    await page.getByRole("button", { name: /send message/i }).click()

    await expect(page.getByText(/please enter a valid email/i)).toBeVisible()
  })

  test("should validate phone format", async ({ page }) => {
    await page.getByLabel(/name/i).fill("Test User")
    await page.getByLabel(/email/i).fill("test@example.com")
    await page.getByLabel(/phone/i).fill("123") // Too short
    await page.getByLabel(/message/i).fill("This is a test message for the form.")

    await page.getByRole("button", { name: /send message/i }).click()

    await expect(page.getByText(/please enter a valid phone/i)).toBeVisible()
  })

  test("should submit form successfully with valid data", async ({ page }) => {
    await page.getByLabel(/name/i).fill("Test User")
    await page.getByLabel(/email/i).fill("test@example.com")
    await page.getByLabel(/phone/i).fill("+1 555 123 4567")
    await page.getByLabel(/message/i).fill("This is a test message for the form.")

    await page.getByRole("button", { name: /send message/i }).click()

    // Should show success message
    await expect(page.getByText(/thank you/i)).toBeVisible({ timeout: 10000 })
  })
})

test.describe("Path Interest Modal", () => {
  test("should open path interest modal when clicking on a path", async ({ page }) => {
    await page.goto("/")

    // Click on Ascenders path card
    const ascendersCard = page.locator("text=Ascenders").first()
    await ascendersCard.click()

    // Modal should appear
    await expect(page.getByRole("dialog")).toBeVisible()
    await expect(page.getByText(/express your interest/i)).toBeVisible()
  })

  test("should close modal with X button", async ({ page }) => {
    await page.goto("/")

    // Open modal
    const ascendersCard = page.locator("text=Ascenders").first()
    await ascendersCard.click()

    // Close modal
    await page.getByRole("button", { name: /close/i }).click()

    // Modal should be hidden
    await expect(page.getByRole("dialog")).not.toBeVisible()
  })
})

test.describe("Navigation", () => {
  test("should navigate to all sections", async ({ page }) => {
    await page.goto("/")

    // Check page title
    await expect(page).toHaveTitle(/neothink/i)

    // Check main sections exist
    await expect(page.locator("text=We Make It Possible").first()).toBeVisible()
    await expect(page.locator("#contact")).toBeVisible()
  })

  test("should have working external links", async ({ page }) => {
    await page.goto("/")

    // Check for Mark Hamilton link
    const markHamiltonLink = page.locator('a[href="https://markhamilton.co"]').first()
    await expect(markHamiltonLink).toHaveAttribute("target", "_blank")
    await expect(markHamiltonLink).toHaveAttribute("rel", /noopener/)
  })
})

test.describe("Accessibility", () => {
  test("should have skip to content link", async ({ page }) => {
    await page.goto("/")

    // Focus on skip link
    await page.keyboard.press("Tab")
    const skipLink = page.locator("text=Skip to main content")
    await expect(skipLink).toBeFocused()
  })

  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/")

    // Check for h1
    const h1 = page.locator("h1").first()
    await expect(h1).toBeVisible()
  })
})
