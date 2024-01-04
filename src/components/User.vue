<template>
    <div>
        <div class="user-section">
            <h5>User component</h5>
            <h6>{{ user.name }}</h6>
            <button @click="getUserDetails(user.name)">Alert Name</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'User',
        props: {
            user: Object,
            getUserDetails: Function
        }
    }
</script>

<style scoped>
.user-section {
    background-color: skyblue;
    padding: 10px;
    border-bottom: 1px solid grey;
    margin-bottom: 5px;
}
</style>