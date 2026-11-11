# 更多示例

这里放比 `docs/extension-sample` 更完整的示例扩展。每个示例是一个独立目录（`manifest.json`
+ `index.html`），用 App 的「本地开发」直接装进手机看效果，和最小样例同一套流程：

```bash
cp -r samples/<名字> ~/.dsh/extension-dev/<标识>
```

然后在手机上：设置 → 扩展 → 打开「开发者模式」→ 回到扩展页 → 最底下「本地开发」→ 刷新 → 导入。

## 现有示例

- **`notes/`** —— 记事本。演示 `storage`：用 App 托管的存储记住笔记，关掉再进、换一版扩展
  都不丢，卸载才清。
- **`files/`** —— 文件演示。演示 `file.pick` 与 `file.save`：挑系统里的文件、把一段文本存出去，
  挑哪份 / 存到哪都由用户在系统面板里定。
- **`host-data/`** —— 宿主取数。演示 `host.data`：页面照常 `fetch('/api/…')`，命中的请求被转给
  电脑上的服务。它用的是占位的服务名（`example-service`），要真取到数据得在自己的插件
  `package.json` 里声明 `dshMobileDataServices`、并让 `manifest.json` 的 `hostData` 与它对上，
  见作者须知第 5.5 节。

## 一点约定

这些示例只作参考，不随插件 npm 包发布（发布时只有 `docs/` 会同步进插件包）。所以页面里的
资源都得自带、用相对路径引用，别指向本机路径或外网。
