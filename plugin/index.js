/**
 * 手机扩展示例插件的宿主半身。
 *
 * 它只做一件事：**让这个包存在**。手机扩展的发现机制扫的是 profile 里已装插件的
 * `package.json` —— 只要里面声明了 `dshMobileExtensions`，包内那份目录就会作为一组扩展
 * 出现在手机的扩展页里，等用户自己安装。本包不需要注册任何路由、不碰宿主能力，所以
 * `apply` 除了记一行日志什么都不做。
 *
 * 声明见本包的 `package.json`：`"dshMobileExtensions": "extensions"`。
 * 少这一格，包里的 `extensions/` 目录不会被任何人看到（目录名太常见，不声明一律不扫）。
 *
 * @module index.js
 */

export const name = 'dsh-mobile-extensions-demo'

/**
 * 装载。不抛异常：这个包只是为了让示例扩展被列出来，它出问题不该拖垮宿主启动。
 */
export function apply(ctx) {
  const log = (level, message) => {
    const fn = ctx?.logger?.[level]
    if (typeof fn === 'function') fn.call(ctx.logger, message)
  }
  log('info', '[dsh-mobile-extensions-demo] 示例扩展已随插件提供：手机扩展页可见')
}
