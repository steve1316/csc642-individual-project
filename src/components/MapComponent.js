import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
	width: "250px",
	height: "250px",
	maxWidth: "80%",
	maxHeight: "80%"
};

// Coordinates are passed via props inside the Results page to this component.
export class MapContainer extends Component {
	render() {
		console.log("Received props are : ", this.props.coordinates);
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
