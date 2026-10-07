/* =========================================================
   站点内容数据源 —— 你只需要改这一个文件
   ---------------------------------------------------------
   · profile   个人简介（首页）
   · nav       导航栏与锚点
   · works     作品集（增删改都在这里）
   · skills    技能分组
   · timeline  经历时间线
   · socials   社交链接 / 联系方式
   ========================================================= */

window.SITE_DATA = {

  /* ---------- 个人信息 ---------- */
  profile: {
    name: "吴欣怡",
    de: "Ich arbeite an Content & Operations für grenzüberschreitende Märkte – von der Idee bis zur Auslieferung.",
    avatar: "assets/images/avatar.jpg",
    avatarAlt: "吴欣怡的个人照片",
    avatarFallback: "assets/images/avatar.svg",
    major: "德语专业 · 深圳技术大学",
    tagline: "把中国故事讲给世界听 · 用<em>项目思维</em>跑通跨境交付",    intro: "我的主线是「把中国的内容讲给世界听」：两个国家级德语赛事——一个从德国合唱团唱响《成都》的画面切入，论证「先相遇，再理解」（演讲）；一个讲岭南方言如何被世界听见（短视频）——本质上是同一件事，跨文化的内容转译。但我不想只做翻译者。SGS 跨境合规实习让我看到，内容出海不只是语言问题，更是规则、准入与交付问题：450+ 份跨境准入资料，把「跨文化」从文字下沉到 CE / CPC / CPSIA 这样的具体门槛。再叠加连续两届带队 20 人跑完三下乡，以及「文案 × 视觉 × 视频」的全链路能力——我既能生产内容，也能把它交付出海。",
    status: "📍 深圳",
    actions: [
      { text: "查看作品", href: "#work", style: "primary" },
      { text: "联系我", href: "#contact", style: "ghost" }
    ],
    stats: [
      { value: "450+", label: "份跨境准入资料" },
      { value: "2 项", label: "国家级德语赛事 · 核心主创" },
      { value: "20 人", label: "团队统筹规模" },
      { value: "50+", label: "篇新闻稿与文案" }
    ]
  },

  /* ---------- 关于我（独立原创段落；没写则降级复用 profile.intro） ---------- */
  about: {
    paragraphs: [
      "我是深圳技术大学德语专业的大三学生。真正让我确定方向的不是某门课，而是 2025 年那趟三下乡——带着 11 个社区孩子用中英双语演《森林小卫士》，我发现「让另一群人听懂」这件事，比语言本身更让我兴奋。后来把客家人的「食饭冇」剪进德语宣传片、把客家围屋做成三语文旅素材，做的其实都是同一道题：如何把一个很本土的东西，翻译成另一种文化能接住的样子。",
      "方法上我有点较真。习惯把一个想法拆成时间轴上的可控节点——10 天跨 8 个里程碑推进一场国家级答辩，7 天带 20 人团队跑完三下乡全流程；给每批合规报告沉淀个人操作 SOP，给片子里每条引用标注来源与查询日期。内容决定上限，但执行决定能不能交付。",
      "接下来我想往跨境与出海的方向走：出海内容、本地化（Localization）、跨境电商的内容侧，都在我的射程里。德语是我的第一工具，但不是边界——我更希望被以「能做跨文化内容、能把项目跑到交付」来认识，而不是被某一个语种限定。"
    ]
  },

  /* ---------- 导航（href 对应各版块 id） ---------- */
  nav: [
    { label: "首页", href: "#home" },
    { label: "作品集", href: "#work" },
    { label: "实践经历", href: "#practice" },
    { label: "新媒体", href: "#media" },
    { label: "关于我", href: "#about" },
    { label: "联系", href: "#contact" }
  ],

  /* ---------- 作品集 ---------- */
  works: [
    {
      id: "national-games",
      title: "第十五届全国运动会 · 艺术体操志愿服务",
      summary: "国家级综合性运动会（2025 · 粤港澳）志愿者，负责赛事现场引导与后勤保障，获评「志愿之星」。",
      category: "大型赛事服务",
      year: "2025",
      role: "艺术体操项目志愿者 · 志愿之星",
      cover: "assets/images/works/national-games.jpg",
      coverAlt: "十五运会赛会志愿者服务证书：组委会盖章 · 吴欣怡 · 2025.12 签发",
      tech: ["现场引导", "后勤保障", "赛事志愿服务", "团队协作"],
      external: { label: "查看项目详情", url: "" },
      caseHref: "#practice",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "第十五届全国运动会（2025.11.09–11.21 · 广东 / 香港 / 澳门）艺术体操项目志愿者，参与赛事现场运行保障。",
          "负责现场引导与后勤保障：观众与参赛队伍的动线引导、场地物资与后勤补给协调，服务保障赛事顺利进行，获评「志愿之星」。",
          "组委会盖章颁发《赛会志愿者服务证书》：确认本人作为赛会志愿者为第十五届全国运动会及全国第十二届残疾人运动会暨第九届特殊奥林匹克运动会（2025.12.08–12.15）作出积极贡献。"
        ],
        highlights: [
          "国家级综合性运动会 · 艺术体操项目志愿服务",
          "现场引导与后勤保障，服务保障赛事顺利进行",
          "获评「志愿之星」",
          "组委会盖章《赛会志愿者服务证书》（2025.12 签发）"
        ],
        gallery: [
          { src: "assets/images/works/national-games.jpg", alt: "十五运会赛会志愿者服务证书（组委会盖章原件翻拍）" },
          { src: "assets/images/works/national-games-2.jpg", orient: "portrait", alt: "志愿服务证书实拍（坪山区委版）：感谢艺术体操赛会志愿服务 · 共青团深圳市坪山区委员会 2026.01 颁发" }
        ],
        resources: [
          { label: "赛会志愿者服务证书（盖章原件）", kind: "doc", path: "assets/sources/practice/十五运会赛会志愿者服务证书.jpg", note: "十五运会 + 残特奥会组委会盖章 · 2025.12" }
        ]
      }
    },
    {
      id: "german-star",
      title: "德语之星 · 全国德语演讲比赛",
      summary: "正在角逐第五届德语之星（国家级赛事）。以《原来中国长这样》为叙事主线，提出「Erst begegnen, dann verstehen（先相遇，再理解）」的反转命题，担任队长。",
      category: "德语内容",
      year: "2026",
      role: "队长 / 内容主创",
      cover: "assets/images/works/german-star.jpg",
      coverFallback: "assets/images/works/german-star.svg",
      coverAlt: "德语之星演讲稿定稿《承载歌声的翅膀，共建友谊的桥梁》文档页",
      tech: ["德语演讲", "中德双语稿件", "论证结构设计", "13 页 PPT 统筹"],
      external: { label: "查看作品详情", url: "" },
      caseHref: "#practice",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "作品原题《Auf Flügeln des Gesanges – gemeinsam Brücken der Freundschaft bauen》（承载歌声的翅膀，共建友谊的桥梁）。以 2025 年度「中国好书」《原来中国长这样》为叙事主线——该书由德国伯乐中文合唱团十位成员以留学生视角写成。",
          "全篇核心思辨：推翻「Erst verstehen, dann begegnen（先理解，再相遇）」这一默认假设，反过来主张「Erst begegnen, dann verstehen（先相遇，再理解）」。论证分三层递进：歌声层（德国城堡下响起吉他，唱的却是成都的故事）→ 行走层（柏林夫妇 Egon Schuler 与 Erika 不会一句中文却行走中国数十万公里；《红楼梦》德语译者 Martin Woesler）→ 自我层（从「听故事的人」变成「写故事的人」）。"
        ],
        quote: {
          de: "„Verständnis ist kein Visum für die Begegnung. Es ist das Gepäck, das wir unterwegs mitnehmen.“",
          cn: "理解不是相遇的签证，而是我们在路上携带的行囊。"
        },
        highlights: [
          "已完成 8 个里程碑节点：10.01 定稿 / 10.05 PPT / 10.07 & 10.08 两次拍摄迭代 / 10.09 视频输出 / 10.15 成果交付，跨 10 天推进",
          "主导选题与论证重构：以一本真实的书为叙事主线 + 一句反转命题为论证骨架",
          "统筹 13 页 PPT 图文节奏与留白，安排 2 页纯视觉页承担情绪转换",
          "团队分工预测并准备 15 个答辩问题，覆盖主题动机、论据选择、引用来源与现实行动",
          "11.01 赴同济大学参加决赛答辩（结果待出）"
        ],
        gallery: [
          { src: "assets/images/works/german-star.jpg", fallback: "assets/images/works/german-star.svg", alt: "演讲稿定稿《承载歌声的翅膀，共建友谊的桥梁》" },
          { src: "assets/images/works/german-star-2.jpg", orient: "portrait", fallback: "assets/images/works/german-star-2.svg", alt: "答辩准备清单：主题动机与问题的中德双语预案" }
        ]
      }
    },
    {
      id: "german-video",
      title: "外教社杯 · 全国德语短视频比赛",
      summary: "作品《语守本土，译向世界》：用德语讲述普通话与岭南方言（粤语 & 客家话）的共生保护，并构想客家话语料库。",
      category: "德语内容",
      year: "2026",
      role: "内容策划 · 出镜讲解",
      cover: "assets/images/works/german-video-cover.jpg",
      coverFallback: "assets/images/works/german-video.svg",
      coverAlt: "外教社杯参赛宣传片《华南新声，客音无界》封面：探寻客家话发展新可能",
      tech: ["德语脚本", "分镜表设计", "实地调研", "跨文化理论"],
      external: { label: "查看作品详情", url: "" },
      caseHref: "#practice",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "把「方言保护」这个本土议题讲给德语观众听：普通话是桥梁，岭南方言是根脉，两者并非此消彼长。",
          "按「是什么—为什么—怎么做」展开，引入冰山理论与剥洋葱理论支撑叙事；采访德国外教、梳理德国方言保护政策作为对标；并跟随客家人逐句学习客家话，采集一手素材入镜。片尾提出以深圳科技赋能的「客家话语料库 / 语言大模型」构想。",
          "剧本历经「初版思路 → 客家话框架 → 方案一稿 → 线下面议 → 第四版定稿」4 轮迭代，并制定时间码 / 配音 / 字幕 / 画面描述的分镜表规范团队流程。"
        ],
        highlights: [
          "出镜讲解：以「猜方言」互动引出粤语与客家话，承担对德语观众的文化翻译角色",
          "跨文化对标：采访德国外教，梳理德国方言保护政策与经典案例",
          "学术规范：全部数据标注来源与查询日期并附于片尾"
        ],
        gallery: [
          { src: "assets/images/works/german-video-cover.jpg", fallback: "assets/images/works/german-video.svg", alt: "参评宣传片《华南新声，客音无界》封面：探寻客家话发展新可能" },
          { src: "assets/images/works/german-video.jpg", orient: "portrait", fallback: "assets/images/works/german-video.svg", alt: "选题头脑风暴手稿：候选方向、参考文献与论证路径" },
          { src: "assets/images/works/german-video-2.jpg", orient: "portrait", fallback: "assets/images/works/german-video.svg", alt: "结构脑图：是什么—为什么—怎么做的论证链" },
          { src: "assets/images/works/german-video-3.jpg", orient: "portrait", fallback: "assets/images/works/german-video.svg", alt: "数据溯源清单：粤语与客家话定义及引用来源" },
          { src: "assets/images/works/german-video-4.jpg", orient: "portrait", alt: "参赛期间与同伴的留影" }
        ]
      }
    },
    {
      id: "sgs",
      title: "SGS 通标 · 跨境合规实习",
      summary: "全球领先检测认证机构。独立操作亚马逊 ACC 合规平台，累计交付 450+ 份跨境准入资料——CE/CPC/CPSIA 是产品进入欧洲/北美市场的合规门槛，这段经历让我对「跨境」的理解从「语言翻译」下沉到「规则翻译」。",
      category: "跨境运营",
      year: "2026",
      role: "轻工产品检验助理（实习）",
      cover: "assets/images/works/sgs.jpg",
      coverFallback: "assets/images/works/sgs.svg",
      coverAlt: "SGS 实习留影：SGS 标识墙前 · 佩戴实习工牌",
      tech: ["亚马逊 ACC 平台", "TCF 卷宗系统", "CE / CPC / CPSIA", "Excel 台账与 SOP"],
      external: { label: "查看项目详情", url: "" },
      caseHref: "#practice",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "负责测试样品拆板核验、影像存档与检测报告分类归档，保障合规信息在多个系统间完全一致。",
          "独立操作亚马逊 ACC 合规平台及内部 TCF 卷宗系统，完成报告上传与关键信息校验；运用 Excel 建立业务台账与进度报表，梳理高频易错点并搭建个人操作 SOP，显著提升资料处理准确率。"
        ],
        highlights: [
          "累计处理百余批次样品，交付超 450 份跨境准入资料",
          "沉淀个人操作 SOP，把重复性合规工作标准化",
          "熟悉 CE / CPC / CPSIA 等多类跨境合规报告标准"
        ],
        gallery: [
          { src: "assets/images/works/sgs.jpg", fallback: "assets/images/works/sgs.svg", alt: "SGS 实习留影：标识墙前，佩戴实习工牌" },
          { src: "assets/images/works/sgs-2.jpg", orient: "portrait", alt: "SGS 实习留影：公司标识墙前的手势合影" }
        ]
      }
    },
    {
      id: "countryside",
      title: "广东「百千万工程」三下乡实践",
      summary: "连续两届担任队长（实践时长 7 天 × 2 届），统筹 20 人团队，从写方案拿经费到落地交付，产出 8 处文旅点位介绍视频，走完一个完整项目闭环。",
      category: "项目统筹",
      year: "2025 — 2026",
      role: "队长（连续两届）",
      cover: "assets/images/works/countryside.jpg",
      coverFallback: "assets/images/works/countryside.svg",
      coverAlt: "三下乡实践留影：社区图书室里与居民比赞合影",
      tech: ["项目申报", "团队统筹", "短视频制作", "调研报告"],
      external: { label: "查看项目详情", url: "" },
      caseHref: "#practice",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "独立撰写项目申报方案，成功获批校级重点项目及 1000 元专项经费，统筹 20 人实践团队连续两届落地。",
          "落地乡村调研与文旅宣讲，产出 8 处文旅点位介绍视频、2 部主题宣传短片，并整理素材撰写完整实践复盘报告。"
        ],
        highlights: [
          "20 人团队排期与分工，两届连续落地（7 天 × 2 届）",
          "8 处文旅点位介绍视频 + 2 部宣传片 + 完整复盘报告",
          "获社区官方表扬信 2 封"
        ],
        gallery: [
          { src: "assets/images/works/countryside.jpg", alt: "社区图书室走访：与居民比赞合影" },
          { src: "assets/images/works/countryside-2.jpg", orient: "portrait", alt: "江岭社区党建书吧调研走访现场" },
          { src: "assets/images/works/countryside-3.jpg", alt: "双语特色环保话剧排练过程留影" }
        ]
      }
    },
    {
      id: "media",
      title: "学院新媒体中心 & 德语实践中心",
      summary: "文案 × 设计 × 摄影 × 排版全链路：50+ 篇新闻稿、10+ 张海报、5 份活动策划方案。",
      category: "内容创作",
      year: "2024 — 2026",
      role: "干事 · 后任组织实践部部长",
      cover: "assets/images/works/media.jpg",
      coverFallback: "assets/images/works/media.svg",
      coverAlt: "「新能源汽车国际交流」微专业招生通知公众号封面设计选样",
      tech: ["新闻稿撰写", "海报设计", "推文排版", "摄影摄像"],
      external: { label: "查看作品详情", url: "" },
      caseHref: "#media",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "承担学院新媒体平台的持续内容供给：从活动通知、新闻稿到海报设计与推文排版，形成稳定的产出节奏。",
          "线下参与城市文化摆摊宣讲，负责活动摄影摄像，为平台持续供给图文视觉素材；任部长期间统筹团风采系列活动与毕业晚会，完成团工作展板 2 块。"
        ],
        highlights: [
          "累计撰写活动通知与新闻稿 50+ 篇",
          "设计海报 10+ 张、完成推文排版 10+ 篇",
          "输出活动策划方案 5 份"
        ],
        gallery: [
          { src: "assets/images/works/media-2.jpg", alt: "活动海报设计选样：双选会、光影魔法课摄影讲座、日语成长旋律专题" },
          { src: "assets/images/works/media-4.jpg", orient: "portrait", alt: "聘书：获聘外国语学院学生会（筹）新媒体中心干事，任期 2024.09 — 2025.09" }
        ]
      }
    },
    {
      id: "lanxin",
      title: "蓝信封书信陪伴 · 33 小时公益",
      summary: "蓝信封乡村儿童书信陪伴志愿者：一年半往来书信 20 封、累计志愿服务 33 小时，持有志愿服务证明。以一对一书信陪伴乡村儿童成长。",
      category: "教学与公益",
      year: "2025 — 2026",
      role: "通信大使（志愿者）",
      cover: "assets/sources/practice/蓝信封志愿时数卡.jpg",
      coverFallback: "assets/images/works/edu.svg",
      coverAlt: "蓝信封行动志愿服务时数卡：20 封往来书信 · 累计 33 小时志愿服务",
      tech: ["长期陪伴", "书信沟通", "乡村儿童公益"],
      external: { label: "查看项目详情", url: "" },
      caseHref: "#practice",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "参与蓝信封乡村儿童书信陪伴服务，以一对一书信陪伴乡村儿童成长。一年半往来书信 20 封、累计志愿服务 33 小时，持有蓝信封志愿服务证明（通信大使，2025.03 — 2026.06）。"
        ],
        highlights: [
          "一年半长期坚持 · 20 封往来书信 · 33 小时志愿服务",
          "持有蓝信封志愿服务证明（通信大使）"
        ],
        gallery: [
          { src: "assets/sources/practice/蓝信封志愿时数卡.jpg", alt: "蓝信封行动志愿服务时数卡：20 封往来书信 · 累计 33 小时志愿服务" },
          { src: "assets/sources/practice/蓝信封志愿服务证书.jpg", orient: "portrait", alt: "蓝信封行动志愿服务证书：通信大使（2025.03 — 2026.06）" }
        ],
        resources: [
          { label: "蓝信封志愿服务证书", kind: "doc", path: "assets/sources/practice/蓝信封志愿服务证书.jpg", note: "通信大使 · 33 小时志愿服务" }
        ]
      }
    },
    {
      id: "teach-volunteer",
      title: "教学与辅导 · 助教讲师与英语家教",
      summary: "优博思助教讲师建立学员学习档案体系、拓展意向客户 10+ 人；长期担任英语家教，辅导学生顺利通过 KET。",
      category: "教学与辅导",
      year: "2025 — 2026",
      role: "助教讲师 / 英语家教",
      cover: "assets/images/works/edu.jpg",
      coverFallback: "assets/images/works/edu.svg",
      coverAlt: "社区双语公益课堂教学现场合影",
      tech: ["学情管理", "文案撰写", "线下宣讲", "赛事志愿服务"],
      external: { label: "查看项目详情", url: "" },
      caseHref: "#practice",
      caseLabel: "查看完整案例",
      detail: {
        overview: [
          "优博思教培机构助教讲师（2025.03–2026.07）：建立学员学习档案、跟进学情并对接家长答疑；撰写宣传文案并线下宣讲推介课程，拓展意向客户 10+ 人。",
          "英语家教（多年）：辅导学生初三历史由不及格提升至 80 分、小学英语期中 98 分，并辅导学生顺利通过 KET。"
        ],
        highlights: [
          "建立学员学习档案体系，持续跟进学情与家长沟通",
          "线下宣讲拓展意向客户 10+ 人",
          "辅导学生通过 KET；初三历史由不及格提升至 80 分"
        ],
        gallery: []
      }
    }
  ],

  /* ---------- 技能（level 为横向可视化长度，仅用于排版，不代表考核分数） ---------- */
  skills: [
    {
      group: "语言能力",
      items: [
        { name: "德语", level: 84, note: "专业四级（良好）· 中德双语稿件独立成稿" },
        { name: "英语", level: 78, note: "CET-4 · 高考 129/150（听说满分）" },
        { name: "跨文化表达", level: 86, note: "文化议题转译 · 双语脚本与字幕" }
      ]
    },
    {
      group: "跨境合规与运营",
      items: [
        { name: "亚马逊 ACC 合规平台", level: 85, note: "独立操作 450+ 份资料交付" },
        { name: "TCF 卷宗系统", level: 80, note: "报告上传与关键信息校验" },
        { name: "CE / CPC / CPSIA 标准", level: 76, note: "多类跨境准入报告标准" }
      ]
    },
    {
      group: "内容创作",
      items: [
        { name: "文案与新闻稿", level: 90, note: "50+ 篇 · 学院公众号供稿" },
        { name: "视频拍摄与剪辑", level: 76, note: "短视频 / 宣传片 / 分镜表" },
        { name: "海报与物料设计", level: 72, note: "10+ 张 · 公众号视觉" }
      ]
    },
    {
      group: "办公与 AI 工具",
      items: [
        { name: "Excel（透视表 / 台账 / 报表）", level: 84, note: "合规业务进度台账" },
        { name: "PPT / Word", level: 82, note: "13 页演讲 PPT 统筹" },
        { name: "ChatGPT / Gemini", level: 78, note: "本地化文案提效" }
      ]
    }
  ],

  /* ---------- 经历 ---------- */
  timeline: [
    {
      time: "2026.07 — 2026.09",
      title: "轻工产品检验助理（跨境合规实习）",
      org: "SGS 通标标准技术服务",
      desc: "独立操作亚马逊 ACC 合规平台与 TCF 卷宗系统，累计处理百余批次样品、交付超 450 份跨境准入资料；用 Excel 建立业务台账并沉淀个人操作 SOP。"
    },
    {
      time: "2026.10 — 至今",
      title: "德语之星 · 全国德语演讲比赛 队长",
      org: "第五届 · 国家级赛事 · 正在角逐（11.01 同济大学决赛答辩）",
      desc: "以《原来中国长这样》为叙事主线，主导「先相遇，再理解」反转命题与递进式论证结构，统筹 13 页 PPT；已完成稿件、PPT 与两版拍摄，跨 10 天推进 8 个里程碑节点，11.01 赴同济大学决赛答辩。"
    },
    {
      time: "2026",
      title: "外教社杯 · 全国德语短视频比赛",
      org: "第一届 · 国家级赛事 · 进行中",
      desc: "作品《语守本土，译向世界》：用德语讲述普通话与岭南方言的共生保护，4 轮剧本迭代、德国外教访谈对标、客家话实地调研。"
    },
    {
      time: "2025.07 — 2026.07",
      title: "三下乡社会实践 队长（连续两届）",
      org: "广东「百千万工程」· 校级重点项目",
      desc: "实践时长 7 天 × 2 届。统筹 20 人团队，独立撰写申报方案并获批 1000 元专项经费；产出 8 处文旅点位介绍视频、2 部宣传片与完整复盘报告，获社区表扬信 2 封。"
    },
    {
      time: "2025.03 — 2026.07",
      title: "助教讲师",
      org: "优博思教培机构",
      desc: "建立学员学习档案、跟进学情并对接家长答疑；撰写课程宣传文案并开展线下宣讲，拓展意向客户 10+ 人。"
    },
    {
      time: "2024.09 — 至今",
      title: "德语（本科）",
      org: "深圳技术大学",
      desc: "德语专业四级 73 分（良好）；CET-4 已通过、CET-6 备考中。荣誉：十五运会「志愿之星」、全国大学生英语竞赛三等奖、学院智能体创作大赛三等奖、优秀学生干部。"
    }
  ],

  /* ---------- 竞赛项目（两项国家级德语赛事） ---------- */
  competitions: [
    {
      id: "german-star",
      name: "德语之星 · 全国德语演讲比赛",
      level: "第五届 · 国家级赛事",
      role: "队长 / 内容主创",
      period: "2026.10.01 — 10.15 成片交付 · 11.01 同济大学决赛答辩",
      status: "正在角逐",
      thesis: "Erst begegnen, dann verstehen（先相遇，再理解）",
      quote: {
        de: "„Verständnis ist kein Visum für die Begegnung. Es ist das Gepäck, das wir unterwegs mitnehmen.“",
        cn: "理解不是相遇的签证，而是我们在路上携带的行囊。"
      },
      summary: "以 2025 年度「中国好书」《原来中国长这样》为叙事主线，推翻「先理解，再相遇」的默认假设，反向提出「先相遇，再理解」，用三层递进论证把跨文化交流从「知识问题」还原成「行动问题」。",
      schedule: [
        { date: "10.01", item: "演讲稿定稿" },
        { date: "10.05", item: "13 页 PPT 交付" },
        { date: "10.07", item: "第一次拍摄" },
        { date: "10.08", item: "第二次拍摄：在首版基础上补拍完善、交付稿件" },
        { date: "10.09", item: "成片输出" },
        { date: "10.12", item: "答辩预演" },
        { date: "10.15", item: "成果交付" },
        { date: "11.01", item: "同济大学决赛答辩" }
      ],
      structure: [
        { k: "叙事主线", v: "《原来中国长这样》：由德国伯乐中文合唱团成员以留学生视角写成的中国观察" },
        { k: "核心命题", v: "Erst verstehen, dann begegnen → Erst begegnen, dann verstehen（反转命题）" },
        { k: "三层论证", v: "歌声层（德国城堡下响起吉他，唱的却是成都）→ 行走层（不懂中文却行走中国数十万公里的德国夫妇；《红楼梦》德语译者）→ 自我层（从听故事的人变成写故事的人）" },
        { k: "现实案例", v: "武汉柴油机厂格里希、《黑神话：悟空》" },
        { k: "价值升维", v: "背负文化 → 融通文化" },
        { k: "金句", v: "Verständnis ist kein Visum für die Begegnung.（理解不是相遇的签证）" }
      ],
      deliverables: ["13 页中德双语 PPT", "定稿演讲稿", "两版拍摄成片", "15 个答辩问题预案", "22 个板块的中德文化交流素材库"],
      sources: ["中华人民共和国外交部", "同济大学", "Pew Research Center", "新华网"],
      resources: [
        { label: "德语之星 · 飞书导出 PDF", kind: "doc", path: "assets/sources/competitions/德语之星.pdf", note: "含最终安排、13 页 PPT 结构与 15 个答辩问题" },
        { label: "中德文化交流素材库 · 完整整合版", kind: "html", path: "assets/sources/competitions/中德文化交流素材库_完整整合版.html", note: "团队共建备赛资料：22 个主题板块、中德对照的事例与论据（教育、友好城市、体育、企业产业、影视媒体、汉学与翻译等），附论据可视化年报与数据卡片" }
      ],
      workId: "german-star"
    },
    {
      id: "german-video",
      name: "外教社杯 · 全国德语短视频比赛",
      level: "第一届 · 国家级赛事",
      role: "内容策划 / 德语译制 / 出镜讲解",
      period: "2026（已提交参评）",
      status: "参评中",
      thesis: "语守本土，译向世界",
      summary: "把「方言保护」这个本土议题讲给德语观众听：普通话是桥梁，岭南方言是根脉，两者并非此消彼长。片尾进一步提出用深圳的科技能力建设客家话语料库与语言大模型。",
      schedule: [
        { date: "第 1 版", item: "初版思路（确定议题方向）" },
        { date: "第 2 版", item: "客家话框架（引入方言主体性）" },
        { date: "第 3 版", item: "方案一稿（补齐论证链）" },
        { date: "线下", item: "与指导老师面议后重构叙事" },
        { date: "第 4 版", item: "定稿（分镜表落地）" }
      ],
      structure: [
        { k: "议题", v: "普通话与岭南方言（粤语 & 客家话）的共生保护" },
        { k: "叙事结构", v: "是什么 — 为什么 — 怎么做" },
        { k: "理论支撑", v: "Edward T. Hall 文化冰山理论、剥洋葱理论" },
        { k: "对标调研", v: "采访德国外教，梳理德国方言保护政策与经典案例" },
        { k: "一手素材", v: "跟随客家人逐句学习客家话，采集阿婆「食饭冇」「常转屋卡」等语料入镜" },
        { k: "片尾构想", v: "客家话语料库 / 语言大模型" },
        { k: "学术规范", v: "全部数据标注来源与查询日期，附于片尾" }
      ],
      deliverables: ["分镜表（时间码 / 配音 / 字幕 / 画面描述）", "数据溯源清单", "5 分钟德语宣传片《华南新声，客音无界》"],
      sources: ["广州市人民政府", "中国日报", "百度百科", "Ethnologue", "暨南大学单韵鸣论文"],
      resources: [
        { label: "讲好中国故事 · 剧本 PDF", kind: "doc", path: "assets/sources/competitions/讲好中国故事剧本.pdf", note: "含 4 版迭代、分镜表与数据来源清单" }
      ],
      workId: "german-video"
    }
  ],

  /* ---------- 三下乡社会实践（分年度、分队伍） ---------- */
  practice: {
    intro: "从国家级德语赛事、连续两年的「百千万工程」三下乡，到跨境合规实习与志愿服务——这一节汇集我作为「内容生产者 + 项目统筹者」，在跨文化与跨境场景下的几段完整实践。每段都展开记录背景、我的角色与最终交付。",
    note: "本页图片与报告已随站点打包（相对路径，点开即看）；三下乡视频体积过大，未随站发布，下方条目仅作留档占位——后续把成片托管到视频平台后，回到 data.js 给对应条目填回 path 即可恢复「点击观看」。",
    extra: ["national-games", "sgs", "lanxin", "teach-volunteer"],
    years: [
      {
        year: "2026",
        label: "第二年 · 双语升级",
        teams: [
          {
            id: "rongmeng-2026",
            name: "融梦双语同行队",
            subtitle: "深圳技术大学外国语学院 · 第二次进驻江岭",
            role: "队长 · 德语内容与后勤统筹",
            time: "2026.07.04 — 07.10（7 天）",
            place: "深圳市坪山区马峦街道江岭社区",
            theme: "APEC 视域下江岭社区客家文化双语传播",
            summary: "紧扣 2026 深圳 APEC 的国际化窗口，为江岭社区补齐「多语种文旅物料 + 公益外语课堂」两块短板：走遍 8 处文旅点位拍摄制作介绍视频、建三语素材库，同时开办公益双语课堂与德语体验课。",
            facts: [
              { k: "实践时长", v: "7 天 × 2 届" },
              { k: "文旅点位", v: "8 处" },
              { k: "公益课堂", v: "7.04—7.09 连续 6 天" },
              { k: "覆盖学员", v: "40+ 名中小学生" },
              { k: "宣传片", v: "2 部（三语 + 德语）" },
              { k: "社区评价", v: "服务评价表「优秀」" }
            ],
            duties: [
              { group: "队长", members: "吴欣怡（带队老师：蒋拓）", desc: "全流程统筹、每日计划与人员调配；对接社区党群服务中心；审核双语脚本、课程与成片；成果交接" },
              { group: "文案脚本组", members: "钟芮桐、王棋莹", desc: "实地走访四大点位搜集素材，撰写并校对英语介绍脚本，负责剪辑、配乐与英文字幕" },
              { group: "德语字幕", members: "吴欣怡", desc: "德语译制与字幕制作，对接「E Flourishing」公众号完成 APEC 主题联合推文" },
              { group: "教学组 · 成人班", members: "郑子非、林沃杰", desc: "约 5 节，制作日常对话 / 商务英语 / 旅游英语三类课件并设计场景演练" },
              { group: "教学组 · 少儿班", members: "覃月坤、贺海明", desc: "约 5 节，设计趣味课堂，含英文故事、歌曲学唱与互动游戏" },
              { group: "德语体验课", members: "吴欣怡", desc: "面向社区青少年的德语启蒙体验课" },
              { group: "后勤综合组", members: "陈鑫海、吴欣怡", desc: "物资与经费台账、影像归档命名、每日实践台账与考勤、临时补位支援" }
            ],
            content: [
              "三大核心任务并行：双语宣传素材生产、公益外语课堂、客家文化对外传播专项调研。",
              "7 天全流程排期：报到调研 → 脚本与课件筹备试讲 → 外景拍摄同步开课 → 剪辑 → 成片初修 → 成品优化与课程收尾 → 发布与成果交接，每日由不同队员轮值撰写实践日志。",
              "《江岭客家，有戏》拍摄期间，本地客家阿婆专程到场，现场教队员「食饭冇」「常转屋卡」等客家话，这段方言互动被完整剪入成片。"
            ],
            outcomes: [
              "8 处文旅点位介绍视频（含围屋、古村、红色文化与生态点位；中英德三语标准化介绍，脚本经专业教师审校），形成可直接用于导览牌、电子导览与宣传手册的素材库",
              "3 分 20 秒三语宣传片《江岭客家，有戏》，设围屋全景 / 客家历史 / 社区烟火 / 文化传承 / 戏剧活化 / 尾声六大篇章，配英德双语字幕",
              "5 分钟德语宣传片《华南新声，客音无界》，以赛事级标准打磨德语译制精度，参评第一届「外教社杯」",
              "APEC 主题少儿双语公益课堂 + 成人英语班 + 德语体验课，全套标准化教学资料移交社区，可支撑后续常态化开课",
              "调研报告《APEC 视域下江岭社区客家文化双语传播现状及提升策略研究》",
              "推文 2 篇（成果总结 + 与「E Flourishing」联合发布的 APEC 主题稿）"
            ],
            data: [
              { k: "65%", v: "外籍游客无法获取外文游览信息" },
              { k: "78.2%", v: "社区青少年有明确课外英语学习需求" },
              { k: "45.4%", v: "成年居民需要日常 / 旅游场景实用英语" },
              { k: "50%", v: "受访者认为本地缺少适配国际传播的内容" }
            ],
            media: [
              "实践成果新闻稿《双语传客韵 青春助振兴》—— 文字：吴欣怡；图片：吴欣怡、贺海明、钟芮桐",
              "《百千万工程·江岭实践：深技大外国语学院学生用双语镜头唤醒客家围屋》",
              "与「E Flourishing」公众号合作的 APEC 主题联合推文"
            ],
            awards: [
              "马峦街道办事处出具《实践证明》（加盖公章）：确认 2026.07.04—07.09 在江岭社区开展「百千万工程」暑期三下乡实践，连续两年定点服务、成果移交社区",
              "广东青年大学生「百千万工程」突击队行动服务评价表：总体评价「优秀」",
              "社区需求单位评价：连续两年在我社区开展社会实践，工作成效突出，获社区工作人员与居民好评",
              "全部成果（课件、三语文稿、宣传片）完整移交社区，用于展厅播放、线上宣传与导览二维码制作"
            ],
            gallery: [
              { src: "assets/sources/practice/rongmeng/江岭客家，有戏 最终版/江岭客家，有戏 最终版-封面.jpg", fallback: "assets/images/works/countryside.svg", alt: "三语宣传片《江岭客家，有戏》封面" },
              { src: "assets/sources/practice/rongmeng/赤坳河绿道 廉政绿道 江岭社区公园介绍视频(1)-封面.jpg", alt: "赤坳河绿道 · 廉政绿道 · 江岭社区公园介绍视频封面（生态点位）" },
              { src: "assets/sources/practice/rongmeng/双语课程合影.jpg", fallback: "assets/images/works/edu.svg", alt: "社区双语公益课堂合影" },
              { src: "assets/sources/practice/rongmeng/曾生故居·曾氏祠堂·东江纵队纪念馆-封面.jpg", alt: "曾生故居 · 曾氏祠堂 · 东江纵队纪念馆介绍视频封面（红色文化点位）" },
              { src: "assets/sources/practice/rongmeng/社区图书室走访留影.jpg", alt: "社区图书室走访：与居民比赞合影" },
              { src: "assets/sources/practice/rongmeng/江岭社区友邻驿站合影.jpg", alt: "江岭社区东关珺府友邻驿站合影" }
            ],
            resources: [
              { label: "《江岭客家，有戏》最终版", kind: "video", path: "", note: "3 分 20 秒 · 中英德三语字幕" },
              { label: "实践总结片 · 最终版本", kind: "video", path: "", note: "7 天实践全程总结" },
              { label: "赤坳河绿道 · 廉政绿道 · 江岭社区公园", kind: "video", path: "", note: "生态点位介绍" },
              { label: "曾生故居 · 曾氏祠堂 · 东江纵队纪念馆", kind: "video", path: "", note: "红色文化点位介绍" },
              { label: "其余文旅点位介绍视频（5 处）", kind: "video", path: "", note: "围屋与古村等点位，共 8 处文旅点位成片" },
              { label: "APEC 实践报告", kind: "doc", path: "assets/sources/practice/rongmeng/APEC江岭社区客家文化双语传播三下乡实践报告(1).docx", note: "实践总报告" },
              { label: "江岭调研报告（final）", kind: "doc", path: "assets/sources/practice/rongmeng/江岭调研报告_final(1).docx", note: "调研报告终稿" },
              { label: "三下乡具体分工", kind: "doc", path: "assets/sources/practice/rongmeng/三下乡具体分工.docx", note: "分组分工与 7 天排期" },
              { label: "服务评价表", kind: "doc", path: "assets/sources/practice/rongmeng/附件7：广东青年大学生“百千万工程”突击队行动服务评价表 (1).docx", note: "总体评价：优秀" },
              { label: "实践证明（加盖公章）", kind: "doc", path: "assets/sources/practice/实践证明.pdf", note: "马峦街道办事处出具 · 确认 7.04—07.09 江岭社区三下乡实践" }
            ]
          }
        ]
      },
      {
        year: "2025",
        label: "第一年 · 从零落地",
        teams: [
          {
            id: "lingnan-2025",
            name: "岭南融梦队",
            subtitle: "深圳技术大学 · 跨专业突击队（外国语 + 中德智能制造 + 新材料与新能源）",
            role: "队长 · 宣传短片与双语课堂主创",
            time: "2025.07.10 — 07.16（7 天，项目周期 07.05 — 07.18）",
            place: "深圳市坪山区马峦街道江岭社区长守村 · 长守戏剧谷",
            theme: "生态赋能戏剧谷，产业升级助农兴",
            summary: "面向「生态 + 文旅」的乡村推广困境：一边用双语环保课堂和儿童话剧在社区内部建立认同，一边用相机 + 无人机产出可对外传播的宣传短片，再用问卷数据诊断「为什么没人知道这里」。",
            facts: [
              { k: "双语课堂", v: "11 名 6—12 岁社区儿童" },
              { k: "掌握词汇", v: "15+ 个环保英语单词" },
              { k: "宣传短片", v: "2 分 58 秒 · 已交付社区" },
              { k: "有效问卷", v: "40 份" },
              { k: "公众知晓率", v: "仅 25%" },
              { k: "自发传播", v: "10+ 户家庭" }
            ],
            duties: [
              { group: "前期准备组", members: "", desc: "查阅资料、对接江岭社区党群服务中心，明确调研目的与分工（实地走访组 / 实地观察组 / 资料收集组）" },
              { group: "教学与话剧组", members: "", desc: "设计双语环保课堂与游戏环节，组织排演双语话剧《森林小卫士：垃圾分类大作战》" },
              { group: "影像组", members: "", desc: "相机拍摄细节素材（围屋雕梁、百年龙眼古树、文创产品）+ 无人机航拍宏观景观（赤坳水库、山林布局）" },
              { group: "调研组", members: "", desc: "实地观察与走访社工、志愿者、商户与孩童，线上发布问卷并完成 SWOT 分析" },
              { group: "指导老师", members: "刘士文、李海文、傅丽红", desc: "调研方法与报告指导" }
            ],
            content: [
              "双语环保课堂：用英语教「垃圾分类」「节约用水」「种树」等表达，配游戏环节让孩子在语言学习中建立环保意识。",
              "双语话剧《森林小卫士：垃圾分类大作战》：11 名 6—12 岁儿童分饰乐乐、汤姆、树爷爷等角色，中英双语演出，「由孩子演给孩子看」。",
              "影像生产：7.14—7.15 排练与拍摄同步推进，7.16 完成话剧展示并把 2 分 58 秒宣传短片交付社区负责人。",
              "调研：实地走访 + 面向深圳市民的线上问卷（14 题，含单选 / 多选 / 填空），用 SWOT 分析法诊断推广困境。"
            ],
            outcomes: [
              "2 分 58 秒长守戏剧谷宣传短片，相机素材为主、无人机航拍为辅，已交付社区并获认可",
              "调研报告《生态 + 文旅视域下长守戏剧谷的推广现状及提升策略研究》",
              "提出精准定位 + 线上线下联动的提升策略：把客家围屋、非遗、赤坳水库等资源转化为传播亮点，补齐户外广告与景区联动的空白",
              "建立宣传效果监测机制建议：以播放量、点赞量、转化率与线下游客问卷判断宣传与行动的联动效果"
            ],
            data: [
              { k: "25%", v: "问卷填写者听说过长守戏剧谷（30/40 未听说）" },
              { k: "90%", v: "知晓者通过抖音、小红书等社交媒体了解" },
              { k: "60%", v: "通过朋友或家人介绍" },
              { k: "20%", v: "旅行社推荐占比（线下触达明显不足）" }
            ],
            media: [
              "校级公众号暑期社会实践报道《融戏剧元素助环保，赋多元动能兴文旅》—— 文字：姚小莉；图片：陈伟伟；责编：刘士文",
              "背景：长守村活化利用入选 2024 年深圳市「百千万工程」十件大事（媒体报道指出其宣传推广仍有欠缺）"
            ],
            awards: [
              "外国语学院社会实践考核汇总表（2025 年）：等级「优秀」，实践报告完成归档",
              "10 余名社区儿童与 10 余户家庭参与活动并在社交平台自发传播戏剧谷"
            ],
            gallery: [
              { src: "assets/sources/practice/lingnan/岭南融梦队在长守戏剧谷前合影.jpg", fallback: "assets/images/works/countryside.svg", alt: "岭南融梦队在长守戏剧谷招商服务办公室前合影，两侧为「百千万工程突击队」队旗" },
              { src: "assets/sources/practice/lingnan/实践队员在社区党群服务中心了解村史.jpg", fallback: "assets/images/works/countryside.svg", alt: "在社区党群服务中心宣传栏前了解长守村村史与活化历程" },
              { src: "assets/sources/practice/lingnan/实践队员走访长守村道.jpg", fallback: "assets/images/works/countryside-2.svg", alt: "走访长守村村道，实地观察文旅资源分布" },
              { src: "assets/sources/practice/lingnan/实践队员在社区图书室开展访谈调研.jpg", fallback: "assets/images/works/countryside-2.svg", alt: "在社区图书室与社区工作者开展访谈调研" },
              { src: "assets/sources/practice/lingnan/实践队员环保双语课程.jpg", fallback: "assets/images/works/edu.svg", alt: "双语环保课堂现场" },
              { src: "assets/sources/practice/lingnan/实践队员排练双语特色环保话剧过程留影.jpg", fallback: "assets/images/works/countryside.svg", alt: "双语环保话剧排练现场" },
              { src: "assets/sources/practice/lingnan/双语话剧《森林小卫士》演出现场.jpg", fallback: "assets/images/works/edu.svg", alt: "双语话剧《森林小卫士》演出现场，孩子们手持树叶道具与垃圾分类造型合影" },
              { src: "assets/sources/practice/lingnan/实践队员与当地志愿者共同清理河道.jpg", fallback: "assets/images/works/countryside-2.svg", alt: "与当地志愿者共同清理河道" },
              { src: "assets/sources/practice/lingnan/实践队员在客家老屋前合影.jpg", fallback: "assets/images/works/countryside.svg", alt: "实践队员在客家老屋前合影" }
            ],
            resources: [
              { label: "长守宣传片", kind: "video", path: "", note: "2 分 58 秒 · 已交付社区" },
              { label: "双语话剧《森林小卫士》", kind: "video", path: "", note: "儿童中英双语环保话剧" },
              { label: "视频素材 1 / 2", kind: "video", path: "", note: "素材原始片段" },
              { label: "岭南融梦队实践报告", kind: "doc", path: "assets/sources/practice/lingnan/岭南融梦队实践报告.docx", note: "完整实践复盘 · 图片已压缩便于下载" },
              { label: "生态 + 文旅调研报告", kind: "doc", path: "assets/sources/practice/lingnan/生态+文旅视域下长守戏剧谷的推广现状及提升策略研究.docx", note: "含 SWOT 与提升策略 · 图片已压缩便于下载" },
              { label: "结项答辩 PPT", kind: "doc", path: "", note: "结项答辩材料（含内嵌视频，体积过大未随站发布）" }
            ]
          }
        ]
      }
    ]
  },

  /* ---------- 外国语学院新媒体工作成果 ---------- */
  mediaWork: {
    intro: "担任学院新媒体中心干事、后任组织实践部部长期间的工作沉淀：一条从「写稿 → 排版 → 视觉 → 摄影 → 活动策划」都能自己跑完的内容生产线。",
    note: "下列文稿与图片已随网站打包（相对路径），点击即可打开 / 下载；为控制站点体积，内嵌照片已做降采样重压（文字与排版完全不变），另有 1 份因体积原因未随站发布（见「光影魔法课第三期」文稿说明）。视频素材未随站打包，上线前请自行托管到视频平台或云存储。",
    stats: [
      { value: "50+", label: "篇新闻稿与文案" },
      { value: "10+", label: "张海报与公众号封面" },
      { value: "74", label: "条推文台账（2024 年度）" },
      { value: "5", label: "份策划与统筹文档" }
    ],
    blocks: [
      {
        title: "新闻稿撰写",
        desc: "覆盖学院重大活动、校友访谈、学术讲座与校园生活，形成稳定的供稿节奏与统一文风。下方为各篇文稿预览，点击可打开原文。",
        gallery: [
          { src: "assets/images/shots/news-01.png", alt: "2024外院学生会换届仪式暨新成员见面会新闻稿（文稿预览）", link: "assets/sources/media-work/2024外院学生会换届仪式暨新成员见面会新闻稿(1)(1).docx" },
          { src: "assets/images/shots/news-02.png", alt: "【榜样校友说】张子璇：不设限的青春（文稿预览）", link: "assets/sources/media-work/【榜样校友说】——张子璇：不设限的青春.docx" },
          { src: "assets/images/shots/news-03.png", alt: "优秀校友访谈新闻稿—冯金梅（文稿预览）", link: "assets/sources/media-work/优秀校友访谈新闻稿—冯金梅(1).docx" },
          { src: "assets/images/shots/news-04.png", alt: "光影魔法课第三期新闻稿（文稿预览；原文件体积过大未随站发布）" },
          { src: "assets/images/shots/news-05.png", alt: "军训送清凉新闻稿（文稿预览）", link: "assets/sources/media-work/军训送清凉.docx" },
          { src: "assets/images/shots/news-06.png", alt: "创新就业讲座新闻稿（文稿预览）", link: "assets/sources/media-work/创新就业讲座新闻稿.docx" },
          { src: "assets/images/shots/news-07.png", alt: "年终总结文案（文稿预览）", link: "assets/sources/media-work/年终总结文案最终版.docx" }
        ]
      },
      {
        title: "推文排版与发布台账",
        desc: "维护学院公众号全年推文排期与归档台账，按月度分区记录标题与发布链接，便于复盘栏目结构与发布节奏。以下为台账中「内容性较强」的代表条目（已略去纯事务性通知）。",
        pushes: [
          { date: "2024.01", title: "梦想征程，星辰大海丨外国语学院就业指导会议顺利召开", url: "https://mp.weixin.qq.com/s/dDZU9cRC6zRIzxBn7TuWQw" },
          { date: "2024.04", title: "德语角丨第二期：德国旅游", url: "https://mp.weixin.qq.com/s/xB6v_-39cUYSZe5VTXLwxQ" },
          { date: "2024.06", title: "“语你同行，逐梦远航”——2024 届毕业晚会圆满结束", url: "https://mp.weixin.qq.com/s/Y460DjZP0pZ8f3lxQZ2Yjw" },
          { date: "2024.08", title: "百千万工程丨外国语学院赴汕头市英歌舞调研纪实", url: "https://mp.weixin.qq.com/s/XzDBJlbvd-T5tLVw3Hku9g" },
          { date: "2024.11", title: "Try everything! 为“外”发声丨团风采合唱决赛圆满落幕", url: "https://mp.weixin.qq.com/s/J-yQZn1TXO9ojNqJo7uHGw" },
          { date: "2024.12", title: "学工快讯丨外国语学院“三下乡”暨“百千万工程”突击队行动分享会", url: "https://mp.weixin.qq.com/s/j2VIXCDrQC1o0InN9BG_2w" }
        ],
        pushTotal: 74,
        pushNote: "台账共 74 条推文记录（学院公众号 2024 年度归档），此处展示 6 条内容型代表条目。",
        gallery: [
          { src: "assets/images/shots/push-01.png", alt: "外国语学院公众号推文预览（2024 年度共 74 篇）", link: "https://mp.weixin.qq.com/s/dDZU9cRC6zRIzxBn7TuWQw" }
        ]
      },
      {
        title: "视觉物料与封面",
        desc: "公众号首图、活动海报与专题封面，保持学院视觉识别的一致性。",
        gallery: [
          { src: "assets/sources/media-work/封面.png", fallback: "assets/images/works/media.svg", alt: "公众号推文封面设计" },
          { src: "assets/sources/media-work/双选会公众号封面.png", fallback: "assets/images/works/media.svg", alt: "秋季双选会公众号封面" },
          { src: "assets/sources/media-work/招生通知.png", fallback: "assets/images/works/media.svg", alt: "招生通知封面" },
          { src: "assets/sources/media-work/蓝色渐变热点新闻微信公众号封面 (1).png", fallback: "assets/images/works/media.svg", alt: "热点新闻公众号封面" },
          { src: "assets/images/works/media-2.jpg", fallback: "assets/images/works/media.svg", alt: "活动海报设计选样：双选会、光影魔法课摄影讲座、日语成长旋律专题" },
          { src: "assets/images/works/media-3.jpg", orient: "portrait", fallback: "assets/images/works/media.svg", alt: "「光影魔法课」摄影技巧提升系列讲座海报（第一期）" }
        ]
      },
      {
        title: "活动摄影",
        desc: "承担学院活动、晚会与外景采风的摄影摄像，为新媒体平台持续供给一手图文素材。竖构图照片按原始方向竖屏呈现，不做横向裁切。",
        gallery: [
          { src: "assets/sources/media-work/我的摄影照片/紫荆花树下的独照.jpg", orient: "portrait", fallback: "assets/images/works/media.svg", alt: "紫荆花树下的演员独照（校园外景采风）" },
          { src: "assets/sources/media-work/我的摄影照片/两位演员的合影.jpg", orient: "portrait", fallback: "assets/images/works/media.svg", alt: "两位演员在花树下的合影" },
          { src: "assets/sources/media-work/我的摄影照片/舞台演出-群舞造型.jpg", fallback: "assets/images/works/media.svg", alt: "晚会舞台上的群舞造型瞬间" },
          { src: "assets/sources/media-work/我的摄影照片/校园活动现场-卡片互动.jpg", fallback: "assets/images/works/media.svg", alt: "校园活动现场的卡片互动" },
          { src: "assets/sources/media-work/我的摄影照片/舞台群像与标语.jpg", fallback: "assets/images/works/media.svg", alt: "舞台群像与手持标语" }
        ],
        photoNote: "以上为选片（5 张）：外景人像、晚会舞台与活动现场各若干，横竖构图均按原始方向呈现；完整原始素材可在面谈时提供。"
      },
      {
        title: "策划案",
        desc: "面向学院大型活动与晚会的策划与统筹方案：从主题立意、流程设计到人员分工，形成可落地的执行文档。",
        items: [
          { name: "外国语学院就业育人表彰大会暨 AI 智能体创作大赛活动方案", path: "assets/sources/media-work/外国语学院就业育人表彰大会暨AI智能体创作大赛活动方案.docx" },
          { name: "2026 SFL 毕业晚会总表（节目 / 人员统筹）", path: "assets/sources/media-work/2026SFL毕业晚会总表.xlsx" }
        ]
      },
      {
        title: "团学工作与总结",
        desc: "学院团学工作的统筹文档与年度总结，沉淀组织实践经验与方法。下方为文稿预览，点击可打开原文。",
        gallery: [
          { src: "assets/images/shots/tx-01.png", alt: "外国语学院团工作总结（文稿预览）", link: "assets/sources/media-work/外国语学院团工作总结(2).docx" },
          { src: "assets/images/shots/tx-02.png", alt: "深圳技术大学外国语学院团学工作（修改版）（文稿预览）", link: "assets/sources/media-work/深圳技术大学外国语学院团学工作修改版.docx" },
          { src: "assets/images/shots/tx-03.png", alt: "年终总结（春冬）（文稿预览）", link: "assets/sources/media-work/年终总结春冬(1).docx" }
        ]
      }
    ]
  },

  /* ---------- 联系方式 ---------- */
  contact: {
    email: "19147792725@139.com",
    desc: "无论是跨境 / 出海方向的实习机会、内容合作，还是想聊聊跨文化传播，都欢迎给我留言，我通常会在 1–2 个工作日内回复。完整中德双语演讲稿与证明材料包可按需提供。",
    formNote: "未配置后端时，点击发送会调用你的邮件客户端；在 data.js 中设置 formEndpoint 即可改为接口提交。",
    /* 填了接口地址就走 fetch 提交（例如 Formspree：https://formspree.io/f/xxxxxxx） */
    formEndpoint: ""
  },

  socials: [
    { label: "邮箱", handle: "19147792725@139.com", url: "mailto:19147792725@139.com" },
    { label: "微信 / 电话", handle: "邮件联系后提供", url: "" },
    { label: "所在城市", handle: "深圳 · 龙华区", url: "" },
    { label: "求职方向", handle: "跨境 / 出海内容 · 本地化 · 跨境电商", url: "" }
  ]
};
