<template>
    <div ref="chart_div"></div>
</template>
<script>
import { GoogleCharts } from 'google-charts';
export default {
    name: 'line-chart',
    data() {
        return {
            chart: null
        }
    },
    props: {
        axisOptions: {
            type: Object,
            required: true
        }
    },
    mounted: function() {
        // google.charts.load('current', {packages: ['corechart', 'line']});
        this.$nextTick().then(() => {
            this.chart = new GoogleCharts.api.visualization.LineChart(this.$refs['chart_div']);
        })
    },
    methods: {
        drawChart: function() {

        }
    }
}
</script>