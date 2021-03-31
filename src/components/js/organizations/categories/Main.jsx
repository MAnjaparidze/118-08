import React from "react";
import Header from "../parts/Header";
import MidSection from "./parts/CategoriesMidSection";
import OrganizationContent from "./parts/OrganizationContent";
import Footer from "../parts/Footer";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToReturn: null,
      request: false
    };
  }
  componentDidMount() {
    let currURL = window.location.href;
    if (currURL.includes("search/")) {
      this.fetchSearchData();
    } else {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.orgid !== prevProps.match.params.orgid) {
      this.fetchData();
    }
  }

  changeOrg = async newOrg => {
    await this.setState({ dataToReturn: newOrg });
  };

  fetchData = async () => {
    console.log("Came in fetch")
    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=mainPage/api/?app=organizations/OrganizationApi&resource=orgByCategory&id=${this.props.match.params.orgid}`
    );
    const item = await fetchItem.json();
    await this.setState({ dataToReturn: item.data });
  };

  fetchSearchData = async () => {
    console.log("Workds")
    let currURL = window.location.href;
    let searchItem = currURL.search("search/");
    let strStart = searchItem + 7;
    let urlLength = currURL.length;
    let slicedUrl = currURL.slice(strStart, urlLength);

    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=searchByString&str=${slicedUrl}`
    );
    const item = await fetchItem.json();
    console.log(item)
    this.setState({ dataToReturn: item.data });
  };
  render() {
    const { dataToReturn } = this.state;

    const RenderContent = this.state.dataToReturn ? (
      <OrganizationContent organizations={dataToReturn} />
    ) : (
      <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
    );
    return (
      <div className="meal-fun__container">
        <Header />
        <MidSection
          resultCount={dataToReturn ? dataToReturn.length : 0}
          changeOrg={this.changeOrg}
        />
        <div className="organization-render-container--wrapper">
          {RenderContent}
        </div>
        <div className="next-page_container">
          <Link className="next-page" to={`${this.props.match.url}?pg=2`}>
            შემდეგი გვერდი
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
