# The Seed - RTS Agent OS Pitch Deck

这是一个基于 Web 的 The Seed 演示文稿（Pitch Deck）。

## 使用方法 (Usage)

1.  **安装依赖 (Install dependencies):**
    ```bash
    npm install
    ```

2.  **启动开发服务器 (Start dev server):**
    ```bash
    npm run dev
    ```
    启动后，请访问终端中显示的本地链接（通常是 `http://localhost:5173`）。

3.  **构建生产版本 (Build for production):**
    ```bash
    npm run build
    ```

4.  **预览生产版本 (Preview build):**
    ```bash
    npm run preview
    ```

## 部署到 GitHub Pages (Deploy to GitHub Pages)

本项目已配置 `base: './'`，支持直接部署到 GitHub Pages 或任何静态服务器。

### 方法一：使用 gh-pages 自动部署（推荐）

1.  **安装 `gh-pages` 工具：**
    ```bash
    npm install gh-pages --save-dev
    ```

2.  **在 `package.json` 中添加部署脚本：**
    打开 `package.json`，在 `"scripts"` 部分添加：
    ```json
    "deploy": "gh-pages -d dist"
    ```

3.  **执行部署：**
    ```bash
    npm run build
    npm run deploy
    ```
    这将自动把 `dist` 文件夹的内容推送到仓库的 `gh-pages` 分支。

> **更新已上线页面 (Update existing GitHub Pages)**  
> 当你修改完内容后，只需在项目根目录再次执行：
> ```bash
> npm run build
> npm run deploy
> ```
> GitHub Pages 会自动使用最新一次部署的 `gh-pages` 分支内容。

### 方法二：手动部署

1.  运行构建命令：
    ```bash
    npm run build
    ```
2.  将生成的 `dist` 文件夹内的所有文件，上传到你 GitHub 仓库的 `gh-pages` 分支（或你用于托管的分支）。
3.  在 GitHub 仓库设置 (Settings) -> Pages 中，选择部署来源为该分支。
