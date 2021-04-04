import React from 'react';
import cs from 'classnames';
import PropTypes from "prop-types";

const styles = require('./button.module.scss');

export const Button = ({ variant, disabled, children, ...rest }) => (
  <button
    className={cs(styles.base, styles[variant])}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  /**
   * button variant style
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * disabled attribute
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};
