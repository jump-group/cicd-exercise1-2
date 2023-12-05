import { newSpecPage } from '@stencil/core/testing';

import { IsPalindrome } from '../is-palindrome';

describe('is-palindrome', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [IsPalindrome],
      html: '<is-palindrome></is-palindrome>',
    });
    expect(root).toEqualHtml(`
      <is-palindrome>
        <mock:shadow-root>
        <main><h2>E' Palindromo ??</h2><input type="text"></main>
        </mock:shadow-root>
      </is-palindrome>
    `);
  });
});
