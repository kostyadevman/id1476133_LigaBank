import React from 'react';
import {useSelector} from "react-redux";
import {getVisibleOperations} from "../../store/selectors";
import {formatDate, formatDateToHistory} from "../../utils";

const History = () => {

  const operations = useSelector(getVisibleOperations);

  return (
    <section className="converter__history history">
      <h3 className="history__title">История конвертация</h3>
      <ul className="history__list">
          {operations.map((operation, id) => (
            <li key={id} className="history__item">
              <span className="history__data">{formatDateToHistory(operation.date)}</span>
              <span className="history__have-value">{operation.fromRate}</span>
              <span className="history__have-currency">{operation.fromCurrency}</span>
              <span className="history__arrow"/>
              <span className="history__want-value">{operation.toRate}</span>
              <span className="history__want-currency">{operation.toCurrency}</span>
            </li>
          ))}
      </ul>
      <button className="history__clear">Очистить историю</button>
    </section>
  );
};

export default History;
