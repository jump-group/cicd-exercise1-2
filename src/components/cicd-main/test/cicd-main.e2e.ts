import { newE2EPage } from '@stencil/core/testing';

describe('cicd-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cicd-main></cicd-main>');

    const element = await page.find('cicd-main');
    expect(element).toHaveClass('hydrated');
  });
});
