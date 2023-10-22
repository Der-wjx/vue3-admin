import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/home.vue'
import Index from '@/views/index.vue'
import About from '@/views/about.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
