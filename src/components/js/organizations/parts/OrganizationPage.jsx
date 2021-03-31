import React from "react";
import Header from "./Header";
import OrganizationIcon from "../../../../assets/img/dest.png";
import MobileIcon from "../../../../assets/img/phone.png";
import EmailIcon from "../../../../assets/img/mail-bl.png";
import LocationIcon from "../../../../assets/img/pin.png";
import OrganizationItem from "./OrganizationItem";
import Footer from "./Footer";
import GoogleMap from "../../globalParts/GoogleMap/GoogleMap";
import SliderContainer from "../../globalParts/Slider/Slider";
import WebIco from "../../../../assets/img/web_.png";
import FacebookIco from "../../../../assets/img/fb.png";

import LinkedInRoundIco from "../../../../assets/img/socials-round/linkedin-round.png";
import FBRoundIco from "../../../../assets/img/socials-round/fb-round.png";
import TwitterRoundIco from "../../../../assets/img/socials-round/twitter-round.png";

import ShareIco from "../../../../assets/img/down-small.png";
import DeliveryIco from "../../../../assets/img/box.png";
import MenuIco from "../../../../assets/img/menu.png";

import FixedSearch from "../../globalParts/FixedSearch";

export default class OrganizationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: {},
      shareBtn: false,
      similarOrganizations: null
    };
  }

  componentDidMount() {
    this.fetchData();
    this.fetchSimilarOrgs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchData();
      this.fetchSimilarOrgs();
    }
  }
  fetchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=orgById&id=${this.props.match.params.id}`
    );
    const item = await fetchItem.json();

    await this.setState({ organization: item.data[0] });
  };

  fetchSimilarOrgs = async () => {
    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=similar&id=${this.props.match.params.id}`
    );
    const item = await fetchItem.json();

    await this.setState({ similarOrganizations: item.data });
  };

  toggleShareBtn = () => {
    this.setState({ shareBtn: !this.state.shareBtn });
  };

  image = [
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  ];

  images = [
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  ];

  render() {
    const { organization, similarOrganizations, shareBtn } = this.state;
    return (
      <div className="organization-page__wrapper">
        <Header />
        <div className="organization-page__mid__wrapper">
          <div className="website-logo__wrapper">
            <div className="website-logo"></div>
          </div>
          <div className="organization-page__back_wrapper">
            <SliderContainer
              organization={organization}
              image={this.image}
              images={this.images}
            />
          </div>
        </div>
        <div className="organization-page__second-mid__wrapper">
          <div className="organization-page__info__wrapper">
            <div className="organization-page__profile">
              <div className="organization__header__wrapper">
                <div className="organization-name_wrapper">
                  <img src={OrganizationIcon} alt="" />
                  <div className="organization-name">
                    {organization ? organization.name : "Organization Name"}
                  </div>
                  <button
                    className="org-share-btn"
                    onClick={() => this.toggleShareBtn()}
                  >
                    <img src={ShareIco} alt="" />
                  </button>
                  {shareBtn && (
                    <div className="socials-share_wrapper">
                      <img
                        src={FBRoundIco}
                        alt=""
                        className="socials-share-ico"
                      />
                      <img
                        src={LinkedInRoundIco}
                        alt=""
                        className="socials-share-ico"
                      />
                      <img
                        src={TwitterRoundIco}
                        alt=""
                        className="socials-share-ico"
                      />
                    </div>
                  )}
                </div>
                <div className="organization-description">
                  {organization.activity}
                </div>
                <div className="organization-rating">
                  {organization.rate_count} შეფასება
                </div>
              </div>

              <div className="organization-service-info_wrapper">
                <button className="organization-service-menu">
                  <span>მენიუს ნახვა</span>
                  <img src={MenuIco} alt="" />
                </button>

                <div className="organization-service-line">
                  <div className="horizontal-line"></div>
                </div>

                <div className="organization-service-delivery">
                  <span>მიტანის სერვისი</span>
                  <img src={DeliveryIco} alt="" />
                </div>
              </div>

              <div className="organization-profile-contact">
                <div className="organization-profile-mobile">
                  <img src={MobileIcon} alt="" />

                  <a href={`tel:${organization.number}`}>
                    <span>
                      {organization.number ? organization.number : "No Mobile"}
                    </span>
                  </a>
                </div>
                <div className="organization-profile-webpage">
                  <a
                    href={`https://${
                      organization.web_address ? organization.web_address : "#"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={WebIco} alt="" /> ვებ
                  </a>
                </div>
                <div className="organization-profile-email">
                  {organization.email_address && (
                    <a href={`mailto:${organization.email_address}}`}>
                      <img src={EmailIcon} alt="" />
                    </a>
                  )}
                </div>
                <div className="organization-profile-facebook">
                  <img src={FacebookIco} alt="" />
                </div>
              </div>

              <div className="organizaion-profile-location__wrapper">
                <div className="organization-profile-location">
                  <img src={LocationIcon} alt="" />
                  <span>{organization.address}</span>
                </div>
                <GoogleMap organizations={organization} />
              </div>

              <div className="organization-profile-working-hours__wrapper">
                <span className="working-hours-header">სამუშაო საათები</span>
                <span className="working-hours">{organization.work_hours}</span>
              </div>
            </div>

            <div className="organization-page__info">
              <span className="info-header">იურიდიული სტატუსი</span>
              <div className="corresponding-info__wrapper">
                <span className="corresponding-info">
                  {organization.legal_status}
                </span>
              </div>
              <span className="info-header">საიდენთიპიკაციო კოდი</span>
              <div className="corresponding-info__wrapper">
                <span className="corresponding-info">
                  {organization.ident_code}
                </span>
              </div>
              <span className="info-header">საფოსტო კოდი</span>
              <div className="corresponding-info__wrapper">
                <span className="corresponding-info">
                  {" "}
                  {organization.organization_index}{" "}
                </span>
              </div>
              <span className="info-header">დასვენების დღეები</span>
              <div className="corresponding-info__wrapper">
                <span className="corresponding-info">
                  {organization.day_offs}
                </span>
              </div>
              <span className="info-header">დირექტორი</span>
              <div className="corresponding-info__wrapper">
                <span className="corresponding-info">{organization.chief}</span>
              </div>
              <span className="info-header">დაარსების დრო</span>
              <div className="corresponding-info__wrapper">
                <span className="corresponding-info">
                  {organization.found_date}
                </span>
              </div>
              <span className="info-header">ტელეფონის ნომრები</span>
              <div className="corresponding-info__wrapper">
                <span className="corresponding-info">Mobile Number</span>
              </div>
            </div>
          </div>

          <div className="organization-page__similar-orgs__wrapper">
            <div className="organization-description_wrapper">
              <div className="organization-description-label">
                ორგანიზაციის <br />
                აღწერა
              </div>
              <div className="organization-page-paragraph">
                ლორემ იპსუმ გავიგონებ ხი აჩქარდებით გაუხვია, პირდაბანილნი
                გადაწყვეტილებების, ნაცარქექიავ მინიშნებაა ყოყლოჩინობა მუნჯია.
                ფიზიკოსები კარამზინს ორდენის გავიგონებ ფუსფუსებდნენ, გაჩარხულნი
                აფინანსებს მანქანებაა სახტად. მითრევას ფელიქს ბიბლიას რაკრაკში
                დაგიდგა გავიგონებ, შეანელო აქტუალური მმარხავდნენ. ვრჩებოდი
                აქტუალური ცოდა, მოსანიჭებლად მეორეზე, მოხსენებებს ოლიმპიადის
                ვენახისა მოსვლიათ მინიშნებაა, ბუტაფორულ მიჰქრის დაისვენებ
                ეხურათ.
              </div>
            </div>

            <div className="organization-page_review_wrapper"></div>
            <span>მსგავსი კომპანიები</span>
            <div className="organization-page__similar-orgs">
              {similarOrganizations &&
                similarOrganizations.map(element => {
                  return (
                    <OrganizationItem key={element.id} organization={element} />
                  );
                })}
            </div>
          </div>
        </div>
        <Footer />
        <FixedSearch />
      </div>
    );
  }
}
