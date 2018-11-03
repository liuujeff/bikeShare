<template>
<div>
    <p id='latLng'>Lat: {{lat}} Lng: {{lng}}</p>
    <nav id="menu"></nav>
    <div id='map'></div>
    <p style="float: right">displays bike_data.json which contains about 20 data entries</p>
</div>
</template>

<script>
import bike_data from "../assets/bike_data.json";

const mapboxgl = require("mapbox-gl");
const defaultLatLng = {
  lat: 34.04681,
  lng: -118.256981
};
mapboxgl.accessToken =
  "pk.eyJ1IjoiamVmZnJleTkiLCJhIjoiY2pudjFkbGppMDN0cTNwcW5uZmVuOXN1YSJ9.c9X23MgwQ1gM6Sx_m-ojlw";
export default {
  name: "BikeMap",
  data() {
    return {
      bikeData: bike_data.columns,
      lat: defaultLatLng.lat,
      lng: defaultLatLng.lng,
      mapType: "default"
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      var start = this.bikeData[14].cachedContents.top;
      var stop = this.bikeData[15].cachedContents.top;

      var startArr = [];
      var endArr = [];
      for (var i = 0; i < start.length; i++) {
        // gets GPS coordinates of every item of its start and end point
        var lat1 = start[i].item.latitude;
        var lat2 = stop[i].item.latitude;
        var lon1 = start[i].item.longitude;
        var lon2 = stop[i].item.longitude;
        var startCoord = [parseFloat(lon1), parseFloat(lat1)];
        var endCoord = [parseFloat(lon2), parseFloat(lat2)];

        // adding data points to the respective arrays
        startArr.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: startCoord
          },
          properties: {
            title: i,
            icon: "bicycle-share"
          }
        });
        endArr.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: endCoord
          },
          properties: {
            title: i,
            icon: "bicycle"
          }
        });
      }

      // initialize map
      let map;
      let vm = this;

      // creates a new map with the following options
      map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/jeffrey9/cjnv5xtfb1gsz2sjub78xgbt8",
        center: [defaultLatLng.lng, defaultLatLng.lat],
        zoom: 13,
        attributionControl: false
      });
      vm.map = map;
      map.on("load", () => {
        // add data source
        map.addSource("start", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: startArr
          }
        });

        // add start points to map with the following settings
        map.addLayer({
          id: "Start Points",
          type: "symbol",
          source: "start",
          layout: {
            "icon-image": "{icon}-15",
            "icon-size": 1.25,
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "icon-allow-overlap": true
          },
          paint: {
            "icon-color": "#004879"
          }
        });

        // add data source
        map.addSource("end", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: endArr
          }
        });

        // add end points to map with the following settings
        map.addLayer({
          id: "End Points",
          type: "symbol",
          source: "end",
          layout: {
            "icon-image": "{icon}-15",
            "icon-size": 1.25,
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "icon-allow-overlap": true
          },
          paint: {
            "icon-color": "#D22F2F"
          }
        });
      });

      // gathers the mouses lat and long location on hover
      map.on("mousemove", e => {
        vm.lat = e.lngLat.lat.toFixed(7);
        vm.lng = e.lngLat.lng.toFixed(7);
      });

      var toggleableLayerIds = ["Start Points", "End Points"];

      // toggle layers
      for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];

        var link = document.createElement("a");
        link.href = "#";
        link.className = "active";
        link.textContent = id;

        link.onclick = function(e) {
          var clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getLayoutProperty(clickedLayer, "visibility");

          if (visibility === "visible") {
            map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.setLayoutProperty(clickedLayer, "visibility", "visible");
          }
        };

        var layers = document.getElementById("menu");
        layers.appendChild(link);
      }
    }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 75vh;
}
#menu {
  background: #fff;
  position: absolute;
  z-index: 1;
  right: 1px;
  border-radius: 3px;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-family: "Open Sans", sans-serif;
}

#menu a {
  font-size: 13px;
  color: #404040;
  display: block;
  margin: 0;
  padding: 0;
  padding: 10px;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  text-align: center;
}

#menu a:last-child {
  border: none;
}

#menu a:hover {
  background-color: #f8f8f8;
  color: #404040;
}

#menu a.active {
  background-color: #3887be;
  color: #ffffff;
}

#menu a.active:hover {
  background: #3074a4;
}
</style>