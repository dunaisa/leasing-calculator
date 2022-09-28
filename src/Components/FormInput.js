import React from 'react';

const FormInput = ({ fieldName, className }) => {
  return (
    <label className="form__field">
      {fieldName}
      <input
        className={className}
        type="text" />
    </label>
  );
}

export default FormInput;
