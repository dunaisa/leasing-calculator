import React, { useState, useEffect } from 'react';
import FormInputValue from './FormInputValue';
import FormInputCost from './FormInputCost';
import { postForm } from '../utils/API';

const Form = () => {

  const [carCostInput, setCarCostInput] = useState(3300000);

  const handleCarCostChange = (e) => {
    if (e.target.value > 6000000) {
      setCarCostInput(6000000)
    } else if (e.target.value < 1000000) {
      setCarCostInput(1000000)
    } else {
      setCarCostInput(Number(e.target.value))
    }
  }

  const [initialRate, setInitialRate] = useState(13);
  const [initialValue, setInitialValue] = useState(0);

  const handleInitialValueChange = (e) => {

    setInitialValue(carCostInput * initialRate / 100)
    if (e.target.value > 60) {
      setInitialRate(60)
    } else if (e.target.value < 1) {
      setInitialRate(1)
    } else {
      setInitialRate(e.target.value)
    }
  }

  const [months, setMonths] = useState(60);

  const handleMonthChange = (e) => {
    if (e.target.value >= 0 && e.target.value <= 60) {
      setMonths(e.target.value)
    } else {
      setMonths(60)
    }
  }

  const [monthPay, setMonthPay] = useState();

  const [totalCost, setTotalCost] = useState();

  // Состояние кнопки и полей в процессе отправки формы

  const [isLoading, setIsLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);
  const [activeRangeSlider, setActiveRangeSlider] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setDisabledBtn(true)
    setDisabledInput(true)
    setActiveRangeSlider(false)
    postForm({ carCostInput, initialValue, initialRate, months, totalCost, monthPay })
      .then(() => {
        setIsLoading(false)
        setDisabledBtn(false)
        setDisabledInput(false)
        setActiveRangeSlider(true)
      })
      .catch((err) => console.log(`${err}`))
  }

  useEffect(() => {
    const payPerMonth = Math.ceil(((carCostInput - initialValue) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1))))

    const abc = carCostInput * initialRate / 100

    setInitialValue(abc)
    setMonthPay(payPerMonth)
    setTotalCost(Math.ceil(initialValue + (months * monthPay)))


  }, [carCostInput, initialRate, initialValue, months, monthPay])



  return (
    <form action="submit" method="post" className="form" onSubmit={handleSubmit} noValidate>
      <fieldset className="form__fieldset">

        <div className="form__fieldset-top">
          <FormInputValue
            iconClassName="form__field-icon"
            inputClassName="form__input form__input_value form__input_value-inactive"
            iconClassNameInput="form__field-icon-text"
            rangeClassName={activeRangeSlider ? "form__field-range" : "form__field-range-inactive"}
            fieldName="Стоимость автомобиля"
            iconValue="₽"
            min={1000000}
            max={6000000}
            valueInput={carCostInput}
            valueRange={carCostInput}
            onChange={handleCarCostChange}
            style={{ 'backgroundSize': (carCostInput - 1000000) * 100 / 5000000 + '% 100%' }}
            disabled={disabledInput}
            iconInputDisabled={true} />

          <FormInputValue
            readOnly="readOnly"
            iconClassName="form__field-icon-box"
            inputClassName="form__input form__input_value form__input_value-inactive"
            rangeClassName={activeRangeSlider ? "form__field-range" : "form__field-range-inactive"}
            iconClassNameInput="form__field-icon-perсent-text"
            fieldName="Первоначальный взнос"
            min={10}
            max={60}
            valueInput={Math.ceil(initialValue)}
            iconValue={initialRate}
            valueRange={initialRate}
            onChange={handleInitialValueChange}
            disabled={disabledInput}
            style={{ 'backgroundSize': (Number(initialRate) - 10) * 100 / 50 + '% 100%' }}
            perсentIcon={'%'}
          />

          <FormInputValue
            iconClassName="form__field-icon"
            iconClassNameInput="form__field-icon-text"
            inputClassName="form__input form__input_value form__input_value-inactive"
            rangeClassName={activeRangeSlider ? "form__field-range" : "form__field-range-inactive"}
            fieldName="Срок лизинга" iconValue="мес."
            min={1}
            max={60}
            valueInput={months}
            valueRange={months}
            onChange={handleMonthChange}
            style={{ 'backgroundSize': (months - 1) * 100 / 59 + '% 100%' }}
            iconInputDisabled={disabledInput}
            disabled={disabledInput} />
        </div>

        <div className="form__fieldset-down">
          <FormInputCost
            className="form__input form__input_cost"
            fieldName="Сумма договора лизинга"
            value={totalCost}
          />

          <FormInputCost
            className="form__input form__input_cost"
            fieldName="Ежемесячный платеж от"
            value={monthPay}
          />
        </div>

      </fieldset>

      <button
        className={!isLoading ? "form__btn" : "form__btn-loader"}
        disabled={disabledBtn} >{!isLoading ? "Оставить заявку" : ""}</button>

    </form>
  );
}

export default Form;
