import React from "react";
import EventCell from "./EventCell";

export default function EventsTopTheaters({ topTheaters }) {
  return (
    <div className="events-top-theaters_container">
      <div className='events-top-theaters_wrapper'>
        <h1 className="top-events-description">თეატრი</h1>
        <div className="events-top-items_wrapper">
        {topTheaters &&
            topTheaters.map(el => {
              return <EventCell key={el.ShowId} event={el} />;
            })}
        </div>
      </div>
    </div>
  );
}
