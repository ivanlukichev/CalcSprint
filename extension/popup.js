(function () {
  const WEBSITE_URL = "https://calcsprint.com/";
  const STORAGE_KEY = "calcSprintStats";
  const ROUND_DURATION_SECONDS = 60;
  const RECENT_TASK_LIMIT = 8;
  const FEEDBACK_RESET_MS = 220;

  const COPY = {
    en: {
      welcomeEyebrow: "Browser extension",
      welcomeSubtitle: "Train your brain in your browser",
      bestScore: "Best score",
      sessions: "Sessions",
      start: "Start",
      websiteMoreLevels: "More levels on website",
      sprintMode: "Sprint mode",
      chooseDifficulty: "Choose difficulty",
      sprintDuration: "Sprint 60 sec",
      easyTitle: "Easy",
      easyDescription: "Addition and subtraction",
      mediumTitle: "Medium",
      mediumDescription: "Multiplication + mixed arithmetic",
      hardTitle: "Hard",
      hardDescription: "Faster mixed math",
      back: "Back",
      startSprint: "Start Sprint",
      timeLeft: "Time left",
      correct: "Correct",
      wrong: "Wrong",
      streak: "Streak",
      questionCounter: "Question {number}",
      gameHint: "Solve as many as you can.",
      typeYourAnswer: "Type your answer",
      submit: "Submit",
      continueFullSite: "Continue training on the full site",
      sprintComplete: "Sprint complete",
      timesUp: "Time's up!",
      yourScore: "Your score",
      wrongAnswers: "Wrong answers",
      bestStreak: "Best streak",
      resultNote: "Quick rounds add up fast.",
      playAgain: "Play Again",
      changeDifficulty: "Change Difficulty",
      unlockMoreChallenges: "Unlock more challenges on the website",
      emptyAnswer: "Type an answer to keep the sprint moving.",
      invalidAnswer: "Numbers only, please.",
      correctShort: "Correct",
      wrongShort: "Wrong",
      resultSummary: "{difficulty} sprint saved. {correct} lifetime correct answers across {sessions} sessions."
    }
  };

  const DIFFICULTIES = {
    easy: {
      labelKey: "easyTitle",
      descriptionKey: "easyDescription"
    },
    medium: {
      labelKey: "mediumTitle",
      descriptionKey: "mediumDescription"
    },
    hard: {
      labelKey: "hardTitle",
      descriptionKey: "hardDescription"
    }
  };

  const DEFAULT_STATS = {
    bestScoreOverall: 0,
    bestScoreByDifficulty: {
      easy: 0,
      medium: 0,
      hard: 0
    },
    bestStreakOverall: 0,
    selectedDifficulty: "easy",
    lastPlayedDifficulty: "easy",
    totalSessionsPlayed: 0,
    totalCorrectAnswers: 0,
    totalWrongAnswers: 0
  };

  const browserApi = globalThis.browser && globalThis.browser.storage ? globalThis.browser : globalThis.chrome;
  const usesPromiseApi = Boolean(globalThis.browser && globalThis.browser.storage);

  const state = {
    activeScreen: "welcome",
    locale: "en",
    stats: mergeStats(DEFAULT_STATS),
    selectedDifficulty: DEFAULT_STATS.selectedDifficulty,
    game: createEmptyGameState(),
    recentTaskKeys: [],
    feedbackTimeoutId: null
  };

  const ui = {
    screens: new Map(
      Array.from(document.querySelectorAll("[data-screen]")).map((screen) => [screen.dataset.screen, screen])
    ),
    difficultyCards: Array.from(document.querySelectorAll("[data-difficulty]")),
    welcomeBestScore: document.getElementById("welcomeBestScore"),
    welcomeSessions: document.getElementById("welcomeSessions"),
    gameTimer: document.getElementById("gameTimer"),
    questionCounter: document.getElementById("questionCounter"),
    correctCount: document.getElementById("correctCount"),
    wrongCount: document.getElementById("wrongCount"),
    streakCount: document.getElementById("streakCount"),
    gameDifficultyLabel: document.getElementById("gameDifficultyLabel"),
    questionPrompt: document.getElementById("questionPrompt"),
    answerFeedback: document.getElementById("answerFeedback"),
    answerForm: document.getElementById("answerForm"),
    answerInput: document.getElementById("answerInput"),
    submitButton: document.getElementById("submitButton"),
    resultDifficulty: document.getElementById("resultDifficulty"),
    resultScore: document.getElementById("resultScore"),
    resultWrong: document.getElementById("resultWrong"),
    resultBestScore: document.getElementById("resultBestScore"),
    resultBestStreak: document.getElementById("resultBestStreak"),
    resultSummary: document.getElementById("resultSummary")
  };

  document.getElementById("startButton").addEventListener("click", () => {
    setScreen("difficulty");
  });

  document.getElementById("backToWelcomeButton").addEventListener("click", () => {
    setScreen("welcome");
  });

  document.getElementById("startSprintButton").addEventListener("click", () => {
    startGame();
  });

  document.getElementById("playAgainButton").addEventListener("click", () => {
    startGame();
  });

  document.getElementById("changeDifficultyButton").addEventListener("click", () => {
    setScreen("difficulty");
  });

  ui.answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitAnswer();
  });

  ui.difficultyCards.forEach((card) => {
    card.addEventListener("click", () => {
      selectDifficulty(card.dataset.difficulty);
    });
  });

  [
    "welcomeWebsiteButton",
    "gameWebsiteButton",
    "resultWebsiteButton",
    "footerWebsiteButton"
  ].forEach((id) => {
    document.getElementById(id).addEventListener("click", openWebsite);
  });

  applyStaticCopy();
  initialize();

  async function initialize() {
    const savedStats = await loadStats();

    state.stats = mergeStats(savedStats);
    state.selectedDifficulty = state.stats.selectedDifficulty;

    syncDifficultySelection();
    renderWelcomeStats();
    renderFooterVisibility();
    setScreen("welcome");
  }

  async function loadStats() {
    if (!browserApi || !browserApi.storage || !browserApi.storage.local) {
      return readFallbackStats();
    }

    try {
      const items = await storageGet(STORAGE_KEY);
      return items[STORAGE_KEY] || DEFAULT_STATS;
    } catch (error) {
      return readFallbackStats();
    }
  }

  async function saveStats(nextStats) {
    state.stats = mergeStats(nextStats);

    if (!browserApi || !browserApi.storage || !browserApi.storage.local) {
      writeFallbackStats(state.stats);
      return;
    }

    try {
      await storageSet({ [STORAGE_KEY]: state.stats });
    } catch (error) {
      writeFallbackStats(state.stats);
    }
  }

  function readFallbackStats() {
    try {
      const rawValue = window.localStorage.getItem(STORAGE_KEY);
      return rawValue ? JSON.parse(rawValue) : DEFAULT_STATS;
    } catch (error) {
      return DEFAULT_STATS;
    }
  }

  function writeFallbackStats(nextStats) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextStats));
    } catch (error) {
      /* noop */
    }
  }

  function mergeStats(rawStats) {
    return {
      ...DEFAULT_STATS,
      ...rawStats,
      bestScoreByDifficulty: {
        ...DEFAULT_STATS.bestScoreByDifficulty,
        ...(rawStats && rawStats.bestScoreByDifficulty ? rawStats.bestScoreByDifficulty : {})
      }
    };
  }

  function storageGet(key) {
    if (usesPromiseApi) {
      return browserApi.storage.local.get(key);
    }

    return new Promise((resolve, reject) => {
      browserApi.storage.local.get(key, (items) => {
        if (browserApi.runtime && browserApi.runtime.lastError) {
          reject(browserApi.runtime.lastError);
          return;
        }

        resolve(items);
      });
    });
  }

  function storageSet(payload) {
    if (usesPromiseApi) {
      return browserApi.storage.local.set(payload);
    }

    return new Promise((resolve, reject) => {
      browserApi.storage.local.set(payload, () => {
        if (browserApi.runtime && browserApi.runtime.lastError) {
          reject(browserApi.runtime.lastError);
          return;
        }

        resolve();
      });
    });
  }

  function t(key, replacements) {
    const dictionary = COPY[state.locale] || COPY.en;
    const template = dictionary[key] || COPY.en[key] || key;

    if (!replacements) {
      return template;
    }

    return Object.entries(replacements).reduce((result, [token, value]) => {
      return result.replace(new RegExp(`\\{${token}\\}`, "g"), String(value));
    }, template);
  }

  function applyStaticCopy() {
    document.querySelectorAll("[data-copy]").forEach((element) => {
      element.textContent = t(element.dataset.copy);
    });

    document.querySelectorAll("[data-copy-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.copyPlaceholder));
    });
  }

  function getDifficultyLabel(difficultyKey) {
    return t(DIFFICULTIES[difficultyKey].labelKey);
  }

  function getDifficultyDescription(difficultyKey) {
    return t(DIFFICULTIES[difficultyKey].descriptionKey);
  }

  function setScreen(screenName) {
    state.activeScreen = screenName;

    ui.screens.forEach((screen, key) => {
      screen.hidden = key !== screenName;
    });

    renderWelcomeStats();
    renderDifficultyScreen();
    renderGameScreen();
    renderResultScreen();
    renderFooterVisibility();

    if (screenName === "game") {
      focusAnswerInput();
    }
  }

  function renderWelcomeStats() {
    ui.welcomeBestScore.textContent = String(state.stats.bestScoreOverall);
    ui.welcomeSessions.textContent = String(state.stats.totalSessionsPlayed);
  }

  function renderDifficultyScreen() {
    syncDifficultySelection();
  }

  function syncDifficultySelection() {
    ui.difficultyCards.forEach((card) => {
      const isSelected = card.dataset.difficulty === state.selectedDifficulty;
      card.classList.toggle("is-selected", isSelected);
      card.setAttribute("aria-checked", String(isSelected));
    });
  }

  function renderGameScreen() {
    if (state.activeScreen !== "game") {
      return;
    }

    const questionNumber = state.game.correctAnswers + state.game.wrongAnswers + 1;

    ui.gameTimer.textContent = `${Math.max(0, state.game.timeLeft)}s`;
    ui.questionCounter.textContent = t("questionCounter", { number: questionNumber });
    ui.correctCount.textContent = String(state.game.correctAnswers);
    ui.wrongCount.textContent = String(state.game.wrongAnswers);
    ui.streakCount.textContent = String(state.game.currentStreak);
    ui.gameDifficultyLabel.textContent = `${getDifficultyLabel(state.selectedDifficulty)} · ${getDifficultyDescription(state.selectedDifficulty)}`;
    ui.questionPrompt.textContent = state.game.currentTask.prompt;
    renderFeedback();
  }

  function renderFeedback() {
    ui.answerFeedback.textContent = state.game.feedbackMessage || t("gameHint");
    ui.answerFeedback.classList.toggle("is-correct", state.game.feedbackTone === "correct");
    ui.answerFeedback.classList.toggle("is-wrong", state.game.feedbackTone === "wrong");
  }

  function renderResultScreen() {
    if (state.activeScreen !== "result") {
      return;
    }

    const bestScoreForDifficulty = state.stats.bestScoreByDifficulty[state.selectedDifficulty];

    ui.resultDifficulty.textContent = getDifficultyLabel(state.selectedDifficulty);
    ui.resultScore.textContent = String(state.game.correctAnswers);
    ui.resultWrong.textContent = String(state.game.wrongAnswers);
    ui.resultBestScore.textContent = String(bestScoreForDifficulty);
    ui.resultBestStreak.textContent = String(Math.max(state.stats.bestStreakOverall, state.game.bestStreak));
    ui.resultSummary.textContent = buildResultSummary();
  }

  function renderFooterVisibility() {
    const footer = document.querySelector(".popup-footer");
    footer.hidden = state.activeScreen === "game";
  }

  function selectDifficulty(difficultyKey) {
    if (!DIFFICULTIES[difficultyKey]) {
      return;
    }

    state.selectedDifficulty = difficultyKey;
    syncDifficultySelection();
    persistSelection();
  }

  async function persistSelection() {
    await saveStats({
      ...state.stats,
      selectedDifficulty: state.selectedDifficulty,
      lastPlayedDifficulty: state.selectedDifficulty
    });

    renderWelcomeStats();
  }

  function startGame() {
    clearGameTimer();
    clearFeedbackTimeout();

    state.recentTaskKeys = [];
    state.game = {
      ...createEmptyGameState(),
      currentTask: generateTask(state.selectedDifficulty),
      startedAt: Date.now(),
      timeLeft: ROUND_DURATION_SECONDS,
      deadline: Date.now() + ROUND_DURATION_SECONDS * 1000
    };

    setScreen("game");
    startGameTimer();
  }

  function startGameTimer() {
    state.game.timerId = window.setInterval(() => {
      const remainingMilliseconds = Math.max(0, state.game.deadline - Date.now());
      const nextSeconds = Math.ceil(remainingMilliseconds / 1000);

      if (nextSeconds !== state.game.timeLeft) {
        state.game.timeLeft = nextSeconds;
        renderGameScreen();
      }

      if (remainingMilliseconds <= 0) {
        finishGame();
      }
    }, 250);
  }

  function clearGameTimer() {
    if (state.game.timerId) {
      window.clearInterval(state.game.timerId);
      state.game.timerId = null;
    }
  }

  async function finishGame() {
    if (state.game.isFinishing) {
      return;
    }

    state.game.isFinishing = true;
    clearGameTimer();
    clearFeedbackTimeout();

    const nextStats = {
      ...state.stats,
      bestScoreOverall: Math.max(state.stats.bestScoreOverall, state.game.correctAnswers),
      bestScoreByDifficulty: {
        ...state.stats.bestScoreByDifficulty,
        [state.selectedDifficulty]: Math.max(
          state.stats.bestScoreByDifficulty[state.selectedDifficulty],
          state.game.correctAnswers
        )
      },
      bestStreakOverall: Math.max(state.stats.bestStreakOverall, state.game.bestStreak),
      totalSessionsPlayed: state.stats.totalSessionsPlayed + 1,
      totalCorrectAnswers: state.stats.totalCorrectAnswers + state.game.correctAnswers,
      totalWrongAnswers: state.stats.totalWrongAnswers + state.game.wrongAnswers,
      selectedDifficulty: state.selectedDifficulty,
      lastPlayedDifficulty: state.selectedDifficulty
    };

    await saveStats(nextStats);
    setScreen("result");
  }

  function submitAnswer() {
    if (state.activeScreen !== "game" || state.game.isSubmitting || state.game.isFinishing) {
      return;
    }

    const rawValue = ui.answerInput.value.trim();

    if (!rawValue) {
      state.game.feedbackMessage = t("emptyAnswer");
      state.game.feedbackTone = "wrong";
      renderFeedback();
      focusAnswerInput();
      return;
    }

    const submittedValue = Number(rawValue);

    if (!Number.isFinite(submittedValue)) {
      state.game.feedbackMessage = t("invalidAnswer");
      state.game.feedbackTone = "wrong";
      renderFeedback();
      ui.answerInput.select();
      focusAnswerInput();
      return;
    }

    state.game.isSubmitting = true;

    const isCorrect = submittedValue === state.game.currentTask.answer;

    if (isCorrect) {
      state.game.correctAnswers += 1;
      state.game.currentStreak += 1;
      state.game.bestStreak = Math.max(state.game.bestStreak, state.game.currentStreak);
      state.game.feedbackMessage = t("correctShort");
      state.game.feedbackTone = "correct";
    } else {
      state.game.wrongAnswers += 1;
      state.game.currentStreak = 0;
      state.game.feedbackMessage = `${t("wrongShort")} · ${state.game.currentTask.answer}`;
      state.game.feedbackTone = "wrong";
    }

    ui.answerInput.value = "";
    state.game.currentTask = generateTask(state.selectedDifficulty);
    state.game.isSubmitting = false;

    renderGameScreen();
    focusAnswerInput();

    clearFeedbackTimeout();
    state.feedbackTimeoutId = window.setTimeout(() => {
      state.game.feedbackMessage = "";
      state.game.feedbackTone = "";
      renderFeedback();
    }, FEEDBACK_RESET_MS);
  }

  function clearFeedbackTimeout() {
    if (state.feedbackTimeoutId) {
      window.clearTimeout(state.feedbackTimeoutId);
      state.feedbackTimeoutId = null;
    }
  }

  function focusAnswerInput() {
    window.requestAnimationFrame(() => {
      ui.answerInput.focus();
      ui.answerInput.select();
    });
  }

  function buildResultSummary() {
    const lifetimeCorrect = state.stats.totalCorrectAnswers;
    const lifetimeSessions = state.stats.totalSessionsPlayed;

    return t("resultSummary", {
      difficulty: getDifficultyLabel(state.selectedDifficulty),
      correct: lifetimeCorrect,
      sessions: lifetimeSessions
    });
  }

  function createEmptyGameState() {
    return {
      timerId: null,
      deadline: 0,
      startedAt: 0,
      timeLeft: ROUND_DURATION_SECONDS,
      currentTask: {
        prompt: "0 + 0",
        answer: 0,
        key: "0+0"
      },
      correctAnswers: 0,
      wrongAnswers: 0,
      currentStreak: 0,
      bestStreak: 0,
      feedbackMessage: "",
      feedbackTone: "",
      isSubmitting: false,
      isFinishing: false
    };
  }

  function generateTask(difficultyKey) {
    let attempts = 0;
    let task = null;

    do {
      task = buildTask(difficultyKey);
      attempts += 1;
    } while (state.recentTaskKeys.includes(task.key) && attempts < 24);

    state.recentTaskKeys.push(task.key);

    if (state.recentTaskKeys.length > RECENT_TASK_LIMIT) {
      state.recentTaskKeys.shift();
    }

    return task;
  }

  function buildTask(difficultyKey) {
    switch (difficultyKey) {
      case "easy":
        return generateEasyTask();
      case "medium":
        return generateMediumTask();
      case "hard":
      default:
        return generateHardTask();
    }
  }

  function generateEasyTask() {
    const operation = randomChoice(["+", "-", "+"]);

    if (operation === "+") {
      const left = randomInt(1, 20);
      const right = randomInt(1, 20);
      return makeTask(left, operation, right, left + right);
    }

    const right = randomInt(1, 18);
    const answer = randomInt(1, 20);
    const left = answer + right;

    return makeTask(left, operation, right, answer);
  }

  function generateMediumTask() {
    const operation = weightedChoice([
      { value: "+", weight: 3 },
      { value: "-", weight: 3 },
      { value: "×", weight: 4 }
    ]);

    if (operation === "+") {
      const left = randomInt(8, 35);
      const right = randomInt(6, 30);
      return makeTask(left, operation, right, left + right);
    }

    if (operation === "-") {
      const right = randomInt(4, 32);
      const answer = randomInt(4, 45);
      const left = answer + right;
      return makeTask(left, operation, right, answer);
    }

    const left = randomInt(3, 12);
    const right = randomInt(3, 12);
    return makeTask(left, operation, right, left * right);
  }

  function generateHardTask() {
    const operation = weightedChoice([
      { value: "+", weight: 2 },
      { value: "-", weight: 2 },
      { value: "×", weight: 3 },
      { value: "÷", weight: 1 }
    ]);

    if (operation === "+") {
      const left = randomInt(18, 79);
      const right = randomInt(15, 68);
      return makeTask(left, operation, right, left + right);
    }

    if (operation === "-") {
      const right = randomInt(12, 69);
      const answer = randomInt(10, 70);
      const left = answer + right;
      return makeTask(left, operation, right, answer);
    }

    if (operation === "×") {
      const left = randomInt(4, 15);
      const right = randomInt(6, 14);
      return makeTask(left, operation, right, left * right);
    }

    const divisor = randomInt(2, 12);
    const answer = randomInt(3, 15);
    const dividend = divisor * answer;

    return makeTask(dividend, operation, divisor, answer);
  }

  function makeTask(left, operation, right, answer) {
    const prompt = `${left} ${operation} ${right}`;
    const key = `${left}${operation}${right}`;
    return { prompt, answer, key };
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomChoice(values) {
    return values[randomInt(0, values.length - 1)];
  }

  function weightedChoice(entries) {
    const totalWeight = entries.reduce((sum, entry) => sum + entry.weight, 0);
    let cursor = Math.random() * totalWeight;

    for (const entry of entries) {
      cursor -= entry.weight;

      if (cursor <= 0) {
        return entry.value;
      }
    }

    return entries[entries.length - 1].value;
  }

  function openWebsite() {
    if (browserApi && browserApi.tabs && browserApi.tabs.create) {
      browserApi.tabs.create({ url: WEBSITE_URL });
      return;
    }

    window.open(WEBSITE_URL, "_blank", "noopener,noreferrer");
  }
})();
