/**
 * DeepSeek API 服务
 * 用于与 DeepSeek API 进行交互
 */

const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY
const API_URL = import.meta.env.VITE_DEEPSEEK_API_URL || 'https://api.deepseek.com/v1/chat/completions'

/**
 * 发送消息到 DeepSeek API 并获取回复
 * @param {string} message - 用户消息
 * @param {Array} conversationHistory - 对话历史记录 [{role: 'user'|'assistant', content: string}]
 * @returns {Promise<string>} - AI 回复内容
 */
export async function sendMessageToDeepSeek(message, conversationHistory = []) {
  if (!API_KEY) {
    throw new Error('DeepSeek API Key 未配置，请检查 .env 文件')
  }

  try {
    // 构建消息历史，包含系统提示和对话历史
    const messages = [
      {
        role: 'system',
        content: `你是一个专业的单片机原理与应用课程答疑助手。你的任务是帮助学生理解单片机相关的知识。

你的回答应该：
1. 准确、专业，基于单片机原理与应用的知识
2. 清晰易懂，适合初学者理解
3. 提供具体的例子和实际应用场景
4. 如果问题超出单片机范围，礼貌地引导回相关话题

请用中文回答，保持友好和专业的教学风格。`
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message
      }
    ]

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
        temperature: 0.7,
        max_tokens: 2000,
        stream: false
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.error?.message || 
        `API 请求失败: ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()
    
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim()
    } else {
      throw new Error('API 返回数据格式错误')
    }
  } catch (error) {
    console.error('DeepSeek API 错误:', error)
    throw error
  }
}

/**
 * 检查 API Key 是否配置
 * @returns {boolean}
 */
export function isApiKeyConfigured() {
  return !!API_KEY
}

