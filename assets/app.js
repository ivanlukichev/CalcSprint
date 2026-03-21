(() => {
  'use strict';
  const I18N = {"en": {"langName": "English", "tagline": "Speed math drills · 4 levels · endless", "play": "Play", "playHint": "Use keyboard or the on-screen keypad", "sessionStats": "Session stats", "statsHint": "No accounts. Nothing saved to a server.", "level": "Level", "streak": "Streak", "correct": "Correct", "wrong": "Wrong", "total": "Total", "typeAnswer": "Type the answer…", "check": "Check", "skip": "Skip", "faq": "FAQ", "faqHint": "Quick answers, no fluff", "blog": "Blog", "blogHint": "Short notes on mental math and practice", "allPosts": "All posts", "about": "About CalcSprint", "aboutHint": "Simple training for faster mental math", "aboutP1": "CalcSprint is a lightweight mental math game designed for quick practice sessions. Choose one of four difficulty levels and solve an endless stream of arithmetic tasks with instant feedback. It works on desktop and mobile, supports both physical and on-screen keyboards, and stays intentionally minimal—no sign-ups, no leaderboards, no distractions.", "aboutP2": "Use CalcSprint for daily warm-ups, focused accuracy training, or speed-building sprints. If you want structured tips, scroll down to the blog—short, practical notes that help you improve without overthinking.", "level1Desc": "Single step · + / − · 0–20", "level2Desc": "Single step · + − × · 0–99", "level3Desc": "Two steps · + − × · 0–199", "level4Desc": "Mixed · + − × ÷ · 0–999", "faqQ1": "What is CalcSprint?", "faqA1": "A simple browser game for mental math. Pick a level and solve endless problems with instant feedback.", "faqQ2": "Does it save my progress?", "faqA2": "No. This version is intentionally minimal: no accounts, no leaderboards, no server-side storage.", "faqQ3": "How does division work?", "faqA3": "Division tasks are generated to always produce whole-number answers (no fractions).", "faqQ4": "Is it mobile-friendly?", "faqA4": "Yes. The layout switches to a single-column view and the keypad buttons are sized for touch.", "faqQ5": "Can I host it anywhere?", "faqA5": "Yes. It’s a static site. Upload the folder to any static host (Cloudflare Pages, Vercel, Netlify, GitHub Pages).", "night": "Night", "day": "Day", "contrast": "Contrast", "normal": "Normal", "high": "High", "skipToContent": "Skip to content", "ariaTask": "Math task", "ariaAnswer": "Answer", "ariaFeedback": "Feedback", "feedbackCorrect": "Correct.", "feedbackWrong": "Wrong.", "lang": "Language", "backToGame": "Back to game", "backToBlog": "Back to blog", "minRead": "min read", "next": "Next", "browseMore": "browse more posts", "practice": "practice in the game", "footerBackTop": "Back to top", "textSize": "Text", "dyslexia": "Dyslexia", "font": "Text size", "dyslexiaOn": "On", "dyslexiaOff": "Off", "announceTask": "New task.", "announceAnswer": "Your answer."}, "ru": {"langName": "Русский", "tagline": "Тренировка счёта · 4 уровня · бесконечно", "play": "Играть", "playHint": "Клавиатура или экранная клавиатура", "sessionStats": "Статистика", "statsHint": "Без аккаунтов. Ничего не отправляется на сервер.", "level": "Уровень", "streak": "Серия", "correct": "Верно", "wrong": "Ошибки", "total": "Всего", "typeAnswer": "Введите ответ…", "check": "Проверить", "skip": "Пропустить", "faq": "FAQ", "faqHint": "Коротко и по делу", "blog": "Блог", "blogHint": "Короткие заметки про счёт в уме", "allPosts": "Все посты", "about": "О CalcSprint", "aboutHint": "Простая практика для быстрого счёта", "aboutP1": "CalcSprint — лёгкая игра для тренировки счёта в уме. Выберите один из четырёх уровней сложности и решайте бесконечные задания с мгновенной проверкой. Она работает на компьютере и телефоне, поддерживает физическую и экранную клавиатуру и остаётся намеренно минималистичной — без регистраций, рейтингов и лишнего шума.", "aboutP2": "Используйте CalcSprint как ежедневную разминку, тренировку точности или короткие спринты на скорость. Если хотите подсказки и структуру — пролистайте вниз до блога: там короткие практичные идеи без усложнений.", "level1Desc": "Один шаг · + / − · 0–20", "level2Desc": "Один шаг · + − × · 0–99", "level3Desc": "Два шага · + − × · 0–199", "level4Desc": "Смешанное · + − × ÷ · 0–999", "faqQ1": "Что такое CalcSprint?", "faqA1": "Простая браузерная игра для счёта в уме. Выберите уровень и решайте бесконечные примеры с мгновенной обратной связью.", "faqQ2": "Сохраняется ли прогресс?", "faqA2": "Нет. Версия специально сделана минимальной: без аккаунтов, без таблиц лидеров и без серверного хранения.", "faqQ3": "Как работает деление?", "faqA3": "Примеры на деление генерируются так, чтобы ответ всегда был целым числом (без дробей).", "faqQ4": "Удобно ли на телефоне?", "faqA4": "Да. На маленьких экранах всё становится в одну колонку, а кнопки клавиатуры сделаны крупными для тача.", "faqQ5": "Можно ли хостить где угодно?", "faqA5": "Да. Это статический сайт. Загрузите папку на любой хостинг (Cloudflare Pages, Vercel, Netlify, GitHub Pages).", "night": "Ночь", "day": "День", "contrast": "Контраст", "normal": "Обычный", "high": "Высокий", "skipToContent": "Перейти к содержимому", "ariaTask": "Пример", "ariaAnswer": "Ответ", "ariaFeedback": "Сообщение", "feedbackCorrect": "Верно.", "feedbackWrong": "Неверно.", "lang": "Язык", "backToGame": "К игре", "backToBlog": "К блогу", "minRead": "мин", "next": "Дальше", "browseMore": "смотреть ещё", "practice": "потренироваться в игре", "footerBackTop": "Наверх", "textSize": "Текст", "dyslexia": "Дислексия", "font": "Размер текста", "dyslexiaOn": "Вкл", "dyslexiaOff": "Выкл", "announceTask": "Новый пример.", "announceAnswer": "Ваш ответ."}, "es": {"langName": "Español", "tagline": "Cálculo mental · 4 niveles · infinito", "play": "Jugar", "playHint": "Teclado o teclado en pantalla", "sessionStats": "Estadísticas", "statsHint": "Sin cuentas. Nada se guarda en un servidor.", "level": "Nivel", "streak": "Racha", "correct": "Correctas", "wrong": "Errores", "total": "Total", "typeAnswer": "Escribe la respuesta…", "check": "Comprobar", "skip": "Saltar", "faq": "Preguntas", "faqHint": "Respuestas rápidas, sin relleno", "blog": "Blog", "blogHint": "Notas cortas sobre cálculo mental", "allPosts": "Ver todo", "about": "Sobre CalcSprint", "aboutHint": "Práctica simple para ir más rápido", "aboutP1": "CalcSprint es un juego ligero de cálculo mental para sesiones cortas. Elige uno de cuatro niveles y resuelve una serie infinita de ejercicios con feedback inmediato. Funciona en móvil y escritorio, acepta teclado físico y en pantalla y se mantiene minimalista: sin registros, sin rankings y sin distracciones.", "aboutP2": "Úsalo como calentamiento diario, para precisión o para sprints de velocidad. Si quieres consejos, baja al blog: ideas breves y prácticas, sin complicarte.", "level1Desc": "Un paso · + / − · 0–20", "level2Desc": "Un paso · + − × · 0–99", "level3Desc": "Dos pasos · + − × · 0–199", "level4Desc": "Mixto · + − × ÷ · 0–999", "faqQ1": "¿Qué es CalcSprint?", "faqA1": "Un juego de navegador para cálculo mental. Elige un nivel y resuelve problemas infinitos con feedback inmediato.", "faqQ2": "¿Guarda mi progreso?", "faqA2": "No. Es una versión minimalista: sin cuentas, sin tablas de clasificación y sin almacenamiento en servidor.", "faqQ3": "¿Cómo funciona la división?", "faqA3": "Las divisiones se generan para que el resultado sea siempre un número entero (sin fracciones).", "faqQ4": "¿Está optimizado para móvil?", "faqA4": "Sí. El diseño pasa a una sola columna y las teclas son grandes para tocar.", "faqQ5": "¿Puedo alojarlo donde quiera?", "faqA5": "Sí. Es un sitio estático. Sube la carpeta a cualquier hosting (Cloudflare Pages, Vercel, Netlify, GitHub Pages).", "night": "Noche", "day": "Día", "contrast": "Contraste", "normal": "Normal", "high": "Alto", "skipToContent": "Saltar al contenido", "ariaTask": "Ejercicio", "ariaAnswer": "Respuesta", "ariaFeedback": "Mensaje", "feedbackCorrect": "Correcto.", "feedbackWrong": "Incorrecto.", "lang": "Idioma", "backToGame": "Volver al juego", "backToBlog": "Volver al blog", "minRead": "min", "next": "Siguiente", "browseMore": "ver más", "practice": "practicar en el juego", "footerBackTop": "Arriba", "textSize": "Texto", "dyslexia": "Dislexia", "font": "Tamaño de texto", "dyslexiaOn": "On", "dyslexiaOff": "Off", "announceTask": "Nuevo ejercicio.", "announceAnswer": "Tu respuesta."}, "de": {"langName": "Deutsch", "tagline": "Kopfrechnen · 4 Level · endlos", "play": "Spielen", "playHint": "Tastatur oder Bildschirmtastatur", "sessionStats": "Statistik", "statsHint": "Keine Konten. Nichts wird auf einem Server gespeichert.", "level": "Level", "streak": "Serie", "correct": "Richtig", "wrong": "Falsch", "total": "Gesamt", "typeAnswer": "Antwort eingeben…", "check": "Prüfen", "skip": "Überspringen", "faq": "FAQ", "faqHint": "Kurz und hilfreich", "blog": "Blog", "blogHint": "Kurze Tipps zum Kopfrechnen", "allPosts": "Alle Beiträge", "about": "Über CalcSprint", "aboutHint": "Einfaches Training für schnelleres Kopfrechnen", "aboutP1": "CalcSprint ist ein leichtes Kopfrechen‑Spiel für kurze Übungseinheiten. Wähle eines von vier Levels und löse endlose Aufgaben mit sofortigem Feedback. Es funktioniert auf Desktop und Smartphone, unterstützt Hardware‑ und Bildschirmtastatur und bleibt bewusst minimal: keine Registrierung, keine Rankings, keine Ablenkung.", "aboutP2": "Nutze CalcSprint für tägliche Warm‑ups, Genauigkeit oder Speed‑Sprints. Für Struktur scrolle zum Blog: kurze, praktische Ideen ohne Overthinking.", "level1Desc": "Ein Schritt · + / − · 0–20", "level2Desc": "Ein Schritt · + − × · 0–99", "level3Desc": "Zwei Schritte · + − × · 0–199", "level4Desc": "Gemischt · + − × ÷ · 0–999", "faqQ1": "Was ist CalcSprint?", "faqA1": "Ein Browser‑Spiel fürs Kopfrechnen. Level wählen und endlose Aufgaben mit direktem Feedback lösen.", "faqQ2": "Wird mein Fortschritt gespeichert?", "faqA2": "Nein. Absichtlich minimal: keine Konten, keine Bestenlisten, kein Server‑Speicher.", "faqQ3": "Wie funktioniert Division?", "faqA3": "Divisionen werden so erzeugt, dass das Ergebnis immer ganzzahlig ist (keine Brüche).", "faqQ4": "Mobilfreundlich?", "faqA4": "Ja. Auf kleinen Screens wird es einspaltig, die Tasten sind groß für Touch.", "faqQ5": "Kann ich es überall hosten?", "faqA5": "Ja. Statische Seite. Ordner auf jeden Host laden (Cloudflare Pages, Vercel, Netlify, GitHub Pages).", "night": "Nacht", "day": "Tag", "contrast": "Kontrast", "normal": "Normal", "high": "Hoch", "skipToContent": "Zum Inhalt springen", "ariaTask": "Rechenaufgabe", "ariaAnswer": "Antwort", "ariaFeedback": "Hinweis", "feedbackCorrect": "Richtig.", "feedbackWrong": "Falsch.", "lang": "Sprache", "backToGame": "Zurück zum Spiel", "backToBlog": "Zurück zum Blog", "minRead": "Min.", "next": "Weiter", "browseMore": "mehr lesen", "practice": "im Spiel üben", "footerBackTop": "Nach oben", "textSize": "Text", "dyslexia": "Legasthenie", "font": "Textgröße", "dyslexiaOn": "An", "dyslexiaOff": "Aus", "announceTask": "Neue Aufgabe.", "announceAnswer": "Deine Antwort."}, "zh": {"langName": "中文", "tagline": "心算训练 · 4个难度 · 无限题目", "play": "开始", "playHint": "支持键盘与屏幕键盘", "sessionStats": "统计", "statsHint": "无需账号。不会上传到服务器。", "level": "难度", "streak": "连对", "correct": "正确", "wrong": "错误", "total": "总计", "typeAnswer": "输入答案…", "check": "检查", "skip": "跳过", "faq": "常见问题", "faqHint": "简短直接", "blog": "博客", "blogHint": "关于心算的小技巧", "allPosts": "全部文章", "about": "关于 CalcSprint", "aboutHint": "更快更准的心算练习", "aboutP1": "CalcSprint 是一个轻量级心算网页游戏，适合短时间练习。选择四个难度之一，连续做无限题目并获得即时反馈。支持手机和电脑，既可用实体键盘也可用屏幕键盘，并保持极简：无注册、无排行榜、无干扰。", "aboutP2": "你可以把它当作每日热身、精度训练或速度冲刺。想要更系统的建议，往下看博客：短小实用，不绕弯。", "level1Desc": "一步 · + / − · 0–20", "level2Desc": "一步 · + − × · 0–99", "level3Desc": "两步 · + − × · 0–199", "level4Desc": "混合 · + − × ÷ · 0–999", "faqQ1": "CalcSprint 是什么？", "faqA1": "一个用于心算训练的浏览器游戏。选择难度后即可无限练习并获得即时反馈。", "faqQ2": "会保存进度吗？", "faqA2": "不会。本版本刻意保持极简：无账号、无排行榜、无服务器端存储。", "faqQ3": "除法怎么做？", "faqA3": "除法题会生成整数结果（不出现分数）。", "faqQ4": "手机上好用吗？", "faqA4": "好用。小屏会自动变成单列布局，按键更大更适合触控。", "faqQ5": "可以部署到哪里？", "faqA5": "可以。静态网站，上传到任意静态托管即可（Cloudflare Pages、Vercel、Netlify、GitHub Pages）。", "night": "夜间", "day": "日间", "contrast": "对比度", "normal": "普通", "high": "高", "skipToContent": "跳到内容", "ariaTask": "算式", "ariaAnswer": "答案", "ariaFeedback": "提示", "feedbackCorrect": "正确。", "feedbackWrong": "错误。", "lang": "语言", "backToGame": "返回游戏", "backToBlog": "返回博客", "minRead": "分钟", "next": "下一篇", "browseMore": "查看更多", "practice": "去游戏练习", "footerBackTop": "返回顶部", "textSize": "字号", "dyslexia": "阅读辅助", "font": "文字大小", "dyslexiaOn": "开", "dyslexiaOff": "关", "announceTask": "新题目。", "announceAnswer": "你的答案。"}};
  const STORAGE_THEME_KEY = "calcsprint_theme";
  const STORAGE_LANG_KEY = "calcsprint_lang";
  const STORAGE_CONTRAST_KEY = "calcsprint_contrast";
  const STORAGE_FONT_KEY = "calcsprint_font";
  const STORAGE_DYSLEXIA_KEY = "calcsprint_dyslexia";

  const rint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (arr) => arr[rint(0, arr.length - 1)];
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const $ = (id) => document.getElementById(id);
  let CURRENT_LANG = 'en';

  const LEVELS = [
    { id: 1, ops: ["+", "-"],           terms: 2, range: [0, 20],  allowNegative: false, allowDivision: false, mulRange: [2, 9],  maxAbsAnswer: 50  },
    { id: 2, ops: ["+", "-", "×"],      terms: 2, range: [0, 99],  allowNegative: false, allowDivision: false, mulRange: [2, 12], maxAbsAnswer: 200 },
    { id: 3, ops: ["+", "-", "×"],      terms: 3, range: [0, 199], allowNegative: false, allowDivision: false, mulRange: [2, 15], maxAbsAnswer: 500 },
    { id: 4, ops: ["+", "-", "×", "÷"], terms: 2, range: [0, 999], allowNegative: false, allowDivision: true,  mulRange: [2, 20], maxAbsAnswer: 2000 },
  ];

  const homeLink = $("homeLink");
  const elLevels = $("levels");
  const elLvlName = $("lvlName");
  const elTaskText = $("taskText");
  const elAnswer = $("answer");
  const elTaskBox = $("taskBox");
  const elOk = $("ok");
  const elBad = $("bad");
  const elTotal = $("total");
  const elCombo = $("combo");
  const elCheckBtn = $("checkBtn");
  const elSkipBtn = $("skipBtn");
  const elKeypad = $("keypad");
  const themeBtn = $("themeBtn");
  const contrastBtn = $("contrastBtn");
  const fontBtn = $("fontBtn");
  const dysBtn = $("dysBtn");
  const langSel = $("langSel");
  const live = $("liveRegion");

  const tNodes = document.querySelectorAll("[data-i18n]");

  function getLangFromPath() {
    const p = location.pathname.split("/").filter(Boolean);
    const candidate = p[0] || "en";
    return (candidate in I18N) ? candidate : "en";
  }

  function getLang() {
    const pathLang = getLangFromPath();
    if (pathLang) return pathLang;
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY);
      if (saved && saved in I18N) return saved;
    } catch {}
    const nav = (navigator.language || "en").slice(0,2);
    if (nav in I18N) return nav;
    return "en";
  }

  function announce(text) {
    if (!live) return;
    live.textContent = "";
    // slight delay helps some SRs re-announce
    setTimeout(() => { live.textContent = text; }, 10);
  }

  function applyI18n(lang) {
    CURRENT_LANG = lang;
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

    if (homeLink) {
      homeLink.setAttribute('href', (lang === 'en') ? '/' : `/${lang}/`);
      homeLink.setAttribute('aria-label', 'CalcSprint');
    }

    tNodes.forEach((n) => {
      const key = n.getAttribute("data-i18n");
      const val = dict[key];
      if (typeof val === "string") n.textContent = val;
    });

    if (elAnswer) {
      elAnswer.placeholder = dict.typeAnswer || I18N.en.typeAnswer;
      elAnswer.setAttribute("aria-label", dict.ariaAnswer || I18N.en.ariaAnswer);
    }
    if (elTaskBox) elTaskBox.setAttribute("aria-label", dict.ariaTask || I18N.en.ariaTask);

    const theme = document.body.getAttribute("data-theme") || "day";
    if (themeBtn) themeBtn.textContent = theme === "day" ? dict.night : dict.day;

    const contrast = document.body.getAttribute("data-contrast") || "normal";
    if (contrastBtn) contrastBtn.textContent = dict.contrast + ": " + (contrast === "high" ? dict.high : dict.normal);

    const font = document.body.getAttribute("data-font") || "md";
    if (fontBtn) {
      const pct = font === "md" ? "100%" : (font === "lg" ? "112%" : "125%");
      fontBtn.textContent = (dict.textSize || "Text") + ": " + pct;
    }

    const dys = document.body.getAttribute("data-dyslexia") || "off";
    if (dysBtn) dysBtn.textContent = (dict.dyslexia || "Dyslexia") + ": " + (dys === "on" ? (dict.dyslexiaOn||"On") : (dict.dyslexiaOff||"Off"));

    if (langSel) langSel.value = lang;
  }

  function setLang(lang) {
    if (!(lang in I18N)) lang = "en";
    try { localStorage.setItem(STORAGE_LANG_KEY, lang); } catch {}

    // Remove existing lang prefix from path
    const parts = location.pathname.split("/").filter(Boolean);
    const first = parts[0];
    const hasPrefix = first && (first in I18N) && first !== "en";
    const rest = hasPrefix ? parts.slice(1) : parts;
    const basePath = "/" + rest.join("/");
    const targetPath = (lang === "en") ? (basePath === "/" ? "/" : basePath) : ("/" + lang + (basePath === "/" ? "/" : basePath));

    // Preserve query + hash
    const q = location.search || "";
    const h = location.hash || "";
    location.href = targetPath.replace(/\/+/g, "/") + q + h;
  }

  function setTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    const dict = I18N[getLang()] || I18N.en;
    if (themeBtn) {
      themeBtn.textContent = theme === "day" ? dict.night : dict.day;
      themeBtn.setAttribute("aria-pressed", theme === "night" ? "true" : "false");
    }
    try { localStorage.setItem(STORAGE_THEME_KEY, theme); } catch {}
  }

  function setContrast(mode) {
    document.body.setAttribute("data-contrast", mode);
    const dict = I18N[getLang()] || I18N.en;
    if (contrastBtn) {
      contrastBtn.textContent = dict.contrast + ": " + (mode === "high" ? dict.high : dict.normal);
      contrastBtn.setAttribute("aria-pressed", mode === "high" ? "true" : "false");
    }
    try { localStorage.setItem(STORAGE_CONTRAST_KEY, mode); } catch {}
  }

  function setFont(mode) {
    document.body.setAttribute("data-font", mode);
    try { localStorage.setItem(STORAGE_FONT_KEY, mode); } catch {}
    applyI18n(getLang());
  }

  function setDyslexia(mode) {
    document.body.setAttribute("data-dyslexia", mode);
    try { localStorage.setItem(STORAGE_DYSLEXIA_KEY, mode); } catch {}
    applyI18n(getLang());
  }

  const state = { levelId: 1, task: null, ok: 0, bad: 0, total: 0, combo: 0, locked: false };

  function renderLevels() {
    if (!elLevels) return;
    const dict = I18N[CURRENT_LANG] || I18N.en;
    elLevels.textContent = "";
    for (const l of LEVELS) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lvl" + (l.id === state.levelId ? " active" : "");
      const b = document.createElement("b");
      b.textContent = (dict.level || I18N.en.level) + " " + l.id;
      const sm = document.createElement("small");
      const key = `level${l.id}Desc`;
      sm.textContent = dict[key] || I18N.en[key] || "";
      btn.appendChild(b);
      btn.appendChild(sm);
      btn.addEventListener("click", () => setLevel(l.id));
      elLevels.appendChild(btn);
    }
  }

  function renderStats() {
    if (!elOk) return;
    elOk.textContent = String(state.ok);
    elBad.textContent = String(state.bad);
    elTotal.textContent = String(state.total);
    elCombo.textContent = String(state.combo);
  }

  function flash(mode) {
    if (!elTaskBox) return;
    elTaskBox.classList.remove("flashOk", "flashBad");
    void elTaskBox.offsetWidth;
    elTaskBox.classList.add(mode === "ok" ? "flashOk" : "flashBad");
  }

  function genTerm(level, op) {
    const [a,b] = level.range;
    if (op === "×") return [rint(a, b), rint(level.mulRange[0], level.mulRange[1])];
    return [rint(a, b), rint(a, b)];
  }

  function makeDivProblem(level) {
    const b = rint(2, clamp(level.mulRange[1], 2, 20));
    const result = rint(1, clamp(Math.floor(level.maxAbsAnswer / b), 1, 200));
    const a = b * result;
    return { text: `${a} ÷ ${b}`, answer: result };
  }

  function compute(a, op, b) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "×") return a * b;
    if (op === "÷") return b === 0 ? null : a / b;
    return null;
  }

  function makeTask(level) {
    if (level.allowDivision && pick(level.ops) === "÷") return makeDivProblem(level);
    let op1 = pick(level.ops.filter(o => o !== "÷"));
    let [x, y] = genTerm(level, op1);
    if (op1 === "-" && !level.allowNegative && x < y) [x, y] = [y, x];
    let val = compute(x, op1, y);
    if (val === null) return makeTask(level);
    let text = `${x} ${op1} ${y}`;

    if (level.terms === 3) {
      let op2 = pick(level.ops.filter(o => o !== "÷"));
      let z = (op2 === "×") ? rint(level.mulRange[0], level.mulRange[1]) : rint(level.range[0], level.range[1]);
      if (op2 === "-" && !level.allowNegative) z = rint(0, Math.max(0, Math.min(level.range[1], val)));
      val = compute(val, op2, z);
      if (val === null) return makeTask(level);
      text = `${text} ${op2} ${z}`;
    }

    if (Math.abs(val) > level.maxAbsAnswer) return makeTask(level);
    return { text, answer: Math.trunc(val) };
  }

  function nextTask() {
    if (!elTaskText) return;
    const level = LEVELS.find(l => l.id === state.levelId);
    state.task = makeTask(level);
    elTaskText.textContent = state.task.text;
    elAnswer.value = "";
    elAnswer.focus({preventScroll:true});
    const dict = I18N[getLang()] || I18N.en;
    announce((dict.announceTask || "New task.") + " " + state.task.text);
  }

  function setLevel(id) {
    state.levelId = id;
    if (elLvlName) elLvlName.textContent = String(id);
    renderLevels();
    nextTask();
  }

  function sanitizeInput(v) {
    v = v.replace(/[^\d-]/g, "");
    if (v.includes("-")) v = (v.startsWith("-") ? "-" : "") + v.replace(/-/g,"");
    if (v.length > 12) v = v.slice(0, 12);
    return v;
  }

  function check() {
    if (state.locked) return;
    const raw = sanitizeInput(elAnswer.value.trim());
    elAnswer.value = raw;
    if (raw === "" || raw === "-") return;
    const user = Number(raw);
    const correct = state.task.answer;
    state.total++;
    const dict = I18N[getLang()] || I18N.en;

    if (user === correct) {
      state.ok++; state.combo++;
      flash("ok");
      announce((dict.feedbackCorrect || "Correct.") + " " + (dict.announceAnswer || "Your answer.") + " " + user + ".");
      state.locked = true;
      setTimeout(() => { state.locked = false; renderStats(); nextTask(); }, 180);
    } else {
      state.bad++; state.combo = 0;
      flash("bad");
      announce((dict.feedbackWrong || "Wrong.") + " " + (dict.announceAnswer || "Your answer.") + " " + user + ".");
      renderStats(); elAnswer.select();
    }
  }

  function skip() {
    if (state.locked) return;
    state.combo = 0;
    renderStats();
    nextTask();
  }

  function renderKeypad() {
    if (!elKeypad) return;
    const keys = ["7","8","9","4","5","6","1","2","3","0","⌫","Enter"];
    elKeypad.textContent = "";
    for (const k of keys) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "key" + (k === "Enter" ? " enter" : "") + (k === "⌫" ? " back" : "");
      b.textContent = k;
      b.setAttribute("aria-label", k === "⌫" ? "Backspace" : k);
      b.addEventListener("click", () => {
        elAnswer.focus({preventScroll:true});
        if (k === "Enter") return check();
        if (k === "⌫") { elAnswer.value = elAnswer.value.slice(0, -1); return; }
        elAnswer.value = sanitizeInput(elAnswer.value + k);
      });
      elKeypad.appendChild(b);
    }
  }

  // Boot: theme
  let theme = "day";
  try { if (localStorage.getItem(STORAGE_THEME_KEY) === "night") theme = "night"; } catch {}
  setTheme(theme);

  // Boot: contrast
  let contrast = "normal";
  try { if (localStorage.getItem(STORAGE_CONTRAST_KEY) === "high") contrast = "high"; } catch {}
  setContrast(contrast);

  // Boot: font size
  let font = "md";
  try {
    const s = localStorage.getItem(STORAGE_FONT_KEY);
    if (s === "lg" || s === "xl" || s === "md") font = s;
  } catch {}
  document.body.setAttribute("data-font", font);

  // Boot: dyslexia
  let dys = "off";
  try { if (localStorage.getItem(STORAGE_DYSLEXIA_KEY) === "on") dys = "on"; } catch {}
  document.body.setAttribute("data-dyslexia", dys);

  // Boot: language
  const lang = getLang();
  applyI18n(lang);

  if (langSel) langSel.addEventListener("change", (e) => setLang(e.target.value));
  if (themeBtn) themeBtn.addEventListener("click", () => setTheme((document.body.getAttribute("data-theme") || "day") === "day" ? "night" : "day"));
  if (contrastBtn) contrastBtn.addEventListener("click", () => {
    setContrast((document.body.getAttribute("data-contrast") || "normal") === "normal" ? "high" : "normal");
  });
  if (fontBtn) fontBtn.addEventListener("click", () => {
    const cur = document.body.getAttribute("data-font") || "md";
    const nxt = cur === "md" ? "lg" : (cur === "lg" ? "xl" : "md");
    setFont(nxt);
  });
  if (dysBtn) dysBtn.addEventListener("click", () => {
    const cur = document.body.getAttribute("data-dyslexia") || "off";
    setDyslexia(cur === "off" ? "on" : "off");
  });

  const yearEl = $("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (elAnswer) elAnswer.addEventListener("input", () => { elAnswer.value = sanitizeInput(elAnswer.value); });
  if (elCheckBtn) elCheckBtn.addEventListener("click", check);
  if (elSkipBtn) elSkipBtn.addEventListener("click", skip);

  document.addEventListener("keydown", (e) => {
    if (!elAnswer) return;
    if (e.key === "Enter") { e.preventDefault(); check(); }
    if (e.key === "Escape") { e.preventDefault(); skip(); }
    const isDigit = /^[0-9]$/.test(e.key);
    if (isDigit && document.activeElement !== elAnswer) elAnswer.focus({preventScroll:true});
  }, { passive: false });

  renderLevels();
  renderKeypad();
  renderStats();
  setLevel(1);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => {}); });
  }
})();
