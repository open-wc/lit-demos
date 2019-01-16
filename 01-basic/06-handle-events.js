import { LitElement, html } from 'lit-element';

class HandleEvents extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.count = 0;
  }

  render() {
    return html`
      <div>
        Current count: [${this.count}]
        <!-- Use @[eventname] syntax to declaratively register inline event handlers -->
        <button @click=${() => this.count += 1}>+</button>

        <!--
          You can also pass a function reference directly. Lit-html will automatically use the element
          as the function scope ('this' will reference the element)
        -->
        <button @click=${this._onDecrement}>-</button>
      </div>
    `;
  }

  _onDecrement() {
    this.count -= 1;
  }
}

customElements.define('handle-events', HandleEvents);