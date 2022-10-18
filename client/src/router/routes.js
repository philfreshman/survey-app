import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import ResultView from '../views/ResultView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from "../views/NotFound.vue";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory("./"),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/results',
            name: 'results',
            component: ResultView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router
