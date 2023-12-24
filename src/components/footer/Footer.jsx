import React from 'react';

import logo from '../../assets/icons/logo.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import facebook from '../../assets/icons/logo-facebook.svg';
import instagram from '../../assets/icons/logo-instagram.svg';
import appstore from '../../assets/images/appstore.png';
import googleplay from '../../assets/images/googleplay.png';

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="inner">
          <div className="content">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО
                «Стройдом.кг»
              </p>
              <div className="markets">
                <img src={appstore} alt="appstore" />
                <img src={googleplay} alt="googleplay" />
              </div>
            </div>
            <nav className="nav">
              <div className="lists">
                <h3>Адреса</h3>
                <ul>
                  <li>
                    <p>ЭлитСтрой</p>
                    <span>ул. Ден-Сяопина 18/1</span>
                  </li>
                  <li>
                    <p>Баткен</p>
                    <span>ул. Льва-Толстого 19</span>
                  </li>
                  <li>
                    <p>ТааТан</p>
                    <span>ул. Лермонтова 6</span>
                  </li>
                </ul>
              </div>
              <div className="lists">
                <h3>Компания</h3>
                <ul>
                  <li>
                    <p>Каталог</p>
                  </li>
                  <li>
                    <p>Избранное</p>
                  </li>
                  <li>
                    <p>Личный кабинет</p>
                  </li>
                </ul>
              </div>
              <div className="lists">
                <h3>Контакты</h3>
                <ul>
                  <li>
                    <p>Email:</p>
                    <p>iskender.kg@gmail.com</p>
                  </li>
                  <li>
                    <p>Телефон:</p>
                    <p className="phones">
                      +996 (500) 000-104 +996
                      <br />
                      +996 (500) 000-104 +996
                      <br />
                      +996 (500) 000-104 +996
                    </p>
                  </li>
                </ul>
                <button>
                  <img src={whatsapp} alt="whatsapp" />
                  WhatsApp
                </button>
              </div>
            </nav>
          </div>
          <hr />
          <div className="copyright">
            <p>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
            <div className="social">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
