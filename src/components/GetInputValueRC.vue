<template>
    <div>
        <h5> Input Value from Radio box and checkbox</h5>
        <button @click="clearData()">Clear Data</button>

        <div>
            <h5>Technology</h5>
            <input type="checkbox" v-model="technology" name="" id="java" value="java"> <label for="java">Java</label>
            <input type="checkbox" v-model="technology" name="" id="react" value="react"> <label for="react">React</label>
            <input type="checkbox" v-model="technology" name="" id="vue" value="vue"> <label for="vue">Vue</label>
            <input type="checkbox" v-model="technology" name="" id="angular" value="angular"> <label for="angular">Angular</label>
            <input type="checkbox" v-model="technology" name="" id="python" value="python"> <label for="python">Python</label>
            
            <h6>selected technologies: {{ technology }}</h6>

            <h5>Who am I?</h5>
            
            <h6 v-if="profession">I'm {{ profession }}</h6>
            <h6 v-else>Please select profession</h6>

            <input type="radio" v-model="profession" name="profession" id="student" value="student"> <label for="student">Student</label>
            <input type="radio" v-model="profession" name="profession" id="professor" value="professor"> <label for="professor">Professor</label>
            <input type="radio" v-model="profession" name="profession" id="developer" value="developer"> <label for="developer">Developer</label>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GetInputValueRC',
        data() {
            return {
                technology: [],
                profession: null,
            }
        },
        methods: {
            clearData() {
                this.profession = null
                this.technology = []
            }
        }
    }
</script>

<style>

</style>