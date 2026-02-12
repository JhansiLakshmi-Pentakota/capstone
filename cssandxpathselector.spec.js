import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dsauce%2Bdemo%26oq%3Dsauce%2Bdemo%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCTE2MTAxajBqMqgCALACAQ%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3Dy46JaZuKGvmK4-EP-5HlqAc&q=EgQrzWf9GMudpswGIjCOpiPno8wqXD37NyMJRXY4-Jyz7VJRchMUIszY-2n-N-MvDgJjnt5CmvO9x0o8I-IyAVJaAUM');
  await page.locator('body').click();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});