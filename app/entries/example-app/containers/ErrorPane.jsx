
import paneStyles from '../styles/pane.scss';
import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import {
  pureRender,
} from 'webcube/boilerplate';
import Helmet from 'react-helmet';
import MessageBoxWithStyle from '../../../components/MessageBoxWithStyle';
import * as constants from '../constants';

@cssModules(paneStyles)
@pureRender()
export default class ErrorPane extends Component {

  render() {
    return (
      <div styleName="pane">
        <Helmet
          title={`Error Page - ${constants.APP_TITLE}`}
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
