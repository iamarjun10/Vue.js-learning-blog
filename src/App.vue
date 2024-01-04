<template>
  <router-link to="/Php">Php</router-link> 
  <router-link to="/">Java</router-link> 
  <router-link to="/Node">Node</router-link> 
  <router-link to="/Ios">iOS</router-link> 
  <router-view></router-view>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="custom-row">
    <div class="col-4">
      <HelloWorld class="com-separator" msg="Welcome, Arjun"/>
    </div>
    <div class="col-4">
      <Home class="com-separator" msg="input from app component"/>
    </div>
    <div class="col-4">
      <TwoWayBinding class="com-separator"/>
    </div>
  </div>

  <div class="custom-row">
    <div class="col-4">
      <GetInputValue class="com-separator"/>
    </div>
    <div class="col-4">
      <GetInputValueRC class="com-separator"/>
    </div>
    <div class="col-4">
      <ForLoopAndList class="com-separator"/>
    </div>
  </div>

  <div class="custom-row">
    <div class="col-4">
      <PassDataToChildComponent class="com-separator" name="Arjun"
        :user="user" :getData="getData"
      />
    </div>
    <div class="col-4">
      <UserHome class="com-separator" />
    </div>
    <div class="col-4">
      <ClassBinding class="com-separator" />
    </div>
  </div>

  <div class="custom-row">
    <div class="col-4">
      <Student class="com-separator"
       :name="user.name"/>
    </div>
    <div class="col-4">
      <Teacher class="com-separator" 
      :name="user.name"/>
    </div>
    <div class="col-4">
      <Parent class="com-separator" />
    </div>
  </div>

  <div class="custom-row">
    <div class="col-4">
      <InputReference class="com-separator" />
    </div>
    <div class="col-4">
      <SimpleForm class="com-separator" /> 
    </div>
    <div class="col-4">
      <NonPropsData class="com-separator" id="user-cmp" name="Arjun"/>
    </div>
  </div>

  <div class="custom-row">
    <div class="col-4">
      <ComputedProperty class="com-separator" />
    </div>
    <div class="col-4">
      <Watchers class="com-separator" /> 
    </div>
    <div class="col-4">
      <Slots class="com-separator"> 
        <!-- for passing single tag without name -->
        <!-- <h1>Hey passing html tag to demonstrate slots</h1> 
        <a href="#">link test</a> -->

        <!-- for passing multiple slots and using it based on the slot name 
          we have to use in a template
        -->
        <template v-slot:test-slot>
          <h1>slot with name test-slot</h1>
        </template>
        <template v-slot:test-slot1>
          <h1>slot with name test-slot1</h1>
        </template>
        <template v-slot:test-slot2>
          <button>Buy now</button>
        </template>
      </Slots>

      <Slots class="com-separator"> 
        <template v-slot:test-slot>
          <h1>slot with name test-slot</h1>
        </template>
        <template v-slot:test-slot1>
          <h1>slot with name test-slot1</h1>
        </template>
        <template v-slot:test-slot2>
          <!-- if you dont pass anything then it will take from the slot -->
        </template>
      </Slots>

      <Slots class="com-separator"> 
        <template v-slot:test-slot>
          <h1>slot with name test-slot</h1>
        </template>
        <template v-slot:test-slot1>
          <h1>slot with name test-slot1</h1>
        </template>
        <template v-slot:test-slot2>
          <button>Buy now</button>
          <button>Sign up </button>
        </template>
      </Slots>
    </div>
  </div>

  <div class="custom-row">
    <div class="col-4">
      <DynamicComponent class="com-separator" />
    </div>
    <div class="col-4">
      <LifeCycle/>
    </div>
    <div class="col-4">
      <Practice/>
      <!-- <NonPropsData class="com-separator" id="user-cmp" name="Arjun"/> -->
    </div>
  </div>

  <Teleport to="#footer">
    <Footer/> 
  </Teleport>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue';
import TwoWayBinding from './components/TwoWayBinding.vue'
import GetInputValue from './components/GetInputValue.vue'
import GetInputValueRC from './components/GetInputValueRC.vue'
import ForLoopAndList from './components/ForLoopAndList.vue'
import PassDataToChildComponent from './components/PassDataToChildComponent.vue'
import UserHome from './components/UserHome.vue'
import ClassBinding from './components/ClassBinding.vue'
import Student from './components/Student.vue'
import Teacher from './components/Teacher.vue'
import Parent from './components/Parent.vue'
import InputReference from './components/InputReference.vue'
import SimpleForm from './components/SimpleForm.vue'
import NonPropsData from './components/NonPropsData.vue'
import ComputedProperty from './components/ComputedProperty.vue'
import Watchers from './components/Watchers.vue'
import Slots from './components/Slots.vue'
import DynamicComponent from './components/DynamicComponents.vue'
import Footer from './components/Footer/Footer.vue'
import LifeCycle from './components/lifecycle/LifeCycle.vue'
import Practice from './components/Practice.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    TwoWayBinding,
    GetInputValue,
    GetInputValueRC,
    ForLoopAndList,
    PassDataToChildComponent,
    UserHome,
    Practice,
    ClassBinding,
    Student,
    Teacher,
    Parent,
    InputReference,
    SimpleForm,
    NonPropsData,
    ComputedProperty,
    Watchers,
    Slots,
    DynamicComponent,
    LifeCycle,
    Footer
  },
  data() {
    return {
        testVariable: 'IamTest',
        user: {
          name: 'arnaik',
          email: 'arjun@gmail.com'
        }
    }
  },
  methods: {
    getData() {
      console.log("getData() from app component")
    }
  }

}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.custom-row {
  display: flex;
  flex-wrap: wrap;
}

.custom-col {
  flex: 0 0 calc(33.33% - 10px); /* Adjust the width as needed */
  margin: 5px; /* Add spacing between columns */
}
.com-separator{
  background-color: #80eceb;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
}
</style>
