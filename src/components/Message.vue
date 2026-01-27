<template>
  <div :class="['message', isUser ? 'user-message' : 'bot-message']">
    <div class="message-header">
      <div :class="isUser ? 'user-icon' : 'bot-icon'">
        <i :class="isUser ? 'fas fa-user' : 'fas fa-microchip'"></i>
      </div>
      <div>{{ isUser ? '您' : '单片机答疑助手' }}</div>
    </div>
    <div class="message-content" v-html="formattedContent"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  isUser: {
    type: Boolean,
    default: false
  }
})

const formattedContent = computed(() => {
  // 将换行符转换为段落
  let formattedText = props.content.replace(/\n/g, '</p><p>')
  // 将 • 开头的行转换为列表项
  formattedText = formattedText.replace(/•\s+(.+?)(?=\n|$)/g, '<li>$1</li>')
  // 如果包含列表项，添加ul标签
  if (formattedText.includes('<li>')) {
    formattedText = formattedText.replace(/<p><li>/g, '<p><ul><li>')
    formattedText = formattedText.replace(/<\/li><\/p>/g, '</li></ul></p>')
  }
  return `<p>${formattedText}</p>`
})
</script>

<style scoped>
.message {
  max-width: 80%;
  padding: 18px 22px;
  border-radius: 4px;
  position: relative;
  animation: fadeIn 0.4s ease-out;
  line-height: 1.7;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.user-message {
  align-self: flex-end;
  background-color: #f0f7ff;
  border-left: 3px solid #4a8cff;
  color: #333;
  box-shadow: 0 2px 8px rgba(74, 140, 255, 0.08);
}

.bot-message {
  align-self: flex-start;
  background-color: #f9f9f9;
  border-left: 3px solid #e0e0e0;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.message-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.85rem;
}

.user-message .message-header {
  justify-content: flex-end;
}

.bot-icon, .user-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 0.9rem;
}

.bot-icon {
  background-color: #f0f0f0;
  color: #666;
}

.user-icon {
  background-color: #4a8cff;
  color: white;
}

.message-content {
  font-size: 0.95rem;
}

.message-content :deep(p) {
  margin-bottom: 10px;
}

.message-content :deep(p:last-child) {
  margin-bottom: 0;
}

.message-content :deep(code) {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
}

.message-content :deep(pre) {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 10px 0;
  font-family: monospace;
  font-size: 0.9em;
  line-height: 1.5;
}

.message-content :deep(ul) {
  margin-left: 20px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .message {
    max-width: 90%;
    padding: 15px 18px;
  }
}
</style>

