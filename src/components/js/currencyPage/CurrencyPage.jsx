import React, { Component } from "react";
import "../../css/currencyPage/CurrencyPage.css";
import Header from "../organizations/parts/Header";
import Footer from "../organizations/parts/Footer";

import CurrencyMidSection from "./parts/CurrencyMidSection";
import CurrencyRenderSection from "./parts/CurrencyRenderSection";

export default class CurrencyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyItems: null,
      currToSearch: null,
      searchData: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  searchCurr = async(searchItem) => {
    let returnData = this.state.currencyItems.filter((e) => {
      return (e.code.includes(searchItem.toUpperCase())) && e;
    })
    this.setState({searchData: returnData});
  }

  fetchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=currency/CurrencyApi&resource=list`
    );
    const item = await fetchItem.json();
    await this.setState({ currencyItems: item.data });
  };
  render() {
    return (
      <div className="currency-page_container">
        <Header />
        <CurrencyMidSection data={this.state.currencyItems} />
        <CurrencyRenderSection data={this.state.searchData === "" ? this.state.currencyItems : this.state.searchData} searchCurr={(e) => this.searchCurr(e)} />
        <Footer />
      </div>
    );
  }
}
