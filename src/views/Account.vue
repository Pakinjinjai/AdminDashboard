<template>
    <div class="account-management-container">
      <div class="account-management">
        <h1>จัดการบัญชี</h1>
        <div v-if="!editing">
          <p><strong>ชื่อผู้ใช้ :</strong> {{ username }}</p>
          <p><strong>ส่วนสูง :</strong> {{ height }} ซม.</p>
          <p><strong>น้ำหนัก :</strong> {{ weight }} กก.</p>
          <button @click="startEditing" class="edit-button">แก้ไข</button>
        </div>
        <form v-if="editing" @submit.prevent="saveChanges">
          <label for="new-username">ชื่อผู้ใช้ใหม่ :</label>
          <input type="text" id="new-username" v-model="newUsername" class="input-field"><br>
          <label for="new-password">รหัสผ่านใหม่ :</label>
          <input type="password" id="new-password" v-model="newPassword" class="input-field"><br>
          <label for="new-height">ส่วนสูง (ซม.) :</label>
          <input type="number" id="new-height" v-model="newHeight" class="input-field"><br>
          <label for="new-weight">น้ำหนัก (กก.) :</label>
          <input type="number" id="new-weight" v-model="newWeight" class="input-field"><br>
          <button type="submit" class="save-button">บันทึก</button>
        </form>
      </div>
    </div>
  </template>
  

  
  <script setup>
  import { ref } from 'vue'
  
  const username = ref("JohnDoe")
  const height = ref(175)
  const weight = ref(70)
  const editing = ref(false)
  const newUsername = ref("")
  const newPassword = ref("")
  const newHeight = ref(null)
  const newWeight = ref(null)
  
  const startEditing = () => {
    editing.value = true
  }
  
  const saveChanges = () => {
    username.value = newUsername.value || username.value
    height.value = newHeight.value || height.value
    weight.value = newWeight.value || weight.value
    alert("Changes saved successfully!")
    editing.value = false
  }
  </script>
  
  <style scoped>
  .account-management-container {
    display: flex;
    justify-content:center;
    align-items: left;;
    height: 60vh;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .account-management {
    padding: 20px;
    font-family: Arial, sans-serif;
    text-align: center; 
  }
  
  .edit-button, .save-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .input-field {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
  
  .input-field:focus {
    outline: none;
    border: 1px solid #4CAF50;
  }
  </style>