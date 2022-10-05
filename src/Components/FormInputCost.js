import React from 'react';

const FormInputCost = ({ fieldName, className, value }) => {
  return (
    <div className="form__field">
      <label className="form__field-name">{fieldName}</label>
      <input className={className} type="number" defaultValue={value} disabled={true} />
    </div>
  );
}

export default FormInputCost;
