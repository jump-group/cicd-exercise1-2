import { newE2EPage } from '@stencil/core/testing';

describe('cicd-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cicd-header></cicd-header>');

    const element = await page.find('cicd-header');
    expect(element).toHaveClass('hydrated');
  });
});
