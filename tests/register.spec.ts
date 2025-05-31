import { test, expect } from "@playwright/test";

test("Forum registration with public email should be rejected", async ({ page }) => {
    await page.goto("https://forums.veeam.com");

    const registerLink = page.getByRole("link", { name: "Register", exact: true });
    await registerLink.first().click();

    await page.waitForSelector("text=I AGREE TO THESE TERMS", { timeout: 10000 });
    await page.click("text=I AGREE TO THESE TERMS");

    await page.waitForSelector('input[name="username"]', { timeout: 10000 });

    await page.fill('input[name="username"]', "InterviewUser");
    await page.fill('input[name="new_password"]', "InreviewUser");
    await page.fill('input[name="password_confirm"]', "InreviewUser");
    await page.fill('input[name="email"]', "inreviewuser@gmail.com");

    const cookieAccept = page.locator("#cookiescript_accept");
    if (await cookieAccept.isVisible()) {
        await cookieAccept.click({ force: true });
        await page.waitForTimeout(1000);
    }

    const submit = page.locator('input[type="submit"]');
    await submit.click({ force: true });

    await expect(page.locator("text=Public email are not allowed")).toBeVisible({ timeout: 10000 });
});
