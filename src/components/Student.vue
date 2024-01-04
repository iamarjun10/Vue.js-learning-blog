<template>
    <div>
        <h5>Student Component (Props tut)</h5>
        <h6>Name : {{ name }}</h6>
    </div>   
</template>

<script>
    export default {
        name: 'Student',
        props: {
            name: String
        },
        data() {
            return {
                studentName: 'Kartik'
            }
        },
        methods: {
            getStudentName(name) {
                alert(name);
            }
        }
    }
</script>

<style>

</style>