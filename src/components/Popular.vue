<script>
import { Bar } from "vue-chartjs";
import q3_2018 from "../assets/q3_2018.json";

export default {
  extends: Bar,
  data: () => ({
    // preset ranges for the distance the bikes traveled
    labels: [],
    values: [],
    avgDist: 0,
    options: {
      legend: false,
      title: {
        display: false,
        text: "Most Popular Start Stations"
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Number of Riders"
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Start Station"
            }
          }
        ]
      }
    }
  }),
  mounted() {
    var Map = require("collections/map");
    var map = new Map();

    // finds the number of each station
    for (var i = 0; i < q3_2018.length; i++) {
      var curr = q3_2018[i].start_station;

      // if the station already exists then add 1 to count otherwise add it to the map
      if (map.has(curr)) {
        var count = map.get(curr);
        map.set(curr, count + 1);
      } else {
        map.set(curr, 1);
      }
    }

    // convert map to JSON object, with creating an array of arrays with len 2
    var arr = map.toJSON();

    // sort arrays by second value, largest values at the front
    arr = arr.sort(function(a, b) {
      return a[1] < b[1] ? 1 : -1;
    });

    // add the largest 10 values to labels and respective values
    for (var i = 0; i < 10; i++) {
      this.labels.push(arr[i][0]);
      this.values.push(arr[i][1]);
    }

    // draws chart
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Number of Riders",
            backgroundColor: "#D22F2F",
            data: this.values
          }
        ]
      },
      this.options
    );
  }
};
</script>
