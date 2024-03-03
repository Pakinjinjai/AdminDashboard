<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/public/KMITL_PCC.png" alt="accpunt">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">เข้าสู่ระบบ</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form 
        class="space-y-6" 
        @submit.prevent="LOGIN_API"
        >
        <div>
          <label 
            for="username" 
            class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label>
          <div class="mt-2">
            <input 
              id="username" 
              name="username" 
              type="text" 
              autocomplete="username" 
              required
              v-model="formData.username"
              class="px-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              @keydown.enter="submitForm"
              >
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label 
              for="password" 
              class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input 
              id="password" 
              name="password" 
              type="password" 
              autocomplete="current-password" 
              required
              v-model="formData.password"
              class="px-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              @keydown.enter="submitForm"
              >
          </div>
        </div>

        <div>
          <button 
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >เข้าสู่ระบบ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseURL, LOGIN_API } from "../APIGate";
import Swal from "sweetalert2";
export default {
  name: 'Login_Page',
  component: {

  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async LOGIN_API() {
      try {
        var res = await axios({
          method: 'post',
          url: `${baseURL}${LOGIN_API}`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            username: this.formData.username,
            password: this.formData.password
          },
        });
        if (res.status != 200) {
          console.log('เข้าสูระบบไม่สำเร็จ');
        } else {
          console.log('เข้าสู่ระบบสำเร็จ');
          console.log(res.data);
          console.log(res.status);
          localStorage.setItem("accessToken", res.data.accessToken);
          window.location.reload();
          this.$router.push('/');
        }
      } catch (error) {
        console.log("ตอ", error);
        Swal.fire({
          icon: "error",
          title: "ขออภัย... เจอตอ",
          text: "รหัสผ่านของคุณไม่ถูกต้อง",
        });
        // Reset form data after user closes the alert
        this.formData.username = '';
        this.formData.password = '';
      }
    },
    handleEnter(event) {
      if (event.key === 'Enter') {
        this.LOGIN_API();
      }
    }
  }
};
</script>

<style></style>