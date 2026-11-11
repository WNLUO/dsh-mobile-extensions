# dsh-mobile-extensions-demo

DSH 插件的示例包：随包带三个给手机 App 用的**扩展**，装上之后手机的
「设置 → 扩展」里就能看到并安装它们。

它本身不做任何事 —— 这个包存在的意义只是让 `package.json` 里的
`"dshMobileExtensions": "extensions"` 这一格被宿主扫到，从而把
`extensions/` 下的示例扩展列给手机。

带的三个扩展：

- `notes` —— 记事本，演示 `storage`
- `files` —— 挑文件 / 存文件，演示 `file.pick` 与 `file.save`
- `host-data` —— 宿主取数，演示 `host.data`

写自己的扩展请从仓库 `docs/` 里的作者须知与最小样例开始。
