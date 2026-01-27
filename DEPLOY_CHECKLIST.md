# GitHub Pages 部署检查清单

使用此清单确保成功部署到 GitHub Pages。

## ✅ 部署前检查

### 1. 代码准备
- [ ] 所有代码已提交到 Git
- [ ] `.env` 文件已添加到 `.gitignore`（不会提交）
- [ ] `vite.config.js` 中的 `base` 路径已正确配置

### 2. GitHub 仓库设置
- [ ] 已在 GitHub 创建仓库
- [ ] 代码已推送到 GitHub
- [ ] 默认分支名称正确（main 或 master）

### 3. GitHub Secrets 配置
- [ ] 已添加 `VITE_DEEPSEEK_API_KEY` Secret
- [ ] API Key 值正确
- [ ] （可选）已添加 `VITE_DEEPSEEK_API_URL` Secret

### 4. GitHub Pages 设置
- [ ] 已进入 Settings → Pages
- [ ] Source 已选择 "GitHub Actions"
- [ ] 已保存设置

### 5. 仓库名称匹配
- [ ] 检查仓库名称（例如：`Chatbot`）
- [ ] 确认 `vite.config.js` 中的 `base` 路径匹配
  ```javascript
  const base = process.env.NODE_ENV === 'production' 
    ? '/Chatbot/'  // 应该与仓库名匹配
    : '/'
  ```

## 🚀 部署步骤

### 步骤 1: 推送代码
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 步骤 2: 检查 GitHub Actions
1. 进入仓库的 **Actions** 标签页
2. 查看工作流运行状态
3. 等待构建和部署完成（通常 2-5 分钟）

### 步骤 3: 验证部署
- [ ] Actions 工作流显示绿色 ✓
- [ ] 访问 `https://your-username.github.io/your-repo-name/`
- [ ] 页面正常加载
- [ ] API 功能正常工作（发送测试消息）

## 🔧 故障排除

### 问题：构建失败
**检查**：
- GitHub Actions 日志中的错误信息
- Secrets 是否正确配置
- `package.json` 中的依赖是否正确

### 问题：页面空白
**检查**：
- `vite.config.js` 中的 `base` 路径是否正确
- 浏览器控制台是否有错误

### 问题：API 不工作
**检查**：
- GitHub Secrets 中的 `VITE_DEEPSEEK_API_KEY` 是否正确
- 网络请求是否成功（浏览器开发者工具）

### 问题：404 错误
**检查**：
- 仓库名称是否正确
- `base` 路径是否匹配仓库名
- GitHub Pages 设置是否正确

## 📝 部署后检查

- [ ] 网站可以正常访问
- [ ] 所有功能正常工作
- [ ] 移动端响应式设计正常
- [ ] API 调用成功
- [ ] 没有控制台错误

## 🔄 更新部署

每次更新代码后：
1. 提交更改：`git push origin main`
2. GitHub Actions 会自动重新部署
3. 等待几分钟后刷新页面查看更新

## 📞 需要帮助？

如果遇到问题：
1. 查看 `DEPLOY.md` 获取详细说明
2. 检查 GitHub Actions 日志
3. 查看浏览器控制台错误信息

