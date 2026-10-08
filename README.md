# 吴欣怡 · 个人作品集网站

一个零依赖的静态作品集站点：纯 HTML + CSS + 原生 JavaScript，无框架、无构建步骤，双击 `index.html` 就能看。

---

## 1. 目录结构

```
.
├── index.html              # 页面骨架（语义化标签：header / nav / main / section）
├── 404.html                # 兜底页（GitHub Pages / Netlify 会自动接管）
├── robots.txt              # 爬虫规则（已屏蔽 assets/sources/，避免原始文稿被收录）
├── sitemap.xml             # 站点地图（⚠️ 上线前填真实域名）
├── .gitignore              # 排除工作目录、系统垃圾与误放的大素材
├── 未发布源文件/            # 已 gitignore：含第三方信息 / 学院内部内容的原件，站点上只留预览
├── assets/
│   ├── css/style.css       # 全部样式，含响应式断点与动效
│   ├── js/
│   │   ├── data.js         # ⭐ 所有内容都在这里（作品 / 技能 / 经历 / 联系方式）
│   │   └── main.js         # 渲染与交互：分类筛选、锚点跳转、滚动动效、表单
│   ├── images/
│   │   ├── avatar.jpg      # 头像（本人照片，竖幅 1280×1920，整张呈现不裁剪）
│   │   ├── favicon.svg     # 站点图标
│   │   ├── works/*.jpg     # 作品封面与详情图（真实素材）
│   │   ├── works/*.svg     # 同名占位图：对应照片加载失败时自动兜底
│   │   └── shots/*.png     # 新媒体板块的「文稿预览图」
│   └── sources/            # ⭐ 随站打包的原始文件（相对路径，部署后可直接点开）
│       ├── media-work/     #   新媒体中心的文稿(docx/xlsx)与图片
│       ├── competitions/   #   两项赛事 PDF
│       └── practice/       #   三下乡报告/调研/分工(docx)与图片、实践证明 PDF、志愿服务证书
└── README.md
```

> **站点体积约 32 MB**，其中 `assets/sources/` 占 29 MB，是访客可下载的原始文稿。
> 体积过大的素材不放在项目内——见第 8 节「大文件与隐私」。

---

## 2. 本地预览

**方式一（最简单）**：直接双击 `index.html`。

**方式二（推荐，避免个别浏览器对本地文件的限制）**：在项目根目录起一个静态服务：

```bash
# Python
python -m http.server 8000
# 或 Node
npx serve .
```

然后打开 http://localhost:8000

> **关于源文件**：文稿、赛事 PDF、实践报告等已复制到 `assets/sources/` 并以**相对路径**引用，部署后访客点链接即可直接打开 / 下载。
> 为控制体积，其中 4 份内嵌照片的文档做过**降采样重压**（文字与排版完全不变，原档备份见第 8 节）。
> 三下乡的视频与含内嵌视频的答辩 PPT **未随站发布**，页面上只保留信息占位并标注「未随站发布」，不会有打不开的死链接。

---

## 3. 改内容：只动 `assets/js/data.js`

### 3.1 新增一个作品

在 `works: [ ... ]` 数组里追加一项（复制任意现有作品再改字段即可）：

```js
{
  id: "my-project",                     // 唯一标识，不要和别的重复
  title: "项目名称",
  summary: "一句话简介，显示在卡片上",
  category: "德语内容",                  // 用于分类筛选，填新值会自动多出一个筛选按钮
  year: "2026",
  role: "队长 / 内容主创",
  cover: "assets/images/works/my.jpg",   // 封面图，建议 4:3
  coverFallback: "assets/images/works/my.svg",  // 可选：封面加载失败时自动兜底，避免出现裂图
  coverAlt: "封面图的文字描述（无障碍必填）",
  tech: ["德语演讲", "PPT 统筹"],        // 技术/能力标签，卡片上最多显示 4 个
  external: { label: "查看作品详情", url: "" },  // url 留空则只显示锚点「查看完整案例」
  caseHref: "#practice",               // 卡片底部「查看完整案例」跳转到的深度板块
  caseLabel: "查看完整案例",
  detail: {
    // overview / highlights：当该 id 出现在 practice.extra 里时，
    //   会在「实践经历 · 专业实习与志愿服务」子板块展开
    overview: ["段落一", "段落二"],
    highlights: ["亮点一", "亮点二"],
    // gallery：当该 id 被某项竞赛的 workId 引用时，会渲染成竞赛卡片的「过程材料」图集
    gallery: [{ src: "assets/images/works/my-2.jpg",
                orient: "portrait",                          // 可选：竖构图照片标此项，缩略图按 2:3 竖屏呈现
                fallback: "assets/images/works/my-2.svg",   // 可选兜底图
                alt: "图片描述" }]
  }
}
```

**删除作品**：删掉对应那一整段 `{}` 即可，筛选按钮会自动更新。

### 3.2 改首页文案

`profile` 区块：`name` / `de`（德语副标题）/ `tagline`（支持 `<em>高亮</em>`）/ `intro` / `status` / `actions`（按钮）/ `stats`（数字）/ `avatar` + `avatarAlt` + `avatarFallback`（头像及其兜底图）。

### 3.3 改技能与经历

- `skills`：按分组写，`level` 是 0–100 的熟练度（决定进度条长度），`note` 是右侧小字。
- `timeline`：按时间倒序写 `time` / `title` / `org` / `desc`。

### 3.4 改联系方式

`contact.email` 改邮箱；`socials` 里 `url` 填了就渲染成可点击链接，**留空则显示为纯文字信息**（比如微信、所在城市就是这样处理的）。

> **隐私提醒**：联系方式是公网上最容易被爬虫抓走的部分。默认已把手机号收成「邮件联系后提供」。
> 另外注意 `邮箱地址本身` 若包含手机号（例如 `手机号@139.com`），等于把号码公开了——
> 如果在意，建议换一个不含手机号的邮箱，或只保留留言表单。

### 3.5 竞赛卡片的双语金句与过程图集

`competitions` 每项支持两个可选字段：

- `quote: { de: "德语原文", cn: "中文翻译" }` —— 渲染成卡片里的引文块；
- `workId: "对应作品的 id"` —— 会自动把那份作品 `detail.gallery` 的图集渲染成本卡片的「过程材料」，
  这样同一批图不用在两处各写一遍。

### 3.6 让留言表单真的能收到信

默认情况点「发送留言」会打开访客的邮件客户端。如果你想收到真实提交：

1. 去 [Formspree](https://formspree.io) 注册，拿到形如 `https://formspree.io/f/xxxxxxx` 的地址；
2. 填进 `data.js` 的 `contact.formEndpoint`；
3. 表单会自动切换为接口提交，成功/失败都有提示。

---

## 4. 替换图片

作品封面均为真实素材（德语之星用文档与脑图原图，外教社杯用参赛宣传片《华南新声，客音无界》封面，三下乡 / 新媒体 / 教学用现场照片，SGS 为生成的示意封面）。如需替换：

| 文件 | 建议规格 |
|---|---|
| `assets/images/avatar.jpg` | 竖幅人像（当前 1280×1920，2:3），整张呈现、不裁剪 |
| `assets/images/works/*.jpg` | 4:3（如 1600×1200）最稳，网格里按 `object-fit: cover` 裁切 |
| `assets/images/works/*.svg` | 同名占位图，作为 `coverFallback` / `fallback` 兜底，无需改尺寸 |
| 图集里的竖构图照片 | 保持竖屏比例（2:3，如 853×1280），并在数据项里标 `orient: "portrait"` |

替换时注意四点：

1. 图片格式换了，**路径后缀也要跟着改**（在 `data.js` 里改 `cover` / `gallery.src`）；
2. **务必同步更新 `coverAlt`**——那是屏幕阅读器读出来的文字；
3. 若新图尺寸与原图差异较大，顺手更新对应的 `coverFallback`，让加载失败时仍能优雅降级；
4. **竖构图照片标 `orient: "portrait"`**：否则会被按 4:3 横版压扁裁切。加了标记后缩略图按 2:3 竖屏完整呈现，`object-position: 50% 40%` 保证人物头部不被切。横构图照片无需标注。

> **相机原片方向提醒**：部分相机导出的照片是「竖构图存成横版、靠 EXIF 旋转标记」。
> 这类图片在网站里会躺倒 90°，需要先物理转正再放进 `assets/sources/`。
> 本站 `我的摄影照片` 已统一转正为 853×1280 竖屏，原始文件备份在 `.workbuddy/originals/`（不随站发布）。

---

## 5. 部署上线（任选其一）

> **部署前必做**：把 `index.html`（4 处）、`sitemap.xml`（1 处）、`robots.txt`（1 处）里的
> `https://example.com` 换成你的真实域名，否则社交转发抓不到缩略图、站点地图也指向错误地址。
> 用 GitHub Pages 的话，域名形如 `https://<用户名>.github.io/<仓库名>/`。

### GitHub Pages（免费）
1. 把整个文件夹推到 GitHub 仓库；
2. 仓库 Settings → Pages → Source 选 `main` 分支、根目录；
3. 等 1–2 分钟，访问 `https://<用户名>.github.io/<仓库名>`。

### Vercel（最省事）
1. 把文件夹推到 GitHub；
2. 在 vercel.com 点 **Import Project**，选中该仓库，框架选 **Other / Static**，直接 Deploy；
3. 之后每次 push 都会自动重新部署。

### Netlify
把整个文件夹**拖进** [app.netlify.com/drop](https://app.netlify.com/drop) 即可，几秒出链接。

### 绑定自己的域名
在 Vercel / Netlify 的 **Domains** 里添加域名，按提示把 DNS 的 CNAME 指过去即可（两家都送免费 HTTPS）。

> **关于 `404.html`**：页里的返回链接用的是相对路径 `index.html`，部署在**域名根目录**时直接可用。
> 若部署在**子路径**（如 `用户名.github.io/仓库名/`），子路径下命中的 404 页可能找不到返回链接，
> 此时把 `404.html` 里的 `index.html` 全部改成 `/仓库名/index.html` 即可。

---

## 6. 已内置的能力

| 需求 | 实现方式 |
|---|---|
| 平滑锚点跳转 | CSS `scroll-behavior: smooth` + JS 修正粘性头部偏移、同步更新 URL hash |
| 响应式布局 | 卡片网格 `auto-fill minmax(320px,1fr)`；1024 / 768 / 480px 三档断点；≤768px 切换汉堡菜单 |
| 滚动与悬停动效 | 卡片上浮 + 封面微缩放；IntersectionObserver 入场动画；技能条生长 |
| 加载速度 | 零依赖零构建；首屏 3 张图 `eager`、其余 `lazy`；图片 `decoding="async"`；**外部请求 0 个**（字体走系统栈） |
| 图片容错 | `coverFallback` / `fallback` 机制：照片缺失时自动换成占位图，不会出现裂图 |
| 社交分享与收录 | `og:*` + `twitter:card` + `canonical`（⚠️ 域名待替换）、`sitemap.xml`、`robots.txt`、`404.html` |
| 本地/线上双模式 | 以 `file://` 打开时额外显示「复制路径」按钮；部署后自动隐藏，访客不会看到无意义的本机路径 |
| 可访问性 | 语义化标签、跳转链接 skip-link、`aria-current` 导航高亮、`aria-expanded` 汉堡菜单、锚点跳转焦点管理、表单 `aria-live` 提示、`prefers-reduced-motion` 降级、所有图片带 alt |

---

## 7. 上线前检查清单

- [x] 头像 / 作品封面已换成真实素材（SGS 仍为示意封面，拿到 ACC 平台截图后可替换）
- [x] 文稿 / 赛事 PDF / 实践报告已打包进 `assets/sources/`，部署后可直接点开
- [x] 内嵌照片的文档已降采样重压（合计 29 MB → 12 MB），原档有备份
- [x] 本机绝对路径（`D:/…`）已全部清除；视频改为「未随站发布」占位，页面无死链接
- [x] 站点体积 365 MB → 约 32 MB，可正常推送 GitHub / 部署 Vercel
- [x] 已补 `404.html` / `robots.txt` / `sitemap.xml` / `.gitignore`；`og:*`、`canonical` 就位
- [ ] **替换 `https://example.com`**（`index.html` 4 处、`sitemap.xml`、`robots.txt`）← 唯一必改项
- [ ] 三下乡视频若要上线：托管到视频平台后，在 `data.js` 对应条目填回 `path`
- [ ] 两项国家级赛事结果公布后，把获奖等级补进对应作品与竞赛条目
- [x] 内部稿件隐私处理：含第三方姓名 / 学院内部流程的 5 份原件已移入 `未发布源文件/`（已 gitignore），
      站点保留文稿预览图 +「未随站发布」留档态；分工表姓名等必要信息仍在页面正文
- [x] git 历史已用 `git-filter-repo` 重写：全部 11 个提交的作者/提交者邮箱统一为
      `longagement@users.noreply.github.com`，手机号邮箱已无残留（本机 + 远端均已核验）
- [ ] `contact.formEndpoint` 配好后自己提交一次测试
- [ ] 用手机真机打开看一眼，尤其「实践经历」长板块的滚动与导航高亮

---

## 8. 大文件与隐私

### 8.1 为什么站点从 365 MB 变成 32 MB

原来 `assets/sources/` 里有一个 **307 MB 的结项答辩 PPT**（内嵌 256 MB 视频）和一个 11.3 MB 的 `.doc`。
它们会让 GitHub 直接拒绝推送（单文件上限 100 MB），访客点了也大概率放弃下载。

这两个文件**没有删除**，只是移到了**项目同级**的归档目录：

```
2026-10-05-19-49-14/                     ← 站点本体（约 32 MB，可发布）
2026-10-05-19-49-14-未发布大文件/          ← 归档（不参与发布）
├── 结项答辩PPT/岭南融梦队结项答辩PPT.pptx
├── 新媒体文稿原档/光影魔法课第三期新闻稿.doc
└── 压缩前原档/                            ← 4 份文档压缩前的原始版本
```

页面并未丢信息：这些素材在对应位置仍以文字条目留档，只是标注为「未随站发布」，不再提供死链接。

### 8.2 压缩做了什么

`年终总结文案最终版.docx` 等 4 份文档里嵌了大量**照片型 PNG**（照片用 PNG 存是体积杀手）。
处理方式是：**不透明的照片转成 JPEG，真正带透明通道的原样保留**，
文字、排版、图片数量与引用关系一律不变。已用脚本逐项校验：每张图都能正常解码、
每个 `rels` 引用都能解析到具体文件、正文 `r:embed` 数量与改前一致。
如需彻底恢复，用「压缩前原档」覆盖回去即可。

### 8.3 隐私

- `assets/sources/` 下的文稿、报告、证明材料**部署后任何人都能直接下载**，
  其中部分含**第三方姓名**（校友访谈、服务评价表、实践证明）。
  `robots.txt` 已屏蔽该目录，但那只防搜索引擎收录，**不阻止直接点链接下载**。
  若某份不宜公开，请从发布包中移除。
- 站点上的联系方式已换成**不含手机号**的邮箱（`data.js` 的 `contact.email` 与 socials）。
- **Git 提交身份**也已脱敏：因为仓库一旦公开，`git log` 里的作者邮箱任何人都能看到，
  历史已用 `git-filter-repo` 全部改写为 GitHub noreply 邮箱。
  后续提交请确保本仓库 `git config user.email` 也是 noreply 地址，别让旧邮箱再混进来。

### 8.4 附带的小工具

`.workbuddy/tools/` 下放了本次用到的脚本（该目录已在 `.gitignore` 中，不会随站发布）：

| 脚本 | 用途 |
|---|---|
| `shrink_docx_media.py` | 把 docx 内照片型 PNG 转 JPEG，带完整的引用完整性校验 |
| `compress_docx.py` | 只做降采样重压、不换格式的保守版本 |
| `render_check.js` | 用 jsdom 真实渲染页面，统计各板块元素数量并核对所有资源引用 |
