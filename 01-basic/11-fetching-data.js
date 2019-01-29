import { LitElement, html } from 'lit-element';

class FetchingData extends LitElement {
  static get properties() {
    return {
      response: { type: Array }
    }
  }

  constructor() {
    super();
    this.response = [];
  }

  firstUpdated() {
    fetch('https://swapi.co/api/people/')
      .then((r) => r.json())
      .then((r) => {
        this.response = r.results;
      });
  }

  render() {
    const { response } = this;
    return html`
        <ul>
          ${response.map(item => html`
            <li>${item.name}</li>
          `)}
        </ul>
      `;
  }
}

customElements.define('fetching-data', FetchingData);