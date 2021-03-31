import React, { useState } from "react";
import MidSectionFirstPanel from "./MidSectionFirstPanel";
import SearchIcon from "../../../../assets/img/search.png";

import InnerNavigation from "./InnerNavigation";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function MidSection({ ...props }) {
  const searchOrganizations = e => {
    e.preventDefault();

    let searchContent = document.getElementById("search-field").value;

    // let hrefElement = document.getElementById("search-btn");
    window.location = `/ka-ge/organizations/search/${searchContent}`;
    // hrefElement.click();
    console.log(searchContent);
  };

  return (
    <div className="midSection__container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <span>ორგანიზაციები</span>
        <form className="search-field" onSubmit={e => searchOrganizations(e)}>
          <input id="search-field" type="text" placeholder="საძიებო ფრაზა" />
          <button type="submit">
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </div>
      <div className="dimmed-overlay"></div>
      <InnerNavigation />
    </div>
  );
}
