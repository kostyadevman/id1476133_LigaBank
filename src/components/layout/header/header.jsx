import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <a href="" className="header__logo logo">
          <svg width="150" height="27" viewBox="0 0 150 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M51.1 26H48.08V14.24H44.58C44.5 14.8533 44.4133 15.52 44.32 16.24C44.24 16.96 44.1467 17.6933 44.04 18.44C43.9467 19.1733 43.8467 19.8733 43.74 20.54C43.6333 21.1933 43.5267 21.7733 43.42 22.28C43.2467 23.1067 43.0133 23.8133 42.72 24.4C42.44 24.9867 42.0467 25.4333 41.54 25.74C41.0467 26.0467 40.4 26.2 39.6 26.2C39.08 26.2 38.6 26.1267 38.16 25.98V23.5C38.3333 23.5533 38.5 23.6 38.66 23.64C38.8333 23.68 39.02 23.7 39.22 23.7C39.6067 23.7 39.9 23.5 40.1 23.1C40.3133 22.6867 40.5267 21.92 40.74 20.8C40.82 20.3733 40.9333 19.7067 41.08 18.8C41.2267 17.8933 41.3867 16.8333 41.56 15.62C41.7467 14.3933 41.92 13.0933 42.08 11.72H51.1V26ZM54.7023 11.72H57.4223V18.62C57.4223 18.9533 57.4157 19.3267 57.4023 19.74C57.389 20.1533 57.3757 20.56 57.3623 20.96C57.349 21.3467 57.3357 21.6867 57.3223 21.98C57.309 22.26 57.2957 22.4533 57.2823 22.56H57.3423L63.9423 11.72H67.5623V26H64.8623V19.14C64.8623 18.78 64.869 18.3867 64.8823 17.96C64.8957 17.52 64.909 17.1 64.9223 16.7C64.949 16.3 64.969 15.9533 64.9823 15.66C65.009 15.3533 65.029 15.1533 65.0423 15.06H64.9623L58.3423 26H54.7023V11.72ZM80.1872 11.72V14.22H74.1872V26H71.1672V11.72H80.1872ZM89.7119 26L88.6719 22.6H83.4719L82.4319 26H79.1719L84.2119 11.66H87.9119L92.9719 26H89.7119ZM86.9119 16.74C86.8452 16.5133 86.7585 16.2267 86.6519 15.88C86.5452 15.5333 86.4385 15.18 86.3319 14.82C86.2252 14.46 86.1385 14.1467 86.0719 13.88C86.0052 14.1467 85.9119 14.48 85.7919 14.88C85.6852 15.2667 85.5785 15.64 85.4719 16C85.3785 16.3467 85.3052 16.5933 85.2519 16.74L84.2319 20.06H87.9519L86.9119 16.74ZM100.503 26V11.72H109.523V14.22H103.523V17.2H104.723C106.07 17.2 107.17 17.3867 108.023 17.76C108.89 18.1333 109.53 18.6467 109.943 19.3C110.356 19.9533 110.563 20.7 110.563 21.54C110.563 22.9533 110.09 24.0533 109.143 24.84C108.21 25.6133 106.716 26 104.663 26H100.503ZM104.543 23.52C105.463 23.52 106.183 23.3733 106.703 23.08C107.236 22.7867 107.503 22.2733 107.503 21.54C107.503 20.78 107.216 20.28 106.643 20.04C106.07 19.8 105.29 19.68 104.303 19.68H103.523V23.52H104.543ZM117.497 14.86C118.964 14.86 120.084 15.18 120.857 15.82C121.644 16.4467 122.037 17.4133 122.037 18.72V26H119.957L119.377 24.52H119.297C118.83 25.1067 118.337 25.5333 117.817 25.8C117.297 26.0667 116.584 26.2 115.677 26.2C114.704 26.2 113.897 25.92 113.257 25.36C112.617 24.7867 112.297 23.9133 112.297 22.74C112.297 21.58 112.704 20.7267 113.517 20.18C114.33 19.62 115.55 19.3133 117.177 19.26L119.077 19.2V18.72C119.077 18.1467 118.924 17.7267 118.617 17.46C118.324 17.1933 117.91 17.06 117.377 17.06C116.844 17.06 116.324 17.14 115.817 17.3C115.31 17.4467 114.804 17.6333 114.297 17.86L113.317 15.84C113.904 15.5333 114.55 15.2933 115.257 15.12C115.977 14.9467 116.724 14.86 117.497 14.86ZM117.917 20.98C116.957 21.0067 116.29 21.18 115.917 21.5C115.544 21.82 115.357 22.24 115.357 22.76C115.357 23.2133 115.49 23.54 115.757 23.74C116.024 23.9267 116.37 24.02 116.797 24.02C117.437 24.02 117.977 23.8333 118.417 23.46C118.857 23.0733 119.077 22.5333 119.077 21.84V20.94L117.917 20.98ZM128.067 15.08V19.28H132.227V15.08H135.207V26H132.227V21.5H128.067V26H125.087V15.08H128.067ZM145.49 15.08H148.77L144.45 20.32L149.15 26H145.77L141.31 20.46V26H138.33V15.08H141.31V20.38L145.49 15.08Z"
              fill="#1F1E25"/>
            <path d="M16.75 1H13.8333L1 22.3415H4.79167L6.54167 19.2927L16.75 1Z" fill="#2C36F2"/>
            <path d="M2.75 26H27.25L16.75 7.09756L15 10.1463L20.25 19.2927L22 22.3415H4.79167H1L2.75 26Z"
              fill="#2C36F2"/>
            <path d="M22 22.3415L20.25 19.2927H9.75H6.54167L4.79167 22.3415H22Z" fill="#2C36F2"/>
            <path d="M27.25 26L29 22.3415L16.75 1L6.54167 19.2927H9.75L15 10.1463L16.75 7.09756L27.25 26Z"
              fill="#2C36F2"/>
            <path d="M15 10.1463L9.75 19.2927H20.25L15 10.1463Z" fill="#2C36F2"/>
            <path
              d="M27.25 26H2.75L1 22.3415M27.25 26L29 22.3415L16.75 1M27.25 26L16.75 7.09756L15 10.1463M16.75 1H13.8333L1 22.3415M16.75 1L6.54167 19.2927M1 22.3415H4.79167M15 10.1463L9.75 19.2927M15 10.1463L20.25 19.2927M9.75 19.2927H20.25M9.75 19.2927H6.54167M20.25 19.2927L22 22.3415H4.79167M6.54167 19.2927L4.79167 22.3415"
              stroke="#F6F7FF"/>
          </svg>
        </a>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="" className="menu__link">Услуги</a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">Рассчитать кредит</a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link menu__link--active">Конвертер валют</a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">Контакты</a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">Задать вопрос</a>
            </li>
          </ul>
        </nav>
        <a href="" className="header__sign-in sign-in">
          <svg className="sign-in__img" width="20" height="22" viewBox="0 0 20 22" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z"
              fill="#1F1E25"/>
          </svg>
          <span className="sign-in__text">Войти в Интернет&#8209; банк</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
