// import { LitElement, html, css } from 'lit';
// import { customElement } from 'lit/decorators.js';

// @customElement("my-app")
// export class MyApp extends LitElement {
//   static styles = css`
//     :host {
//       display: block;
//       padding: 1rem;
//       font-family: sans-serif;
//     }
//   `;

//   render() {
//     return html`<h1>Hello from Lit!</h1>`;
//   }
// }


import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

@customElement('my-app')
export class MyApp extends LitElement {
  private hasRendered = false;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.hasRendered) {
      const mountPoint = document.createElement('div');
      this.appendChild(mountPoint);

      ReactDOM.createRoot(mountPoint).render(React.createElement(App));
      this.hasRendered = true;
    }
  }
}






