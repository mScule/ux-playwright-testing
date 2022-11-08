import { test, expect } from '@playwright/test';

test("email form validation", async ({ page, browserName }) => {
  const loginForm = () =>
    page.frameLocator(`role=dialog[name="kirjaudu sisään"] >> iframe`);

  const registerationButton = () =>
    loginForm().getByRole('link', { name: 'Luo Yle Tunnus' });

  const emailInputField = () =>
    loginForm().getByLabel("Sähköposti");

  const passwordInputField = () =>
    loginForm().getByLabel("Salasana");

  const goToYleRegisterationForm = async () => {
    await page.goto('https://areena.yle.fi/tv');

    if (browserName === "firefox" || browserName === "webkit")
      await page.getByRole('button', { name: 'Vain välttämättömät' }).click();

    await page.getByRole('button', { name: 'Kirjaudu' }).click();
    await registerationButton().click();
  };

  const fillEmailInputFieldWith = async (data) => {
    await emailInputField().click();
    await emailInputField().fill(data);
    await passwordInputField().click();
  };

  const expectEmailInputFormToDeclineData = async () => {
    expect(
        await loginForm()
        .getByText('Tarkista sähköpostiosoitteen muoto.')
        .count()
    ).toBe(1)
  };

  const expectEmailInputFormToAcceptData = async () => {
    expect(
      await loginForm()
        .getByText('Tarkista sähköpostiosoitteen muoto.')
        .count()
    ).toBe(0)
  };

  await goToYleRegisterationForm();

  await fillEmailInputFieldWith("not valid email address");
  await expectEmailInputFormToDeclineData();

  await fillEmailInputFieldWith("name.name@domain.com");
  await expectEmailInputFormToAcceptData();
});
