import { LitElement, html } from 'lit-element';

const messagePrefix = 'The message is: ';

class PropertiesAndAttributes extends LitElement {
  static get properties() {
    return {
      href: { type: String },
      label: { type: String },
      message: { type: String },
      checked: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.href = 'https://www.github.com/open-wc';
    this.label = 'open-wc';
    this.checked = true;
    // this.message is being set as attribute in `basic-demos.js`.
    // <properties-and-attributes message="Hello world"></properties-and-attributes>
  }

  /**
   * In lit-html, you can use template expressions (${}) to set properties and attributes
   * on elements with a similar syntax.
   *
   * Choosing between when to set a property or an attribute depends on the element. As
   * a general rule of thumb always set properties, only set attributes when you have
   * static unchanging values, or when setting an attribute is necessary for a particular
   * type of element.
   */

  /**
   * Differences between attributes and properties:
   *
   * Attributes are defined in HTML, for example setting the id attribute:
   * <div id="foo">
   *
   * Properties are defined in javascript, for example setting the id property:
   * const div = document.createElement('div');
   * div.id = 'foo';
   */
  render() {
    return html`
      <!-- By default lit-html will set an attribute on the element -->
      <a href=${this.href}>
        ${this.label}
      </a>

      <!-- You can set boolean attributes by prefixing the attribute name with a question mark -->
      <input type="checkbox" ?checked=${this.checked}>

      <!--
        To set a property, prefix it with a '.'
        Properties are case-sensitive
      -->
      <fancy-message
        .messagePrefix=${messagePrefix}
        .message=${this.message}>
      </fancy-message>

      <!--
        If your values are constant, you don't need to use a binding and you can
        set the attribute directly in markup

        HTML is not case sensitive. By default, LitElement uses the lowercased
        property name as attribute name
      -->
      <fancy-message
        messageprefix="The message is: "
        .message=${this.message}>
      </fancy-message>
    `;
  }
}

customElements.define('properties-and-attributes', PropertiesAndAttributes);

class FancyMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      messagePrefix: { type: String },
    };
  }

  render() {
    return html`
      <div>${this.messagePrefix} ${this.message}</div>
    `;
  }
}

customElements.define('fancy-message', FancyMessage);