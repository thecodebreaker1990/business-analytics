import Vue from 'vue';
import Vuex from 'vuex';

import reportJSON from './assets/json/report.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        reportJSON,
        filterOptions: [
            { key: 'sales', title: 'Sales' },
            { key: 'pageViews', title: 'Page Views' },
            { key: 'clickThruRate', title: 'Click Through Rate' },
            { key: 'orders', title: 'Orders' }
        ],
        activeFilter: 'clickThruRate'
    },
    getters: {
        getFilterOptions(state) {
            return state.filterOptions;
        },
        getChartData(state) {
            const { title: vAxisTitle } = state.filterOptions.find(opt => opt.key === state.activeFilter);
            const { records } = state.reportJSON;
            const data = [
                ['Date', vAxisTitle],
                ...records.map(rec => {
                    const { date, ...rest } = rec;
                    return [date, rest[state.activeFilter]];
                }) 
            ];
            return data;
        }
    },
    mutations: {
        selectFilter(state, filterKey) {
            state.activeFilter = filterKey;
        }
    }
});