# 单片机原理与应用课程答疑机器人

基于 Vue 3 + Vite 构建的单片机课程答疑聊天机器人应用。

## 功能特性

- 🎨 极简设计风格，遵循原研哉设计理念
- 💬 实时问答交互界面，集成 DeepSeek AI API
- 🤖 智能对话，支持上下文理解
- 🏷️ 快速标签提问
- 📱 响应式设计，支持移动端
- ⚡ 基于 Vite 的快速开发体验

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **DeepSeek API** - AI 对话接口
- **Font Awesome** - 图标库
- **Noto Sans SC** - 中文字体

## 项目结构

```
Chatbot/
├── index.html          # 入口 HTML 文件
├── package.json        # 项目配置和依赖
├── vite.config.js      # Vite 配置文件
├── .env                # 环境变量（API Key，不提交到 Git）
├── src/
│   ├── main.js         # Vue 应用入口
│   ├── App.vue         # 根组件
│   ├── style.css       # 全局样式
│   ├── components/     # Vue 组件
│   │   ├── Header.vue           # 头部组件
│   │   ├── CourseTags.vue       # 课程标签组件
│   │   ├── ChatContainer.vue    # 聊天容器组件
│   │   ├── Message.vue          # 消息组件
│   │   ├── TypingIndicator.vue  # 输入指示器组件
│   │   └── InputArea.vue        # 输入区域组件
│   ├── services/      # 服务层
│   │   └── deepseekApi.js       # DeepSeek API 服务
│   └── data/
│       └── qaDatabase.js        # 问答数据库（已弃用，保留作为备用）
└── README.md           # 项目说明文档
```

## 安装和运行

### 配置 API Key

1. 在项目根目录创建 `.env` 文件（如果不存在）
2. 添加以下内容：

```env
VITE_DEEPSEEK_API_KEY=your-api-key-here
VITE_DEEPSEEK_API_URL=https://api.deepseek.com/v1/chat/completions
```

**重要**：`.env` 文件已添加到 `.gitignore`，不会被提交到版本控制。

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 组件说明

### App.vue
主应用组件，包含整体布局和组件协调。

### Header.vue
页面头部，显示标题和副标题。

### CourseTags.vue
课程主题标签组件，提供快速提问功能。

### ChatContainer.vue
聊天消息容器，管理消息列表和机器人响应逻辑。集成 DeepSeek API 进行智能对话。

### Message.vue
单条消息组件，支持用户和机器人消息的不同样式。

### TypingIndicator.vue
机器人输入指示器，显示机器人正在输入的状态。

### InputArea.vue
用户输入区域，包含输入框和发送按钮。

## API 集成

### DeepSeek API

项目已集成 DeepSeek API 进行智能对话。API 服务位于 `src/services/deepseekApi.js`。

**主要功能：**
- 发送消息到 DeepSeek API
- 获取 AI 回复
- 支持对话历史上下文
- 错误处理和提示

**API 配置：**
- 模型：`deepseek-chat`
- Temperature：0.7（可调整）
- Max Tokens：2000（可调整）

### 修改 API 行为

编辑 `src/services/deepseekApi.js` 可以：
- 修改系统提示词（system prompt）
- 调整 temperature 和 max_tokens 参数
- 自定义错误处理逻辑

## 自定义

### 修改样式

各组件使用 `<style scoped>` 定义样式，可以根据需要修改。

### 修改系统提示词

编辑 `src/services/deepseekApi.js` 中的 `system` 角色消息内容，可以改变 AI 的回答风格和重点。

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 部署到 GitHub Pages

项目已配置好 GitHub Pages 部署。详细部署指南请查看 [DEPLOY.md](./DEPLOY.md)。

### 快速部署步骤

1. **创建 GitHub 仓库并推送代码**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

2. **配置 GitHub Secrets**
   - 进入仓库 Settings → Secrets and variables → Actions
   - 添加 Secret: `VITE_DEEPSEEK_API_KEY` = 您的 API Key

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

4. **修改仓库名称（如需要）**
   - 如果仓库名不是 `Chatbot`，修改 `vite.config.js` 中的 `base` 路径

5. **自动部署**
   - 推送到 `main` 分支会自动触发部署
   - 访问：`https://your-username.github.io/your-repo-name/`

## 许可证

MIT

