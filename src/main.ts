import { createApp } from 'vue'
import App from './App.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/DcpDefinition/DcpDefinition/2bda45f9-8077-4c44-bcea-a84610c9a84e',
        name: '2bda45f9-8077-4c44-bcea-a84610c9a84e',
        component: App
    },
    {
        path: '/DcpDefinition/DcpDefinition',
        name: 'DcpDefinitionDcpDefinition',
        component: App
    },
    {
        path: '/DcpDefinition',
        name: 'DcpDefinition',
        component: App
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .component("Breadcrumbs", Breadcrumbs)
    .use(router)
    .mount('#app')
