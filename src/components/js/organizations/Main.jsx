import React from 'react';
import '../../css/main-page.css';
import MainHeader from './parts/Header';
import MidSection from './parts/MidSection';
import OrganizationRender from './parts/Organizations';
import Axios from 'axios';
import Footer from './parts/Footer';
import Loader from 'react-loader-spinner';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dataToReturn: null,
    }
  }

  // const [data, setData] = useState(null);

  data = null;

  componentDidMount() {
    Axios.get('/api/?app=organizations/OrganizationApi&resource=mainPage', {
      params: {
        resource: 'mainPage'
      },
      timeout: 10000,
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      this.setState({ dataToReturn: res.data.data });
    });
  }
  render() {
    const RenderContent = (this.state.dataToReturn ? <OrganizationRender organizations={this.state.dataToReturn} /> 
      : 
      <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />);
      
    return (
      <div className="main__page__container">
        <MainHeader />
        <MidSection />
        <div className='organization-render-container--wrapper'>
          {RenderContent}
        </div>
        <Footer />
      </div>
    );
  }

}

export default MainPage;
