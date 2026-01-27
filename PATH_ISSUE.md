# 路径问题解决方案

## 问题说明

由于项目路径包含特殊字符（方括号 `[F]`、空格、中文），npm 在创建符号链接时遇到了问题。这导致 `node_modules/.bin` 目录中的可执行文件无法正常链接。

## 已应用的解决方案

1. **使用 `--no-bin-links` 标志**：在安装依赖时禁用符号链接，使用文件复制代替
2. **更新 npm 脚本**：直接使用 `node node_modules/vite/bin/vite.js` 而不是依赖符号链接

## 运行项目

现在您可以使用以下命令运行项目：

```bash
npm run dev
```

或者直接使用：

```bash
node node_modules/vite/bin/vite.js
```

## 更好的长期解决方案

为了避免类似问题，建议将项目移动到不包含特殊字符的路径，例如：

```bash
# 建议的路径格式
~/Projects/Chatbot
/Users/li/Documents/Chatbot
```

如果必须使用当前路径，当前的解决方案应该可以正常工作。

## 注意事项

- 使用 `--no-bin-links` 会增加磁盘空间使用（因为复制文件而不是链接）
- 某些 npm 脚本可能仍然需要手动调整
- 如果遇到其他问题，考虑使用 yarn 或 pnpm 作为替代

