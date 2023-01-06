export default defineNuxtRouteMiddleware((to, from) => {
    const token = localStorage.getItem("token");


    // if (to.path === "/results/" && token !== "demo" ||
    //     to.path === "/results" && token !== "demo"){
    //     return '/login'
    // }

    if (to.path === "/results" && token === undefined){
        return '/login'
    }
})
