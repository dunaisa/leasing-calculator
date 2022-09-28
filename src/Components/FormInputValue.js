import React from 'react';
import FormInput from './FormInput';

const FormInputValue = ({ fieldName, className }) => {
  return (
    <label className="form__field form__field_type_flex">
      {fieldName}
      <FormInput className={className} fieldName={fieldName} />
    </label >
  );
}

export default FormInputValue;
