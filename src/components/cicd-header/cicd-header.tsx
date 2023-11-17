import { Component, h } from '@stencil/core';

@Component({
  tag: 'cicd-header',
  styleUrl: 'cicd-header.css',
  shadow: true,
})
export class CicdHeader {

  render() {
    return (
      <div class="cdciHeader">
        <img src="./../assets/images/logo-jump-white.svg" alt="Logo" />
      </div>
    );
  }

}
