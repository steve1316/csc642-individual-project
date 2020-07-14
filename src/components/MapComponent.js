import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

// Coordinates are passed via props inside the Results page to this component.
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={{ lat: this.props.coordinates["lati"], lng: this.props.coordinates["long"] }}>
        <Marker position={{ lat: this.props.coordinates["lati"], lng: this.props.coordinates["long"] }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYR-fyWSCdQ3XfZohzXX2adrSyta-qYGo"
})(MapContainer);
