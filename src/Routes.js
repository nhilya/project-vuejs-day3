import {createWebHistory, createRouter} from 'vue-router'
import MainHome from './components/MainHome.vue'
import API_Data_Fetch from './components/API_Data_Fetch.vue'

const routes = [
    {
        name: 'MainHome',
        path: '/',
        component: MainHome
    },
    {
        name: 'API_Data_Fetch',
        path: '/product2',
        component: API_Data_Fetch
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes
});
export default router;