import React from "react";
import MidSectionFirstPanel from '../../organizations/parts/MidSectionFirstPanel';

import SearchIcon from "../../../../assets/img/search.png";

import "../../../css/eventsPage/EventsMidSection.css";
import EventsInnerNav from "./EventsInnerNav";

export default function EventsMidSection() {

  return (
    <div className="events-mid-section_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 className="category-title">აფიშა</h2>
        <form className="search-field">
          <input type="text" placeholder="საძიებო ფრაზა" />
          <button type="submit">
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </div>
      <div className="dimmed-overlay"></div>
      <EventsInnerNav />
    </div>
  );
}
