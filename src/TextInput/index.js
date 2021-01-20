import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./TextInput.module.scss";

const component = "text-input";

export function TextInput({ label, className, ...props }) {
  const properties = { className: cx(styles.input, props.className) };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div className={styles.content}>
        <input
          ref={props.ref}
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          value={props.value}
          disabled={props.disabled}
          id={props.id}
          {...properties}
        />
        <div className={styles.backdrop}></div>
        {props.touched && props.error && (
          <span className="required">{props.error}</span>
        )}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  ref: PropTypes.func
};

TextInput.defaultProps = {
  type: "text",
  disabled: false,
  touched: false
};

export default TextInput;
