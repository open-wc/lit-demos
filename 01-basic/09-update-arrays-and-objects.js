import { LitElement, html } from 'lit-element';

class UpdateArraysAndObjects extends LitElement {
  static get properties() {
    return {
      myArray: { type: Array },
      myObject: { type: Object }
    };
  }

  constructor() {
    super();
    this.myObject = { id: 1, text: "foo" };
    this.myArray = [{ id: 1 }, { id: 2 }];
  }

  render() {
    return html`
      <h3>Array items</h3>
      <ul>
        ${this.myArray.map(item => html`
          <li>${item.id}</li>
        `)}
      </ul>

      <button @click=${this._addArrayItem}>Add array item</button>

      <h3>Object</h3>
      <div>
        <strong>${this.myObject.id}</strong>: ${this.myObject.text}
      </div>
      
      <button @click=${this._updateObjectId}>Add object item</button>
    `;
  }

  /**
   * If you mutate an array directly, LitElement will not detect
   * the change automatically.
   * 
   * The recommended approach is to use immutable data patterns.
   * You can easily append an array item using array spread syntax:
   */
  _addArrayItem() {
    const newId = Math.round(Math.random() * 100);
    const newItem = { id: newId };
    this.myArray = [
      ...this.myArray, 
      newItem,
    ];

    /**
     * An alternative method is to mutate the array and then call
     * requestUpdate() to notify LitElement the property changed.
     */
    // this.myArray.push(newItem);
    // this.requestUpdate();
  }

  /**
   * If you mutate an object directly, LitElement will not detect
   * the change automatically.
   * 
   * The recommended approach is to use immutable data patterns.
   * You can easily update an object's property using the object
   * spread syntax:
   */
  _updateObjectId() {
    const newId = Math.round(Math.random() * 100);

    this.myObject = { 
      ...this.myObject,
      id: newId,
    };
    /**
     * An alternative method is to mutate the object and then call
     * requestUpdate() to notify LitElement the property changed.
     */
    // this.myObject.id = newId;
    // this.requestUpdate();
  }
}

customElements.define('update-arrays-and-objects', UpdateArraysAndObjects);