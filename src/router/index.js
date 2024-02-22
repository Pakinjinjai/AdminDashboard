import { createRouter, createWebHistory } from 'vue-router'
import TableList from '../views/TableList.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: TableList
		},
		{
			path: '/account',
			component: () => import('../views/Account.vue')
		},
		{
			path:'/login',
			component: () => import('../views/Login.vue')
		},
		{
			path:'/register',
			component: () => import('../views/Register.vue')
		},
	],
})

export default router