<template>
    <div>
        <h5>For Loop And List</h5>
        <ul>
            <li v-for="item in technology" :key="item"> {{ item }} </li>
        </ul>
        <br>
        <ul>
            <li v-for="user in users" :key="user.email"> {{ user.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ForLoopAndList',
        data() {
            return {
                technology: ['java', 'angular', 'react', 'vue', 'python'],
                users: [
                    {
                        name: 'Arjun Naik',
                        email: 'arjun@gmail.com'
                    },
                    {
                        name: 'Sahil Naik',
                        email: 'sahil@gmail.com'
                    },
                    {
                        name: 'Saidatta Sawant',
                        email: 'saidatta@gmail.com'
                    },
                    {
                        name: 'Subham Mishra',
                        email: 'shubham@gmail.com'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>