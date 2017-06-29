
import React from 'react';
import cssModules from 'react-css-modules';
import classnames from 'classnames';
import styles from './index.scss';

function WelcomeBox({
  message,
  bgColor = '#eee',
  boxStyle = '',
  children,
}) {
  const boxCustomStyles = {
    backgroundColor: bgColor,
  };
  return (
    <div
      className={classnames('welcome-box', boxStyle)}
      styleName="box"
      style={boxCustomStyles}>
      <div className="welcome-box--msg" styleName="msg">
        {message}
      </div>
      {children}
    </div>
  );
}

export default cssModules(WelcomeBox, styles);
