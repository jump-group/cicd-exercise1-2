import { newE2EPage } from '@stencil/core/testing';

describe('cicd-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cicd-footer></cicd-footer>');

    const element = await page.find('cicd-footer');
    expect(element).toHaveClass('hydrated');
  });
});
