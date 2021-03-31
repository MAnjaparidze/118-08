import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import MovieIcon from "../../../../assets/img/cat-icons/movies.png";
import TheaterIcon from "../../../../assets/img/cat-icons/theaters.png";
import ConcertIcon from "../../../../assets/img/cat-icons/concerts.png";
import TravelIcon from "../../../../assets/img/cat-icons/nightlife.png";

import ArrowDown from "../../../../assets/img/arrow-down.png";

export default function EventsInnerNav() {
  const [isMoreNav, toggleMoreNav] = useState(false);

  const moreMenu = [
    {
      id: 4,
      url: "/ka-ge/events/4",
      activity_category: "ფესტივალები"
    },
    {
      id: 5,
      url: "/ka-ge/events/5",
      activity_category: "სპორტი"
    },
    {
      id: 6,
      url: "/ka-ge/events/6",
      activity_category: "პოპულარული"
    },
    {
      id: 7,
      url: "/ka-ge/events/7",
      activity_category: "კონფერენციები"
    },
    {
      id: 8,
      url: "/ka-ge/events/8",
      activity_category: "სხვა"
    },
    {
      id: 10,
      url: "/ka-ge/events/10",
      activity_category: "ზოოპარკი"
    },
    {
      id: 11,
      url: "/ka-ge/events/11",
      activity_category: "ბათუმი"
    },
    {
      id: 14,
      url: "/ka-ge/events/14",
      activity_category: "ახალი წელი"
    },
    {
      id: 15,
      url: "/ka-ge/events/15",
      activity_category: "ახალი წელი ბავშვებისთვის"
    },
    {
      id: 17,
      url: "/ka-ge/events/17",
      activity_category: "საბავშვო"
    },
    {
      id: 18,
      url: "/ka-ge/events/18",
      activity_category: "ოპერა"
    },
    {
      id: 20,
      url: "/ka-ge/events/20",
      activity_category: "გაბრიაძის თეატრი"
    },
    {
      id: 21,
      url: "/ka-ge/events/21",
      activity_category: "ეროვნული პარკი"
    },
    {
      id: 22,
      url: "/ka-ge/events/22",
      activity_category: "თავისუფალი თეატრი"
    },
    {
      id: 27,
      url: "/ka-ge/events/27",
      activity_category: "წინანდლის ფესტივალი"
    },
    {
      id: 28,
      url: "/ka-ge/events/28",
      activity_category: "4GB"
    },
    {
      id: 30,
      url: "/ka-ge/events/30",
      activity_category: "Black Sea Jazz"
    },
    {
      id: 23,
      url: "/ka-ge/events/23",
      activity_category: "სოხუმის თეატრი"
    },
    {
      id: 25,
      url: "/ka-ge/events/25",
      activity_category: "Republic Events"
    },
    {
      id: 26,
      url: "/ka-ge/events/26",
      activity_category: "რკინიგზა"
    },
    {
      id: 29,
      url: "/ka-ge/events/29",
      activity_category: "EchoWaves"
    },
    {
      id: 24,
      url: "/ka-ge/events/24",
      activity_category: "მუსიკა"
    }
  ];

  return (
    <div className="events-nav_container">
      <ul className="navigation__list">
        <li className="navigation__item__wrapper">
          <Link to={{pathname: '/ka-ge/events/1', state: {categoryName: 'კინო'}}} className="navigation__item" >
          {/* <Link to='/ka-ge/events/1' className="navigation__item" > */}
            <span>კინო</span>
            <img src={MovieIcon} alt="" />
          </Link>
        </li>
        <li className="navigation__item__wrapper">
          <Link to={{pathname: '/ka-ge/events/16', state: {categoryName: 'თეატრი'}}} className="navigation__item">
            <span>თეატრი</span>
            <img src={TheaterIcon} alt="" />
          </Link>
        </li>
        <li className="navigation__item__wrapper">
          <Link to={{pathname: '/ka-ge/events/2', state: {categoryName: 'კონცერტი'}}} className="navigation__item">
            <span>კონცერტი</span>
            <img src={ConcertIcon} alt="" />
          </Link>
        </li>
        <li className="navigation__item__wrapper">
          <Link to={{pathname: '/ka-ge/events/13', state: {categoryName: 'მოგზაურობა'}}} className="navigation__item">
            <span>მოგზაურობა</span>
            <img src={TravelIcon} alt="" />
          </Link>
        </li>
        <li className="events-more-nav_wrapper">
          <div
            className="events-more-nav"
            onClick={() => {
              toggleMoreNav(!isMoreNav);
            }}
          >
            <span>სხვა</span>
            <img src={ArrowDown} alt="" />
          </div>
        </li>
      </ul>
      <div
        className={
          isMoreNav
            ? `events_additional-nav grid`
            : "events_additional-nav"
        }
      >
        {moreMenu.map((item) => {
            return <Link key={item.id} to={{pathname: item.url, state: {categoryName: item.activity_category}}} className='events-additional-nav_item'><div>{item.activity_category}</div></Link>
        })}

      </div>
    </div>
  );
}
