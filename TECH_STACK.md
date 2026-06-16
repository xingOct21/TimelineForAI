# AI Timeline — Tech Stack

## 前端框架
- 纯原生 HTML / CSS / JavaScript，无框架依赖

## 核心库
| 库 | 版本 | 用途 | 来源 |
|---|---|---|---|
| Timeline.js 3 | latest | 时间线渲染引擎 | 本地文件（timeline.js / timeline.css） |

## 翻译
| 服务 | 费用 | 鉴权 | 限制 |
|---|---|---|---|
| MyMemory API | 免费 | 无需 API Key | 5000 词/天/IP |

- 端点：`https://api.mymemory.translated.net/get?q={text}&langpair=zh-CN|en-GB`
- 策略：并发 4 请求，220ms 批次间隔，结果缓存至 localStorage

## 数据存储
- 主数据：`data.js`（中文静态 JS 对象）
- 翻译缓存：`localStorage`（key 格式：`aitl2_{lang}_{track}`）

## 部署目标
- GitHub Pages（静态托管，免费）

## 页面布局

| 页面 | ID | 高度 | 内容 |
|---|---|---|---|
| 时间线页 | `#page-timeline` | 100vh | 标题、控制栏、时间线、人物画廊 |
| 知识树页 | `#page-tree` | 100vh | 知识树 SVG + 页脚 |

页面切换：CSS `scroll-snap-type: y mandatory`，`scroll-behavior: smooth`，滚动条隐藏。
导航：右侧固定圆点（`position: fixed`），JS 监听 `#app` scroll 事件更新高亮状态。

## 知识树

- 实现方式：纯手写 SVG，无第三方库
- 树形：根节点居底，三条主枝（AI / ML / DL），每枝两级子枝，共 21 节点
- 曲线：三次贝塞尔（SVG `C` 指令）
- 内容嵌入：`<foreignObject>` 内嵌 HTML，9 个内容节点
- 风格：暖金色 `#c4aa6e`，Georgia 衬线体，深黑背景 `#080808`

## 文件结构
```
ai-timeline/
├── index.html        # 主页面（UI + 翻译引擎 + 知识树）
├── data.js           # 中文时间线数据 + 人物数据
├── timeline.js       # Timeline.js 本地文件
├── timeline.css      # Timeline.js 样式
├── picture/          # 本地图片（事件配图 + 人物照片）
├── DEVLOG.md         # 开发日志
├── CLAUDE.md         # 项目设计理念
└── TECH_STACK.md     # 本文件
```

## 设计风格

**时间线页**：数字怀旧 · 霓虹 · 故障艺术 · 复古科技 · 赛博朋克
色彩：Cyan `#00fff0` · Magenta `#ff00cc` · Yellow `#ffe600`

**知识树页**：简洁 · 大气 · 知识感
色彩：暖金 `#c4aa6e` · 深黑 `#080808` · 象牙白 `rgba(232,218,190,0.9)`

## 三条时间线
| Track | 中文 | 事件数 |
|---|---|---|
| AI | 人工智能史 | 11 |
| ML | 机器学习史 | 12 |
| DL | 深度学习史 | 17 |
