<template>
    <div>
        <h4>User Home Component</h4>
        <ul>
            <li v-for="item in users" :key="item.email">
                <User :user="item" :getUserDetails="getUserDetails"/>
            </li>
        </ul>
        
    </div>
</template>

<script>

    import User from './User.vue'
    export default {
        name: 'UserHome',
        components: {
            User
        },
        data() {
            return {
                users: [
                    {
                        name: 'Arjun Naik',
                        email: 'arjun@test.com'
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
        },
        methods: {
            getUserDetails(name) {
                console.log("User Details", name)
            }
        }
    }
</script>

<script>

</script>