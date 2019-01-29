import { LitElement, html, css } from 'lit-element';

// A powerful feature of lit-html is that templates are just variables.
// You can create them anywhere, and you can define generic templates
// to be used by multiple components.

// This template could be defined in a separate file
const sharedTemplate = html`
  <div>Shared template content</div>
`;

class SharedTemplateA extends LitElement {
  static get styles() {
    return css`
      .container {
        border: 2px solid black;
      }
    `;
  }

  render() {
    return html`
      <!-- The shared template is used by this element -->
      <div class="container">
        Element A
        ${sharedTemplate}
      </div>
    `;
  }

}

customElements.define('shared-template-a', SharedTemplateA);

class SharedTemplateB extends LitElement {
  static get styles() {
    return css`
      .container {
        border: 2px dotted black;
      }
    `;
  }

  render() {
    return html`
      <!-- The shared template is used by this element -->
      <div class="container">
        Element B
        ${sharedTemplate}
      </div>
    `;
  }

}

customElements.define('shared-template-b', SharedTemplateB);



class SharedTemplates extends LitElement {
  static get styles() {
    return css`
      shared-template-a,
      element-b {
        display: block;
        margin: 8px 0;
      }
    `;
  }

  render() {
    return html`
      <shared-template-a></shared-template-a>
      <shared-template-b></shared-template-b>
    `;
  }

}

customElements.define('shared-templates', SharedTemplates);