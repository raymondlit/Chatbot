# GitHub Actions 工作流

## deploy.yml

自动部署工作流，用于将项目构建并部署到 GitHub Pages。

### 触发条件

- 推送到 `main` 分支
- 手动触发（workflow_dispatch）

### 工作流程

1. **构建阶段**
   - 检出代码
   - 安装 Node.js 和依赖
   - 构建项目（使用 GitHub Secrets 中的 API Key）

2. **部署阶段**
   - 上传构建产物
   - 部署到 GitHub Pages

### 所需 Secrets

- `VITE_DEEPSEEK_API_KEY`: DeepSeek API Key（必需）
- `VITE_DEEPSEEK_API_URL`: API URL（可选，默认已设置）

### 注意事项

- 确保仓库名称与 `vite.config.js` 中的 `base` 路径匹配
- 首次部署可能需要几分钟时间
- 部署后访问地址：`https://your-username.github.io/your-repo-name/`

