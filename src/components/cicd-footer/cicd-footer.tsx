import { Component, h } from '@stencil/core';

@Component({
  tag: 'cicd-footer',
  styleUrl: 'cicd-footer.css',
  shadow: true,
})
export class CicdFooter {

  render() {
    return (
      <div id="footer">
        <p>Jump Group – © 2023 All Rights Reserved.</p>
      </div>
    );
  }

}
