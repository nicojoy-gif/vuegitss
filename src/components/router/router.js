import { createRouter, createWebHistory } from 'vue-router';
import Home from '../home.vue';
import Gitdata from '../Data/data.vue';
import User from '../user.vue'
import Userdetail from '../userDetail.vue';
import Notfound from '../Notfound.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/repo',
        name: 'Gitdata',
        component: Gitdata
    },
    {
        path: '/users',
        name: 'User',
        component: User
    },
    {
        path: '/users/:name',
        name: 'Userdetail',
        component: Userdetail
    },
    {
        path: '/:pathMatch(.*)',
        name: 'Notfound',
        component: Notfound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router