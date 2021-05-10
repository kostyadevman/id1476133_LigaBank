import React, {useEffect, useState} from 'react';


const Form = () => {

  useEffect(() => {
    console.log(have);
  });
  const [have, setHave] = useState(``);


  const _haveChangeHandler = (evt) => {
    setHave(evt.target.value);
  };

  return (
    <form className="converter__form form" action="">
      <div className="form__wrapper">
        <label className="form__label" htmlFor="have">У меня есть</label>
        <div className="form__input-wrapper">
          <input
            autoComplete="off"
            className="form__input"
            value={have}
            type="number"
            step='0.01'
            id="have"
            onChange={_haveChangeHandler}
          />
          <select className="form__select" name="want-currency" id="want-currency">
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
          <input className="form__input" type="number" id="want" value="13,1234" />
          <select className="form__select form__select--active" name="want-currency" id="have-currency">
            <option value="RUB">RUB</option>
            <option value="USD" selected>USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
      </div>
      <label className="visually-hidden" htmlFor="date"/>
      <input className="form__date" type="date" id="date" value="2020-12-01" />
      <button className="form__submit" type="submit">Сохранить результат</button>
    </form>
  );
};

export default Form;
