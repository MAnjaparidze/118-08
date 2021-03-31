import React from "react";
import "../../../css/eventsPage/EventPage.css";

import WebsiteLogo from "../../../../assets/img/logo.png";

import EventTicket from "./EventTicket";

export default function EventPageMidRender({ event }) {
  return (
    <div className="event-page-render_container">
      <div className="event-page-render_wrapper">
        <div className="event-page-render_left">
          <h2 className="event-page_event-name">{event.Name}</h2>
          <span className="event-page_event-type">{event.Categories[0].Name}</span>
          <div className="event-page_event-description">
            <span>ჟანრი: </span>მძაფრსიუჟეტიანი, სათავგადასავლო, ტრილერი
            <br />
            <span>რეჟისორი:</span> ადრიან გრიუნბერგი
            <br />
            <span>როლებში:</span> სილვესტერ სტალონე, პაზ ვეგა, ივეტ მონრეალი,
            ლუის მენდილორი
            <br />
            <span>სცენარი:</span> მეთიუ სირიულნიკი, სილვესტერ სტალონე
            <br />
            <span>პრემიერა საქართველოში:</span> 19.09.2019
            <br />
            <span>მსოფლიო პრემიერა: </span>
            <br />
            <span>IMDB რეიტინგი:</span> 5
            <br />
            <span>აღწერა:</span> თითქმის ოთხი ათწლეულის შემდეგ, როდესაც მათ
            პირველად დაღვარეს სისხლი, სილვესტერ სტალონე უკან ბრუნდება, როგორც
            ყველა დროის ერთ-ერთი უდიდესი მოქმედი გმირი, ჯონ რემბო. ახლა, მან
            უნდა გაიხსენოს თავისი წარსული და უხეში ბრძოლის უნარები, რათა შური
            იძიოს საბოლოო ნაწილში.
          </div>
        </div>
        <div className="event-page-render_center">
          <img src={WebsiteLogo} alt="" className="website-logo" />
          <img src={event.Posters[0].FileName} alt="" className="event-page_event-poster" />
        </div>
        <div className="event-page-render_right">
          {event.Events.map(el => {
            return <EventTicket key={el.EventId} eventTicket={el} />
          })}
          
        </div>
      </div>
    </div>
  );
}
