import React from "react";
import EventCell from "../EventCell";
import Loader from "react-loader-spinner";

export default function CategoryEventRender({ eventItems }) {
  return (
    <div className="category-event-render_container">
      {eventItems ? (
        <>
          <div className="day-filter_wrapper">
            <div className="day-filter-each active">
              <div className="day-filter-each-date">
                <span className="day-filter-each-dayN">22</span>
                <span className="day-filter-each-month">სექ</span>
              </div>
              <div className="day-filter-each-day day-filter-each-weekday">
                კვი
              </div>
            </div>
            <div className="day-filter-each">
              <div className="day-filter-each-date">
                <span className="day-filter-each-dayN">22</span>
                <span className="day-filter-each-month">სექ</span>
              </div>
              <div className="day-filter-each-day day-filter-each-weekday">
                კვი
              </div>
            </div>
            <div className="day-filter-each">
              <div className="day-filter-each-date">
                <span className="day-filter-each-dayN">22</span>
                <span className="day-filter-each-month">სექ</span>
              </div>
              <div className="day-filter-each-day day-filter-each-weekday">
                კვი
              </div>
            </div>
            <div className="day-filter-each">
              <div className="day-filter-each-date">
                <span className="day-filter-each-dayN">22</span>
                <span className="day-filter-each-month">სექ</span>
              </div>
              <div className="day-filter-each-day day-filter-each-weekday">
                კვი
              </div>
            </div>
            <div className="day-filter-each">
              <div className="day-filter-each-date">
                <span className="day-filter-each-dayN">22</span>
                <span className="day-filter-each-month">სექ</span>
              </div>
              <div className="day-filter-each-day day-filter-each-weekday">
                კვი
              </div>
            </div>
            <div className="day-filter-each">
              <div className="day-filter-each-date">
                <span className="day-filter-each-dayN">22</span>
                <span className="day-filter-each-month">სექ</span>
              </div>
              <div className="day-filter-each-day day-filter-each-weekday">
                კვი
              </div>
            </div>
            <div className="day-filter-each">
              <div className="day-filter-each-date">
                <span className="day-filter-each-dayN">22</span>
                <span className="day-filter-each-month">სექ</span>
              </div>
              <div className="day-filter-each-day day-filter-each-weekday">
                კვი
              </div>
            </div>
            <div className="day-filter-each soon-text">მალე</div>
          </div>

          {eventItems && (
            <div className="category-event-render_wrapper">
              {eventItems.map(el => {
                console.log(el);
                return <EventCell key={el.ShowId} event={el} />;
              })}
            </div>
          )}
        </>
      ) : (
        <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
      )}
    </div>
  );
}
