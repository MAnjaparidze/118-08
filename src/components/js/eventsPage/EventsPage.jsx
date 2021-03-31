import React, { Component } from "react";
import Header from "../organizations/parts/Header";
import EventsMidSection from "./parts/EventsMidSection";
import EventRenderSection from "./parts/EventRenderSection";
import Footer from "../organizations/parts/Footer";

export default class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topMovies: null,
      topTheaters: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const fetchMovieItem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=&resource=shows&catId=1`
    );
    const fetchTheaterItem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=&resource=shows&catId=16`
    )
    const movieItem = await fetchMovieItem.json();
    const theaterItem = await fetchTheaterItem.json();

    const topMovies = movieItem.tkt.Data.Shows;
    const top3Moviews = topMovies.slice(0, 3);
    const topTheaters = theaterItem.tkt.Data.Shows;
    const top3Theaters = topTheaters.slice(0, 3);
    await this.setState({ topMovies: top3Moviews });
    await this.setState({ topTheaters: top3Theaters });
  };
  render() {
    const { topMovies, topTheaters } = this.state;
    return (
      <div className="events-page_container">
        <Header props={this.props} />
        <EventsMidSection />
        <EventRenderSection topMovies={topMovies} topTheaters={topTheaters} />
        <Footer />
      </div>
    );
  }
}
