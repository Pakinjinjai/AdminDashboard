<template>
	<div class="app flex">
		<!-- Sidebar -->
		<Sidebar />
		<!-- Content -->
		<router-view class="w-full" />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

// เรียกใช้ checkToken เมื่อคอมโพเนนต์ถูกโหลด
onMounted(() => {
  checkToken();
});

// การเรียกใช้ useRouter เพื่อให้เราสามารถเข้าถึง router ใน Vue Router
const router = useRouter();

// สร้างตัวแปร reference เพื่อเก็บค่า accessToken ใน LocalStorage
const accessToken = ref(localStorage.getItem('accessToken'));

// ฟังก์ชันสำหรับตรวจสอบว่ามี accessToken ใน LocalStorage หรือไม่
const checkToken = () => {
  if (!accessToken.value) {
		router.push('/login');
  }
};

</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

</style>