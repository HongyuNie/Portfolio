import { Router } from '@vaadin/router';
import './portfolio-app';
import './style.css';
import './App.css';

const router = new Router(document.querySelector('portfolio-app'));
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/about', component: 'about-page' },
  { path: '/project', component: 'projects-page' },
  { path: '/resume', component: 'resume-page' },
  { path: '(.*)', redirect: '/' }
]); 