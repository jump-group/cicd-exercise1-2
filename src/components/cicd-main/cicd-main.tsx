import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cicd-main',
  styleUrl: 'cicd-main.css',
  shadow: true,
})
export class CicdMain {

  render() {
    return (
      <Host>
        <h1>Esercizio 1.2</h1>
        <p>In questo esercizio andremo ad osservare insieme una pipeline CI/CD completa.</p>
        <slot></slot>
      </Host>
    );
  }
}
