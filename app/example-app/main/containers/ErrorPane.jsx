
import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import paneStyles from 'app/example-app/common/styles/pane.scss';
import Helmet from 'react-helmet';
import MessageBoxWithStyle from 'app/example-app/common/components/MessageBoxWithStyle';
import {
  TITLE,
} from 'app/example-app/common/constants';

@cssModules(paneStyles)
export default class ErrorPane extends PureComponent {

  render() {
    return (
      <div styleName="pane">
        <Helmet
          title={`Error Page - ${TITLE}`}
          meta={[
            { name: 'description', content: 'demo' },
          ]} />
        <MessageBoxWithStyle
          message={{
            status: -1,
            title: 'Not Found',
            content: 'Sorry we can\'t find that page',
          }} />
      </div>
    );
  }

}
