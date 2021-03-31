import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/css/categories.css";
import MainPage from "./components/js/organizations/Main";
import Category from "./components/js/organizations/categories/Main";
import OrganizationPage from "./components/js/organizations/parts/OrganizationPage";

import EventsPage from "./components/js/eventsPage/EventsPage";
import EventCategory from "./components/js/eventsPage/EventCategoryPage";
import EventPage from "./components/js/eventsPage/EventPage";

import CurrencyPage from "./components/js/currencyPage/CurrencyPage";
import CurrencyItemPage from "./components/js/currencyPage/CurrencyItemPage";

import CalendarPage from './components/js/calendarPage/CalendarPage';

import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div className="app__container">
      <Route exact path="/ka-ge/organizations" component={MainPage} />
      <Route exact path="/ka-ge/organizations/:orgid" component={Category} />
      <Route exact path="/ka-ge/organizations/search/:id" component={Category} />
      <Route exact path="/ka-ge/organization/:id" component={OrganizationPage} />

      <Route exact path="/ka-ge/events" component={EventsPage} />
      <Route path="/ka-ge/events/:eventId" component={EventCategory} />
      <Route path="/ka-ge/event/:eventId" component={EventPage} />

      <Route exact path="/ka-ge/currency" component={CurrencyPage} />
      <Route path="/curr_test" component={CurrencyItemPage} />

      <Route exact path='/ka-ge/calendar' component={CalendarPage} />

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
