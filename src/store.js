import Vue from 'vue';
import Vuex from 'vuex';

import reportJSON from './assets/json/report.json';
import report2JSON from './assets/json/report2.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chartDataByYear: {
            '2016': reportJSON,
            '2020': report2JSON,
        },
        filterOptions: [
            { key: 'sales', title: 'Sales' },
            { key: 'pageViews', title: 'Page Views' },
            { key: 'clickThruRate', title: 'Click Through Rate' },
            { key: 'orders', title: 'Orders' }
        ]
    },
    getters: {
        getFilterOptions(state) {
            return state.filterOptions;
        },
        getChartData(state) {
            return (year) => state.chartDataByYear[year];
        }
    }
});