<template>
    <div>
        <h5>Mount Life cycle methods</h5>
        <h6>name : {{ name }}</h6>
        <h6>place : {{ place }}</h6>
    </div>

    <!-- 
        data()

        beforeMount() - html template is not mounted

        mounted() - html template is mounted
     -->
</template>

<script>
    export default {
        name: 'Mount',
        data() {
            console.log("Data() called")
            return {
                name: 'Arjun',
                place: 'Menkurem'
            }
        },
        beforeMount() {
            console.log("beforeMount - ", this.$el)
        },
        mounted() {
            console.log("mounted - ", this.$el)
        }
    }
</script>

<style>

</style>