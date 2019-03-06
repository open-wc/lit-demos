import { LitElement, html, css } from 'lit-element';

class FireEventsParent extends LitElement {
  someCallback(event) {
    console.log(event.detail);
  }

  render() {
    return html`
      <fire-events-child @event-fired=${this.someCallback}></fire-events-child>
    `;
  }
}

class FireEventsChild extends LitElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('event-fired', { detail: id }));
  }

  render() {
    return html`<button @click=${this.handleClick}>clickity</button>`;
  }
}

customElements.define('fire-events-parent', FireEventsParent);
customElements.define('fire-events-child', FireEventsChild);
