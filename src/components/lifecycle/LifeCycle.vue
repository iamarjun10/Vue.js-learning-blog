<template>
    <div>
        <!-- 
            Life cycle methods
            Create - structure is created
                beforeCreated
                created
            Mount - when data properties methods are added to the structure
                beforeMounted
                mounted
            Update
                beforeUpdate
                updated
            Unmount
                beforeUnmount
                unmounted
        -->
        <h5>Life cycle methods</h5>

        <Create/>

        <Mount/>

        <Update/>

        <button @click="showComponent = !showComponent">Toggle</button>
        <Unmount v-if="showComponent"/>

        <!-- 

        beforeCreate()

        data()

        created()

        beforeMount() - html template is not mounted

        mounted() - html template is mounted

        beforeUpdate()

        updated()


        -->
    </div>
</template>

<script>
    import Create from './Create.vue'
    import Mount from './Mount.vue'
    import Update from './Update.vue'
    import Unmount from './Unmount.vue'

    export default {
        name: 'LifeCycle',
        components: {
            Create,
            Mount,
            Update,
            Unmount
        },
        data() {
            return {
                showComponent: true
            }
        }
    }
</script>

<style>

</style>