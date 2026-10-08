# Eating

博客地址：https://eating16.github.io/

使用 Hexo 和官方 Nemophila 原版主题，GitHub Actions 自动部署到 GitHub Pages。

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
git clone --recurse-submodules https://github.com/eating16/eating16.github.io.git Eating
cd Eating
npm.cmd ci
npm.cmd run server
```

主要配置位于 `_config.yml`；部署配置位于 `.github/workflows/pages.yml`。

## Nemophila 原版主题

主题作为 Git 子模块安装在 `themes/hexo-theme-nemophila`，官方模板、样式和素材保持原样。
主题源码与 GPL-3.0-or-later 许可证来自 https://github.com/imouup/hexo-theme-nemophila 。

Eating 的主题配置位于 `_config.hexo-theme-nemophila.yml`。如需更换角色、头像或加载图片，编辑该配置文件即可。
`scripts/nemophila-config.js` 只清理被设为 null 的作者示例联系项和菜单项，不修改主题模板。

已接入搜索、RSS、关于、音乐、友链占位和 404 页面。音乐页预置的是主题自带的示例音频，可在 `source/music/index.md` 中替换或删除。
评论服务当前关闭，动态保留原版静态文案；启用云端服务前需要配置自己的服务地址。

获取主题文件（例如普通克隆未带子模块时）：

```powershell
git submodule update --init --recursive
```

`source/friends/index.md` 使用原版通用页面布局；尚未连接评论后端。
