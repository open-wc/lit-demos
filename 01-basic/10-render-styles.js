import { LitElement, html, css } from 'lit-element';

class RenderStyles extends LitElement {
  /**
   * Styles should be added as a static getter. They are evaluated once, and then added
   * in the element's shadow dom.
   *
   * Shadow dom takes care of scoping the CSS of your element to only affect your
   * element's template, and not the element outside. For an in-depth explanation
   * of shadow dom, see: https://github.com/praveenpuglia/shadow-dom-in-depth
   */
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .message {
        color: blue;
      }
    `;
  }

  render() {
    return html`
      <div class="message">Hello world!</div>
    `;
  }

}

customElements.define('render-styles', RenderStyles);