<template>
    <div>
        <h5>Input Reference tut</h5>
        <input type="text" ref="nameInput">
        <button @click="getData">Click me</button>
    </div>
</template>

<script>
    export default {
        name: 'InputReference',
        methods: {
            getData() {
                this.$refs.nameInput.focus()
                let val = this.$refs.nameInput.value;
                console.log("val", val)
                this.$refs.nameInput.style.color = 'red';
            }
        }
    }
</script>

<style>

</style>