import React from 'react';
import {NavLink} from 'react-router-dom';
import headerLogo from '../img/header-logo.png';

export default function Header() {
  return (
    <header className="container"> 
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink to="/" className="navbar-brand" exact>
              <img src={headerLogo} alt="Bosa Noga"/>
            </NavLink>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" exact>Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/catalog" className="nav-link">Каталог</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">О магазине</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div dataId="search-expander" className="header-controls-pic header-controls-search"></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form dataId="search-form" className="header-controls-search-form form-inline">
                  <input className="form-control" placeholder="Поиск"/>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

