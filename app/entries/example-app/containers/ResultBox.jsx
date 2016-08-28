/* eslint no-useless-constructor: 0 */

import styles from './ResultBox.scss';
import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  pureRender,
} from 'webcube/boilerplate';
import throttle from 'lodash/throttle';
import WelcomeBox from '../../../components/WelcomeBox';
import LabelButton from '../../../components/LabelButton';

export const animations = [
  'bounce', 'flash', 'pulse', 'rubberBand', 'headShake',
  'swing', 'tada', 'wobble', 'jello',
];
export const buttonStyles = ['pure', 'sementic'];

@cssModules(styles)
@pureRender()
export default class ResultBox extends Component {

  state = {
    eyeCatching: '',
  };

  triggerEffect = throttle((effect) => {
    this.setState({ eyeCatching: effect });
    setTimeout(() => {
      this.setState({ eyeCatching: '' });
    }, 1000);
  }, 1010);

  render() {
    const {
      message,
      bgColor,
      effectTriggers,
      removeTrigger,
    } = this.props;
    const {
      eyeCatching,
    } = this.state;
    const boxStyle = eyeCatching ? styles[`box-${eyeCatching}`] : '';
    const LabelButtonOpt = {
      className: styles['btn-semantic'],
      mainClassName: styles['btn-semantic-main'],
      labelClassName: styles['btn-semantic-label'],
      text: 'semantic-ui',
    };
    return (
      <WelcomeBox
        {...{ message, bgColor, boxStyle }}>
        <ReactCSSTransitionGroup
          styleName="cards"
          transitionName={{
            enter: styles['card-enter'],
            enterActive: styles['card-enter-active'],
            leave: styles['card-leave'],
            leaveActive: styles['card-leave-active'],
          }}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
          {effectTriggers.map((trigger, i) => {
            return (
              <div styleName="card" key={trigger.id}>
                <div styleName="card-content">
                  <div styleName="card-header">Button {trigger.id}</div>
                </div>
                <div styleName="card-content">
                  {trigger.style === 'sementic' ? (
                    <LabelButton
                      {...LabelButtonOpt}
                      label={trigger.effect}
                      onClick={() => this.triggerEffect(trigger.effect)} />
                  ) : (
                    <button
                      styleName="btn-pure"
                      onClick={() => this.triggerEffect(trigger.effect)} >
                      {trigger.style} + {trigger.effect}
                    </button>
                  )}
                </div>
                <div styleName="card-extra">
                  <div
                    styleName="card-remove"
                    onClick={() => removeTrigger(trigger.id)}>
                    <i styleName="card-remove-icon"></i>
                    Remove
                  </div>
                </div>
              </div>
            );
          })}
        </ReactCSSTransitionGroup>
      </WelcomeBox>
    );
  }

}
