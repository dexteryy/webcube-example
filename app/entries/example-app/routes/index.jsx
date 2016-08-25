
import App from '../containers/App';
import EffectPane from '../containers/EffectPane';
import JobPane from '../containers/JobPane';
import ErrorPane from '../containers/ErrorPane';

// use plain routes if you need `rootProps`, see `../index.js`
// https://github.com/reactjs/react-router/blob/master/docs/guides/RouteConfiguration.md#configuration-with-plain-routes
const routes = {
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (opt, replace) => replace('/pane/effects'),
  },
  childRoutes: [{
    path: 'pane/effects',
    component: EffectPane,
  }, {
    path: 'pane/jobs',
    component: JobPane,
  }, {
    path: 'pane/*',
    component: ErrorPane,
  }],
};

export default routes;
