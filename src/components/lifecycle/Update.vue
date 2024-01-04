<template>
    <div>
        <h5>Update Life cycle methods</h5>
        <h6 ref="countRef"> counter: {{ counter }}</h6>
        <button @click="counter +=1">Update count</button>
    </div>

    <!-- 

        lifecycle beforeUpdated() and updated() are related to to the ui update
        Applications : Login authentication, age authentication, so on etc.

        beforeUpdate()

        updated()
     -->
</template>

<script>
    export default {
        name: 'Update',
        data() {
            return {
                counter: 0
            }
        },
        beforeUpdate() {
            console.log("beforeUpdate() counter", this.counter)
            console.log("beforeUpdate() countRef", this.$refs['countRef'].textContent)
        },
        updated() {
            console.log("updated() counter", this.counter)
            console.log("updated() countRef", this.$refs['countRef'].textContent)
        }
    }
</script>

<style>

</style>