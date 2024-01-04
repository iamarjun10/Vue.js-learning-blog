<template>
    <div>
        <h5> Two Way Binding </h5>
        <input type="text" v-model="count">
        <h6>{{ count }}</h6>
        <button @click="checkCount()">checkCount</button>
    </div>
</template>

<script>
    export default {
        name: 'TwoWayBinding',
        data() {
            return {
                count: 10
            }
        },
        methods: {
            checkCount() {
                return console.log("count is ", this.count);
            },
        }
    }
</script>

<style>

</style>