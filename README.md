# Eating

博客地址：https://eating16.github.io/

使用 Hexo 和 Landscape 主题，GitHub Actions 自动部署到 GitHub Pages。

## 本地预览

在 PowerShell 中运行：

```powershell
cd F:\blog\Eating
npm.cmd run server
```

打开 http://localhost:4000/，按 Ctrl+C 停止预览。

## 写文章

```powershell
cd F:\blog\Eating
npx.cmd hexo new "文章标题"
```

在 `source/_posts/` 中编辑生成的 Markdown 文件。

## 发布更新

```powershell
npm.cmd run build
git add .
git commit -m "Update blog"
git push
```

推送到 main 分支后，GitHub Actions 会自动构建和发布。无需运行 hexo deploy。

## 更换电脑后恢复

```powershell
git clone https://github.com/eating16/eating16.github.io.git Eating
cd Eating
npm.cmd ci
npm.cmd run server
```

主要配置位于 `_config.yml`；部署配置位于 `.github/workflows/pages.yml`。
