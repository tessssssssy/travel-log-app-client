import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }
  render() {
    const style = {
        width: '60%',
        height: '70%'
      }
    return (
      <Map 
      google={this.props.google} 
      zoom={2} style={style}
      initialCenter={{
        lat: 20,
        lng: 0
      }}>
        {this.props.countries.map(country => {
          return <Marker position={{lat: country.latlng[0], lng: country.latlng[1]}}/>
        })}
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} 
                position={{lat: 37.778519, lng: -122.405640}} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'GOOGLE_MAPS_API_KEY'
})(MapContainer)