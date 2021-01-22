import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./TextInput.module.scss";

const component = "text-input";

export const TextInput = forwardRef(({ label, className, ...props }, ref) => {
  const properties = { className: cx(styles.input, props.className) };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div className={styles.content}>
        <input ref={ref} {...properties} />
        <div className={styles.backdrop}></div>
      </div>
    </div>
  );
});

TextInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  ref: PropTypes.func
};

TextInput.defaultProps = {
  label: "Label"
};

TextInput.displayName = component;

export default TextInput;
