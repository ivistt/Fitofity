const STORAGE_KEY = "fitofity-lite-v1";

const WEEKDAYS = [
  { key: 1, short: "Пн", label: "Понедельник" },
  { key: 2, short: "Вт", label: "Вторник" },
  { key: 3, short: "Ср", label: "Среда" },
  { key: 4, short: "Чт", label: "Четверг" },
  { key: 5, short: "Пт", label: "Пятница" },
  { key: 6, short: "Сб", label: "Суббота" },
  { key: 0, short: "Вс", label: "Воскресенье" }
];

const MONTHS = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

const DEFAULT_STATE = {
  activeTab: "today",
  scheduleDays: [1, 3, 5],
  plansByWeekday: {
    1: {
      title: "День 1: Грудь + Плечи + Бицепс",
      exercises: [
        {
          name: "Жим в тренажере Хаммер сидя на грудь",
          note: "30 кг на руку",
          sets: [
            { weight: "30", reps: "10" },
            { weight: "30", reps: "10" },
            { weight: "30", reps: "10" },
            { weight: "30", reps: "10" }
          ]
        },
        {
          name: "Сведение рук в тренажере «Бабочка»",
          note: "60-70 кг",
          sets: [
            { weight: "60-70", reps: "10" },
            { weight: "60-70", reps: "10" },
            { weight: "60-70", reps: "10" },
            { weight: "60-70", reps: "10" }
          ]
        },
        {
          name: "Жим гантелей сидя на плечи",
          note: "20 кг каждая гантель",
          sets: [
            { weight: "20", reps: "10" },
            { weight: "20", reps: "10" },
            { weight: "20", reps: "10" },
            { weight: "20", reps: "10" }
          ]
        },
        {
          name: "Махи гантелей в стороны стоя",
          note: "10 кг каждая гантель",
          sets: [
            { weight: "10", reps: "12" },
            { weight: "10", reps: "12" },
            { weight: "10", reps: "12" },
            { weight: "10", reps: "12" }
          ]
        },
        {
          name: "Сгибания рук с гантелями сидя на наклонной скамье",
          note: "12-14 кг каждая гантель",
          sets: [
            { weight: "12-14", reps: "10" },
            { weight: "12-14", reps: "10" },
            { weight: "12-14", reps: "10" },
            { weight: "12-14", reps: "10" }
          ]
        }
      ]
    },
    3: {
      title: "День 2: Спина + Трицепс + Задняя дельта",
      exercises: [
        {
          name: "Тяга верхнего блока к груди сидя",
          note: "55-60 кг",
          sets: [
            { weight: "55-60", reps: "10" },
            { weight: "55-60", reps: "10" },
            { weight: "55-60", reps: "10" },
            { weight: "55-60", reps: "10" }
          ]
        },
        {
          name: "Тяга горизонтального блока к поясу сидя",
          note: "40-45 кг",
          sets: [
            { weight: "40-45", reps: "10" },
            { weight: "40-45", reps: "10" },
            { weight: "40-45", reps: "10" },
            { weight: "40-45", reps: "10" }
          ]
        },
        {
          name: "Рычажная тяга в Хаммере попеременно",
          note: "15 кг на руку",
          sets: [
            { weight: "15", reps: "10" },
            { weight: "15", reps: "10" },
            { weight: "15", reps: "10" },
            { weight: "15", reps: "10" }
          ]
        },
        {
          name: "Тяга к лицу с канатным жгутом в кроссовере (Face Pull)",
          note: "60 кг",
          sets: [
            { weight: "60", reps: "10" },
            { weight: "60", reps: "10" },
            { weight: "60", reps: "10" },
            { weight: "60", reps: "10" }
          ]
        },
        {
          name: "Разгибания рук со сжатыми локтями с перекладиной в кроссовере",
          note: "60 кг",
          sets: [
            { weight: "60", reps: "10" },
            { weight: "60", reps: "10" },
            { weight: "60", reps: "10" },
            { weight: "60", reps: "10" }
          ]
        }
      ]
    },
    5: {
      title: "День 3: Ноги (Безопасные) + Пресс",
      exercises: [
        {
          name: "Жим ногами в тренажере",
          note: "100-120 кг. Стопы высоко, колени без острых углов",
          sets: [
            { weight: "100-120", reps: "10" },
            { weight: "100-120", reps: "10" },
            { weight: "100-120", reps: "10" },
            { weight: "100-120", reps: "10" }
          ]
        },
        {
          name: "Сгибания ног лежа в тренажере",
          note: "35-45 кг",
          sets: [
            { weight: "35-45", reps: "10" },
            { weight: "35-45", reps: "10" },
            { weight: "35-45", reps: "10" },
            { weight: "35-45", reps: "10" }
          ]
        },
        {
          name: "Разгибания ног сидя в тренажере",
          note: "25-35 кг, плавно, без рывков",
          sets: [
            { weight: "25-35", reps: "12" },
            { weight: "25-35", reps: "12" },
            { weight: "25-35", reps: "12" },
            { weight: "25-35", reps: "12" }
          ]
        },
        {
          name: "Подъем на носки в тренажере (голень)",
          note: "40-50 кг",
          sets: [
            { weight: "40-50", reps: "15" },
            { weight: "40-50", reps: "15" },
            { weight: "40-50", reps: "15" },
            { weight: "40-50", reps: "15" }
          ]
        },
        {
          name: "Скручивания на пресс в тренажере или на коврике",
          note: "Собственный вес или легкий вес",
          sets: [
            { weight: "BW", reps: "15-20" },
            { weight: "BW", reps: "15-20" },
            { weight: "BW", reps: "15-20" },
            { weight: "BW", reps: "15-20" }
          ]
        }
      ]
    }
  },
  sessions: {},
  calendarCursor: todayKey()
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return normalizeState(parsed);
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function normalizeState(input) {
  const base = structuredClone(DEFAULT_STATE);
  const next = Object.assign(base, input || {});
  next.scheduleDays = Array.isArray(next.scheduleDays) ? next.scheduleDays.map(Number).sort((a, b) => a - b) : [];
  next.plansByWeekday = next.plansByWeekday || {};
  next.sessions = next.sessions || {};
  next.calendarCursor = next.calendarCursor || todayKey();
  for (const day of WEEKDAYS) {
    if (!next.plansByWeekday[day.key]) {
      next.plansByWeekday[day.key] = { title: day.label, exercises: [] };
    }
    if (!Array.isArray(next.plansByWeekday[day.key].exercises)) {
      next.plansByWeekday[day.key].exercises = [];
    }
  }
  return next;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(updater) {
  state = typeof updater === "function" ? updater(state) : updater;
  persist();
  renderApp();
}

function todayKey() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
}

function formatDate(dateKey) {
  const date = new Date(dateKey + "T00:00:00");
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function getWeekdayKey(dateKey) {
  return new Date(dateKey + "T00:00:00").getDay();
}

function isScheduledDate(dateKey) {
  return state.scheduleDays.includes(getWeekdayKey(dateKey));
}

function getPlanForDate(dateKey) {
  return state.plansByWeekday[getWeekdayKey(dateKey)] || { title: "", exercises: [] };
}

function getSession(dateKey) {
  if (!state.sessions[dateKey]) {
    state.sessions[dateKey] = { completed: false, checks: {} };
  }
  return state.sessions[dateKey];
}

function getExerciseChecks(dateKey, exerciseIndex, setCount) {
  const session = getSession(dateKey);
  const current = session.checks[exerciseIndex] || Array.from({ length: setCount }, () => false);
  while (current.length < setCount) current.push(false);
  return current;
}

function toggleSetDone(dateKey, exerciseIndex, setIndex, setCount) {
  setState(prev => {
    const next = structuredClone(prev);
    const session = next.sessions[dateKey] || { completed: false, checks: {} };
    const checks = session.checks[exerciseIndex] || Array.from({ length: setCount }, () => false);
    checks[setIndex] = !checks[setIndex];
    session.checks[exerciseIndex] = checks;
    next.sessions[dateKey] = session;
    return next;
  });
}

function toggleDayComplete(dateKey) {
  setState(prev => {
    const next = structuredClone(prev);
    const session = next.sessions[dateKey] || { completed: false, checks: {} };
    session.completed = !session.completed;
    next.sessions[dateKey] = session;
    return next;
  });
}

function changeTab(tab) {
  setState(prev => ({ ...prev, activeTab: tab }));
}

function toggleScheduleDay(weekday) {
  setState(prev => {
    const exists = prev.scheduleDays.includes(weekday);
    const scheduleDays = exists
      ? prev.scheduleDays.filter(day => day !== weekday)
      : [...prev.scheduleDays, weekday].sort((a, b) => a - b);
    return { ...prev, scheduleDays };
  });
}

function updatePlanTitle(weekday, value) {
  setState(prev => {
    const next = structuredClone(prev);
    next.plansByWeekday[weekday].title = value;
    return next;
  });
}

function addExercise(weekday) {
  setState(prev => {
    const next = structuredClone(prev);
    next.plansByWeekday[weekday].exercises.push({
      name: "Новое упражнение",
      note: "",
      sets: [{ weight: "", reps: "" }]
    });
    return next;
  });
}

function removeExercise(weekday, exerciseIndex) {
  setState(prev => {
    const next = structuredClone(prev);
    next.plansByWeekday[weekday].exercises.splice(exerciseIndex, 1);
    return next;
  });
}

function updateExerciseField(weekday, exerciseIndex, field, value) {
  setState(prev => {
    const next = structuredClone(prev);
    next.plansByWeekday[weekday].exercises[exerciseIndex][field] = value;
    return next;
  });
}

function addSet(weekday, exerciseIndex) {
  setState(prev => {
    const next = structuredClone(prev);
    next.plansByWeekday[weekday].exercises[exerciseIndex].sets.push({ weight: "", reps: "" });
    return next;
  });
}

function removeSet(weekday, exerciseIndex, setIndex) {
  setState(prev => {
    const next = structuredClone(prev);
    const sets = next.plansByWeekday[weekday].exercises[exerciseIndex].sets;
    if (sets.length > 1) sets.splice(setIndex, 1);
    return next;
  });
}

function updateSetField(weekday, exerciseIndex, setIndex, field, value) {
  setState(prev => {
    const next = structuredClone(prev);
    next.plansByWeekday[weekday].exercises[exerciseIndex].sets[setIndex][field] = value;
    return next;
  });
}

function changeCalendarMonth(step) {
  setState(prev => {
    const date = new Date(prev.calendarCursor + "T00:00:00");
    date.setMonth(date.getMonth() + step, 1);
    return {
      ...prev,
      calendarCursor: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-01`
    };
  });
}

function openCalendarDate(dateKey) {
  setState(prev => ({ ...prev, calendarCursor: dateKey }));
}

function resetDemo() {
  state = structuredClone(DEFAULT_STATE);
  persist();
  renderApp();
}

function renderApp() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <main class="app-screen">${renderScreen()}</main>
    <nav class="bottom-nav">
      ${renderNavButton("today", "Сегодня")}
      ${renderNavButton("schedule", "Расписание")}
      ${renderNavButton("calendar", "Календарь")}
    </nav>
  `;

  bindCommonEvents();
}

function renderNavButton(id, label) {
  return `<button class="nav-button ${state.activeTab === id ? "active" : ""}" data-nav="${id}">${label}</button>`;
}

function renderScreen() {
  if (state.activeTab === "schedule") return renderScheduleScreen();
  if (state.activeTab === "calendar") return renderCalendarScreen();
  return renderTodayScreen();
}

function renderTodayScreen() {
  const dateKey = todayKey();
  const scheduled = isScheduledDate(dateKey);
  const plan = getPlanForDate(dateKey);
  const session = getSession(dateKey);
  const totalSets = plan.exercises.reduce((sum, item) => sum + item.sets.length, 0);

  return `
    <div class="topbar">
      <div>
        <div class="topbar-title">Сегодня</div>
        <div class="topbar-sub">${formatDate(dateKey)}</div>
      </div>
      <button class="pill" data-reset-demo>Сбросить</button>
    </div>
    ${scheduled ? `
      <section class="hero">
        <div class="hero-label">${plan.title || "Тренировка"}</div>
        <h2>${session.completed ? "Выполнено" : "План на день"}</h2>
        <p>${plan.exercises.length ? "Все упражнения уже на месте. Остается только пройтись по списку и отметить день." : "Добавь упражнения для этого дня в расписании."}</p>
        <div class="hero-actions">
          <button class="button button-primary" data-toggle-complete="${dateKey}">
            ${session.completed ? "Снять выполнено" : "Поставить выполнено"}
          </button>
        </div>
      </section>
      <section class="summary">
        <div class="summary-card">
          <div class="summary-label">Упражнения</div>
          <div class="summary-value">${plan.exercises.length}</div>
        </div>
        <div class="summary-card">
          <div class="summary-label">Подходы</div>
          <div class="summary-value">${totalSets}</div>
        </div>
        <div class="summary-card">
          <div class="summary-label">Статус</div>
          <div class="summary-value">${session.completed ? "Да" : "Нет"}</div>
        </div>
      </section>
      <div class="section-title">
        <h3>Список упражнений</h3>
      </div>
      ${plan.exercises.length ? plan.exercises.map((exercise, exerciseIndex) =>
        renderExerciseCard(dateKey, exercise, exerciseIndex)
      ).join("") : `<div class="empty-card">На сегодня день уже выбран, но список упражнений пуст. Зайди в расписание и заполни его.</div>`}
    ` : `
      <section class="hero">
        <div class="hero-label">Свободный день</div>
        <h2>Сегодня отдых</h2>
        <p>На этот день тренировка не запланирована. Можно просто выдохнуть или открыть расписание и добавить день.</p>
        <div class="hero-actions">
          <button class="button button-primary" data-nav="schedule">Настроить дни</button>
        </div>
      </section>
      <div class="empty-card">Запланируй тренировки, например на понедельник, среду и пятницу, и приложение будет просто показывать нужный список в нужный день.</div>
    `}
  `;
}

function renderExerciseCard(dateKey, exercise, exerciseIndex) {
  const checks = getExerciseChecks(dateKey, exerciseIndex, exercise.sets.length);

  return `
    <article class="exercise-card">
      <div class="exercise-head">
        <div class="exercise-avatar">◎</div>
        <div>
          <div class="exercise-name">${escapeHtml(exercise.name || "Упражнение")}</div>
          <div class="exercise-note">${escapeHtml(exercise.note || "Список подходов на сегодня")}</div>
        </div>
      </div>
      <div class="sets">
        ${exercise.sets.map((set, setIndex) => `
          <div class="set-row ${checks[setIndex] ? "done" : ""}">
            <div class="set-index">${setIndex === 0 ? "W" : setIndex}</div>
            <div class="set-ghost">${escapeHtml(`${set.weight || "-"} × ${set.reps || "-"}`)}</div>
            <div class="set-number">${escapeHtml(set.weight || "-")}</div>
            <div class="set-number">${escapeHtml(set.reps || "-")}</div>
            <button class="set-check" data-set-toggle="${dateKey}|${exerciseIndex}|${setIndex}|${exercise.sets.length}">
              ${checks[setIndex] ? "✓" : "○"}
            </button>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderScheduleScreen() {
  const selectedDays = state.scheduleDays.length ? state.scheduleDays : [1];

  return `
    <div class="topbar">
      <div>
        <div class="topbar-title">Расписание</div>
        <div class="topbar-sub">Выбираешь дни один раз, дальше приложение просто показывает нужный список.</div>
      </div>
    </div>
    <section class="editor-card">
      <div class="hero-label">Дни недели</div>
      <div class="weekday-grid">
        ${WEEKDAYS.map(day => `
          <button class="weekday-button ${state.scheduleDays.includes(day.key) ? "active" : ""}" data-toggle-day="${day.key}">
            ${day.short}
          </button>
        `).join("")}
      </div>
    </section>
    <section class="editor-card">
      <div class="section-title">
        <h3>Планы по дням</h3>
      </div>
      ${selectedDays.map(dayKey => renderDayPlanEditor(dayKey)).join("")}
    </section>
  `;
}

function renderDayPlanEditor(dayKey) {
  const plan = state.plansByWeekday[dayKey];
  const day = WEEKDAYS.find(item => item.key === dayKey);
  return `
    <div class="editor-stack">
      <div class="hero-label">${day.label}</div>
      <input class="input" value="${escapeAttr(plan.title || day.label)}" data-plan-title="${dayKey}" placeholder="Название тренировки" />
      ${plan.exercises.map((exercise, exerciseIndex) => `
        <div class="exercise-editor">
          <div class="exercise-editor-top">
            <input class="input" value="${escapeAttr(exercise.name || "")}" data-exercise-name="${dayKey}|${exerciseIndex}" placeholder="Название упражнения" />
            <button class="icon-button" data-delete-exercise="${dayKey}|${exerciseIndex}">×</button>
          </div>
          <input class="input" value="${escapeAttr(exercise.note || "")}" data-exercise-note="${dayKey}|${exerciseIndex}" placeholder="Короткая заметка" />
          <div style="height:10px"></div>
          ${exercise.sets.map((set, setIndex) => `
            <div class="set-editor-row">
              <div class="set-index">${setIndex + 1}</div>
              <input class="input" value="${escapeAttr(set.weight || "")}" data-set-weight="${dayKey}|${exerciseIndex}|${setIndex}" placeholder="Вес" />
              <input class="input" value="${escapeAttr(set.reps || "")}" data-set-reps="${dayKey}|${exerciseIndex}|${setIndex}" placeholder="Повторы" />
              <button class="icon-button" data-delete-set="${dayKey}|${exerciseIndex}|${setIndex}">−</button>
            </div>
          `).join("")}
          <button class="button button-secondary" data-add-set="${dayKey}|${exerciseIndex}">+ Подход</button>
        </div>
      `).join("")}
      <button class="button button-primary" data-add-exercise="${dayKey}">Добавить упражнение</button>
    </div>
  `;
}

function renderCalendarScreen() {
  const cursorDate = new Date(state.calendarCursor + "T00:00:00");
  const year = cursorDate.getFullYear();
  const month = cursorDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const start = new Date(firstDay);
  start.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7));
  const days = Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const key = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`;
    const session = state.sessions[key] || { completed: false };
    return {
      key,
      date: day,
      currentMonth: day.getMonth() === month,
      scheduled: isScheduledDate(key),
      completed: !!session.completed,
      today: key === todayKey()
    };
  });

  const selectedKey = state.calendarCursor;
  const selectedPlan = getPlanForDate(selectedKey);
  const selectedSession = state.sessions[selectedKey] || { completed: false };

  return `
    <div class="topbar">
      <div>
        <div class="topbar-title">Календарь</div>
        <div class="topbar-sub">Светлый день — запланировано, яркий — выполнено.</div>
      </div>
    </div>
    <section class="calendar-card">
      <div class="month-header">
        <button class="mini-button" data-month-shift="-1">←</button>
        <div class="month-title">${MONTHS[month]} ${year}</div>
        <button class="mini-button" data-month-shift="1">→</button>
      </div>
      <div class="calendar-weekdays">
        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>
      </div>
      <div class="calendar-grid">
        ${days.map(day => `
          <button class="calendar-day ${day.currentMonth ? "" : "other"} ${day.scheduled ? "scheduled" : ""} ${day.completed ? "done" : ""} ${day.today ? "today" : ""}" data-calendar-date="${day.key}">
            ${day.date.getDate()}
          </button>
        `).join("")}
      </div>
      <div class="calendar-legend">
        <span><span class="legend-dot" style="background:rgba(255,255,255,.35)"></span>запланировано</span>
        <span><span class="legend-dot" style="background:var(--accent)"></span>выполнено</span>
      </div>
    </section>
    <section class="rest-card">
      <div class="hero-label">${formatDate(selectedKey)}</div>
      <div class="section-title">
        <h3>${selectedPlan.title || "Без названия"}</h3>
        ${isScheduledDate(selectedKey) ? `<span class="pill ${selectedSession.completed ? "active" : ""}">${selectedSession.completed ? "Выполнено" : "Запланировано"}</span>` : ""}
      </div>
      ${isScheduledDate(selectedKey)
        ? (selectedPlan.exercises.length
          ? `<div class="editor-stack">${selectedPlan.exercises.map(item => `<div>${escapeHtml(item.name)}</div>`).join("")}</div>`
          : `<div class="topbar-sub">В этот день упражнения пока не добавлены.</div>`)
        : `<div class="topbar-sub">На эту дату тренировка не запланирована.</div>`}
    </section>
  `;
}

function bindCommonEvents() {
  document.querySelectorAll("[data-nav]").forEach(button => {
    button.addEventListener("click", () => changeTab(button.dataset.nav));
  });

  const reset = document.querySelector("[data-reset-demo]");
  if (reset) reset.addEventListener("click", resetDemo);

  document.querySelectorAll("[data-toggle-complete]").forEach(button => {
    button.addEventListener("click", () => toggleDayComplete(button.dataset.toggleComplete));
  });

  document.querySelectorAll("[data-set-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const [dateKey, exerciseIndex, setIndex, setCount] = button.dataset.setToggle.split("|");
      toggleSetDone(dateKey, Number(exerciseIndex), Number(setIndex), Number(setCount));
    });
  });

  document.querySelectorAll("[data-toggle-day]").forEach(button => {
    button.addEventListener("click", () => toggleScheduleDay(Number(button.dataset.toggleDay)));
  });

  document.querySelectorAll("[data-plan-title]").forEach(input => {
    input.addEventListener("input", () => updatePlanTitle(Number(input.dataset.planTitle), input.value));
  });

  document.querySelectorAll("[data-add-exercise]").forEach(button => {
    button.addEventListener("click", () => addExercise(Number(button.dataset.addExercise)));
  });

  document.querySelectorAll("[data-delete-exercise]").forEach(button => {
    button.addEventListener("click", () => {
      const [day, index] = button.dataset.deleteExercise.split("|").map(Number);
      removeExercise(day, index);
    });
  });

  document.querySelectorAll("[data-exercise-name]").forEach(input => {
    input.addEventListener("input", () => {
      const [day, index] = input.dataset.exerciseName.split("|").map(Number);
      updateExerciseField(day, index, "name", input.value);
    });
  });

  document.querySelectorAll("[data-exercise-note]").forEach(input => {
    input.addEventListener("input", () => {
      const [day, index] = input.dataset.exerciseNote.split("|").map(Number);
      updateExerciseField(day, index, "note", input.value);
    });
  });

  document.querySelectorAll("[data-add-set]").forEach(button => {
    button.addEventListener("click", () => {
      const [day, index] = button.dataset.addSet.split("|").map(Number);
      addSet(day, index);
    });
  });

  document.querySelectorAll("[data-delete-set]").forEach(button => {
    button.addEventListener("click", () => {
      const [day, exercise, setIndex] = button.dataset.deleteSet.split("|").map(Number);
      removeSet(day, exercise, setIndex);
    });
  });

  document.querySelectorAll("[data-set-weight]").forEach(input => {
    input.addEventListener("input", () => {
      const [day, exercise, setIndex] = input.dataset.setWeight.split("|").map(Number);
      updateSetField(day, exercise, setIndex, "weight", input.value);
    });
  });

  document.querySelectorAll("[data-set-reps]").forEach(input => {
    input.addEventListener("input", () => {
      const [day, exercise, setIndex] = input.dataset.setReps.split("|").map(Number);
      updateSetField(day, exercise, setIndex, "reps", input.value);
    });
  });

  document.querySelectorAll("[data-month-shift]").forEach(button => {
    button.addEventListener("click", () => changeCalendarMonth(Number(button.dataset.monthShift)));
  });

  document.querySelectorAll("[data-calendar-date]").forEach(button => {
    button.addEventListener("click", () => openCalendarDate(button.dataset.calendarDate));
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

renderApp();
