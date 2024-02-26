<template>
    <body class="bg-white">
        <div class="flex items-center justify-center py-12">
            <div class="bg-white rounded-md flex items-center justify-center mx-4 md:w-2/3">
                <div class="flex flex-col items-center py-16">
                    <img class="px-4 hidden md:block" src="https://cdni.iconscout.com/illustration/premium/thumb/website-error-401-authorization-required-1841913-1561836.png?f=webp" />
                    <img class="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" />
                    <h1 class="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                    <p class="px-4 pb-10 text-base leading-none text-center text-gray-600">ดูเหมือนว่าตอนนี้คุณยังไม่ได้เข้าสู่ระบบก่อนเข้าใช้งาน</p>
                    <div class="flex">
                        <button 
                            @click="login"
                            class="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">เข้าสู่ระบบ</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: "401_Page",
    data() {
        return {            
        }
    },
    methods: {     
        login(){
            this.$router.push('/login');
            console.log('เข้าสู่ระบบ');
        }, 
    },
    mounted() {}
};
</script>

<style scoped>

</style>
