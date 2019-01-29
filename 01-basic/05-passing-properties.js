import { LitElement, html } from 'lit-element';

class PassingProperties extends LitElement {
  static get properties() {
    return {
      author: { type: Object },
      books: { type: Array }
    }
  }

  constructor() {
    super();
    this.author = { name: 'G.R.R. Martin', age: 70 };
    this.books = [
      { title: 'Game of Thrones', pages: 697 },
      { title: 'The Ice Dragon', pages: 521 }
    ];
  }

  /**
   * In lit-html, you can use template expressions (${}) to set properties and attributes
   * on elements with a similar syntax.
   */
  render() {
    return html`
      <author-profile
        .author=${this.author}
        .books=${this.books}>
      </author-profile>
    `;
  }
}

customElements.define('passing-properties', PassingProperties);

class AuthorProfile extends LitElement {
  static get properties() {
    return {
      author: { type: Object },
      books: { type: Array },
    };
  }

  render() {
    return html`
      <div>${this.author.name}</div>
      <div>${this.books.map(book => html`<li>${book.title}</li>`)}
    `;
  }
}

customElements.define('author-profile', AuthorProfile);