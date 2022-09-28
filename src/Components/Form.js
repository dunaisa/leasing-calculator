import React from 'react';
import FormInput from './FormInput';

const Form = () => {

  return (
    <form action="submit" method="post" className="form">
      <fieldset className="form__fieldset">

        <FormInput fieldName="Стоимость автомобиля" />
        <FormInput fieldName="Первоначальный взнос" />
        <FormInput fieldName="Срок лизинга" />

      </fieldset>

    </form>
  );
}

export default Form;
