<template>
    <div class="child">
        <h5>Child Component</h5>
        <button @click="getUser(studentName)">send user name to parent</button>
    </div>   
</template>

<script>
    export default {
        name: 'Child',
        props: {
            getUser: Function
        },
        data() {
            return {
                studentName: 'Kartik'
            }
        }
    }
</script>

<style scoped>
    .child {
     background-color: aquamarine;   
    }
</style>