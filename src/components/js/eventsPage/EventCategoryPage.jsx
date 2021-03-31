import React, { Component } from "react";
import Header from "../organizations/parts/Header";
import EventCategoryMidSection from "./parts/categories/EventCategoryMidSection";
import CategoryEventRender from "./parts/categories/CategoryEventRender";
import Footer from "../organizations/parts/Footer";

import Loader from "react-loader-spinner";

export default class EventCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventItems: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=&resource=shows&catId=${this.props.match.params.eventId}`
    );
    const item = await fetchItem.json();
    await this.setState({ eventItems: item.tkt.Data.Shows });
  };
  render() {
    const { eventItems } = this.state;
    return (
      <div className="event-category_container">
        <Header />
        <EventCategoryMidSection />
        <CategoryEventRender eventItems={eventItems} />
        <Footer />
      </div>
    );
  }
}
