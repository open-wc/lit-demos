import { LitElement, html } from 'lit-element';

// You also implement conditional logic in separate functions
function getMessage(message, showMessage) {
  if (!showMessage) {
    return '';
  }

  return `Message from function: ${message}`;
}

class ConditionalRendering extends LitElement {
  static get properties() {
    return {
      showMessage: { type: Boolean },
      message: { type: String },
      disabled: { type: Boolean },
    };
  }

  render() {
    // you can use regular if statements
    if (this.disabled) {
      return html`Nothing to see here`;
    }

    return html`
      <div>
        <button @click=${() => this.showMessage = !this.showMessage}>
          <!-- You can use ternary expressions for quick conditional rendering -->
          Click to ${this.showMessage ? 'hide' : 'show'} message
        </button>

        <!-- Or to conditionally show/hide a template -->
        <div>
          ${this.showMessage
            ? html`The message is: ${this.message}`
            : ''}
        </div>

        <!-- You can also call a function and handle the conditional rendering in there -->
        <div>
          ${getMessage(this.message, this.showMessage)}
        </div>
      </div>
    `;
  }
}

customElements.define('conditional-rendering', ConditionalRendering);