import React from 'react';
import FormInput from './FormInput';

const FormInputCost = ({ fieldName, className }) => {
  return (
    <label className="form__field">
      {fieldName}
      <FormInput className={className} fieldName={fieldName} />
    </label >
  );
}

export default FormInputCost;
