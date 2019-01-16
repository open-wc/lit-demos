import { LitElement, html, css } from 'lit-element';
import './01-first-updated.js';
import './02-updated.js';
import './03-lifecycle.js';
import './04-computed-properties.js';
import './05-querying-dom.js';
import './06-light-dom.js';
import './07-reflecting-attributes.js';
import './08-dynamic-repeated-templates.js';
import './09-slotting.js';

class IntermediateDemos extends LitElement {
  static get properties() {
    return {
      showLifecycleDemo: { type: Boolean }
    }
  }

  constructor(){
    super();
    this.showLifecycleDemo = false;
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }

        a {
          text-decoration: none;
        }

        .demo > *:not(h2):not(a):not(button) {
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
          color: #2c3e50;
        }

        h2:hover::after { 
          color: #9B35FA;
          content: " #";
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
      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F01-first-updated.js" target="_blank"><h2>01 First updated</h2></a>
          <first-updated></first-updated>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F02-updated.js" target="_blank"><h2>02 Updated</h2></a>
          <updated-demo></updated-demo>
        </div>
      </paper-card>



      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F04-computed-properties.js" target="_blank"><h2>04 Computed properties</h2></a>
          <computed-properties></computed-properties>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F05-querying-dom.js" target="_blank"><h2>05 Querying dom</h2></a>
          <querying-dom></querying-dom>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F06-lifecycle.js" target="_blank"><h2>06 Lifecycle</h2></a>
          <button @click=${() => this.showLifecycleDemo = !this.showLifecycleDemo}>Toggle lifecycle demo</button>
          ${this.showLifecycleDemo ? html`<lifecycle-demo></lifecycle-demo>` : ''}
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F06-light-dom.js" target="_blank"><h2>06 Light dom</h2></a>
          <div>
            <light-dom></light-dom>
            <shadow-dom></shadow-dom>
            <p>Inspect the elements to see the difference.</p>
          </div>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F07-reflecting-attributes.js" target="_blank"><h2>07 Reflecting attributes</h2></a>
          <reflecting-attributes></reflecting-attributes>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F08-dynamic-repeated-templates.js" target="_blank"><h2>08 Dynamic repeated templates</h2></a>
          <dynamic-repeated-templates></dynamic-repeated-templates>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=02-intermediate%2F09-slotting.js" target="_blank"><h2>09 Slotting</h2></a>
          <slotting-demo></slotting-demo>
        </div>
      </paper-card>
    `;
  }
}

customElements.define('intermediate-demos', IntermediateDemos);