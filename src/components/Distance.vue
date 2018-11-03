<script>
import { Bar } from "vue-chartjs";
import q3_2018 from "../assets/q3_2018.json";

export default {
  extends: Bar,
  data: () => ({
    // preset ranges for the distance the bikes traveled
    labels: [
      "0-299",
      "300-599",
      "600-899",
      "900-1199",
      "1200-1499",
      "1500-1799",
      "1800-2099",
      "2100-2399",
      "2400-2699",
      "2700-2999"
    ],
    values: [],
    avgDist: 0,
    options: {
      legend: false,
      title: {
        display: false,
        text: "Average Distance Traveled: " + this.avgDist
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
              labelString: "Distance (m)"
            }
          }
        ]
      }
    }
  }),
  mounted() {
    // selects GPS coordinates from start and end
    var arr = new Array(10).fill(0);
    var count = 0;
    for (var i = 0; i < q3_2018.length; i++) {
      // latitude and longitude for calculating distance
      var lat1 = q3_2018[i].start_lat;
      var lat2 = q3_2018[i].end_lat;
      var lon1 = q3_2018[i].start_lon;
      var lon2 = q3_2018[i].end_lon;

      // radius of the Earth in meters
      var R = 6371e3;
      var φ1 = this.toRadians(lat1);
      var φ2 = this.toRadians(lat2);
      var Δφ = this.toRadians(lat2 - lat1);
      var Δλ = this.toRadians(lon2 - lon1);
      var a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      // takes distance from start to end in a straight line
      var d = R * c;

      // given the distance, finds the index to add to the array
      var index = Math.floor(d / 300);

      // increments array at index by one, meaning we have a data in the range
      if (index < 10) {
        // adds to the average distance
        this.avgDist += parseFloat(d.toFixed(1));
        arr[index] += 1;
        count++;
      }
    }

    // divide by number of elements added to array
    this.avgDist = this.avgDist / count;
    console.log("Average Distance: " + this.avgDist);

    // sets array we found to the one the chart draws
    this.values = arr;

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
  },
  methods: {
    // calculates the radians when given the degree
    toRadians(degrees) {
      return degrees * (Math.PI / 180);
    }
  }
};
</script>
