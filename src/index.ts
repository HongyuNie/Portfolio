import './my-app';

const root = document.getElementById('root');
if (root) {
  root.innerHTML = '<my-app></my-app>';
} else {
  console.error('Root element not found');
}