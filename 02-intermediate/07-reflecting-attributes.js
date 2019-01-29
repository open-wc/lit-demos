import { LitElement, html } from 'lit-element/';

class ReflectingAttributes extends LitElement {
  render() {
    return html`
        <style>
          my-button {
            margin: 6px;
            padding: 6px;
            text-align: center;
            cursor: pointer;
          }
          my-button[disabled] {
            cursor: not-allowed;
          }
        </style>

        <my-button disabled></my-button>
        <my-button></my-button>
    `;
  }
}

customElements.define('reflecting-attributes', ReflectingAttributes);

class MyButton extends LitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
        // you can also specify _how_ you want the attribute to be reflected:
        // attribute: 'my-attribute'
        // will reflect this property as 'my-attribute' on your element.
      }
    };
  }

  constructor(){
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <style>
        .disabled {
          border: solid 2px #217FF9;
        }

        .enabled {
          border: solid 2px #9B35FA;
        }
      </style>
      <div class="${this.disabled ? 'disabled' : 'enabled'}">
        Hello universe
      </div>
    `;
  }
}

customElements.define('my-button', MyButton);
