
import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import paneStyles from 'app/example-app/common/styles/pane.scss';
import styles from './JobPane.scss';
import {
  connect,
  stateSelector,
  // actionDispatcher,
} from 'webcube/boilerplate';
import Helmet from 'react-helmet';
// import * as myActions from '../actions';
import {
  TITLE,
} from 'app/example-app/common/constants';

@connect()
@stateSelector(
  () => ({}),
)
// @actionDispatcher({
// }, 'actions')
@cssModules(Object.assign(styles, paneStyles))
export default class JobPane extends PureComponent {

  render() {
    // const {
    //   actions,
    // } = this.props;
    return (
      <div styleName="pane">
        <Helmet
          title={`Jobs - ${TITLE}`}
          meta={[
            { name: 'description', content: 'demo' },
          ]} />
        <div styleName="divider">See the results</div>
      </div>
    );
  }

}
