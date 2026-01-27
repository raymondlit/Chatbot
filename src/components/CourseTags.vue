<template>
  <div class="course-tags">
    <div 
      v-for="tag in tags" 
      :key="tag.question"
      class="tag" 
      @click="handleClick(tag.question)"
    >
      {{ tag.label }}
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['tag-click'])

const tags = [
  { label: '什么是单片机', question: '什么是单片机？' },
  { label: '8051结构', question: '8051单片机的结构' },
  { label: '应用领域', question: '单片机的应用领域' },
  { label: '与微处理器的区别', question: '单片机与微处理器的区别' },
  { label: '编程语言', question: '单片机编程语言' },
  { label: '中断系统', question: '中断系统的工作原理' },
  { label: '定时器/计数器', question: '定时器/计数器的应用' },
  { label: '串行通信', question: '串行通信接口' }
]

const handleClick = (question) => {
  emit('tag-click', question)
}
</script>

<style scoped>
.course-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
  padding: 0 30px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.tag {
  padding: 8px 16px;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag:hover {
  background-color: #e9e9e9;
  color: #333;
}

@media (max-width: 768px) {
  .course-tags {
    padding: 0 20px 15px;
  }
}
</style>

