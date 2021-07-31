import React from 'react';

import './Map.css'

const Map = props => {
  map = new window.google.maps.Map(, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  return <div className={`map ${props.className}`} style={props.style}></div>
};

export default Map;