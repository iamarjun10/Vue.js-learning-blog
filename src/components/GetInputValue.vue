<template>
    <div>
        <h5> Get Input Value </h5>
        <input type="text" v-model="email" placeholder="enter email">
        <br>
        <input type="password" v-model="password" placeholder="enter password">
        <br>
        <button type="button" @click="getData()">Get values</button>
    </div>
</template>

<script>
    export default {
        name: 'GetInputValue',
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            getData() {
                console.log("Email: "+ this.email + '\nPassword: '+ this.password)
            }
        }
    }
</script>

<style>

</style>