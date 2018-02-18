import 'whatwg-fetch';
import store from './store';
import AppController from './controller/app';

const appEl = document.querySelector('.app');

const app = new AppController(appEl, store);

app.created();
