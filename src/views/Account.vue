<template>
  <div class="account-management">
    <h1>Account Management</h1>
    <div v-if="!editing">
      <p><strong>Username:</strong> {{ username }}</p>
      <p><strong>Password:</strong> *********</p>
      <button @click="startEditing" class="edit-button">Edit</button>
    </div>
    <form v-if="editing" @submit.prevent="saveChanges">
      <label for="new-username">New Username:</label>
      <input type="text" id="new-username" v-model="newUsername" class="input-field"><br>
      <label for="new-password">New Password:</label>
      <input type="password" id="new-password" v-model="newPassword" class="input-field"><br>
      <label for="confirm-password">Confirm New Password:</label>
      <input type="password" id="confirm-password" v-model="confirmPassword" class="input-field"><br>
      <div class="button-group">
        <button type="submit" class="save-button">Save</button>
        <button @click="cancelEditing" class="cancel-button">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref("JohnDoe")
const password = ref("password") 
const editing = ref(false)
const newUsername = ref("")
const newPassword = ref("")
const confirmPassword = ref("")

const startEditing = () => {
  editing.value = true
}

const saveChanges = () => {
  if (newPassword.value !== confirmPassword.value) {
    alert("New passwords do not match.")
    return
  }

  username.value = newUsername.value || username.value
  password.value = newPassword.value || password.value 
  alert("Changes saved successfully!")
  editing.value = false
}

const cancelEditing = () => {
  editing.value = false
  newUsername.value = ""
  newPassword.value = ""
  confirmPassword.value = ""
}
</script>

<style scoped>
.account-management {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.edit-button, .save-button, .cancel-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px;
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

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>