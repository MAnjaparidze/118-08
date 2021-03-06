import React, { useState } from "react";
import MidSectionFirstPanel from '../../organizations/parts/MidSectionFirstPanel';



export default function CalendarMidSection() {
  const [isFreeDays, toggleFreeDays] = useState(true);

  return (
    <div className="calendar-mid_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 className="category-title">კალენდარი</h2>

        <div
          className="calendar-mid-panel_wrapper mid-panel-active"
        >
          <button
            className={
              isFreeDays
                ? "calendar-free-days-btn calendar-btn-active"
                : "calendar-free-days-btn"
            }
            onClick={() => toggleFreeDays(!isFreeDays)}
          >
            უქმე დღეები
          </button>
          <button
            className={
              !isFreeDays
                ? "calendar-church-days-btn calendar-btn-active"
                : "calendar-church-days-btn"
            }
            onClick={() => toggleFreeDays(!isFreeDays)}
          >
            კალენდარული დღეები
          </button>
          
        </div>

        
      
      </div>
      <div className="dimmed-overlay"></div>
    </div>
  );
}
