import { newSpecPage } from '@stencil/core/testing';
import { CicdMain } from '../cicd-main';

describe('cicd-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CicdMain],
      html: `<cicd-main></cicd-main>`,
    });
    expect(page.root).toEqualHtml(`
      <cicd-main>
        <mock:shadow-root>
          <h1>Esercizio 1.2</h1>
          <p>In questo esercizio andremo ad osservare insieme una pipeline CI/CD completa.</p>
          <slot></slot>
        </mock:shadow-root>
      </cicd-main>
    `);
  });
});
