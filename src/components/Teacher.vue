<template>
    <div>
        <h5>Teacher Component</h5>
        <h6>Name : {{ name }}</h6>
    </div>
</template>

<script>
    export default {
        name: 'Teacher',
        props: {
            name: String
        }
    }
</script>

<style>

</style>