<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="Vue" />
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button" @click="checkAccessToken(TableList)">
				<span class="material-icons">favorite</span>
				<span class="text">ตารางผู้ใช้งาน</span>
			</router-link>
			<router-link to="/account" class="button" @click="checkAccessToken(Account)">
				<span class="material-icons">account_circle</span>
				<span class="text">จัดการบัญชี</span>
			</router-link>
		</div>

		<div class="space"></div>

		<div class="menu">
			<router-link v-if="!hasAccessToken" to="/login" class="button">
				<span class="material-icons">keyboard_arrow_right</span>
				<span class="text">เข้าสู่ระบบ</span>
			</router-link>
			<router-link v-if="hasAccessToken" to="/login" class="button" @click="Logout">
				<span class="material-icons">keyboard_arrow_left</span>
				<span class="text">ออกจากระบบ</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router' // เพิ่มการนำเข้า useRouter
import logoURL from '../assets/Admin.png'

const router = useRouter() // ประกาศตัวแปร router

// ประกาศตัวแปร hasAccessToken โดยอ้างอิงจากค่าใน LocalStorage
const hasAccessToken = ref(localStorage.getItem("accessToken") !== null)

// กำหนด Watcher เพื่อตรวจสอบการเปลี่ยนแปลงใน LocalStorage
watch(() => localStorage.getItem("accessToken"), (newValue) => {
	// อัพเดทค่าของ hasAccessToken เมื่อมีการเปลี่ยนแปลงใน LocalStorage
	hasAccessToken.value = newValue !== null
})

//ประกาศตัวแปรตรวจสอบ Token ก็ใช้งานปุ่ม
const checkAccessToken = (callback) => {
	const accessToken = localStorage.getItem('accessToken')
	if (accessToken) {
		callback()
	} else {
		console.log("กรุณาเข้าสู่ระบบ")
		router.push('/401')
	}
}

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

const Logout = () => {
	// ลบ accessToken ที่มีอยู่ใน LocalStorage
	localStorage.removeItem("accessToken");

	// ทำการ redirect ไปยังหน้า /login
	router.push('/login');
	console.log("ออกจากระบบสำเร็จ");
}
const Account = () => {
	router.push('/account')
	console.log("จัดการบัญชี");
}
const TableList = () => {
	router.push('/')
	console.log("ตารางข้อมูลผู้ใช้งาน");
}
</script>


<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.space {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3,
	.button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}

			&.button-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;

			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>