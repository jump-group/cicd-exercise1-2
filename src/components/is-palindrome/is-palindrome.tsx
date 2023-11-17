import { Component, State, Watch, h } from '@stencil/core';
import { isPalidrome } from '../../utils/utils';

@Component({
  tag: 'is-palindrome',
  styleUrl: 'is-palindrome.css',
  shadow: true,
})
export class IsPalindrome {
  /**
   * The word to be checked
   */
  @State() word: string;

  @State() isPalidrome: boolean = false;

  @Watch('word')
  onWordChange(newValue: string) {
    this.isPalidrome = isPalidrome(newValue);
  }


  render() {
    return <main>
      <h2>E' Palindromo ??</h2>
      <input onInput={(e) => { this.word = (e.target as HTMLInputElement).value }} type='text'></input>
      {this.word?.length ?
        (this.isPalidrome ? <p>E' palindromo</p> : <p>Non è palindrome</p>)
        : null}
    </main>
      ;
  }
}
