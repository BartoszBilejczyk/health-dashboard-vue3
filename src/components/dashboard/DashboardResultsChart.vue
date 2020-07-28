<template>
  <canvas ref="canvas" id="line-chart"></canvas>
</template>

<script>
  import { onMounted, watchEffect } from 'vue';
  import { Line } from 'vue-chartjs';
  import { generateChart } from 'vue-chartjs'
  const CustomLine = generateChart('line-chart', 'Line')

  export default {
    name: 'DashboardResultsChart',
    extends: Line,
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    setup(props) {
      function renderLineChart() {
        const ctx = document.getElementById('line-chart').getContext("2d")
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(117, 143, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(160, 94, 247, 0.2)');

        const span = ((Math.max(...props.data) - Math.min(...props.data)) / 3);
        const min = Math.min(...props.data) - span;
        const max = Math.max(...props.data) + span;

        CustomLine.methods.renderChart({
          labels: Array.from({length: 31}, (v, i) => i + 1),
          datasets: [
            {
              backgroundColor: gradient,
              data: props.data,
              borderWidth: 3,
              borderColor: '#8c87fc',
              pointBackgroundColor: '#FFF',
              pointBorderColor: '#8c87fc',
              pointBorderWidth: 2,
              pointRadius: 2
            }
          ]
        }, {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              ticks: {
                suggestedMin: min,
                suggestedMax: max
              }
            }]
          }
        })
      }

      watchEffect(() => {
      //   renderLineChart();
      });

      onMounted(() => {
        renderLineChart();
      });
    }
  }
</script>

<style lang="scss">
.chartjs-render-monitor {
  max-height: 32vh;
}
</style>
