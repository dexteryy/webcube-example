
import 'normalize.css/normalize.css';
import '../deploy.scss';
import App from 'app/entries/example-app';
// or import App from '../../';
// import DevTools from 'app/containers/DevTools';

const app = new App({
  isStaticWeb: true,
  appStateSample: 'sample',
  // DevTools,
});

export default function run(done) {
  if (window.innerWidth && window.innerHeight
    && screen.availWidth && screen.availHeight) {
    app.mount(document.getElementById('exampleApp'));
    done();
  } else {
    setTimeout(run, 30);
  }
}

window._runApp = function (done) {
  if (['complete', 'loaded', 'interactive'].includes(document.readyState)
      && document.body) {
    run(done);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      run(done);
    }, false);
  }
};
