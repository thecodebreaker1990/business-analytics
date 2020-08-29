<template>
    <div class="Toolbar">
        <div class="Toolbar__header">
            Business Analytics
        </div>
        <!-- <Dropdown 
            :options="filterOptions"
            :value="activeFilter"
            uniqueKey="key"
            labelKey="title"
            alignment="right"
            @input="handleFilterChange"
        /> -->
    </div>
</template>
<script>
//import Dropdown from './Dropdown.vue';
export default {
    name: 'toolbar',
    components: {
        //Dropdown
    },
    computed: {
        filterOptions() {
            return this.$store.getters.getFilterOptions;
        },
        activeFilter() {
            return this.$store.state.activeFilter;
        }
    },
    methods: {
       handleFilterChange({ key: filterKey }) {
           this.$store.commit('selectFilter', filterKey);
       } 
    }
}
</script>
<style scoped>
.Toolbar {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    background: #b5792a; 
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Toolbar__header {
    font-size: 20px;
    font-weight: 600;
    color: white;
}
</style>