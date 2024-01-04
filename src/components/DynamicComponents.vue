<template>
    <div>
        <h5>Dynamic Component loading</h5>
        <button @click="tab = 'Java'">Load Java </button>
        <button @click="tab = 'Ios'">Load iOS</button>
        <button @click="tab = 'Node'">Load Node</button>

        <!-- 
            <Java></Java>
            <Ios></Ios>
            <Node></Node> 
        -->

        <!-- to load components dynamically -->
        <component :is="tab"/>
    </div>
</template>

<script>
    import Java from './Languages/Java.vue'
    import Ios from './Languages/Ios.vue'
    import Node from './Languages/Node.vue'

    export default {
        name: 'DynamicComponent',
        components: {
            Java,
            Ios,
            Node
        },
        data() {
            return {
                tab: 'Java'
            }
        }
    }
</script>

<style>

</style>