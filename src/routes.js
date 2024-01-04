import { createWebHistory, createRouter } from 'vue-router'
import Java from './components/Languages/Java.vue'
import Php from './components/Languages/Php.vue'
import Ios from './components/Languages/Ios.vue'
import Node from './components/Languages/Node.vue'

const routes = [
    {
        name: 'Java',
        path: '/',
        component: Java
    },
    {
        name: 'Php',
        path: '/Php',
        component: Php
    },
    {
        name: 'Ios',
        path: '/Ios',
        component: Ios
    },
    {
        name: 'Node',
        path: '/Node',
        component: Node
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;