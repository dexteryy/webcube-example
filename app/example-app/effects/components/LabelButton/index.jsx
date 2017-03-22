
import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.css';

function LabelButton({
  className = '',
  mainClassName = '',
  labelClassName = '',
  label,
  text,
  onClick,
}) {
  return (
    <div
      styleName="button"
      className={className}
      onClick={onClick}>
      <div styleName="main" className={mainClassName}>
        <i styleName="icon"></i>
        <span>{text}</span>
      </div>
      <a styleName="label" className={labelClassName}>{label}</a>
    </div>
  );
}

export default cssModules(LabelButton, styles);
