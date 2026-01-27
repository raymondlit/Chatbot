# 安装指南

## 安装 Node.js 和 npm

由于系统上未安装 Node.js，您需要先安装它才能运行此项目。

### 方法 1：从官网下载安装（推荐，最简单）

1. 访问 Node.js 官网：https://nodejs.org/
2. 下载 LTS（长期支持）版本（推荐 v20.x 或更高版本）
3. 运行下载的 `.pkg` 安装包
4. 按照安装向导完成安装
5. 安装完成后，重新打开终端，运行以下命令验证：

```bash
node --version
npm --version
```

### 方法 2：使用 Homebrew（需要先安装 Homebrew）

如果您已经安装了 Homebrew，可以运行：

```bash
brew install node
```

如果还没有安装 Homebrew，请先安装它：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装 Homebrew 需要管理员权限，可能需要输入密码。

### 方法 3：使用 nvm (Node Version Manager)

如果您想管理多个 Node.js 版本，可以使用 nvm：

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 重新加载 shell 配置
source ~/.zshrc

# 安装 Node.js LTS 版本
nvm install --lts
nvm use --lts
```

## 安装项目依赖

安装完 Node.js 后，在项目目录下运行：

```bash
cd "/Volumes/[F] Windows 11/2026分享交流/Chatbot"
npm install
```

## 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动。

## 常见问题

### 如果 npm 命令仍然找不到

1. 确保已重新打开终端窗口（或运行 `source ~/.zshrc`）
2. 检查 Node.js 是否在 PATH 中：`echo $PATH`
3. 如果使用 Homebrew 安装，可能需要运行：`brew link node`

### 权限问题

如果遇到权限问题，可以尝试：

```bash
sudo npm install -g npm
```

