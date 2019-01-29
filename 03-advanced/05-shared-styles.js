import { LitElement, html, css } from 'lit-element';

// Because styles tags are just html, they can be shared in the same way
// that regular templates are shared.

// This template could be defined in a separate file
const sharedStyles = css`
  :host {
    display: block;
  }

  .box-wrapper {
    border: 5px solid red;
  }

  .box {
    width: 36px;
    height: 36px;
    background-color: blue;
  }
`;

class SharedStylesA extends LitElement {
  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      ${sharedStyles}
      <div class="box-wrapper">
        <div class="box"><div>
      </div>
    `;
  }
}

customElements.define('shared-styles-a', SharedStylesA);



class SharedStylesB extends LitElement {
  static get styles() {
    // to compose styles, you can return an array
    return [
      // pull in shared styles
      sharedStyles,
      // add own styles
      css`
        /* You can override classes defined in shared styles */
        .box-wrapper {
          border: 5px dotted green;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="box-wrapper">
        <div class="box"><div>
      </div>
    `;
  }
}

customElements.define('shared-styles-b', SharedStylesB);



class SharedStyles extends LitElement {
  static get styles() {
    return css`
      shared-styles-a,
      shared-styles-b {
        display: inline-block;
        margin: 8px 0;
      }
    `;
  }

  render() {
    return html`
      <shared-styles-a></shared-styles-a>
      <shared-styles-b></shared-styles-b>
    `;
  }
}

customElements.define('shared-styles', SharedStyles);