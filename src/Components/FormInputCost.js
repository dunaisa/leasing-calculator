import React from 'react';
import FormInput from './FormInput';

const FormInputCost = ({ fieldName, className }) => {
  return (
    <div className="form__field">
      <label className="form__field-name">{fieldName}
        <input className={className} type="number" />
      </label>
    </div>
  );
}

export default FormInputCost;
