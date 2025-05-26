import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement("my-app")
export class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      font-family: sans-serif;
    }
  `;

  render() {
    return html`<h1>Hello from Lit!</h1>`;
  }
}
