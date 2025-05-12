import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 2rem;
    }
    .card {
      background: rgb(30, 30, 30);
      border-radius: 10px;
      padding: 1.5rem;
      height: 100%;
      transition: all 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
    .card-title {
      color: #fff;
      margin: 1rem 0;
    }
    .card-text {
      color: #e6e6e6;
      font-size: 0.9rem;
    }
    .card-footer {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    .btn {
      padding: 0.5rem 1rem;
      border-radius: 5px;
      text-decoration: none;
      color: #fff;
      background: #6c63ff;
      transition: all 0.3s ease;
    }
    .btn:hover {
      background: #5a52d5;
    }
  `;

  @property({ type: String }) imgPath = '';
  @property({ type: Boolean }) isBlog = false;
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';
  @property({ type: String }) ghLink = '';
  @property({ type: String }) demoLink = '';

  render() {
    return html`
      <div class="card">
        <img src=${this.imgPath} alt=${this.title} />
        <h3 class="card-title">${this.title}</h3>
        <p class="card-text">${this.description}</p>
        <div class="card-footer">
          <a href=${this.ghLink} class="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          ${this.demoLink ? html`
            <a href=${this.demoLink} class="btn" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }
} 