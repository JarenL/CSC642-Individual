import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import styled from "styled-components";

const MapWrapper = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      ></GoogleMap>
    ));
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
export default Map;
