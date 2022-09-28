import React from 'react';

const FormInput = ({ fieldName }) => {
  return (
    <label className="form__field">
      {fieldName}
      <input
        className="form__input"
        type="text"
        placeholder=""
        name="name"
        id="" />
    </label>
  );
}

export default FormInput;
