import { LitElement, html, css } from 'lit-element';
import './01-property-setter-observer.js';
import './02-until-directive.js';
import './03-template-wrapping.js';
import './04-shared-templates.js';
import './05-shared-styles.js';
import './06-external-template.js';
import './07-template-factories.js';
import './08-should-update.js';

class AdvancedDemos extends LitElement {
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

        .demo > *:not(h2):not(a) {
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
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F01-property-setter-observer.js" target="_blank"><h2>01 Property setter observer</h2></a>
          <property-setter-observer></property-setter-observer>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F02-until-directive.js" target="_blank"><h2>02 Until directive</h2></a>
          <until-directive></until-directive>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F03-template-wrapping.js" target="_blank"><h2>03 Template wrapping</h2></a>
          <template-wrapping></template-wrapping>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F04-shared-templates.js" target="_blank"><h2>04 Shared templates</h2></a>
          <shared-templates></shared-templates>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F05-shared-styles.js" target="_blank"><h2>05 Shared styles</h2></a>
          <shared-styles></shared-styles>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F06-external-template.js" target="_blank"><h2>06 External template</h2></a>
          <external-template></external-template>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F07-template-factories.js" target="_blank"><h2>07 Template factories</h2></a>
          <template-factories></template-factories>
        </div>
      </paper-card>

      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F08-should-update.js" target="_blank"><h2>08 Should update</h2></a>
          <should-update></should-update>
        </div>
      </paper-card>
    `;
  }
}

customElements.define('advanced-demos', AdvancedDemos);