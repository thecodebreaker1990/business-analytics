<template>
    <div class="Dropdown">
        <div class="Dropbtn">
            {{ selectText }}
        </div>
        <div :class="['Dropdown__content', `Dropdown__content--${alignment}`]">
            <a 
                href="javascript:void(0)" 
                v-for="el in options"
                :class="{active: el[uniqueKey] === value}" 
                :key="el[uniqueKey]"
                @click.prevent="$emit('input', el)">
                    {{ el[labelKey] }}
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dropdown',
    props: {
        selectText: {
            type: String,
            default: 'Select options'
        },
        options: {
            type: Array,
            required: true
        },
        labelKey: String,
        uniqueKey: String,
        alignment: {
            type: String,
            default: 'left'
        },
        value: {
            required: true
        }
    }
}
</script>
<style scoped>
.Dropdown {
    height: 100%;
    position: relative;
    display: inline-block;
}
.Dropdown__content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
.Dropdown__content--right {
    right: 0;
}
.Dropdown__content--left {
    left: 0;
}
.Dropdown__content > a {
    text-decoration: none;
    padding: 7px 14px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    display: block;
}
.Dropdown__content > a:hover, .Dropdown__content > a.active {
    background: #cce8f3; 
}
.Dropbtn {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
.Dropdown:hover .Dropdown__content {
    display: block
}
</style>