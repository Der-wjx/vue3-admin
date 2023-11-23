import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/',
        name: 'About',
        component: () => import('@/views/about.vue')
    },
    {
        path: '/:catchAll(.*)',
        hidden: true,
        component: () => import('@/views/error/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
