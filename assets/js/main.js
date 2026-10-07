/* =========================================================
   站点交互脚本
   1 渲染内容    2 导航与锚点   3 作品筛选
   4 作品详情弹窗 5 滚动动效     6 留言表单
   所有文案数据来自 assets/js/data.js
   ========================================================= */
(function () {
  "use strict";

  const DATA = window.SITE_DATA;
  if (!DATA) { console.error("未找到 SITE_DATA，请检查 assets/js/data.js 是否正确加载。"); return; }

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // 以 file:// 直接双击打开时为 true（本地预览）；部署到 http(s) 后为 false（访客模式）
  const IS_LOCAL_FILE = window.location.protocol === "file:";

  /* ---------- 1. 渲染内容 ---------- */
  function renderProfile() {
    const p = DATA.profile;
    $("#brand-name").textContent = p.name;
    $("#hero-name").textContent = p.name;
    const major = $("#hero-major");
    if (major) { major.textContent = p.major || ""; major.hidden = !p.major; }
    $("#hero-tagline").innerHTML = p.tagline; // 允许 <em> 高亮
    const de = $("#hero-de");
    if (de) { de.textContent = p.de || ""; de.hidden = !p.de; }
    $("#hero-intro").textContent = p.intro;
    $("#hero-status").textContent = p.status || "";

    const avatar = $("#hero-avatar");
    avatar.alt = p.avatarAlt || p.name + " 的头像";
    // 头像：优先 WebP，失败回退到原 JPG，再失败回退到占位图
    const avatarOriginal = p.avatar;
    const avatarWebp = toWebP(p.avatar);
    let avatarStage = avatarWebp !== avatarOriginal ? "webp" : "original";
    avatar.addEventListener("error", () => {
      if (avatarStage === "webp") {
        avatarStage = "original";
        avatar.src = avatarOriginal;
      } else if (avatarStage === "original" && p.avatarFallback) {
        avatarStage = "fallback";
        avatar.src = p.avatarFallback;
      }
    });
    avatar.src = avatarStage === "webp" ? avatarWebp : avatarOriginal;

    const actions = $("#hero-actions");
    (p.actions || []).forEach((a) => {
      const btn = el("a", "btn btn-" + (a.style === "ghost" ? "ghost" : "primary"), a.text);
      btn.href = a.href;
      if (a.href && a.href.indexOf("http") === 0) { btn.target = "_blank"; btn.rel = "noopener"; }
      actions.appendChild(btn);
    });

    const stats = $("#hero-stats");
    (p.stats || []).forEach((s) => {
      const li = el("li");
      li.appendChild(el("span", "stat-value", s.value));
      li.appendChild(el("span", "stat-label", s.label));
      stats.appendChild(li);
    });

    document.title = p.name + " · 个人作品集";
  }

  function renderNav() {
    const list = $("#nav-list");
    (DATA.nav || []).forEach((item) => {
      const li = el("li");
      const a = el("a", "nav-link", item.label);
      a.href = item.href;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function renderWorks() {
    const grid = $("#work-grid");
    const works = DATA.works || [];

    works.forEach((work, index) => {
      const li = el("li");
      const card = el("article", "work-card");
      card.dataset.category = work.category || "未分类";
      card.setAttribute("data-reveal", "");
      card.style.transitionDelay = (index % 3) * 60 + "ms";

      // 封面：优先加载 WebP，失败回退到原 JPG，再失败回退到占位图
      const coverWrap = el("div", "work-cover-wrap");
      const img = el("img", "work-cover");
      img.alt = work.coverAlt || work.title + " 项目封面";
      img.loading = index < 3 ? "eager" : "lazy";
      img.decoding = "async";
      const coverOriginal = work.cover;
      const coverWebp = toWebP(work.cover);
      let coverStage = coverWebp !== coverOriginal ? "webp" : "original";
      img.addEventListener("error", () => {
        if (coverStage === "webp") {
          coverStage = "original";
          img.src = coverOriginal;
        } else if (coverStage === "original" && work.coverFallback) {
          coverStage = "fallback";
          img.src = work.coverFallback;
        }
      });
      img.src = coverStage === "webp" ? coverWebp : coverOriginal;
      coverWrap.appendChild(img);
      if (work.year) coverWrap.appendChild(el("span", "work-year", work.year));

      // 文案
      const body = el("div", "work-body");
      const title = el("h3", "work-title", work.title);
      body.appendChild(title);
      body.appendChild(el("p", "work-summary", work.summary));
      if (work.role) body.appendChild(el("p", "work-role", work.role));

      if (work.tech && work.tech.length) {
        const tags = el("ul", "tag-list work-tags");
        work.tech.slice(0, 4).forEach((t) => tags.appendChild(el("li", "tag", t)));
        body.appendChild(tags);
      }

      // 底部操作
      const foot = el("div", "work-foot");
      if (work.caseHref) {
        const more = el("a", "work-more", (work.caseLabel || "查看完整案例") + " →");
        more.href = work.caseHref;
        more.setAttribute("aria-label", "查看作品《" + work.title + "》的完整案例");
        // 精准跳转：指向实践板块且作品有对应卡片时，记录目标 id，便于跳转后滚动+高亮到具体卡
        if (work.caseHref === "#practice" && work.id) {
          more.dataset.caseTarget = work.id;
        }
        foot.appendChild(more);
      }

      if (work.external && work.external.url) {
        const link = el("a", "work-link", (work.external.label || "访问") + " ↗");
        link.href = work.external.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        foot.appendChild(link);
      }
      body.appendChild(foot);

      card.appendChild(coverWrap);
      card.appendChild(body);
      li.appendChild(card);
      grid.appendChild(li);
    });

    // 分类筛选
    const categories = ["全部", ...new Set(works.map((w) => w.category).filter(Boolean))];
    const filters = $("#work-filters");
    categories.forEach((cat, i) => {
      const chip = el("button", "filter-chip", cat);
      chip.type = "button";
      chip.dataset.filter = cat;
      chip.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      filters.appendChild(chip);
    });

    filters.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      const target = chip.dataset.filter;
      filters.querySelectorAll(".filter-chip").forEach((c) =>
        c.setAttribute("aria-pressed", String(c === chip))
      );
      let visible = 0;
      grid.querySelectorAll(".work-card").forEach((card) => {
        const show = target === "全部" || card.dataset.category === target;
        card.classList.toggle("is-hidden", !show);
        if (show) visible++;
      });
      $("#work-empty").hidden = visible > 0;
    });
  }

  function renderAbout() {
    const box = $("#about-paragraphs");
    // 简介段落写在 profile.intro 之外时，可用 DATA.about.paragraphs；这里做兼容处理
    const paragraphs = (DATA.about && DATA.about.paragraphs) || [DATA.profile.intro];
    paragraphs.forEach((text) => box.appendChild(el("p", null, text)));

    const skillsBox = $("#about-skills");
    (DATA.skills || []).forEach((group) => {
      const wrap = el("div", "skill-group");
      wrap.appendChild(el("h4", "skill-group-name", group.group));
      group.items.forEach((item) => {
        const row = el("div", "skill-item");
        const head = el("div", "skill-head");
        head.appendChild(el("span", null, item.name));
        head.appendChild(el("span", null, item.note || ""));
        const bar = el("div", "skill-bar");
        const fill = el("i");
        fill.style.setProperty("--level", (item.level || 0) / 100);
        bar.appendChild(fill);
        row.appendChild(head);
        row.appendChild(bar);
        wrap.appendChild(row);
      });
      skillsBox.appendChild(wrap);
    });

    const tl = $("#about-timeline");
    (DATA.timeline || []).forEach((item) => {
      const li = el("li");
      li.setAttribute("data-reveal", "");
      li.appendChild(el("p", "timeline-time", item.time));
      li.appendChild(el("h4", "timeline-title", item.title));
      li.appendChild(el("p", "timeline-org", item.org));
      li.appendChild(el("p", "timeline-desc", item.desc));
      tl.appendChild(li);
    });
  }

  function renderContact() {
    const c = DATA.contact || {};
    const mail = $("#contact-email");
    mail.textContent = c.email || "";
    mail.href = "mailto:" + (c.email || "");
    $("#contact-desc").textContent = c.desc || "";
    $("#form-note").textContent = c.formNote || "";

    const socials = $("#contact-socials");
    (DATA.socials || []).forEach((s) => {
      const li = el("li", "social-item");
      if (s.url) {
        const a = el("a");
        a.href = s.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.appendChild(el("span", null, s.label));
        a.appendChild(el("span", "social-handle", s.handle));
        li.appendChild(a);
      } else {
        const div = el("div", "social-static");
        div.appendChild(el("span", null, s.label));
        div.appendChild(el("span", "social-handle", s.handle));
        li.appendChild(div);
      }
      socials.appendChild(li);
    });

    const footerSocials = $("#footer-socials");
    (DATA.socials || []).filter((s) => s.url).slice(0, 4).forEach((s) => {
      const li = el("li");
      const a = el("a", null, s.label);
      a.href = s.url; a.target = "_blank"; a.rel = "noopener noreferrer";
      li.appendChild(a);
      footerSocials.appendChild(li);
    });

    $("#footer-copy").textContent =
      "© " + new Date().getFullYear() + " " + DATA.profile.name + " · 用 HTML / CSS / JavaScript 手写";
  }

  /* ---------- 1b. 本地素材：路径 → 可访问地址 ---------- */
  // 形如 D:/xxx/yyy.mp4 或 C:/Users/.../a.png 的本地路径，转换为 file:/// 地址。
  // 已经是 http(s) 或 file: 开头的原样返回。
  function fileUrl(path) {
    if (!path) return "";
    if (/^(https?:)?\/\//i.test(path) || /^file:/i.test(path)) return path;
    let p = String(path).replace(/\\/g, "/");
    if (/^[A-Za-z]:\//.test(p)) p = "file:///" + p;
    try { return encodeURI(p); } catch (err) { return p; }
  }

  // 把 .jpg / .jpeg / .png 路径换成 .webp，用于优先加载
  function toWebP(path) {
    if (!path) return "";
    return path.replace(/\.(jpe?g|png)$/i, ".webp");
  }

  // 本地图片：优先加载 WebP（体积小 30-60%），加载失败时自动回退到原格式，
  // 再失败则回退到占位图。返回 <img> 元素，CSS 样式不受影响。
  function localImage(src, fallback, alt, className) {
    const img = el("img", className || null);
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    const original = fileUrl(src);
    const webp = fileUrl(toWebP(src));
    let stage = webp !== original ? "webp" : "original";
    img.addEventListener("error", () => {
      if (stage === "webp") {
        stage = "original";
        img.src = original;
      } else if (stage === "original" && fallback) {
        stage = "fallback";
        img.src = fallback;
      }
    });
    img.src = stage === "webp" ? webp : original;
    return img;
  }

  // 图集缩略图：竖构图照片保留竖屏比例（数据里标 orient: "portrait"）
  function galleryImage(item) {
    const node = localImage(item.src, item.fallback, item.alt, "thumb");
    if (item.orient === "portrait") node.classList.add("is-portrait");
    return node;
  }

  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (err) { /* 忽略 */ }
    document.body.removeChild(ta);
  }

  // 素材清单：可嵌入的用 iframe 播放器，其余一律「点击观看 / 打开本地文件」跳转
  function renderResources(resources) {
    const wrap = el("div", "res-list");
    (resources || []).forEach((r) => {
      const item = el("div", "res-item");
      const main = el("div", "res-main");
      main.appendChild(el("span", "res-label", r.label));
      if (r.note) main.appendChild(el("span", "res-note", r.note));
      item.appendChild(main);

      const actions = el("div", "res-actions");
      if (r.path) {
        // 网页类素材（如素材库 HTML）直接在浏览器里打开，文案区别于 PDF/图片等本地文件
        const actionText = r.kind === "video" ? "点击观看" : r.kind === "html" ? "在线查看" : "打开本地文件";
        const open = el("a", "res-open", actionText + " ↗");
        open.href = fileUrl(r.path);
        open.target = "_blank";
        open.rel = "noopener noreferrer";
        open.title = r.path;
        open.setAttribute("aria-label", actionText + "：" + r.label);
        actions.appendChild(open);

        // 「复制路径」只对你自己有用：本地 file:// 打开时可一键取用；
        // 部署后访客拿到本机路径毫无意义，因此不再渲染这个按钮。
        if (IS_LOCAL_FILE) {
          const copy = el("button", "res-copy", "复制路径");
          copy.type = "button";
          copy.dataset.path = r.path;
          actions.appendChild(copy);
        }
      } else {
        // 未随站发布的素材：保留信息留档，但不给一个必然打不开的按钮
        const pending = el("span", "res-pending",
          r.kind === "video" ? "视频未随站发布" : "文件未随站发布");
        pending.title = "该素材体积过大，未打包进站点；需要时可邮件索取";
        actions.appendChild(pending);
      }
      item.appendChild(actions);
      wrap.appendChild(item);

      if (r.embed) {
        const box = el("div", "res-embed");
        const frame = document.createElement("iframe");
        frame.src = r.embed;
        frame.title = r.label;
        frame.loading = "lazy";
        frame.setAttribute("allowfullscreen", "");
        frame.setAttribute("referrerpolicy", "no-referrer");
        box.appendChild(frame);
        wrap.appendChild(box);
      }
    });
    return wrap;
  }

  function initResourceCopy() {
    document.addEventListener("click", (e) => {
      if (!e.target || typeof e.target.closest !== "function") return;
      const btn = e.target.closest(".res-copy");
      if (!btn) return;
      const path = btn.dataset.path || "";
      const done = () => {
        const old = btn.textContent;
        btn.textContent = "已复制 ✓";
        setTimeout(() => { btn.textContent = old; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(path).then(done).catch(() => fallbackCopy(path, done));
      } else {
        fallbackCopy(path, done);
      }
    });
  }

  /* ---------- 1c. 竞赛项目 ---------- */
  function renderCompetitions() {
    const box = $("#competition-list");
    if (!box) return;
    const list = DATA.competitions || [];

    list.forEach((c, i) => {
      const card = el("article", "comp-card");
      card.setAttribute("data-reveal", "");
      card.style.transitionDelay = (i % 2) * 70 + "ms";
      // 标记卡片 id，供作品卡「查看完整案例」精准跳转定位
      if (c.workId) card.setAttribute("data-case-id", c.workId);

      const head = el("div", "comp-head");
      head.appendChild(el("h3", "comp-name", c.name));
      const flags = el("div", "comp-flags");
      if (c.level) flags.appendChild(el("span", "comp-flag", c.level));
      if (c.status) flags.appendChild(el("span", "comp-flag is-status", c.status));
      head.appendChild(flags);
      card.appendChild(head);

      const meta = el("div", "comp-meta");
      [c.role, c.period].filter(Boolean).forEach((t) => meta.appendChild(el("span", null, t)));
      card.appendChild(meta);

      if (c.thesis) card.appendChild(el("p", "comp-thesis", c.thesis));
      if (c.summary) card.appendChild(el("p", "comp-summary", c.summary));

      // 中德双语金句（可选）
      if (c.quote && (c.quote.de || c.quote.cn)) {
        const quote = el("blockquote", "comp-quote");
        if (c.quote.de) quote.appendChild(el("p", "quote-de", c.quote.de));
        if (c.quote.cn) quote.appendChild(el("p", "quote-cn", c.quote.cn));
        card.appendChild(quote);
      }

      const grid = el("div", "comp-grid");

      if ((c.schedule || []).length) {
        const col = el("div", "comp-col");
        col.appendChild(el("h4", "block-sub", "推进节点"));
        const ul = el("ul", "schedule");
        c.schedule.forEach((s) => {
          const li = el("li");
          li.appendChild(el("span", "sch-date", s.date));
          li.appendChild(el("span", null, s.item));
          ul.appendChild(li);
        });
        col.appendChild(ul);
        grid.appendChild(col);
      }

      if ((c.structure || []).length) {
        const col = el("div", "comp-col");
        col.appendChild(el("h4", "block-sub", "论证与内容结构"));
        const ul = el("ul", "kv-list");
        c.structure.forEach((s) => {
          const li = el("li");
          li.appendChild(el("span", "kv-k", s.k));
          li.appendChild(el("span", "kv-v", s.v));
          ul.appendChild(li);
        });
        col.appendChild(ul);
        grid.appendChild(col);
      }
      card.appendChild(grid);

      if ((c.deliverables || []).length) {
        const wrap = el("div");
        wrap.style.marginTop = "24px";
        wrap.appendChild(el("h4", "block-sub", "交付物"));
        const tags = el("ul", "tag-list");
        c.deliverables.forEach((d) => tags.appendChild(el("li", "tag", d)));
        wrap.appendChild(tags);
        card.appendChild(wrap);
      }

      if ((c.sources || []).length) {
        const wrap = el("div");
        wrap.style.marginTop = "18px";
        wrap.appendChild(el("h4", "block-sub", "引用与数据来源"));
        const tags = el("ul", "tag-list");
        c.sources.forEach((s) => tags.appendChild(el("li", "tag", s)));
        wrap.appendChild(tags);
        card.appendChild(wrap);
      }

      if ((c.resources || []).length) {
        const wrap = el("div");
        wrap.style.marginTop = "24px";
        wrap.appendChild(el("h4", "block-sub", "原始素材"));
        wrap.appendChild(renderResources(c.resources));
        card.appendChild(wrap);
      }

      // 过程材料图集：用 workId 关联到 works 中同一项目的 detail.gallery，
      // 避免同一批图在两处重复维护（也可直接在 competitions 里写 gallery 覆盖）。
      const linkedWork = (DATA.works || []).find((w) => w.id === c.workId);
      const gallery = (linkedWork && linkedWork.detail && linkedWork.detail.gallery) || c.gallery || [];
      if (gallery.length) {
        const wrap = el("div");
        wrap.style.marginTop = "24px";
        wrap.appendChild(el("h4", "block-sub", "过程材料"));
        const grid = el("div", "thumb-grid");
        gallery.forEach((img) => grid.appendChild(galleryImage(img)));
        wrap.appendChild(grid);
        card.appendChild(wrap);
      }

      box.appendChild(card);
    });
  }

  /* ---------- 1d. 三下乡社会实践（分年度、分队伍） ---------- */
  function renderPractice() {
    const box = $("#practice-groups");
    if (!box || !DATA.practice) return;
    // 三下乡作品卡（id: countryside）对应整个年份区，标记容器供「查看完整案例」精准定位高亮
    box.setAttribute("data-case-id", "countryside");

    const intro = $("#practice-intro");
    if (intro) intro.textContent = DATA.practice.intro || "";
    const note = $("#practice-note");
    if (note) note.textContent = DATA.practice.note || "";

    (DATA.practice.years || []).forEach((year) => {
      const group = el("div", "year-group");
      const rail = el("div", "year-rail");
      rail.appendChild(el("p", "year-num", year.year));
      if (year.label) rail.appendChild(el("p", "year-label", year.label));
      group.appendChild(rail);

      const teams = el("div");
      teams.style.display = "grid";
      teams.style.gap = "28px";

      (year.teams || []).forEach((t) => {
        const card = el("article", "team-card");
        card.setAttribute("data-reveal", "");
        // 标记队伍卡 id，供作品卡「查看完整案例」精准跳转定位
        if (t.id) card.setAttribute("data-case-id", t.id);

        const head = el("div", "team-head");
        head.appendChild(el("h3", "team-name", t.name));
        if (t.subtitle) head.appendChild(el("p", "team-sub", t.subtitle));
        if (t.role) head.appendChild(el("span", "team-role", t.role));
        const meta = el("div", "comp-meta");
        [t.time, t.place].filter(Boolean).forEach((x) => meta.appendChild(el("span", null, x)));
        head.appendChild(meta);
        if (t.theme) head.appendChild(el("p", "team-theme", t.theme));
        if (t.summary) head.appendChild(el("p", "team-summary", t.summary));
        card.appendChild(head);

        if ((t.facts || []).length) {
          const facts = el("div", "fact-grid");
          t.facts.forEach((f) => {
            const cell = el("div", "fact");
            cell.appendChild(el("span", "fact-k", f.k));
            cell.appendChild(el("span", "fact-v", f.v));
            facts.appendChild(cell);
          });
          card.appendChild(facts);
        }

        const body = el("div", "team-body");
        const section = (title, build) => {
          const sec = el("section", "team-section");
          sec.appendChild(el("h4", "block-sub", title));
          sec.appendChild(build());
          body.appendChild(sec);
        };

        if ((t.duties || []).length) {
          section("团队分工", () => {
            const ul = el("ul", "duty-list");
            t.duties.forEach((d) => {
              const li = el("li");
              const g = el("div", "duty-group");
              g.appendChild(document.createTextNode(d.group));
              if (d.members) {
                const m = el("span", "duty-members", d.members);
                g.appendChild(m);
              }
              li.appendChild(g);
              li.appendChild(el("div", "duty-desc", d.desc));
              ul.appendChild(li);
            });
            return ul;
          });
        }

        if ((t.content || []).length) {
          section("实践内容", () => {
            const ul = el("ul", "bullet-list");
            t.content.forEach((x) => ul.appendChild(el("li", null, x)));
            return ul;
          });
        }

        if ((t.outcomes || []).length) {
          section("成果交付", () => {
            const ul = el("ul", "bullet-list");
            t.outcomes.forEach((x) => ul.appendChild(el("li", null, x)));
            return ul;
          });
        }

        if ((t.data || []).length) {
          section("调研数据", () => {
            const g = el("div", "data-grid");
            t.data.forEach((d) => {
              const item = el("div", "data-item");
              item.appendChild(el("p", "data-v", d.k));
              item.appendChild(el("p", "data-k", d.v));
              g.appendChild(item);
            });
            return g;
          });
        }

        if ((t.media || []).length) {
          section("媒体报道", () => {
            const ul = el("ul", "bullet-list");
            t.media.forEach((x) => ul.appendChild(el("li", null, x)));
            return ul;
          });
        }

        if ((t.awards || []).length) {
          section("评价与获奖", () => {
            const ul = el("ul", "bullet-list");
            t.awards.forEach((x) => ul.appendChild(el("li", null, x)));
            return ul;
          });
        }

        if ((t.gallery || []).length) {
          section("现场图集", () => {
            const g = el("div", "thumb-grid");
            t.gallery.forEach((img) => g.appendChild(galleryImage(img)));
            return g;
          });
        }

        if ((t.resources || []).length) {
          section("素材与视频（本地路径）", () => renderResources(t.resources));
        }

        card.appendChild(body);
        teams.appendChild(card);
      });

      group.appendChild(teams);
      box.appendChild(group);
    });
  }

  /* ---------- 1d-2. 专业实习与志愿服务（复用 works 中 sgs / edu） ---------- */
  function renderPracticeExtra() {
    const box = $("#practice-extra");
    if (!box) return;
    const ids = (DATA.practice && DATA.practice.extra) || [];
    const works = (DATA.works || []).filter((w) => ids.indexOf(w.id) !== -1);

    works.forEach((w, i) => {
      const card = el("article", "comp-card");
      card.setAttribute("data-reveal", "");
      card.style.transitionDelay = (i % 2) * 70 + "ms";
      // 标记卡片 id，供作品卡「查看完整案例」精准跳转定位
      if (w.id) card.setAttribute("data-case-id", w.id);

      const head = el("div", "comp-head");
      head.appendChild(el("h3", "comp-name", w.title));
      const flags = el("div", "comp-flags");
      if (w.category) flags.appendChild(el("span", "comp-flag", w.category));
      if (w.year) flags.appendChild(el("span", "comp-flag is-status", w.year));
      head.appendChild(flags);
      card.appendChild(head);

      const meta = el("div", "comp-meta");
      [w.role, w.year].filter(Boolean).forEach((t) => meta.appendChild(el("span", null, t)));
      card.appendChild(meta);

      if (w.summary) card.appendChild(el("p", "comp-summary", w.summary));

      const grid = el("div", "comp-grid");
      const d = w.detail || {};

      if ((d.overview || []).length) {
        const col = el("div", "comp-col");
        col.appendChild(el("h4", "block-sub", "项目概述"));
        const ul = el("ul", "bullet-list");
        d.overview.forEach((x) => ul.appendChild(el("li", null, x)));
        col.appendChild(ul);
        grid.appendChild(col);
      }

      if ((d.highlights || []).length) {
        const col = el("div", "comp-col");
        col.appendChild(el("h4", "block-sub", "关键成果"));
        const ul = el("ul", "bullet-list");
        d.highlights.forEach((x) => ul.appendChild(el("li", null, x)));
        col.appendChild(ul);
        grid.appendChild(col);
      }
      card.appendChild(grid);

      if ((w.tech || []).length) {
        const wrap = el("div");
        wrap.style.marginTop = "18px";
        wrap.appendChild(el("h4", "block-sub", "使用技术 / 角色"));
        const tags = el("ul", "tag-list");
        w.tech.forEach((t) => tags.appendChild(el("li", "tag", t)));
        wrap.appendChild(tags);
        card.appendChild(wrap);
      }

      if ((d.gallery || []).length) {
        const sec = el("section", "team-section");
        sec.style.marginTop = "20px";
        sec.appendChild(el("h4", "block-sub", "现场图集"));
        const g = el("div", "thumb-grid");
        d.gallery.forEach((img) => g.appendChild(galleryImage(img)));
        sec.appendChild(g);
        card.appendChild(sec);
      }

      if ((d.resources || []).length) {
        const sec = el("section", "team-section");
        sec.style.marginTop = "20px";
        sec.appendChild(el("h4", "block-sub", "证明文件"));
        sec.appendChild(renderResources(d.resources));
        card.appendChild(sec);
      }

      box.appendChild(card);
    });
  }

  /* ---------- 1e. 外国语学院新媒体工作成果 ---------- */
  function renderMediaWork() {
    const box = $("#media-blocks");
    if (!box || !DATA.mediaWork) return;
    const mw = DATA.mediaWork;

    const intro = $("#media-intro");
    if (intro) intro.textContent = mw.intro || "";
    const note = $("#media-note");
    if (note) note.textContent = mw.note || "";

    const stats = $("#media-stats");
    if (stats) {
      (mw.stats || []).forEach((s) => {
        const li = el("li");
        li.appendChild(el("span", "stat-value", s.value));
        li.appendChild(el("span", "stat-label", s.label));
        stats.appendChild(li);
      });
    }

    (mw.blocks || []).forEach((b, i) => {
      const block = el("article", "media-block");
      block.setAttribute("data-reveal", "");
      block.style.transitionDelay = (i % 2) * 60 + "ms";
      block.appendChild(el("h3", null, b.title));
      if (b.desc) block.appendChild(el("p", "media-desc", b.desc));

      if ((b.items || []).length) {
        const list = el("div", "res-list");
        list.style.marginTop = "18px";
        b.items.forEach((it) => {
          const a = el("a", "doc-item");
          a.href = fileUrl(it.path);
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.title = it.path;
          a.appendChild(el("span", null, it.name));
          a.appendChild(el("span", "doc-hint", "打开本地文件 ↗"));
          list.appendChild(a);
        });
        block.appendChild(list);
      }

      if ((b.pushes || []).length) {
        const list = el("ul", "push-list");
        list.style.marginTop = "18px";
        b.pushes.forEach((p) => {
          const li = el("li");
          li.appendChild(el("span", "push-date", p.date));
          const a = el("a", "push-title", p.title);
          a.href = p.url; a.target = "_blank"; a.rel = "noopener noreferrer";
          li.appendChild(a);
          list.appendChild(li);
        });
        block.appendChild(list);
        if (b.pushNote) block.appendChild(el("p", "block-note", b.pushNote));
      }

      if ((b.gallery || []).length) {
        const g = el("div", "thumb-grid");
        g.style.marginTop = "18px";
        b.gallery.forEach((img) => {
          const node = galleryImage(img);
          if (img.link) {
            node.classList.add("is-doc");
            const a = el("a", "thumb-link");
            a.href = fileUrl(img.link);
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.title = "打开：" + (img.alt || "源文件");
            a.setAttribute("aria-label", "打开源文件：" + (img.alt || ""));
            a.appendChild(node);
            g.appendChild(a);
          } else {
            g.appendChild(node);
          }
        });
        block.appendChild(g);
        if (b.photoNote) block.appendChild(el("p", "block-note", b.photoNote));
      }

      box.appendChild(block);
    });
  }

  /* ---------- 2. 导航与锚点 ---------- */
  function initNav() {
    const header = $("#site-header");
    const nav = $("#primary-nav");
    const toggle = $("#nav-toggle");

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // 平滑锚点跳转（关闭移动菜单 + 修正粘性头部偏移）
    // 若链接带 data-case-target（作品卡「查看完整案例」），优先滚动+高亮到对应卡片
    const highlightCase = (card) => {
      card.classList.remove("is-case-highlight");
      void card.offsetWidth; // 触发重排以重启 CSS 动画
      card.classList.add("is-case-highlight");
      const done = () => card.classList.remove("is-case-highlight");
      card.addEventListener("animationend", done, { once: true });
      setTimeout(done, 2200); // 兜底清理
    };

    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      const offset = header.offsetHeight + 12;

      // 优先定位到具体案例卡片（作品卡精准跳转）
      const caseTargetId = link.dataset.caseTarget;
      const caseCard = caseTargetId
        ? document.querySelector('[data-case-id="' + CSS.escape(caseTargetId) + '"]')
        : null;
      const scrollTarget = caseCard || target;

      const top = scrollTarget.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(top, 0), behavior: prefersReduced ? "auto" : "smooth" });
      history.replaceState(null, "", id);

      // 焦点与高亮：有具体卡片就落到卡片上并闪烁，否则落到板块顶部
      if (caseCard) {
        caseCard.setAttribute("tabindex", "-1");
        caseCard.focus({ preventScroll: true });
        // 平滑滚动开始后再触发高亮，让用户视觉跟随到目标
        setTimeout(() => highlightCase(caseCard), prefersReduced ? 0 : 280);
      } else {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });

    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 768) closeMenu(); });

    // 当前版块高亮
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    let ticking = false;
    const updateActive = () => {
      ticking = false;
      const probe = window.scrollY + header.offsetHeight + 80;
      let current = sections[0];
      sections.forEach((sec) => { if (sec.offsetTop <= probe) current = sec; });
      links.forEach((a) => {
        const isActive = a.getAttribute("href") === "#" + (current && current.id);
        if (isActive) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(updateActive); }
    }, { passive: true });
    updateActive();
  }

  /* ---------- 5. 滚动入场动效 ---------- */
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach((i) => io.observe(i));
  }

  /* ---------- 6. 留言表单 ---------- */
  function initForm() {
    const form = $("#contact-form");
    const status = $("#form-status");
    if (!form) return;

    const setError = (id, show) => {
      const field = document.getElementById(id);
      const err = document.querySelector('[data-error-for="' + id + '"]');
      if (err) err.hidden = !show;
      if (field) field.setAttribute("aria-invalid", show ? "true" : "false");
      return !show;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = $("#field-name").value.trim();
      const email = $("#field-email").value.trim();
      const message = $("#field-message").value.trim();

      const okName = setError("field-name", !name);
      const okMail = setError("field-email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      const okMsg = setError("field-message", !message);
      if (!(okName && okMail && okMsg)) { status.textContent = ""; return; }

      const endpoint = (DATA.contact && DATA.contact.formEndpoint) || "";
      if (endpoint) {
        status.style.color = "var(--slate)";
        status.textContent = "正在发送…";
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ name, email, message })
          });
          if (!res.ok) throw new Error("bad status");
          status.style.color = "";
          status.textContent = "已收到，我会尽快回复你 🎉";
          form.reset();
        } catch (err) {
          status.style.color = "#c0392b";
          status.textContent = "发送失败，请直接发邮件给我：" + (DATA.contact.email || "");
        }
        return;
      }

      // 未配置接口：调用本机邮件客户端
      const subject = encodeURIComponent("来自作品集的留言 — " + name);
      const bodyText = encodeURIComponent(message + "\n\n—\n" + name + "\n" + email);
      window.location.href = "mailto:" + (DATA.contact.email || "") + "?subject=" + subject + "&body=" + bodyText;
      status.style.color = "";
      status.textContent = "已为你打开邮件客户端，发送即可。";
    });
  }

  /* ---------- 启动 ---------- */
  renderProfile();
  renderNav();
  renderWorks();
  renderCompetitions();
  renderPractice();
  renderPracticeExtra();
  renderMediaWork();
  renderAbout();
  renderContact();
  initNav();
  initResourceCopy();
  initReveal();
  initForm();
})();
