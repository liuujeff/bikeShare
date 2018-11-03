# cap-one

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

This project was initialized with Vue.js and Webpack. The CSS and templating was handled mostly by Vuetify, https://vuetifyjs.com/en/.

**index.html**
Vue.js is injected to this page. Also contains all external CSS for Mapbox and icons.

**src/Full.vue**
Where the Toolbar component is placed and displays the children of the router view.

**src/App.vue**
Displays the parent view.

**src/Main.js**
Imports Vue and tells it to inject inself to the app id in index.html.

**src/assets/**
Contains two JSON files that the scripts analyze. I need more data so I used Q3 2018 and I only took about a thrid of the data since it was taxing my computer.


Data is parsed in each of their respective chart components.
**src/components/BikeMap.vue**
Imports Mapbox and uses its APIs to construct a map with the start and end points, these points can be toggled on and off. Uses the given data of about 20 points.

**src/components/Charts.vue**
This is where all the charts are placed together, it also hides the information on each chart analysis. 

**src/components/Distance.vue**
Chart for the distances, behaves like a histogram and uses data from Q3 2018.

**src/components/Duration.vue**
Chart for the duration of a ride, behaves like a histogram and uses data from Q3 2018.

**src/components/Plan.vue**
Pie chart for the breakdown of the plans users have, uses data from Q3 2018.

**src/components/PopTime.vue**
Chart for the start time of a ride, behaves like a histogram and uses data from Q3 2018.

**src/components/Popular.vue**
Chart for the 10 most popular start stations, behaves like a histogram and uses data from Q3 2018.

**src/components/Toolbar.vue**
Contains the title and navigation throughout the app.

**src/router/route.js**
Shows the parent route and its children, Charts and BikeMap along with the address to visit each component.
