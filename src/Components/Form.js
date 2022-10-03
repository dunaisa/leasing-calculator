import React from 'react';
import FormInputValue from './FormInputValue';
import FormInputCost from './FormInputCost';

const Form = () => {

  return (
    <form action="submit" method="post" className="form">
      <fieldset className="form__fieldset">

        <div className="form__fieldset-top">
          <FormInputValue
            iconClassName="form__field-icon"
            inputClassName="form__input form__input_value"
            fieldName="Стоимость автомобиля" iconValue="₽" />

          <FormInputValue
            iconClassName="form__field-icon-box"
            inputClassName="form__input form__input_value"
            fieldName="Первоначальный взнос" iconValue="10%" />

          <FormInputValue
            iconClassName="form__field-icon"
            inputClassName="form__input form__input_value"
            fieldName="Срок лизинга" iconValue="мес." />
        </div>

        <div className="form__fieldset-down">
          <FormInputCost className="form__input form__input_cost" fieldName="Сумма договора лизинга" />
          <FormInputCost className="form__input form__input_cost" fieldName="Ежемесячный платеж от" />
        </div>

      </fieldset>
      <button className="form__btn">Оставить заявку</button>
    </form>
  );
}

export default Form;
