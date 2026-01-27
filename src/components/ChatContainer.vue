<template>
  <div class="chat-container" ref="containerRef">
    <Message 
      v-for="(msg, index) in messages" 
      :key="index"
      :content="msg.content" 
      :is-user="msg.isUser" 
    />
    <TypingIndicator v-if="isTyping" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import Message from './Message.vue'
import TypingIndicator from './TypingIndicator.vue'
import { sendMessageToDeepSeek, isApiKeyConfigured } from '../services/deepseekApi'

const messages = ref([])
const isTyping = ref(false)
const containerRef = ref(null)
const apiKeyConfigured = ref(false)

// 初始欢迎消息
onMounted(() => {
  apiKeyConfigured.value = isApiKeyConfigured()
  
  messages.value.push({
    content: `您好！我是单片机原理与应用课程的答疑助手。

我可以为您解答关于单片机结构、工作原理、编程应用等相关问题。例如：

• 单片机的基本概念和分类
• 8051单片机的内部结构
• 汇编语言与C语言编程
• 中断系统、定时器、串行通信等外围设备
• 单片机在实际项目中的应用

请直接输入您的问题，或点击上方标签快速提问。`,
    isUser: false
  })
  scrollToBottom()
})

const scrollToBottom = () => {
  nextTick(() => {
    if (containerRef.value) {
      containerRef.value.scrollTop = containerRef.value.scrollHeight
    }
  })
}

watch(messages, () => {
  scrollToBottom()
}, { deep: true })

// 构建对话历史（用于上下文）
const buildConversationHistory = () => {
  return messages.value
    .filter(msg => msg.isUser || (!msg.isUser && msg.content))
    .slice(0, -1) // 排除最后一条（当前用户消息）
    .map(msg => ({
      role: msg.isUser ? 'user' : 'assistant',
      content: msg.content
    }))
}

const sendMessage = async (question) => {
  if (!question || !question.trim()) return
  
  // 添加用户消息
  const userMessage = {
    content: question.trim(),
    isUser: true
  }
  messages.value.push(userMessage)
  
  // 显示机器人正在输入
  isTyping.value = true
  
  try {
    // 构建对话历史
    const conversationHistory = buildConversationHistory()
    
    // 调用 DeepSeek API
    const response = await sendMessageToDeepSeek(question.trim(), conversationHistory)
    
    // 添加机器人回复
    messages.value.push({
      content: response,
      isUser: false
    })
  } catch (error) {
    console.error('获取回复失败:', error)
    
    // 显示错误消息
    let errorMessage = '抱歉，我暂时无法回答您的问题。'
    
    if (error.message.includes('API Key')) {
      errorMessage = 'API Key 未配置，请检查 .env 文件中的 VITE_DEEPSEEK_API_KEY 设置。'
    } else if (error.message.includes('401') || error.message.includes('403')) {
      errorMessage = 'API Key 无效或已过期，请检查您的 API Key 配置。'
    } else if (error.message.includes('429')) {
      errorMessage = 'API 请求过于频繁，请稍后再试。'
    } else if (error.message.includes('网络') || error.message.includes('fetch')) {
      errorMessage = '网络连接失败，请检查您的网络连接。'
    }
    
    messages.value.push({
      content: `${errorMessage}\n\n错误详情: ${error.message}`,
      isUser: false
    })
  } finally {
    isTyping.value = false
  }
}

defineExpose({
  sendMessage
})
</script>

<style scoped>
.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #fefefe;
}

@media (max-width: 768px) {
  .chat-container {
    padding: 20px;
  }
}
</style>

