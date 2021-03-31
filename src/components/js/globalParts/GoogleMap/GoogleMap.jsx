import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class GoogleMap extends Component {

    renderMarkers = () => {
        let markers = [];
        if (this.props.organizations.length > 1) {
            this.props.organizations.map((itm, i) => {
                markers.push(<Marker key={itm.id} position={{ lat: itm.latitude, lng: itm.longitude }} />)
            })
        }
        // if(this.props.organizations.length <= 1) {
        //     console.log(this.props.organizations.length)
        //     console.log(this.props.organizations);
        //     markers.push(<Marker key={this.props.organizations.id} position={{ lat: this.props.organizations.latitude, lng: this.props.organizations.longitude }} />);
        // }

        return markers;
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                id="map"
                className={this.props.className}
                initialCenter={{ lat: 41.7151, lng: 44.8271 }}
            >
                {this.renderMarkers()}
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQivF_U965QpiZ7Cg5O9RS053djXwGlag'
})(GoogleMap);
