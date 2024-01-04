<template>
    <div>
        <h5>Class Binding</h5>
        <h6 class="other-class" :class="{ test: isColorful, err:true }">Binding test</h6>
        <h6 :class="applyStyle">Binding test (with function)</h6>
        <button @click="isColorful = !isColorful">Toggle Style</button>
    </div>
</template>

<script>
    export default {
        name: 'ClassBinding',
        data() {
            return {
                isColorful: true,
            }
        },
        computed: {
            // apply multiple dynamic classes using computed property & create a function of your choice
            applyStyle() {
                return {
                    test: this.isColorful,
                    err:true,
                    other: true,
                }
            }
        }
    }
</script>

<style>
    .test {
        background-color: greenyellow;
    }
    .other-class {
        border: 1px solid blue;
        width: 200px;
        padding: 10px;
    }
    .err {
        color: red;
    }
    .other {
        font-size: 25px;
    }
</style>