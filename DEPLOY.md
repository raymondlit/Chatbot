# GitHub Pages 部署指南

本指南将帮助您将项目部署到 GitHub Pages。

## 方法一：使用 GitHub Actions 自动部署（推荐）

### 1. 准备 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（如果还没有）
2. 将本地代码推送到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. 配置 GitHub Secrets

由于项目使用了 DeepSeek API，需要在 GitHub Secrets 中配置 API Key：

1. 进入您的 GitHub 仓库
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 添加以下 Secrets：

   - **Name**: `VITE_DEEPSEEK_API_KEY`
   - **Value**: 您的 DeepSeek API Key（`sk-620caf5675344ba08e6b2da7d2a6eff7`）

   - **Name**: `VITE_DEEPSEEK_API_URL`（可选）
   - **Value**: `https://api.deepseek.com/v1/chat/completions`

### 3. 启用 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 部分，选择 **GitHub Actions**
3. 保存设置

### 4. 配置仓库名称（重要）

如果您的 GitHub 仓库名称不是 `Chatbot`，需要修改 `vite.config.js` 中的 `base` 配置：

```javascript
const base = process.env.NODE_ENV === 'production' 
  ? '/your-repo-name/'  // 改为您的仓库名
  : '/'
```

### 5. 触发部署

- **自动部署**：每次推送到 `main` 分支时自动部署
- **手动部署**：在 GitHub Actions 页面点击 "Run workflow"

### 6. 访问您的网站

部署完成后，您的网站将在以下地址可用：
```
https://your-username.github.io/your-repo-name/
```

## 方法二：手动部署

如果您不想使用 GitHub Actions，可以手动部署：

### 1. 构建项目

```bash
npm run build
```

### 2. 部署到 gh-pages 分支

```bash
# 安装 gh-pages（如果还没有）
npm install --save-dev gh-pages

# 添加部署脚本到 package.json
# "deploy": "npm run build && gh-pages -d dist"

# 运行部署
npm run deploy
```

或者手动操作：

```bash
# 构建项目
npm run build

# 切换到 gh-pages 分支（或创建它）
git checkout --orphan gh-pages
git rm -rf .

# 复制 dist 目录内容
cp -r dist/* .

# 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### 3. 配置 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 部分，选择 **gh-pages** 分支
3. 保存设置

## 常见问题

### 1. 页面显示空白

**原因**：`base` 路径配置不正确

**解决**：检查 `vite.config.js` 中的 `base` 是否与仓库名匹配

### 2. API Key 未生效

**原因**：GitHub Secrets 未正确配置

**解决**：
- 检查 Secrets 名称是否为 `VITE_DEEPSEEK_API_KEY`
- 确保在 GitHub Actions 工作流中正确引用

### 3. 404 错误

**原因**：路由配置问题

**解决**：确保 `vite.config.js` 中的 `base` 路径正确

### 4. 构建失败

**原因**：依赖安装或构建过程出错

**解决**：
- 检查 `package.json` 中的依赖版本
- 查看 GitHub Actions 日志了解详细错误

## 更新部署

每次更新代码后：

1. 提交更改：
```bash
git add .
git commit -m "Update features"
git push
```

2. GitHub Actions 会自动构建和部署（如果使用方法一）

## 自定义域名（可选）

如果您有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 添加您的域名（例如：`chatbot.example.com`）
3. 在您的域名 DNS 设置中添加 CNAME 记录指向 `your-username.github.io`

## 安全提示

- ✅ API Key 已存储在 GitHub Secrets 中，不会泄露
- ✅ `.env` 文件已添加到 `.gitignore`
- ⚠️ 不要在代码中硬编码 API Key
- ⚠️ 定期轮换 API Key 以提高安全性

