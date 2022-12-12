export default defineNuxtRouteMiddleware((to, from) => {
    const token = localStorage.getItem("token");
    console.log(to.path)

    if (to.path === "/results/" && token !== "demo"){
        return '/login'
    }
})
