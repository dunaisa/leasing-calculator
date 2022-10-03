import React from 'react';
//import FormInput from './FormInput';

const FormInputValue = ({ fieldName, inputClassName, iconValue, iconClassName }) => {
  return (
    <div className="form__field">
      <label className="form__field-name">{fieldName}
        <div className="form__field-wrapper">
          <input className={inputClassName} type="number" />
          <input className="form__field-range" type="range" min="0" max="100" />
          <span className={iconClassName}>{iconValue}</span>
        </div>
      </label >
    </div>
  );
}

export default FormInputValue;
