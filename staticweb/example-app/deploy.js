
import 'normalize.css/normalize.css';
import './deploy.scss';
import App from 'app/example-app';
// import DevTools from 'app/common/containers/DevTools';

const app = new App({
  isStaticWeb: true,
  appStateSample: 'sample',
  // DevTools,
});

export default function run() {
  if (window.innerWidth && window.innerHeight
    && screen.availWidth && screen.availHeight) {
    app.mount(document.getElementById('exampleApp'));
  } else {
    setTimeout(run, 30);
  }
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState)
    && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
