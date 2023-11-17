import { Component, h } from '@stencil/core';

@Component({
  tag: 'cicd-app',
  styleUrl: 'cicd-app.css',
  shadow: true,
})
export class CicdApp {

  render() {
    return [
      <cicd-header></cicd-header>,
      <cicd-main></cicd-main>,
      <is-palindrome></is-palindrome>
    ];
  }

}
