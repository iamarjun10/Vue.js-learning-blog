<template>
    <!-- by default id is applied to a first wrapper -->
    <!-- if you want to specify specifically to any tag then use v-bind="$attrs" -->
    <div v-bind="$attrs">
        <h5>Non-Props Data</h5>
        <h6>Header 1</h6>
        <h6 v-bind="$attrs">Header 2</h6>
        <h6>Header 3</h6>
    </div>
</template>

<script>
    export default {
        name: 'NonPropsData',
        inheritAttrs: false, // if you don't want id to be applied by default to the outer wrapper then use "inheritAttrs: false"
        props: {
            name: String
        }
    }
</script>

<style>

</style>