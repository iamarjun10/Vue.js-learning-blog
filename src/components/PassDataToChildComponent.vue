<template>
    <h5>Pass Data To Child Component</h5>
    <h6>Name: {{ name }}</h6>
    <h6>User Name: {{ user.name }}</h6>
    <button @click="getData">getData() from home component</button>
</template>

<script>
    export default {
        name: 'PassDataToChildComponent',
        props: {
            name: String,
            user: Object,
            getData: Function
        }
    }
</script>

<style>

</style>