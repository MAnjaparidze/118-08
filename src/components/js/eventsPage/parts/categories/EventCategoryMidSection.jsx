import React from "react";
import MidSectionFirstPanel from '../../../organizations/parts/MidSectionFirstPanel';

import SearchIcon from "../../../../../assets/img/search.png";

import "../../../../css/eventsPage/EventCategoryMid.css";

export default function EventCategoryMidSection({ categoryName }) {

  return (
    <div className="event-category-mid_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <form className="search-field">
          <input type="text" placeholder="მოძებნეთ ღონისძიება" />
          <button type="submit">
            <img src={SearchIcon} alt="" />
          </button>
        </form>
        <div className="category-description">{categoryName}</div>
      </div>
      <div className="dimmed-overlay"></div>
    </div>
  );
}
