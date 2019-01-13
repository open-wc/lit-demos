import { LitElement, html, css } from 'lit-element';
import './examples/01-basic-setup.js';
import './examples/02-manage-properties.js';
import './examples/03-property-changes.js';
import './examples/04-properties-and-attributes.js';
import './examples/05-handle-events.js';
import './examples/06-conditional-rendering.js';
import './examples/07-repeated-templates.js';
import './examples/08-update-arrays-and-objects.js';
import './examples/09-render-styles.js';
import '@polymer/paper-card';

/**
 * This component combines all the examples to be displayed. See the examples
 * folder for the actual examples.
 */

class OpenWcDemo extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          font-family: sans-serif;
        }

        .demo > *:not(h2) {
          display: block;
          border: 1px solid	#e2e2e2;
          border-radius: 5px;
          padding: 8px;
          margin: 8px 0;
          line-height: 32px;
        }

        paper-card { 
          border-radius: 5px;
          flex: 1; 
          padding: 12px;
          margin: 0 0 32px 0;
        }

        h2 {
          font-size: 20px;
          color: #217FF9;
        }

        h1 {
          margin-top: 0px;
          color: #9B35FA;
        }
      `,
    ];
  }

  render() {
    return html`
      <h1>Basic demos</h1>
      
      <paper-card>
        <div class="demo">
          <h2>Basic setup</h2>
          <basic-setup></basic-setup>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Manage properties</h2>
          <manage-properties message="Hello world"></manage-properties>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Property changes</h2>
          <property-changes></property-changes>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Properties and attributes</h2>
          <properties-and-attributes message="Hello world"></properties-and-attributes>
      </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Handle events</h2>
          <handle-events></handle-events>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Conditional rendering</h2>
          <conditional-rendering message="Hello world"></conditional-rendering>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Repeated templates</h2>
          <repeated-templates></repeated-templates>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Update arrays and objects</h2>
          <update-arrays-and-objects></update-arrays-and-objects>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <h2>Render styles</h2>
          <render-styles></render-styles>
        </div>
      </paper-card>
    `;
  }
}

customElements.define('open-wc-demo', OpenWcDemo);