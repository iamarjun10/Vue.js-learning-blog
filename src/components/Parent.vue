<template>
    <div class="parent">
        <h5>Parent Component (Passing Data child to parent)</h5>
        <Child :getUser="getNameFromChild"/>
        <h6>Child user is {{ childUser }} </h6>
    </div>   
</template>

<script>
import Child from './Child.vue'

    export default {
        name: 'Parent',
        components: {
            Child
        },
        data() {
            return {
                childUser: ''
            }
        },
        methods: {
            getNameFromChild(name) {
                // alert(name);
                this.childUser = name;
            }
        }
    }
</script>

<style scoped>
.parent {
    background-color: cadetblue;
}
</style>