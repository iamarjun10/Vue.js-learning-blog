<template>
    <div>
        <h3>Home component</h3>
        <h5>{{ msg }}</h5>
        <h6>username: {{ username }}</h6>
        <h6>email: {{ email }}</h6>
        <h6>mobile: {{ mobile = 99889956265 }}</h6>
        <h6>Name: {{ getName() }}</h6>
        <h6>get email: {{ getEmail() }}</h6>
        <h6>displayPassedData: {{ displayPassedData('Testing argument') }}</h6>
        <h6>getEmployeeName {{ getEmployeeName() }}</h6>
        <h6>getData: {{ getData() }}</h6>
        <h6>getData email: {{ getData().email }}</h6>

        <button @click="incrementCount();getDataOnClick('button clicked')">Increment count!</button>
        <h5>count: {{ count }}</h5>
        <button @dblclick="getDataOnClick('Double clicked')">Click me!</button>
        <h3 class="mouse-move-section" @mousemove="mouseMoveTest()">Mouse move test - Please move mouse over this section</h3>
        <div v-html="tag1">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg: String
    },
    data() {
        return {
            username: 'test',
            mobile: 123456,
            email: 'test@gmail.com',
            getName: function () {
                console.log('hey, console log check');
                return 'Virat Kohli'
            },
            getEmail: function () {
                return this.email;
            },
            displayPassedData(value) {
                return value;
            },
            count: 0,
            tag1: '<h5>html binding example</h5>'
        }
    },
    methods: {
        getEmployeeName() {
            return 'Arjun Naik'
        },
        getData() {
            return {
                name: this.username,
                mobile: this.mobile,
                email: this.email
            }
        },
        getDataOnClick(value) {
            alert(value)
        },
        mouseMoveTest() {
            console.log("mouseMoveTest() called")
        },
        incrementCount() {
            this.count += 1;
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}

h5 {
    color: green;
    font-size: 20px;
}

.mouse-move-section {
    background-color: gray;
}
</style>
