import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function EventCell({ event }) {
  return (
    <div className="events-event_wrapper">
      <div className="event-inner">
        <Link className="event-title" to="/ka-ge/event/event-test-1">
          {event && event.Name}
        </Link>
        <div className="event-destination">კინოთეატრი ამირანი</div>
      </div>

      <div className="event-poster">
        <Link
          to={{
            pathname: "/ka-ge/event/event-test-1",
            state: { eventInfo: event }
          }}
        >
          <img src={event && event.Posters[0].FileName} alt="" />
        </Link>
      </div>
    </div>
  );
}
