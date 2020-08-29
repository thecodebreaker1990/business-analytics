<template>
  <Layout>
    <template #header>
      <Toolbar />
    </template>
    <template>
        <div class="chart-container">
          <div class="chart-container__item">
            <ChartWithFilter :data="$store.getters.getChartData('2016')" />
          </div>
          <div class="chart-container__item">
            <ChartWithFilter :data="$store.getters.getChartData('2020')" />
          </div>
        </div>
    </template>
  </Layout>
</template>

<script>
  import Layout from './hoc/Layout.vue';
  import Toolbar from './components/UI/Toolbar.vue';
  import ChartWithFilter from './components/ChartWithFilter/ChartWithFilter.vue';
  export default {
    name: 'app',
    components: {
      Layout,
      Toolbar,
      ChartWithFilter
    },
    data() {
      return {
        chartOptions: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Orders, and Page Views: 2016',
          }
        }
      }
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  .chart-container {
    overflow: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .chart-container__item {
    flex: 0 48%;
    height: 100%;
    margin-bottom: 2%;
  }
  .chart-container__item + .chart-container__item {
    border-left: solid 1px #ccc;
  }
</style>