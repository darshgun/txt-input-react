import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./TextInput.module.scss";

const component = "text-input";

export const TextInput = forwardRef(
  ({ label, className, value, ...props }, ref) => {
    const properties = {
      className: cx(styles.input, className),
      value,
      ...props
    };

    return (
      <div className={cx(styles.wrapper, value && styles.filled)}>
        <label className={styles.label}>{label}</label>
        <div className={styles.content}>
          <input ref={ref} {...properties} />
          <div className={styles.backdrop}></div>
        </div>
      </div>
    );
  }
);

TextInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  ref: PropTypes.func
};

TextInput.defaultProps = {
  label: "Label"
};

TextInput.displayName = component;

export default TextInput;
