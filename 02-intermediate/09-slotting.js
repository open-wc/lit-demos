import { LitElement, html } from 'lit-element';

class Slotting extends LitElement {
  render() {
    return html`
      <card-element>
        <h1 slot="title">Hello universe</h1>
        <p slot="details">This is some text</p>
        <p>any other content</p>
      </card-element>
    `; 
  }
}

customElements.define('slotting-demo', Slotting);

class CardElement extends LitElement {
  render() {		
    return html`
      <div class="card-wrapper">
        <slot name="title"></slot>
        <slot name="details"></slot>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('card-element', CardElement);