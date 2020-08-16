<template>
  <Layout>
    <template #header>
      <Toolbar />
    </template>
    <template>
      <GChart 
        :settings = "{ packages: ['corechart'] }"
        :type="chartType"
        :data="chartData"
        :options="chartOptions" 
      />
    </template>
  </Layout>
</template>

<script>
  import Layout from './hoc/Layout.vue';
  import Toolbar from './components/UI/Toolbar.vue';
  import { GChart } from 'vue-google-charts';
  export default {
    name: 'app',
    components: {
      Layout,
      Toolbar,
      GChart
    },
    data() {
      return {
        chartType: "LineChart",
        chartOptions: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Orders, and Page Views: 2016',
          }
        }
      }
    },
    computed: {
      chartData() {
        return this.$store.getters.getChartData;
      }
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
</style>