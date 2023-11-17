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
    if (isPalidrome(newValue)) {
      this.isPalidrome = true;
    } else {
      this.isPalidrome = false;
    }
  }


  render() {
    return <main>
      <input onInput={(e) => { this.word = (e.target as HTMLInputElement).value }} type='text'></input>
      {this.word?.length ?
        (this.isPalidrome ? <p>Is a palidrome</p> : <p>Is not a palidrome</p>)
        : null}
    </main>
      ;
  }
}
