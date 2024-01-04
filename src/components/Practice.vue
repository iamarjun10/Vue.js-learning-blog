<template>
    <div>
        <h4>Hello from Practice component</h4>
        <p>Username: {{ getUsername() }}</p>
        <!-- <User/> -->
    </div>
</template>

<script>
    import User from "../components/User.vue";

    export default {
        name: 'Practice',
        components: {
            User
        },
        data() {
            return {
                userName: 'Arjun',
                userAge: '26'
            }
        },
        methods: {
            getUsername() {
                return this.userName
            }
        }
    }
</script>

<style>

</style>