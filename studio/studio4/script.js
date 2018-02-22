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
        title: '你的位置 Your Location',
        description: '图书馆 Peter J. Shields Library'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.742491, 38.543279]
      },
      properties: {
        title: '湖南餐馆 Hunan Bar',
        description: '湘菜 Xiang Cuisine'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.725187, 38.542411]
      },
      properties: {
        title: '港式茶餐厅 HongKong Cafe',
        description: '粤菜 Yue Cuisine'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.740669, 38.542929]
      },
      properties: {
        title: '好好 oho Market',
        description: '亚洲零食 Asian Snack'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.786962, 38.556848]
      },
      properties: {
        title: '小江南 Shanghai Town',
        description: '浙菜 Zhe Cuisine'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.759081, 38.547623]
      },
      properties: {
        title: '古月飘香 Chengdu Style',
        description: '川菜 Chuan Cuisine'
      }
    }
  ]
}

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
map.addControl(nav, 'top-right');

/*
// send request
var marker = document.getElementsByClassName("marker mapboxgl-marker");

for (var i = 0; i < marker.length; i++) {
  marker[i].onclick = function() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.status == 200) {
        alert("request success");
      } else {
        alert("requst fail");
      }
      console.log(xhttp);
    };
    xhttp.open("GET", "https://api.mapbox.com/directions/v5/mapbox/driving/13.4265,52.5080;13.4273,52.5069?steps=true&geometries=polyline&access_token=pk.eyJ1Ijoic2NybGkiLCJhIjoiY2pkeHlpd2dyMHRhbzJxbzFrZmxmbmV1ZiJ9.Xk2XWrhyCBBbYakhbMzHNg", true);
    xhttp.send();
  }
};*/
