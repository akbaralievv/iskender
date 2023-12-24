import React from 'react';

import logo from '../../assets/icons/logo.svg';
import burger from '../../assets/icons/Burger.svg';
import search from '../../assets/icons/Search.svg';
import profile from '../../assets/icons/Profile.svg';
import cart from '../../assets/icons/Cart.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav">
            <div className="catalog">
              <img src={burger} alt="burger" />
              <span>Каталог</span>
            </div>
            <div className="search">
              <img src={search} alt="search" />
              <input type="text" placeholder="Поиск" />
              <span>42903</span>
            </div>
            <div className="auth_and_cart">
              <div className="auth">
                <div className="title">
                  <p>Добро пожаловать</p>
                  <p>Вход/Регистрация</p>
                </div>
                <div className="icon">
                  <img src={profile} alt="profile" />
                </div>
              </div>
              <hr />
              <div className="cart">
                <img src={cart} alt="cart" />
                <span>2</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
