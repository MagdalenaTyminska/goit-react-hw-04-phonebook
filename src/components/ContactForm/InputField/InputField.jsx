import React from 'react';
import PropTypes from 'prop-types';
import css from './InputField.module.css';

const InputField = ({
  label,
  type,
  name,
  pattern,
  title,
  required,
  value,
  onChange,
}) => {
  return (
    <>
      <label className={css.contactFormLabel}>{label}</label>
      <input
        className={css.contactFormInput}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default InputField;
