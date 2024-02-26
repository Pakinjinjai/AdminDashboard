import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/TableList.vue'),
	  
	  // เพิ่ม meta field เพื่อระบุว่าเส้นทางนี้ต้องการการยืนยันตัวตน
     
	  meta: { requiresAuth: true } 
    },
    {
      path: '/account',
      component: () => import('../views/Account.vue'),
	  
	  // เพิ่ม meta field เพื่อระบุว่าเส้นทางนี้ต้องการการยืนยันตัวตน

    //   meta: { requiresAuth: true } 
    },
    {
      path:'/login',
      component: () => import('../views/Login.vue')
    },
  ],
});

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('accessToken');
  
  if (to.meta.requiresAuth && !accessToken) {
    // ถ้าเส้นทางต้องการการยืนยันตัวตนและไม่มี accessToken ใน localStorage ให้ redirect ไปที่หน้า login
    next('/login');
  } else {
    // ในกรณีอื่น ๆ ให้ทำการเปลี่ยนเส้นทางตามปกติ
    next();
  }
});

export default router;
