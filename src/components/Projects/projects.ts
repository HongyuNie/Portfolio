import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './project-card';

@customElement('projects-section')
export class Projects extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 0;
      background: #1a1a1a;
      color: white;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .project-heading {
      text-align: center;
      margin-bottom: 2rem;
    }
    .purple {
      color: #6c63ff;
    }
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }
  `;

  private projects = [
    {
      imgPath: '/src/Assets/Projects/chatify.png',
      isBlog: false,
      title: "Chatify",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/soumyajit4419/Chatify",
      demoLink: "https://chatify-49.web.app/"
    },
    {
      imgPath: '/src/Assets/Projects/blog.png',
      isBlog: false,
      title: "Bits-0f-C0de",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
      demoLink: "https://blogs.soumya-jit.tech/"
    },
    {
      imgPath: '/src/Assets/Projects/codeEditor.png',
      isBlog: false,
      title: "Editor.io",
      description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/"
    },
    {
      imgPath: '/src/Assets/Projects/leaf.png',
      isBlog: false,
      title: "Plant AI",
      description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
      ghLink: "https://github.com/soumyajit4419/Plant_AI",
      demoLink: "https://plant49-ai.herokuapp.com/"
    },
    {
      imgPath: '/src/Assets/Projects/suicide.png',
      isBlog: false,
      title: "Ai For Social Good",
      description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
      ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good"
    },
    {
      imgPath: '/src/Assets/Projects/emotion.png',
      isBlog: false,
      title: "Face Recognition and Emotion Detection",
      description: "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
      ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection"
    }
  ];

  render() {
    return html`
      <section class="container">
        <h1 class="project-heading">
          My Recent <strong class="purple">Works</strong>
        </h1>
        <p style="color: white; text-align: center;">
          Here are a few projects I've worked on recently.
        </p>
        <div class="project-grid">
          ${this.projects.map(project => html`
            <project-card
              .imgPath=${project.imgPath}
              .isBlog=${project.isBlog}
              .title=${project.title}
              .description=${project.description}
              .ghLink=${project.ghLink}
              .demoLink=${project.demoLink}
            ></project-card>
          `)}
        </div>
      </section>
    `;
  }
} 