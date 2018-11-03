<script>
import { Pie } from "vue-chartjs";
import q3_2018 from "../assets/q3_2018.json";

export default {
  extends: Pie,
  data: () => ({
    // preset ranges for the distance the bikes traveled
    labels: [],
    values: [],
    avgDist: 0,
    options: {
      title: {
        display: false,
        text: "Types of Plans"
      }
    }
  }),
  mounted() {
    var Map = require("collections/map");
    var map = new Map();

    // finds the number of each station
    for (var i = 0; i < q3_2018.length; i++) {
      var curr = q3_2018[i].passholder_type;

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

    // add the largest 10 values to labels and respective values
    for (var i = 0; i < arr.length; i++) {
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
            backgroundColor: ["#D22F2F", "#004879", "#D22F2F", "#004879"],
            data: this.values
          }
        ]
      },
      this.options
    );
  }
};
</script>
