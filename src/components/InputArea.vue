<template>
  <div class="input-container">
    <div class="input-wrapper">
      <input 
        type="text" 
        v-model="inputValue"
        @keypress="handleKeyPress"
        placeholder="输入关于单片机的问题，例如：单片机的基本组成有哪些？" 
        autocomplete="off"
      />
      <button @click="handleSend" id="send-button">
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['send-message'])
const inputValue = ref('')

const handleSend = () => {
  if (inputValue.value.trim()) {
    emit('send-message', inputValue.value.trim())
    inputValue.value = ''
  }
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    handleSend()
  }
}
</script>

<style scoped>
.input-container {
  padding: 25px 30px;
  border-top: 1px solid #f0f0f0;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.input-wrapper {
  flex: 1;
  display: flex;
  background-color: #f9f9f9;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  border-color: #4a8cff;
  box-shadow: 0 0 0 3px rgba(74, 140, 255, 0.1);
}

input {
  flex: 1;
  border: none;
  padding: 18px 20px;
  font-size: 0.95rem;
  font-family: 'Noto Sans SC', sans-serif;
  background-color: transparent;
  color: #333;
  outline: none;
  line-height: 1.5;
}

#send-button {
  background-color: #4a8cff;
  color: white;
  border: none;
  padding: 0 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

#send-button:hover {
  background-color: #3a7cff;
}

@media (max-width: 768px) {
  .input-container {
    padding: 20px;
  }
}
</style>

