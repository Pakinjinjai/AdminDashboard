<template>
	<main id="TableList">
		<h1 clss="">ตารางผู้ใช้งาน</h1>
        <div class="grid grid-cols">
            <table class="table-auto">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">USERNAME</th>
                        <th class="text-center ">รูปที่ถูกอัพโหลด</th>
                </tr>
                </thead>
                
                    <tbody class="divide-y divide-gray-200">
                     <tr v-for="user in users" :key="user.id">
                        <td class="text-center">{{user.id}}</td>
                        <td class="text-center">{{user.username}}</td>
                        <td class="text-center">
                            <button
                            @click="isOpen = true"
                            class="px-6 py-2 text-white bg-gray-600 rounded shadow"
                            type="button">
                                {{user.image}}
                                </button>
                            </td>             
                    </tr>
                </tbody>
            </table>
        </div>
	</main>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id:'1', username: 'vicy ', image:'Show image' },
                { id:'2', username: 'Vic', image:'Show image'},
                { id:'3', username: 'Gina', image:'Show image' },
                { id:'4', username: 'Jessi', image:'Show image'},
                { id:'5', username: 'Jay', image:'Show image' }
            ]
        };
    }
};
</script>