import { createRouter, createWebHistory } from 'vue-router'
import Unauthorized from "../views/Unauthorized.vue"
import RegisterView from '../views/RegisterView.vue'
import ResultView from '../views/ResultView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import NotFound from "../views/NotFound.vue"
import unauthorized from "../views/Unauthorized.vue";
import Authenticate from "../services/Authentication.js";

let router = createRouter({
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
            path: '/unauthorized',
            name: 'unauthorized',
            component: Unauthorized
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },

    ]
})

router.beforeEach(async (to, from) => {
    if (to.name !== 'results'){
        return
    }


    const isAuthenticated = await Authenticate()

    // const isAuthenticated =
    if (!isAuthenticated) {
        console.log("user unauthorized")
        return { name: 'login' }
    }
})
export default router
