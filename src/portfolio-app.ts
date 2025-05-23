import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './style.css';
import './App.css';

@customElement('portfolio-app')
export class PortfolioApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .App {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    #no-scroll {
      overflow: hidden;
    }

    #scroll {
      overflow-y: auto;
    }
  `;

  @state()
  private load = true;

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.load = false;
    }, 1200);
  }

  render() {
    return html`
      <div class="App" id=${this.load ? 'no-scroll' : 'scroll'}>
        <main>
          <slot></slot>
        </main>
      </div>
    `;
  }
} 