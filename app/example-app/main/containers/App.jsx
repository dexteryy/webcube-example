
import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import styles from './App.scss';
import {
  connect,
  actionDispatcher,
} from 'webcube/boilerplate';
import { push } from 'react-router-redux';
// @TODO react-router v4: start
// import {
//   Route,
//   NavLink,
// } from 'react-router-dom';
// import {
//   Redirect,
//   Switch,
// } from 'react-router';
import { Link } from 'react-router';
// @TODO react-router v4: end
import TabView from '../components/TabView';
import FlipboardLogo from 'app/common/components/FlipboardLogo';
// @TODO react-router v4: start
// import EffectPane from './EffectPane';
// import JobPane from './JobPane';
// import ErrorPane from './ErrorPane';
// @TODO react-router v4: end

@connect()
@actionDispatcher({ push }, 'actions')
@cssModules(styles)
export default class App extends PureComponent {

  render() {
    const {
      appStateSample,
      // @TODO react-router v4: start
      children,
      // @TODO react-router v4: end
      // location,
      // actions,
    } = this.props;
    const menu = [{
      path: '/pane/effects',
      text: 'Effects',
      title: 'Effect Pane',
      icon: styles['icon-photo'],
    }, {
      path: '/pane/jobs',
      text: 'Jobs (TODO)',
      title: 'Job Pane (TODO)',
      icon: styles['icon-news'],
    }];
    return (
      <TabView
        id="exampleAppRoot"
        Logo={FlipboardLogo}
        logoWidth={60}
        logoHeight={60}
        title1="EXAMPLE APP"
        title2="This is a demo"
        // @TODO react-router v4: start
        // MenuLink={NavLink}
        MenuLink={Link}
        // @TODO react-router v4: end
        menu={menu}>
        {/* @TODO react-router v4: start */}
        {/* <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Redirect to="/pane/effects" />
            )} />
          <Route
            path="/pane/effects"
            render={() => (
              <EffectPane
                appStateSample={appStateSample} />
            )} />
          <Route
            path="/pane/jobs"
            render={() => (
              <JobPane
                appStateSample={appStateSample} />
            )} />
          <Route
            path="/pane"
            render={() => (
              <ErrorPane
                appStateSample={appStateSample} />
            )} />
        </Switch> */}
        {/* https://github.com/reactjs/react-router/issues/1857 */}
        {React.cloneElement(children, {
          appStateSample,
        })}
        {/* @TODO react-router v4: end */}
      </TabView>
    );
  }

}
