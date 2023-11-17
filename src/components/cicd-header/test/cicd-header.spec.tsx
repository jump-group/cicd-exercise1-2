import { newSpecPage } from '@stencil/core/testing';
import { CicdHeader } from '../cicd-header';

describe('cicd-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CicdHeader],
      html: `<cicd-header></cicd-header>`,
    });
    expect(page.root).toEqualHtml(`
      <cicd-header>
        <mock:shadow-root>
        <div class="cdciHeader">
          <img src="./../assets/images/logo-jump-white.svg" alt="Logo">
        </div>
        </mock:shadow-root>
      </cicd-header>
    `);
  });
});
