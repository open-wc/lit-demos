import { LitElement, html } from 'lit-element';

class ManageProperties extends LitElement {
  // Properties are defined through a static getter. When defined, LitElement will decode any
  // html attributes set on this component as properties which can be used from javascript.

  // Keys should be the property name, value the property type.
  // The type is used to deserialize html attribute string into a javascript property.
  // The supported types are String, Number, Boolean, Array Object. 
  static get properties() {
    return {
      message: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();

    // default values can be set from the constructor
    this.count = 0;
  }

  render() {
    return html`
      <div>
        <!--
          Dynamic parts of your template are set through template string expressions.
          It's plain javascript, so you can use any valid javascript expression. lit-html handles
          updating the dom efficiently.
        -->

        <!-- Render a string or number directly -->
        <div>
          The message is: ${this.message}, count is: ${this.count}
        </div>

        <!-- Call a function and render the return value -->
        <div>
          The reversed message is: ${this.reverseMessage(this.message)}
        </div>

      </div>
    `;
  }

  reverseMessage(message) {
    return message.split('').reverse().join('');
  }
}

customElements.define('manage-properties', ManageProperties);