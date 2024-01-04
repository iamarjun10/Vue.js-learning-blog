<template>
    <div>
        <h5>Simple Form</h5>
        <ul>
            <li v-for="item in err" :key="item"> {{ item }} not valid</li>
        </ul>
        <form action="">
            <label for="email">Email</label>
            <input type="text" v-model="form.email" id="email" placeholder="enter email">
            <br>
            <label for="password">Password</label>
            <input type="password" v-model="form.password" id="password" placeholder="enter password">
            <br>
            <label for="country">Country</label>
            <select v-model="form.country" name="country" id="country">
                <option value="india">india</option>
                <option value="china">china</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="spain">spain</option>
            </select>
            <br>

            <h5>Technology</h5>
            <input type="checkbox" v-model="form.technology" name="" id="java" value="java"> <label for="java">Java</label>
            <input type="checkbox" v-model="form.technology" name="" id="react" value="react"> <label for="react">React</label>
            <input type="checkbox" v-model="form.technology" name="" id="vue" value="vue"> <label for="vue">Vue</label>
            <input type="checkbox" v-model="form.technology" name="" id="angular" value="angular"> <label for="angular">Angular</label>
            <input type="checkbox" v-model="form.technology" name="" id="python" value="python"> <label for="python">Python</label>
            <br>

            <h6>Gender</h6>
            <input type="radio" v-model="form.gender" name="gender" value="male" id="male">
            <label for="male">Male</label>
            &nbsp;&nbsp;
            <input type="radio" v-model="form.gender" name="gender" value="female" id="female">
            <label for="female">Female</label>
            <br>

            <button type="button" @click="userLogin">Login</button>
            <!-- <h5>{{ form }}</h5> -->
            <h5>Modifier example</h5>
            <input type="text" v-model.lazy="data">
            <h6>data is:{{ data }} [ {{ typeof(data) }} ]</h6>
            <input type="text" v-model.number="data2">
            <h6>data is:{{ data2 }} [ {{ typeof(data2) }} ]</h6>

            <!-- you can add multiple modifier at the same time -->
            <input type="text" v-model.number.lazy="data3">
            <h6>data is:{{ data3 }} [ {{ typeof(data3) }} ]</h6>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SimpleForm',
        data() {
            return {
                data: '',
                data2: '',
                data3: '',
                form: {
                    email: '',
                    password: '',
                    country: '',
                    technology: [],
                    gender: ''
                },
                err: [],
            }
        },
        methods: {
            userLogin() {
                console.log("Form", this.form)
                this.err = [];
                for(const item in this.form) {
                    if(this.form[item] === '' || this.form[item].length === 0) {
                        this.err.push(item)
                    }
                }
                if(this.err.length === 0) {
                    alert("data submitted")
                } else {
                    alert('validation error')
                }

            }
        }
    }
</script>

<style>

</style>