<template>
    <div>
        <h5>Watchers</h5>
        <h4>{{ count }}</h4>
        <button @click="count = count+1">+</button>
        <button @click="count = count-1">-</button>
    </div>
    </template>
    
    <script>
    export default {
        name: 'Watchers',
        data() {
            return {
                count: 0
            }
        },
        methods: {

        },
        watch: { // watchers are similar to observables or callback.
            count(value, prev) {
                if(value>4 && value>prev)
                alert('value reached 5')
            }
        }
    }
    </script>
    
    <style>
    
    </style>
    