<template>
    <div>
        <h5>Create Life cycle methods</h5>
        <h6>name : {{ name }}</h6>
        <h6>place : {{ place }}</h6>
    </div>

    <!-- 
        beforeCreate()

        data()

        created()
        
     -->
</template>

<script>
    export default {
        name: 'Create',
        data() {
            console.log("data()");
            return {
                name: 'Arjun',
                place: 'Menkurem'
            }
        },
        beforeCreate() {
            // name is tried to changed before even the data is created. So it will not reflect the change and name will still have Arjun.
            this.name = "Naik"
            // alert("BeforeCreate() called")
            console.log("beforeCreate()");
        },
        created() {
            // but if you try to change name inside created() then the new value will be there.
            this.place = "Porvorim"
            // alert("Created() called")
            console.log("created()");
        }
    }
</script>

<style>

</style>