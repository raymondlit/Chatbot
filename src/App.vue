<template>
  <div class="app-container">
    <!-- 原研哉风格的装饰线条 -->
    <div class="decoration-line"></div>
    <div class="decoration-line"></div>
    <div class="decoration-line"></div>
    
    <Header />
    <CourseTags @tag-click="handleTagClick" />
    <ChatContainer ref="chatContainerRef" />
    <InputArea @send-message="handleSendMessage" />
    <div class="hint">
      基于原研哉设计理念：极简、留白、呼吸感 | 专注于单片机知识解答
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import CourseTags from './components/CourseTags.vue'
import ChatContainer from './components/ChatContainer.vue'
import InputArea from './components/InputArea.vue'

const chatContainerRef = ref(null)

const handleTagClick = (question) => {
  if (chatContainerRef.value) {
    chatContainerRef.value.sendMessage(question)
  }
}

const handleSendMessage = (message) => {
  if (chatContainerRef.value) {
    chatContainerRef.value.sendMessage(message)
  }
}
</script>

<style scoped>
.app-container {
  width: 100%;
  max-width: 900px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 90vh;
  min-height: 600px;
  position: relative;
  border: 1px solid #f0f0f0;
}

/* 原研哉风格装饰元素 */
.decoration-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #f0f0f0;
  z-index: -1;
}

.decoration-line:nth-child(1) {
  top: 20%;
  left: 0;
  width: 80%;
}

.decoration-line:nth-child(2) {
  top: 50%;
  right: 0;
  width: 60%;
}

.decoration-line:nth-child(3) {
  bottom: 30%;
  left: 0;
  width: 40%;
}

.hint {
  text-align: center;
  color: #aaa;
  font-size: 0.85rem;
  padding: 15px;
  font-weight: 300;
}

@media (max-width: 768px) {
  .app-container {
    height: 85vh;
    min-height: 500px;
  }
}
</style>

