<template>
  <div class="typing-indicator">
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.typing-indicator {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #f9f9f9;
  border-left: 3px solid #e0e0e0;
  border-radius: 4px;
  align-self: flex-start;
  max-width: 80px;
}

.typing-dot {
  width: 8px;
  height: 8px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 2px;
  animation: typingAnimation 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(1) { 
  animation-delay: -0.32s; 
}

.typing-dot:nth-child(2) { 
  animation-delay: -0.16s; 
}

@keyframes typingAnimation {
  0%, 80%, 100% { 
    transform: translateY(0); 
    opacity: 0.5; 
  }
  40% { 
    transform: translateY(-5px); 
    opacity: 1; 
  }
}
</style>

