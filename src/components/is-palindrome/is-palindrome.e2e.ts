import { newE2EPage } from '@stencil/core/testing';

describe('is-palindrome', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<is-palindrome></is-palindrome>');
    const element = await page.find('is-palindrome');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes a palindrome', async () => {
    const page = await newE2EPage();

    await page.setContent('<is-palindrome></is-palindrome>');
    const input = await page.find('is-palindrome >>> input');

    await input.press('a');
    await input.press('n');
    await input.press('n');
    await input.press('a');


    const result = await page.find('is-palindrome >>> p');

    let inputValue = await input.getProperty('value');
    expect(inputValue).toEqual('anna');

    expect(result).toEqualText('Is a palidrome');

  });

  it('renders changes a non palindrome', async () => {
    const page = await newE2EPage();

    await page.setContent('<is-palindrome></is-palindrome>');
    const input = await page.find('is-palindrome >>> input');
    // set the value of the input 
    await input.press('a');
    await input.press('n');
    await input.press('n');
    await input.press('e');


    const result = await page.find('is-palindrome >>> p');

    let inputValue = await input.getProperty('value');
    expect(inputValue).toEqual('anne');

    expect(result).toEqualText('Is not a palidrome');
  });

});
