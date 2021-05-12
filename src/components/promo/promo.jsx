import React from 'react';
import blackCard from '../../img/black-card.webp'
import whiteCard from '../../img/white-card.webp'

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__content">
          <h2 className="promo__title">Лига Банк</h2>
          <p className="promo__text">Кредиты на любой случай</p>
          <a className="promo__link" href="">Рассчитать кредит</a>
          <img className="promo__black-card" width="289" height="182" src={blackCard} alt="" />
          <img className="promo__white-card" width="289" height="182" src={whiteCard} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
