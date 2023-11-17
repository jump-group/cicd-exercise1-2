import { newSpecPage } from '@stencil/core/testing';
import { CicdApp } from '../cicd-app';

describe('cicd-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CicdApp],
      html: `<cicd-app></cicd-app>`,
    });
    expect(page.root).toEqualHtml(`
      <cicd-app>
        <mock:shadow-root>
          <cicd-header></cicd-header>
          <cicd-main></cicd-main>
          <is-palindrome></is-palindrome>
          <cicd-footer></cicd-footer>
        </mock:shadow-root>
      </cicd-app>
    `);
  });
});
