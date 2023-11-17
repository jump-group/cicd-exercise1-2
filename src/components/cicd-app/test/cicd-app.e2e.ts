import { newE2EPage } from '@stencil/core/testing';

describe('cicd-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cicd-app></cicd-app>');

    const element = await page.find('cicd-app');
    expect(element).toHaveClass('hydrated');
  });
});
