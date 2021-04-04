import React from "react";
import cs from "classnames";
import PropTypes from "prop-types";

import { Button } from "@my-scope/ui.button";

const styles = require("./jumbotron.module.scss");

export const Jumbotron = ({ title, description, ...rest }) => (
  <div className={cs(styles.jumbotron)}>
    <h1>{title}</h1>
    <p>{description}</p>
    <Button {...rest}>Confirm</Button>
  </div>
);

Jumbotron.propTypes = {
  /**
   * post title
   */
  title: PropTypes.string.isRequired,
  /**
   * date
   */
  description: PropTypes.string.isRequired,
};
