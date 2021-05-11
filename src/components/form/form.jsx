import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import {ActionCreator} from "../../store/action";
import {EMPTY_OPERATION, formatDate} from "../../utils";
import {DAYS_AGO} from "../../const";
import {getCurrency} from "../../store/api-actions";

const flatpickrOptions = {
  minDate: new Date().fp_incr(-DAYS_AGO),
  maxDate: `today`,
  dateFormant: `d-m-Y`,
  date: `today`
}

const Form = () => {
  const dispatch = useDispatch();

  const [operation, setOperation] = useState(EMPTY_OPERATION)
  dispatch(getCurrency(
      operation.fromCurrency,
      operation.toCurrency,
      formatDate(operation.date)
  ))
  // useEffect(() => {
  //
  // },[dispatch, operation.date, operation.toCurrency, operation.fromCurrency]);

  // useEffect(() => {
  //   console.log('change from')
  //   setOperation({
  //     ...operation,
  //     toRate: operation.fromRate*4
  //   })
  // }, [dispatch, operation.fromRate])
  //
  // useEffect(() => {
  //   console.log('change to')
  //   setOperation({
  //     ...operation,
  //     fromRate: operation.toRate/4
  //   })
  // }, [operation.toRate])


  const _valueChangeHandler = (evt) => {
    setOperation({
      ...operation,
      [evt.target.name]: evt.target.value
    })
  };

  const _handleSaveClick = (evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.addOperation(operation))
  }

  const _handleDateChange = (date) => {
    console.log(date)
    setOperation({
      ...operation,
      date: date[0]
    })
  }


  return (
    <form className="converter__form form">
      <div className="form__wrapper">
        <label className="form__label" htmlFor="have">У меня есть</label>
        <div className="form__input-wrapper">
          <input
            autoComplete="off"
            className="form__input"
            value={operation.fromRate}
            type="number"
            step='0.01'
            id="have"
            name="fromRate"
            onChange={_valueChangeHandler}
          />
          <label className="visually-hidden" htmlFor="have-currency">У меня есть. Валюта</label>
          <select
              className="form__select"
              name="fromCurrency"
              id="have-currency"
              onChange={_valueChangeHandler}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
      </div>
      <div className="form__wrapper">
        <label className="form__label" htmlFor="want">Хочу приобрести</label>
        <div className="form__input-wrapper">
          <input
              autoComplete="off"
              className="form__input"
              type="number"
              value={operation.toRate}
              step='0.01'
              id="want"
              name="toRate"
              onChange={_valueChangeHandler}
          />
          <label className="visually-hidden" htmlFor="want-currency">Хочу приобрести. Валюта</label>
          <select
              className="form__select"
              name="toCurrency"
              id="want-currency"
              onChange={_valueChangeHandler}
          >
            <option value="RUB">RUB</option>
            <option value="USD" selected>USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
      </div>
      <label className="visually-hidden" htmlFor="date"/>
      <Flatpickr
        options={flatpickrOptions}
        className="form__date"
        value="today"
        onChange={_handleDateChange}
      />
      <button
          className="form__submit"
          onClick={_handleSaveClick}
      >
        Сохранить результат
      </button>
    </form>
  );
};

export default Form;
