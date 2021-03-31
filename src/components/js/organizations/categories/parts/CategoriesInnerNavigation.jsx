import React, { useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const CategoriesInnerNavigation = () => {

  const [moreNav, toggleNav] = useState(false);

  const ToggleMoreNav = (e) => {
    e.preventDefault();
    toggleNav(!moreNav);
  }

  const moreMenu = [
    {
      id: 28,
      url: '/ka-ge/organizations/28',
      activity_category: 'პოპულარული',
    },
    {
      id: 3,
      url: '/ka-ge/organizations/3',
      activity_category: 'ფინანსები',
    },
    {
      id: 9,
      url: '/ka-ge/organizations/9',
      activity_category: 'იმპორტი, ექსპორტი',
    },
    {
      id: 12,
      url: '/ka-ge/organizations/12',
      activity_category: 'განათლება, მეცნიერება',
    },
    {
      id: 16,
      url: '/ka-ge/organizations/16',
      activity_category: 'მშენებლობა, რემონტი',
    },
    {
      id: 19,
      url: '/ka-ge/organizations/19',
      activity_category: 'წარმოება',
    },
    {
      id: 26,
      url: '/ka-ge/organizations/26',
      activity_category: 'კულტურა, ხელოვნება',
    },
    {
      id: 27,
      url: '/ka-ge/organizations/27',
      activity_category: 'მეურნეობა, მეცხოველეობა',
    },
    {
      id: 20,
      url: '/ka-ge/organizations/20',
      activity_category: 'ავტომობილი, ტრანსპორტი',
    },
    {
      id: 21,
      url: '/ka-ge/organizations/21',
      activity_category: 'სახელმწიფო, არასამთავრობო',
    },
    {
      id: 22,
      url: '/ka-ge/organizations/22',
      activity_category: 'კომუნიკაცია, მასმედია',
    },
    {
      id: 25,
      url: '/ka-ge/organizations/25',
      activity_category: 'სასმელები',
    }
  ]
  
  return (
    <nav className='categories-navigation__wrapper'>
      <ul className='categories-navigation-list'>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/4">კვება, გართობა </NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/23">მედიცინა, ფარმაცია </NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/18">მომსახურება </NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/8">სავაჭრო ობიექტები </NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/24">სპორტი, სილამაზე </NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/6">ტურიზმი, დასვენება </NavLink></li>
        <li>
          <div className="dropdown-button categories-navigation-item__wrapper">
            <button onClick={(e) => { ToggleMoreNav(e) }} className="categories-navigation-item btn" type="button" data-toggle="dropdown">
              <span>სხვა</span>
            </button>
            <ul className={moreNav ? "dropdown-menu flex" : "dropdown-menu"}>
              {moreMenu.map((itm, i) => {
                return (<li key={itm.id}><NavLink className='dropdown-menu-item' to={itm.url}>{itm.activity_category}</NavLink></li>)
              })}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default CategoriesInnerNavigation;