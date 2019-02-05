import { LitElement, html } from 'lit-element';

// Here we define a template which as a function that accepts a set of variables
// and returns lit html template. This is actually identical to how the render
// function works.
//
// This function could be defined in a separate, shared, file or just be a nice
// way to split up a larger template. It can also be used to create tiny components
// that don't need a lot of isolation, you could just create a function for that
// instead of a web component.
//
// In this case we are accepting a property, text content and an event handler
const templateFactory = (inputValue, buttonText, onSubmit) => html`
  <input id="usernameInput" value="${inputValue}">

  <button @click="${onSubmit}">
    ${buttonText}
  </button>
`;

class TemplateFactories extends LitElement {

  static get properties() {
    return {
      username: { type: String },
    };
  }

  constructor() {
    super();

    this.username = 'Steve';
    this._onUsernameSubmit = this._onUsernameSubmit.bind(this);
  }

  render() {
    return html`
      <!--
        Call the template factory with a property, string constant
        and a method reference for the event handler
      -->
      <h3>Username: ${this.username}</h3>
      ${templateFactory(this.username, 'Change username', this._onUsernameSubmit)}
    `;
  }

  _onUsernameSubmit() {
    this.username = this.shadowRoot.getElementById('usernameInput').value;
  }

}

customElements.define('template-factories', TemplateFactories);