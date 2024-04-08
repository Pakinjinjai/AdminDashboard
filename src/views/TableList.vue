<template>
	<main id="TableList">
        <div class="grid grid-cols">
		    <h1 class="p-8">ตารางผู้ใช้งาน</h1>
            <table class="border-collapse border border-slate-400">
                <thead>
                    <tr class="text center p-8">
                        <th class="border border-slate-300 p-4">ID</th>
                        <th class="border border-slate-300 ">USERNAME</th>
                        <th class="border border-slate-300 ">รูปที่ถูกอัพโหลด</th>
                </tr>
                </thead>
                
                    <tbody class="divide-y divide-gray-200 ">
                     <tr v-for="user in users" :key="user.id">
                        <td class="border border-slate-300 text-center p-4">{{user.id}}</td>
                        <td class="border border-slate-300 text-center">{{user.username}}</td>
                        <td class="border border-slate-300 text-center">
                            <button
                            @click="showModal(user)"
                            class="px-6 py-2 text-white bg-gray-600 rounded shadow"
                            type="button">
                                Show image
                                </button>
                            </td>             
                    </tr>
                </tbody>
            </table>
        </div>

        
        
	</main>
</template>

<script > 

export default {
    data() {
        return {
            users: [
                { id:'1', username: 'vicy'},
                { id:'2', username: 'Vic'},
                { id:'3', username: 'Gina' },
                { id:'4', username: 'Jessi'},
                { id:'5', username: 'Jay'}
            ]
        };
    }
    
};
</script>

<style>
.grid {
    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
}
h1 {
    font-size: 20px;
}
table {
    
}
</style>