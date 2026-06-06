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

## 文件结构
```
ai-timeline/
├── index.html      # 主页面（UI + 翻译引擎）
├── data.js         # 中文时间线数据 + 人物数据
├── timeline.js     # Timeline.js 本地文件
├── timeline.css    # Timeline.js 样式
├── CLAUDE.md       # 项目设计理念
└── TECH_STACK.md   # 本文件
```

## 设计风格关键词
数字怀旧 · 霓虹 · 故障艺术 · 复古科技 · 赛博朋克
色彩：Cyan #00fff0 · Magenta #ff00cc · Yellow #ffe600

## 三条时间线
| Track | 中文 | 事件数 |
|---|---|---|
| AI | 人工智能史 | 11 |
| ML | 机器学习史 | 12 |
| DL | 深度学习史 | 17 |
