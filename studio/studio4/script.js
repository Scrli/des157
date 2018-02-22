mapboxgl.accessToken = 'pk.eyJ1Ijoic2NybGkiLCJhIjoiY2pkeHlpd2dyMHRhbzJxbzFrZmxmbmV1ZiJ9.Xk2XWrhyCBBbYakhbMzHNg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-121.749, 38.539],
  zoom: 13.5
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.749, 38.539]
      },
      properties: {
        title: 'Your LocationP',
        description: 'Peter J. Shields Library'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.742491, 38.543279]
      },
      properties: {
        title: 'Hunan Bar',
        description: 'Chinese Restaurant'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.759081, 38.547623]
      },
      properties: {
        title: 'Chengdu Style Restaurant',
        description: 'Chinese Restaurant'
      }
    }]
};


geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
        offset: 25
      }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
