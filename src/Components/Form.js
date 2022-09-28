import React from 'react';
import FormInputValue from './FormInputValue';
import FormInputCost from './FormInputCost';

const Form = () => {

  return (
    <form action="submit" method="post" className="form">
      <fieldset className="form__fieldset">

        <FormInputValue className="form__input form__input_value" fieldName="Стоимость автомобиля" />
        <FormInputValue className="form__input form__input_value" fieldName="Первоначальный взнос" />
        <FormInputValue className="form__input form__input_value" fieldName="Срок лизинга" />

        <FormInputCost className="form__input form__input_cost" fieldName="Сумма договора лизинга" />
        <FormInputCost className="form__input form__input_cost" fieldName="Ежемесячный платеж от" />

      </fieldset>
      <button className="form__btn">Оставить заявку</button>
    </form>
  );
}

export default Form;
