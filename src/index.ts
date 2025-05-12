import './components/Projects/projects';
import './components/Projects/project-card';

// Add any global styles here
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #1a1a1a;
  }
`;
document.head.appendChild(style);

// Create the main app container
const app = document.createElement('div');
app.innerHTML = '<projects-section></projects-section>';
document.body.appendChild(app); 