import { expect, test } from '@playwright/test';

test('components showcase page renders expected headings and components', async ({ page }) => {
	await page.goto('/demo/components');
	await expect(page.locator('h1')).toHaveText('Theme Colors & Reusable Components');
	await expect(page.getByText('Color System Tokens')).toBeVisible();
	await expect(page.getByText('Buttons & Actions')).toBeVisible();
	await expect(page.getByText('Status Badges & Tags')).toBeVisible();
	await expect(page.getByText('Key-Value Metadata Tiles')).toBeVisible();
	await expect(page.getByText('Code & Observability Panel')).toBeVisible();
});
