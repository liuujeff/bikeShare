<script>
import { Bar } from "vue-chartjs";
import q3_2018 from "../assets/q3_2018.json";

export default {
  extends: Bar,
  data: () => ({
    // preset ranges for the distance the bikes traveled
     labels: [
      "0-14",
      "15-29",
      "30-44",
      "45-59",
      "60-74",
      "75-89",
      "90-104",
      "105-119",
      "120-134",
      "135-149",
      "150-164",
      "165-179",
      "180-194",
      "195-209"    
      ],
    values: [],

    // options for out chart
    options: {
      legend: false,
      title: {
        display: false,
        text: "Duration of Riders"
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
              labelString: "Duration (mins)"
            }
          }
        ]
      }
    }
  }),
  mounted() {
    var arr = new Array(15).fill(0);

    // finds the number of each station
    for (var i = 0; i < q3_2018.length; i++) {
      var curr = q3_2018[i].duration;

      // given the distance, finds the index to add to the array
      var index = Math.floor(curr / 15);

      // increments array at index by one, meaning we have a data in the range
      if (index < 14) {
        arr[index] += 1;
      }
      
    }

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
  }
};
</script>
