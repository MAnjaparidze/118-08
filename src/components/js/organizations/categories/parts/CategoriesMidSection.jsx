import React from "react";
import MidSectionFirstPanel from '../../parts/MidSectionFirstPanel';

import SearchIcon from "../../../../../assets/img/search.png";

import { DateUtils } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

import CategoriesInnerNavigation from "./CategoriesInnerNavigation";
import Axios from "axios";

export default class midSection extends React.Component {
  constructor() {
    super();
    this.handleStartDayChange = this.handleStartDayChange.bind(this);
    this.handleEndDayChange = this.handleEndDayChange.bind(this);
    this.state = {
      visible: false,
      filteredArray: [],
      isHeadOffice: false,
      isInsured: false,
      hasWebPage: false,
      hasExtraInfo: false,
      hasCorpMobile: false,
      hasSale: false,
      hasDirectorMobile: false,
      isRestaurant: false,
      isNGO: false,
      isCultural: false,
      isService: false,
      isTransportation: false,
      isEducational: false,
      isFinancial: false,
      isImportExport: false,
      isLLC: false,
      isActionalSociety: false,
      isOpen: false,
      hasMenu: false,
      hasDelivery: false,
      establishDate: null,
      workersNumber: null,
      isENG: false,
      selectedStartDay: undefined,
      selectedEndDay: undefined
    };
  }

  toggleAddFilter = e => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  };
  parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  };

  formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale });
  };

  handleStartDayChange = async selectedStartDay => {
    await this.setState({
      selectedStartDay: selectedStartDay
    });
  };
  handleEndDayChange = async selectedEndDay => {
    await this.setState({
      selectedEndDay: selectedEndDay
    });
  };

  // this.url = 'api/?app=organizations/OrganizationApi&resource=searchByStringAdvanced';
  handleFilter() {
    let url =
      "/api/?app=organizations/OrganizationApi&resource=searchByStringAdvanced";

    if (this.state.isHeadOffice) {
      url = url + "&isHeadOffie=1";
    }
    if (this.state.isInsured) {
      url = url + "&isInsured=1";
    }
    if (this.state.hasWebPage) {
      url = url + "&hasWebPage=1";
    }
    if (this.state.hasExtraInfo) {
      url = url + "&hasExtraInfo=1";
    }
    if (this.state.hasCorpMobile) {
      url = url + "&hasCorpMobile=1";
    }
    if (this.state.hasSale) {
      url = url + "&hasSale=1";
    }
    if (this.state.hasDirectorMobile) {
      url = url + "&hasDirectorMobile=1";
    }
    if (this.state.isRestaurant) {
      url = url + "&isRestaurant=1";
    }
    if (this.state.isNGO) {
      url = url + "&isNGO=1";
    }
    if (this.state.isOpen) {
      url = url + "&isOpen=1";
    }
    if (this.state.hasMenu) {
      url = url + "&hasMenu=1";
    }
    if (this.state.hasDelivery) {
      url = url + "&hasDelivery=1";
    }
    if (
      url ===
      "/api/?app=organizations/OrganizationApi&resource=searchByStringAdvanced"
    ) {
      url = `/api/?app=organizations/OrganizationApi&resource=mainPage/api/?app=organizations/OrganizationApi&resource=orgByCategory&id=${this.props.currentCategory}`;
    }
    Axios.get(`${url}`, {
      timeout: 10000,
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      this.props.changeOrg(res.data.data);
    });
  }

  async toggleSwitch(stateComponent, state) {
    switch (stateComponent) {
      case "isHeadOffice":
        await this.setState({ isHeadOffice: !state });
        this.handleFilter();
        break;
      case "isInsured":
        await this.setState({ isInsured: !state });
        this.handleFilter();
        break;
      case "hasWebpage":
        await this.setState({ hasWebPage: !state });
        this.handleFilter();
        break;
      case "hasExtraInfo":
        await this.setState({ hasExtraInfo: !state });
        this.handleFilter();
        break;
      case "hasCorpMobile":
        await this.setState({ hasCorpMobile: !state });
        this.handleFilter();
        break;
      case "hasSale":
        await this.setState({ hasSale: !state });
        this.handleFilter();
        break;
      case "hasDirectorMobile":
        await this.setState({ hasDirectorMobile: !state });
        this.handleFilter();
        break;
      case "isRestaurant":
        await this.setState({ isRestaurant: !state });
        this.handleFilter();
        break;
      case "isNGO":
        await this.setState({ isNGO: !state });
        this.handleFilter();
        break;
      case "isOpen":
        await this.setState({ isOpen: !state });
        this.handleFilter();
        break;
      case "hasMenu":
        await this.setState({ hasMenu: !state });
        this.handleFilter();
        break;
      case "hasDelivery":
        await this.setState({ hasDelivery: !state });
        this.handleFilter();
        break;
      default:
        break;
    }
  }

  toggleLanguage = async () => {
    await this.setState({ isENG: !this.state.isENG });
  };

  searchOrganizations = e => {
    e.preventDefault();

    let searchContent = document.getElementById("search-field-cat").value;

    window.location = `/ka-ge/organizations/search/${searchContent}`;
  };

  render() {
    const { currentCategory, resultCount } = this.props;
    const FORMAT = "MM/dd/yyyy";
    return (
      <div className="categoriesMidSection__container">
        <MidSectionFirstPanel />

        <div className="midSection__search-panel">
          <form className="search-field" onSubmit={e => this.searchOrganizations(e)}>
            <input id='search-field-cat' type="text" placeholder="საძიებო ფრაზა" />
            <button type="submit">
              <img src={SearchIcon} alt="" />
            </button>
          </form>
        </div>

        <CategoriesInnerNavigation currentCategory={currentCategory} />

        <div className="filter-map-wrapper">
          <div className="filter-org-all">
            <div className="filter-org-all-inner">
              <div className="filter-open-org filter-each">
                <div className="filter-toggle">
                  <span className="language-span" id="opened">
                    ღიაა
                  </span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      onClick={() => {
                        this.toggleSwitch("isOpen", this.state.isOpen);
                      }}
                    ></span>
                  </label>
                </div>
              </div>
              <div className="filter-menu-org filter-each">
                <div className="filter-toggle">
                  <span className="language-span" id="menu">
                    მენიუ
                  </span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      onClick={() => {
                        this.toggleSwitch("hasMenu", this.state.hasMenu);
                      }}
                    ></span>
                  </label>
                </div>
              </div>
              <div className="filter-delivery-org filter-each">
                <div className="filter-toggle">
                  <span className="language-span" id="delivery">
                    მიტანის სერვისი
                  </span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      onClick={() => {
                        this.toggleSwitch(
                          "hasDelivery",
                          this.state.hasDelivery
                        );
                      }}
                    ></span>
                  </label>
                </div>
              </div>
              <div
                className="filter-all-btn"
                onClick={e => this.toggleAddFilter(e)}
              >
                <div
                  className={
                    this.state.visible ? "all-filter active-link" : "all-filter"
                  }
                >
                  ყველა ფილტრი
                </div>
                <div
                  className={
                    this.state.visible
                      ? "filter-all-icon--active"
                      : "filter-all-icon"
                  }
                ></div>
              </div>
            </div>
          </div>
          <div
            className={
              this.state.visible
                ? "see-results-button visible"
                : "see-results-button invisible"
            }
          >
            <span>შედეგების ნახვა</span>
            <span className="result-counter">{resultCount && resultCount}</span>
          </div>
        </div>
        <div
          className={
            this.state.visible
              ? "additional-filters__wrapper visible"
              : "additional-filters__wrapper invisible"
          }
        >
          <div className="additional-switch-filters">
            <div className="additional-switch-filter">
              <span>არის ჰედოფისი</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("isHeadOffice", this.state.isHeadOffice);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>კორპორატიული დაზღვევა</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("isInsured", this.state.isInsured);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>ვებგვერდი</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("hasWebPage", this.state.hasWebPage);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>დამატებითი ინფორმაცია</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch(
                      "hasCorpMobile",
                      this.state.hasCorpMobile
                    );
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>კორპორატიული მობილური</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("isHeadOffice", this.state.isHeadOffice);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>ფასდაკლება</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("hasSale", this.state.hasSale);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>დირექტორის საკონტაქტო ინფორმაცია</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch(
                      "hasDirectorMobile",
                      this.state.hasDirectorMobile
                    );
                  }}
                ></span>
              </label>
            </div>
          </div>
          <div className="additional-filters">
            <div className="additional-checkbox-filters">
              <div>
                <span>ორგანიზაციის საქმიანობა</span>
                <ul>
                  <li>
                    <input type="checkbox" id="checkbox1" />{" "}
                    <label htmlFor="checkbox1">სახელმწიფო არასამთავრობო</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox2" />{" "}
                    <label htmlFor="checkbox2">კულტურა, ხელოვნება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox3" />{" "}
                    <label htmlFor="checkbox3">მომსახურება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox4" />{" "}
                    <label htmlFor="checkbox4">ავტომობილი, ტრანსპორტი</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox5" />{" "}
                    <label htmlFor="checkbox5">განათლება, მეცნიერება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox6" />{" "}
                    <label htmlFor="checkbox6">ფინანსები</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox7" />{" "}
                    <label htmlFor="checkbox7">იმპორტი, ექსპორტი</label>
                  </li>
                </ul>
              </div>
              <div>
                <span>ორგანიზაციის ტიპი</span>
                <ul>
                  <li>
                    <input type="checkbox" id="checkbox8" />
                    <label htmlFor="checkbox8">
                      შპს - შეზღუდული შესაძლებლობების საზოგადოება
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox9" />
                    <label htmlFor="checkbox9">სს - სააქციო საზოგადოება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox10" />
                    <label htmlFor="checkbox10">სს- სააქციო საზოგადოება</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="additional-input-filters">
              <div>
                <span>ორგანიზაციის დაფუძნების დრო</span>
                <form className="organization-establish-date">
                  <DayPickerInput
                    formatDate={this.formatDate}
                    format={FORMAT}
                    parseDate={this.parseDate}
                    onDayChange={this.handleStartDayChange}
                    component={props => (
                      <input {...props} type="text" placeholder="-დან" />
                    )}
                  />
                  <DayPickerInput
                    formatDate={this.formatDate}
                    format={FORMAT}
                    parseDate={this.parseDate}
                    onDayChange={this.handleEndDayChange}
                    component={props => (
                      <input {...props} type="text" placeholder="-მდე" />
                    )}
                  />
                </form>
              </div>
              <div>
                <span>თანამშრომლების რაოდენობა</span>
                <form className="organization-worker-number">
                  <input type="text" placeholder="-დან" />
                  <input type="text" placeholder="-მდე" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="dimmed-overlay"></div>
      </div>
    );
  }
}
