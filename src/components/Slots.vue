<template>
    <div>
        <h5>Slots Component</h5>
        <!-- single slot
            <slot></slot>
        -->
        <slot name="test-slot"></slot>
        <header >
            <slot name="test-slot1">
                <!-- it is absolutely possible to use slot inside slot -->
            </slot>
        </header>

        <div>
            <slot name="test-slot2">
                <button>click me</button>
                <a href="#">link to website</a>
            </slot>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'Slots',
    }
    </script>
    
    <style>
    
    </style>
    