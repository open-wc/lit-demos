import { LitElement, html } from 'lit-element';

class Lifecycle extends LitElement {
  static get properties() {
    return {
      myArr: { type: Array }
    };
  }

  constructor() {
    super();
    this.myArr = ['foo', 'bar'];
  }

  /**
  * The connectedCallback is called when the element is inserted to the DOM.
  */
  connectedCallback() {
    super.connectedCallback();
    console.log('connected!');
    console.log(this.shadowRoot.querySelector('ul'));
  }

  /**
   *  Implement to control if updating and rendering should occur when property values change or requestUpdate() is called.
   */
  shouldUpdate() {
    console.log('should update!')
    console.log(this.shadowRoot.querySelector('ul'));
    return true;
  }

  /**
  * Called after the element's DOM has been updated the first time, immediately before updated()
  * is called. This method can be useful for querying dom. Setting properties inside
  * this method will trigger the element to update.
  */
  firstUpdated() {
    console.log('first updated!');
    console.log(this.shadowRoot.querySelector('ul'));
  }

  /**
  * Implement to perform post-updating tasks via DOM APIs, for example, focusing an element.
  * Setting properties inside this method will *not* trigger another update.
  */
  updated(changedProps) {
    super.updated(changedProps);
    console.log('updated!');
    console.log(this.shadowRoot.querySelector('ul'));
  }

  /**
  * Invoked each time the custom element is disconnected from the document's DOM.
  * Useful for running clean up code.
  */
  disconnectedCallback() {
    console.log('disconnected!');
    console.log(this.shadowRoot.querySelector('ul'));
  }

  _addItem() {
    this.myArr = [...this.myArr, 'baz'];
  }

  render() {
    let { myArr } = this;

    return html`
      <p>Open your console to see when lifecycle methods occur.</p>

      <!-- Adding an item will cause myArr to change, the property change will get picked up and trigger an update -->
      <button @click=${this._addItem}>add item</button>
      <ul>
        ${myArr.map(item => html`
          <li>${item}</li>
        `)}
      </ul>
    `;
  }
}

customElements.define('lifecycle-demo', Lifecycle);