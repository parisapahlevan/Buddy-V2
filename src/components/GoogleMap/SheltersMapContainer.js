// DoctorMapContainer.js

import React from "react";
import SheltersMap from "./SheltersMap";

export default class SheltersMapContainer extends React.Component {

	render() {
		return (
			<SheltersMap
				shelters={this.props.shelters}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBI_k_ZRPYgJ5ke5ZD4JuT2adYzFd2RtJQ&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div className ="googleMapContainer"/>}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}