(() => {
  const TEXT = {
  "en": {
    "tagline": "Page not found",
    "title": "Page not found",
    "lead": "The page may have moved, been renamed, or never existed.",
    "body": "Try going back to the CalcSprint home page or open the blog for practice tips and mental math guides.",
    "play": "Play",
    "blog": "Blog",
    "homeCardTitle": "Return to the game",
    "homeCardText": "Open the current language version of CalcSprint and continue practicing.",
    "blogCardTitle": "Open the blog",
    "blogCardText": "Browse localized articles about speed, accuracy, warm-ups, and practice habits.",
    "footerHome": "Home"
  },
  "ru": {
    "tagline": "Страница не найдена",
    "title": "Страница не найдена",
    "lead": "Похоже, страница была перемещена, переименована или никогда не существовала.",
    "body": "Вернитесь на главную CalcSprint или откройте блог с советами по устному счёту и тренировкам.",
    "play": "Играть",
    "blog": "Блог",
    "homeCardTitle": "Вернуться к игре",
    "homeCardText": "Откройте русскую версию CalcSprint и продолжайте тренировку.",
    "blogCardTitle": "Открыть блог",
    "blogCardText": "Перейдите к локализованным статьям про скорость, точность, разминку и привычки практики.",
    "footerHome": "Главная"
  },
  "es": {
    "tagline": "Página no encontrada",
    "title": "Página no encontrada",
    "lead": "Es posible que la página se haya movido, cambiado de nombre o nunca haya existido.",
    "body": "Vuelve a la página principal de CalcSprint o abre el blog con consejos de cálculo mental y práctica.",
    "play": "Jugar",
    "blog": "Blog",
    "homeCardTitle": "Volver al juego",
    "homeCardText": "Abre la versión actual de CalcSprint y sigue practicando.",
    "blogCardTitle": "Abrir el blog",
    "blogCardText": "Explora artículos localizados sobre velocidad, precisión, calentamientos y hábitos de práctica.",
    "footerHome": "Inicio"
  },
  "de": {
    "tagline": "Seite nicht gefunden",
    "title": "Seite nicht gefunden",
    "lead": "Die Seite wurde vielleicht verschoben, umbenannt oder hat nie existiert.",
    "body": "Geh zur CalcSprint-Startseite zurueck oder oeffne den Blog mit Tipps zu Kopfrechnen und Training.",
    "play": "Spielen",
    "blog": "Blog",
    "homeCardTitle": "Zurueck zum Spiel",
    "homeCardText": "Oeffne die aktuelle Sprachversion von CalcSprint und trainiere weiter.",
    "blogCardTitle": "Zum Blog",
    "blogCardText": "Lies lokalisierte Artikel ueber Tempo, Genauigkeit, Warm-ups und sinnvolle Uebungsroutinen.",
    "footerHome": "Startseite"
  },
  "zh": {
    "tagline": "页面未找到",
    "title": "页面未找到",
    "lead": "这个页面可能已经移动、更名，或者从未存在过。",
    "body": "你可以返回 CalcSprint 首页，或打开博客查看心算练习技巧和训练建议。",
    "play": "开始",
    "blog": "博客",
    "homeCardTitle": "返回游戏",
    "homeCardText": "打开当前语言版本的 CalcSprint，继续练习。",
    "blogCardTitle": "打开博客",
    "blogCardText": "查看本地化文章，了解提速、准确率、热身和练习习惯。",
    "footerHome": "首页"
  }
};
  const path = window.location.pathname;
  const localeMatch = path.match(/^\/(ru|es|de|zh)(?:\/|$)/);
  const locale = localeMatch ? localeMatch[1] : "en";
  const langTag = locale === "zh" ? "zh-CN" : locale;
  const dict = TEXT[locale] || TEXT.en;
  const homeHref = locale === "en" ? "/" : `/${locale}/`;
  const blogHref = locale === "en" ? "/blog/" : `/${locale}/blog/`;

  document.documentElement.lang = langTag;
  document.title = `CalcSprint - ${dict.title}`;

  const ids = {
    notFoundTagline: dict.tagline,
    notFoundTitle: dict.title,
    notFoundLead: dict.lead,
    notFoundBody: dict.body,
    blogCta404: dict.blog,
    playCta404: dict.play,
    homeCardTitle404: dict.homeCardTitle,
    homeCardText404: dict.homeCardText,
    blogCardTitle404: dict.blogCardTitle,
    blogCardText404: dict.blogCardText,
    footerHome404: dict.footerHome,
    footerBlog404: dict.blog,
  };

  Object.entries(ids).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  });

  ["homeLink404", "playLink404", "homeCard404", "footerHome404"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.setAttribute("href", homeHref);
  });
  ["blogLink404", "blogCard404", "footerBlog404"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.setAttribute("href", blogHref);
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();

