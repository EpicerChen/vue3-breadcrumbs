import { createApp } from 'vue'
import App from './App.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/a',
        name: '1st',
        component: App
    },
    {
        path: '/a/b',
        name: '2nd',
        component: App
    },
    {
        path: '/a/b/c',
        name: '3rd',
        component: App
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .component("Breadcrumbs", Breadcrumbs)
    .use(router)
    .mount('#app')
