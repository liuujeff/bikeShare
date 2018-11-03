<script>
import { Bar } from "vue-chartjs";
import q3_2018 from "../assets/q3_2018.json";

export default {
  extends: Bar,
  data: () => ({
    // preset ranges for the distance the bikes traveled
    labels: [],
    values: [],
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
              labelString: "Time (0 = 12:00 AM - 1:00 AM)"
            }
          }
        ]
      }
    }
  }),
  mounted() {
    // generates array with values from 0 to 23, inclusive
    var arr = Array.apply(null, { length: 24 }).map(Number.call, Number);

    // fills array of size 24 with 0s
    var valueArr = new Array(24).fill(0);

    // finds the number of each time
    for (var i = 0; i < q3_2018.length; i++) {
      // collects the hour from each string
      var curr = q3_2018[i].start_time.substring(11, 13);

      // converts string to int so we can index the array
      var index = parseInt(curr);
      valueArr[index] += 1;
    }

    // sets labels and values
    this.labels = arr;
    this.values = valueArr;

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
