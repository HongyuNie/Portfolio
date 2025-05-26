import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-component')
export class FooterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .footer {
      background-color: #121212;
      color: white;
      padding: 2rem 0;
      margin-top: 2rem;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .footer-copywright {
      text-align: center;
    }

    .footer-copywright h3 {
      margin: 0;
      font-size: 1rem;
    }

    .footer-body {
      text-align: center;
    }

    .footer-icons {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .social-icons a {
      color: white;
      font-size: 1.5rem;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `;

  render() {
    const year = new Date().getFullYear();
    
    return html`
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-copywright">
            <h3>Designed and Developed by Soumyajit Behera</h3>
          </div>
          <div class="footer-copywright">
            <h3>Copyright © ${year} SB</h3>
          </div>
          <div class="footer-body">
            <ul class="footer-icons">
              <li class="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📦
                </a>
              </li>
              <li class="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐦
                </a>
              </li>
              <li class="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼
                </a>
              </li>
              <li class="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    `;
  }
}