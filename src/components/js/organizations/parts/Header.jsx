import React from "react";
import { NavLink } from "react-router-dom";

import OrgInactive from "../../../../assets/img/menu-icons/home-b.png";
import TktInactive from "../../../../assets/img/menu-icons/theater-b.png";
import CalendarInactive from "../../../../assets/img/menu-icons/calendar-b.png";
import CitiesInactive from "../../../../assets/img/menu-icons/city-b.png";
import CurrencyInactive from "../../../../assets/img/menu-icons/valuta-b.png";
import LocationInactive from "../../../../assets/img/menu-icons/streets-b.png";
import SalesInactive from "../../../../assets/img/menu-icons/sales-b.png";
import TransportInactive from "../../../../assets/img/menu-icons/transport-b.png";
import WeatherInactive from "../../../../assets/img/menu-icons/weather-b.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

// import OrgActive from '../../../../assets/img/menu-icons/home-w.png';
// import TktActive from '../../../../assets/img/menu-icons/theater-w.png';
// import CalendarActive from '../../../../assets/img/menu-icons/calendar-w.png';
// import CitiesActive from '../../../../assets/img/menu-icons/city-w.png';
// import CurrencyActive from '../../../../assets/img/menu-icons/valuta-w.png';
// import LocationActive from '../../../../assets/img/menu-icons/streets-w.png';
// import SalesActive from '../../../../assets/img/menu-icons/sales-w.png';
// import TransportActive from '../../../../assets/img/menu-icons/transport-w.png';
// import WeatherActive from '../../../../assets/img/menu-icons/weather-w.png';

export default function Header({ props }) {
  // const currentUrl = props ? props.match.url : null;
  return (
    <header className="main__header">
      <nav className="main__header__navigation">
        <ul className="header__navigation__list">
          {/* <li className='navigation__item__wrapper'><NavLink to="/ka-ge/organizations" className='navigation__item'><img src={currentUrl === null ? OrgActive : OrgInactive} alt=""/><span>ორგანიზაციები</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="/ka-ge/events" className='navigation__item'><img src={currentUrl === '/ka-ge/events' ? TktActive : TktInactive} alt=""/><span>აფიშა</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="" className='navigation__item'><img src={currentUrl === '/ka-ge/transport' ? TransportActive : TransportInactive} alt=""/><span>ტრანსპორტი</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="" className='navigation__item'><img src={currentUrl === '/ka-ge/weather' ? WeatherActive : WeatherInactive} alt=""/><span>ამინდი</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="/ka-ge/currency" className='navigation__item'><img src={currentUrl === '/ka-ge/currency' ? CurrencyActive : CurrencyInactive} alt=""/><span>ვალუტა</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="" className='navigation__item'><img src={currentUrl === '/ka-ge/streets' ? LocationActive : LocationInactive} alt=""/><span>ქუჩები / კოდები</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="" className='navigation__item'><img src={currentUrl === '/ka-ge/cities' ? CitiesActive : CitiesInactive} alt=""/><span>ქალაქები</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="" className='navigation__item'><img src={currentUrl === '/ka-ge/discounts' ? SalesActive : SalesInactive} alt=""/><span>ფასდაკლებები</span></NavLink></li>
                <li className='navigation__item__wrapper'><NavLink to="" className='navigation__item'><img src={currentUrl === '/ka-ge/calendar' ? CalendarActive : CalendarInactive} alt=""/><span>კალენდარი</span></NavLink></li> */}

          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/organizations" className="navigation__item">
              <img src={OrgInactive} alt="" />
              <span>ორგანიზაციები</span>
            </NavLink>
          </li>
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/events" className="navigation__item">
              <img src={TktInactive} alt="" />
              <span>აფიშა</span>
            </NavLink>
          </li>
          <li className="navigation__item__wrapper">
            <Link to="" className="navigation__item">
              <img src={TransportInactive} alt="" />
              <span>ტრანსპორტი</span>
            </Link>
          </li>
          <li className="navigation__item__wrapper">
            <Link to="" className="navigation__item">
              <img src={WeatherInactive} alt="" />
              <span>ამინდი</span>
            </Link>
          </li>
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/currency" className="navigation__item">
              <img src={CurrencyInactive} alt="" />
              <span>ვალუტა</span>
            </NavLink>
          </li>
          <li className="navigation__item__wrapper">
            <Link to="" className="navigation__item">
              <img src={LocationInactive} alt="" />
              <span>ქუჩები / კოდები</span>
            </Link>
          </li>
          <li className="navigation__item__wrapper">
            <Link to="" className="navigation__item">
              <img src={CitiesInactive} alt="" />
              <span>ქალაქები</span>
            </Link>
          </li>
          <li className="navigation__item__wrapper">
            <Link to="" className="navigation__item">
              <img src={SalesInactive} alt="" />
              <span>ფასდაკლებები</span>
            </Link>
          </li>
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/calendar" className="navigation__item">
              <img src={CalendarInactive} alt="" />
              <span>კალენდარი</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__logo__wrapper">
        <div className="header__logo__wrapper__bot"></div>
      </div>
    </header>
  );
}
