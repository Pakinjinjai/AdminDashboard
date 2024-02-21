import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name:'',
        component: () => import('../views/router-template.vue'),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import('../views/Login/login.vue'),
            },
            {
                path: "/register",
                name: "register",
                component: () => import('../views/Register/register.vue'),
            },
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import('../views/Dashboard/dashboard.vue'),
            },
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;