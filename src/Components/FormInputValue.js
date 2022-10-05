import React from 'react';

const FormInputValue = ({ fieldName, inputClassName, iconValue, iconClassName, rangeClassName, min, max, valueInput, valueRange, step, onChange, style, iconClassNameInput, disabled, iconInputDisabled, readOnly, perсentIcon }) => {

  return (
    <div className="form__field">
      <label className="form__field-name">{fieldName}</label>
      <div className="form__field-wrapper">
        <input
          className={inputClassName}
          type="number"
          value={valueInput}
          onChange={onChange}
          min={min}
          max={max}
          disabled={disabled}
          readOnly={readOnly} />
        <input
          className={rangeClassName}
          id="range"
          type="range"
          min={min}
          max={max}
          value={valueRange}
          onChange={onChange}
          step={step}
          style={style} />
        <div className={iconClassName}>
          <input value={iconValue} className={iconClassNameInput} onChange={onChange} disabled={iconInputDisabled} />
          <span className="form__field-icon-perсent">{perсentIcon}</span>
        </div>

      </div>
    </div>
  );
}

export default FormInputValue;
