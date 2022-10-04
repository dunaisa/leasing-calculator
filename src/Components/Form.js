import React, { useState, useEffect } from 'react';
import FormInputValue from './FormInputValue';
import FormInputCost from './FormInputCost';

const Form = () => {

  const [carCostInput, setCarCostInput] = useState('3300000');

  const handleCarCostChange = (e) => {
    if (e.target.value > 6000000) {
      setCarCostInput(6000000)
    } else if (e.target.value < 1000000) {
      setCarCostInput(1000000)
    } else {
      setCarCostInput(Number(e.target.value))
    }
  }

  const [initialRate, setInitialRate] = useState('13');
  const [initialValue, setInitialValue] = useState('');

  const handleInitialValueChange = (e) => {
    console.log(carCostInput * initialRate / 100)
    setInitialValue(carCostInput * initialRate / 100)
    setInitialRate(e.target.value)
  }

  const [months, setMonths] = useState(Number('60'));

  const handleMonthChange = (e) => {
    setMonths(Number(e.target.value))
  }

  const [monthPay, setMonthPay] = useState();

  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    const payPerMonth = Math.ceil(((carCostInput - initialValue) * ((0.035 * Math.pow((1 + 0.035), Number(months))) / (Math.pow((1 + 0.035), Number(months)) - 1))))

    setInitialValue(carCostInput * initialRate / 100)
    setMonthPay(Number(payPerMonth))
    console.log(Number(initialValue), months, monthPay)
    setTotalCost(Number(initialValue) + (months * monthPay))
  }, [carCostInput, initialRate, initialValue, months, monthPay])

  return (
    <form action="submit" method="post" className="form">
      <fieldset className="form__fieldset">

        <div className="form__fieldset-top">
          <FormInputValue
            iconClassName="form__field-icon"
            inputClassName="form__input form__input_value"
            iconClassNameInput="form__field-icon-text"
            fieldName="Стоимость автомобиля"
            iconValue="₽"
            min="1000000"
            max="6000000"
            value={carCostInput}
            onChange={handleCarCostChange}
            style={{ 'backgroundSize': (carCostInput - 1000000) * 100 / 5000000 + '% 100%' }} />

          <FormInputValue
            iconClassName="form__field-icon-box"
            inputClassName="form__input form__input_value"
            iconClassNameInput="form__field-icon-text"
            fieldName="Первоначальный взнос"
            min="10"
            max="60"
            value={Math.ceil(initialValue)}
            iconValue={Number(initialRate) + '%'}
            onChange={handleInitialValueChange}
            style={{ 'backgroundSize': (Number(initialRate) - 10) * 100 / 50 + '% 100%' }} />

          <FormInputValue
            iconClassName="form__field-icon"
            iconClassNameInput="form__field-icon-text"
            inputClassName="form__input form__input_value"
            fieldName="Срок лизинга" iconValue="мес."
            min="1"
            max="60"
            value={Number(months)}
            onChange={handleMonthChange}
            style={{ 'backgroundSize': (Number(months) - 1) * 100 / 59 + '% 100%' }} />
        </div>

        <div className="form__fieldset-down">
          <FormInputCost
            className="form__input form__input_cost"
            fieldName="Сумма договора лизинга"
            value={totalCost} />

          <FormInputCost
            className="form__input form__input_cost"
            fieldName="Ежемесячный платеж от"
            value={monthPay} />
        </div>

      </fieldset>
      <button className="form__btn">Оставить заявку</button>
    </form>
  );
}

export default Form;
