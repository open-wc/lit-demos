import { LitElement, html } from 'lit-element';

// A powerful feature of lit-html is that templates are just variables.
// You can create them anywhere, and you can define generic templates
// to be used by multiple components.

// This template could be defined in a separate file
const sharedTemplate = html`
  <div>Shared template content</div>
`;

class SharedTemplateA extends LitElement {

  render() {
    return html`
      <style>
        .container {
          border: 2px solid black;
        }
      </style>
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

  render() {
    return html`
      <style>
        .container {
          border: 2px dotted black;
        }
      </style>
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

  render() {
    return html`
      <style>
        shared-template-a,
        element-b {
          display: block;
          margin: 8px 0;
        }
      </style>
      <shared-template-a></shared-template-a>
      <shared-template-b></shared-template-b>
    `;
  }

}

customElements.define('shared-templates', SharedTemplates);