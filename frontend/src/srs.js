// ── Spaced repetition (SM-2) and study-stats helpers ─────────────────────────
// Pure functions only — no React, no network.

// Apply one review grade (0-5) to a card and return its updated SRS fields.
export function sm2(card, grade) {
  let { repetitions, easiness, interval } = card;
  let lapses = card.lapses ?? 0;
  if (grade >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easiness);
    repetitions += 1;
  } else {
    // count a lapse only when a previously learned card relapses
    if (repetitions >= 1) lapses += 1;
    repetitions = 0;
    interval = 1;
  }
  easiness = Math.max(1.3, easiness + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  const nextReview = Date.now() + interval * 86400000;
  return { repetitions, easiness, interval, nextReview, lastGrade: grade, lapses };
}

// A leech is a card relearned and forgotten this many times.
const LEECH_THRESHOLD = 4;
export function isLeech(card) {
  return (card.lapses ?? 0) >= LEECH_THRESHOLD;
}

// A fresh card has never been graded. A relapsed card also has repetitions 0,
// but it carries a lastGrade — it counts as a review, not as a new card.
export function isFreshCard(card) {
  return card.repetitions === 0 && card.lastGrade == null;
}

export function daysUntil(ts) {
  const d = Math.ceil((ts - Date.now()) / 86400000);
  return d <= 0 ? "Hoy" : d === 1 ? "Mañana" : `${d} días`;
}

// ── Streak / daily-count helpers ──────────────────────────────────────────────
// Local "YYYY-MM-DD" so the day boundary follows the user's timezone.
export function localDateStr(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function dayDiff(from, to) {
  return Math.round((new Date(to + "T00:00:00") - new Date(from + "T00:00:00")) / 86400000);
}

// Default new-cards-per-day limit. ~20 is the common recommendation for
// sustainable language learning (keeps the daily review load manageable).
export const DEFAULT_NEW_LIMIT = 20;

// How many brand-new cards were introduced today (0 if `stats.day` is stale).
export function newIntroducedToday(stats) {
  return stats && stats.day === localDateStr() ? (stats.newToday ?? 0) : 0;
}

// Register one review "now", updating today's count and the consecutive-day
// streak. `isNew` marks the graded card as a brand-new introduction, which
// counts against the daily new-card limit (tracked in `newToday`, reset daily).
export function bumpStats(prev, isNew = false) {
  const today = localDateStr();
  const inc = isNew ? 1 : 0;
  if (!prev || !prev.day) {
    return { day: today, todayCount: 1, currentStreak: 1, longestStreak: 1,
             dailyNewLimit: prev?.dailyNewLimit ?? DEFAULT_NEW_LIMIT, newToday: inc };
  }
  const dailyNewLimit = prev.dailyNewLimit ?? DEFAULT_NEW_LIMIT;
  if (prev.day === today) {
    return { ...prev, todayCount: prev.todayCount + 1, newToday: (prev.newToday ?? 0) + inc, dailyNewLimit };
  }
  const diff = dayDiff(prev.day, today);
  if (diff <= 0) {
    // Clock moved backwards — treat as the same day, don't rewind the streak.
    return { ...prev, todayCount: prev.todayCount + 1, newToday: (prev.newToday ?? 0) + inc, dailyNewLimit };
  }
  const currentStreak = diff === 1 ? prev.currentStreak + 1 : 1;
  return {
    day: today,
    todayCount: 1,
    currentStreak,
    longestStreak: Math.max(prev.longestStreak || 0, currentStreak),
    dailyNewLimit,
    newToday: inc, // new day → reset the new-card counter
  };
}
