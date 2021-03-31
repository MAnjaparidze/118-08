import React from "react";

export default function EventTicket({ eventTicket }) {

    const calcTktPrice = () => {
        let tktPrice = 0;
        let tktMin = eventTicket.MinPrice.Amount;
        let tktMax = eventTicket.MaxPrice.Amount;
        tktPrice = (tktMin + tktMax)/2;
        return tktPrice;
    }
  return (
    <div className="event-ticket_container">
      <div className="event-date">{eventTicket && eventTicket.Date + ' ' + eventTicket.AdditionalInfo}</div>
      <div className="event-place">{eventTicket && eventTicket.Venue.Name}</div>
      <div className="event-ticket-price">{(eventTicket.MinPrice && eventTicket.MaxPrice) ? calcTktPrice() : "0"} ₾</div>
    </div>
  );
}
