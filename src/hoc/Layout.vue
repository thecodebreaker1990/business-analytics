<template>
    <div class="Layout">
        <slot name="header">
            <h2>Header</h2>
        </slot>
        <slot>
            <div>I am body</div>
        </slot>
    </div>
</template>
<script>
export default {
    name: 'layout'
}
</script>
<style scoped>
.Layout {
    width: 100%;
    display: grid;
    grid-template-rows: 7vh 93vh;
    overflow: hidden;
}
</style>