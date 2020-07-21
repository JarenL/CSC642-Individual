import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import styled from "styled-components";
import Geocode from "react-geocode";

const MapWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

Geocode.setApiKey("AIzaSyCUpfR03YYdUKQDrLjFfblLmSvgS-dlwaU");
Geocode.setLanguage("en");


class Map extends Component {
  render() {
    console.log("hello")
    Geocode.fromAddress("Eiffel Tower").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      ></GoogleMap>
    ));
    if (this.props.location !== undefined) {
      return null
    } else {
      return (
        <MapWrapper>
          <GoogleMapExample
            containerElement={<div style={{ height: `500px`, width: "500px" }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MapWrapper>
      );
    }
    
  }
}
export default Map;
