import React, { Component } from "react";
import Header from "../organizations/parts/Header";
import Footer from "../organizations/parts/Footer";
import CalendarMidSection from "./parts/CalendarMidSection";
import CalendarRenderSecton from "./parts/CalendarRenderSection";

import FixedSearch from "../globalParts/FixedSearch";

import "../../css/calendarPage/CalendarPage.css";

export default class CalendarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarItems: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=calendar/CalendarApi&resource=list&from=2019-08-01&to=2019-10-01`
    );
    const item = await fetchItem.json();
    await this.setState({ calendarItems: item.data });
  };
  render() {
    return (
      <div className="calendar-page_container">
        <Header />
        <CalendarMidSection />
        <CalendarRenderSecton calendarItems={this.state.calendarItems} />
        <Footer />
        <FixedSearch />
      </div>
    );
  }
}
