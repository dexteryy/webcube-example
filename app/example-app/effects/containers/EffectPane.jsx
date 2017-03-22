
import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import paneStyles from 'app/example-app/common/styles/pane.scss';
import styles from './EffectPane.scss';
import {
  connect,
  stateSelector,
  actionDispatcher,
} from 'webcube/boilerplate';
import Helmet from 'react-helmet';
import EffectBox from './EffectBox';
import ResultBox from './ResultBox';
import * as myActions from '../actions';
import {
  TITLE,
} from 'app/example-app/common/constants';

@connect()
@stateSelector(
  state => state.triggers,
  triggers => ({ triggers }),
)
@actionDispatcher({
  addTrigger: myActions.addEffectTrigger,
  removeTrigger: myActions.removeEffectTrigger,
}, 'actions')
@cssModules(Object.assign(styles, paneStyles))
export default class EffectPane extends PureComponent {

  render() {
    const {
      actions,
      triggers,
    } = this.props;
    return (
      <div styleName="pane">
        <Helmet
          title={`Effects - ${TITLE}`}
          meta={[
            { name: 'description', content: 'demo' },
          ]} />
        <EffectBox
          readme="Add a new button to trigger an animation effect!"
          submitText="Add"
          handleSubmit={actions.addTrigger} />
        <div styleName="divider">See the results</div>
        <ResultBox
          effectTriggers={triggers}
          removeTrigger={actions.removeTrigger}
          message="Welcome!" />
      </div>
    );
  }

}
