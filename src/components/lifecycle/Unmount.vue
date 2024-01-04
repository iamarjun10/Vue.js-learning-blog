<template>
    <div>
        <h5>Unmount Life cycle methods</h5>
        <h6 ref="headerRef">unmount example</h6>
    </div>

    <!-- 
        these lifecycle methods are used to free up the memory by killing unnecessary elements/properties
     -->
</template>

<script>
    export default {
        name: 'Unmount',
        data() {
            return {
                name: 'Virat Kohli'
            }
        },
        beforeUnmount() {
            // used when you need html content to perform something before the component is destroyed
            // ui is available
            // called before removing the component
            console.log("beforeUnmount()", this.$refs['headerRef'])
            console.log("beforeUnmount() name ", this.name)
        },
        unmounted() {
            // used when you dont need html content to perform something this is after component is destroyed
            // ui is not available
            // called after component is destroyed
            console.log("unmounted()", this.$refs['headerRef']);
            console.log("unmounted() name ", this.name)
        }
    }
</script>

<style>

</style>