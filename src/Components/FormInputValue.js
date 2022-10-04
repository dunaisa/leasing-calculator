import React from 'react';

const FormInputValue = ({ fieldName, inputClassName, iconValue, iconClassName, min, max, value, step, onChange, style, iconClassNameInput }) => {

  return (
    <div className="form__field">
      <label className="form__field-name">{fieldName}</label>
      <div className="form__field-wrapper">
        <input
          className={inputClassName}
          id="rangenumber"
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max} />
        <input
          className="form__field-range"
          id="range"
          type="range"
          min={min}
          max={max}
          defaultValue={value}
          onChange={onChange}
          step={step}
          style={style} />
        <div className={iconClassName}>
          <input value={iconValue} className={iconClassNameInput} min={min} max={max} disabled />
        </div>

      </div>
    </div>
  );
}

export default FormInputValue;
