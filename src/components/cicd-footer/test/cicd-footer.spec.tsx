import { newSpecPage } from '@stencil/core/testing';
import { CicdFooter } from '../cicd-footer';

describe('cicd-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CicdFooter],
      html: `<cicd-footer></cicd-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <cicd-footer>
        <mock:shadow-root>
          <div id="footer">
            <p>Jump Group – © 2023 All Rights Reserved.</p>
          </div>
        </mock:shadow-root>
      </cicd-footer>
    `);
  });
});
