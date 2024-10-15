import { expect, test } from '@playwright/test';

test.describe('Clock Component', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => console.log(msg.text()));
    await page.goto('/');
  });

  test('should render the clock', async ({ page }) => {
    await page.waitForSelector('[data-testid="clock"]');
    const clock = page.getByTestId('clock');
    await expect(clock).toBeVisible();
  });

  test('should display the correct time format', async ({ page }) => {
    await page.waitForSelector('[data-testid="time-display"]', { timeout: 10000 });
    const timeDisplay = page.getByTestId('time-display');
    await expect(timeDisplay).toBeVisible({ timeout: 10000 });
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    await expect(timeDisplay).toHaveText(timeRegex);
  });

//   test('should update time every second', async ({ page }) => {
//     const timeDisplay = page.getByTestId('time-display');
//     const initialTime = await timeDisplay.textContent();
//     await page.waitForTimeout(2000); // Wait for 2 seconds
//     const updatedTime = await timeDisplay.textContent();
//     expect(initialTime).not.toBe(updatedTime);
//   });

//   test('should toggle between 12-hour and 24-hour format', async ({ page }) => {
//     const formatToggle = page.getByRole('button', { name: 'Toggle Format' });
//     await formatToggle.click();
    
//     const timeDisplay = page.getByTestId('time-display');
//     await expect(timeDisplay).toHaveText(/^(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9] (AM|PM)$/);
    
//     await formatToggle.click();
//     await expect(timeDisplay).toHaveText(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/);
//   });

//   test('should change theme', async ({ page }) => {
//     const themeToggle = page.getByRole('button', { name: 'Toggle Theme' });
//     const clock = page.getByTestId('clock');
    
//     await expect(clock).toHaveClass(/bg-white/);
//     await themeToggle.click();
//     await expect(clock).toHaveClass(/bg-gray-800/);
//   });
});
