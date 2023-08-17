import * as React from 'react';
import Map from 'react-map-gl';

function App() {
  return (
  <div>
    <div id="create-div">
      <button id="submit-button" type="button" >afwefawef</button>
  </div>
    <Map
      mapLib={import('mapbox-gl')}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      }}
      style={{width: "100vw", height: "100vh", overflow: "hidden"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  </div>
  );
}

export default App;