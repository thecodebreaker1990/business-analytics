<template>
    <div class="container">
        <div class="container__filter">
            <Dropdown 
                :options="filterOptions"
                :value="activeFilter"
                uniqueKey="key"
                labelKey="title"
                alignment="right"
                @input="handleFilterChange"
            />
        </div>
        <div class="container__chart">
            <GChart 
                :settings = "{ packages: ['corechart'] }"
                :type="chartType"
                :data="chartData"
                :options="chartOptions" 
            />
        </div>
    </div>
</template>
<script>
import Dropdown from '../UI/Dropdown.vue';
import { GChart } from 'vue-google-charts';
export default {
    name: 'chart-with-filter',
    components: {
        Dropdown,
        GChart
    },
    created() {
        this.activeFilter = this.filterOptions.find((_, idx) => idx === 0)['key'];
    },
    computed: {
        filterOptions() {
            return this.$store.getters.getFilterOptions;
        },
        chartData() {
            const { title: vAxisTitle } = this.filterOptions.find(opt => opt.key === this.activeFilter);
            const { records } = this.data;
            const data = [
                ['Date', vAxisTitle],
                ...records.map(rec => {
                    const { date, ...rest } = rec;
                    return [date, rest[this.activeFilter]];
                }) 
            ];
            return data;
        }
    },
    props: {
        chartOptions: {
            type: Object,
            default: () => ({
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Orders, and Page Views: 2016',
                },
                width: Math.floor(window.innerWidth * 0.47),
                height: 500
            })
        },
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            chartType: "LineChart",
            activeFilter: null
        }
    },
    methods: {
        handleFilterChange({ key: filterKey }) {
            this.activeFilter = filterKey;
        }
    }
}
</script>
<style scoped>
.container {
   width: 100%;
   height: 600px;
   padding: 20px;
   box-sizing: border-box;
   display: flex;
   flex-flow: column;
   justify-content: space-between;
   align-items: center; 
}
.container__filter {
    flex-basis: 7%;
}
.container__chart {
    flex: 1 0;
}
</style>