// @ts-check
import { test, expect } from "@playwright/test";
import { email, password } from "../user";

test("Successful authorization", async ({ page }) => {
  await page.goto("/");

  await page.getByText("Войти").click();
  await expect(page.getByText("Вход в личный кабинет")).toBeVisible();

  await page.getByText("Другие способы входа").click();

  await expect(page.getByText("Войти по почте")).toBeVisible();

  await page.getByText("Войти по почте").click();

  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").fill(password);

  await page.getByTestId("login-submit-btn").click();

  await expect(page.getByTestId("advanced-container")).toBeVisible({
    timeout: 15_000,
  });
});

test("Unsuccessful authorization", async ({ page }) => {
  await page.goto("/");

  await page.getByText("Войти").click();
  await expect(page.getByText("Вход в личный кабинет")).toBeVisible();

  await page.getByText("Другие способы входа").click();

  await expect(page.getByText("Войти по почте")).toBeVisible();

  await page.getByText("Войти по почте").click();

  await page.getByPlaceholder("Email").fill("hsajdhkj1kj2321312");
  await page.getByPlaceholder("Пароль").fill(password);

  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByText("Неверный email")).toBeVisible();
});
