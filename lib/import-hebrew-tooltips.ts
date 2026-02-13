/**
 * Import Hebrew Tooltips from External Sources
 * 
 * This file demonstrates how to import Hebrew translations from:
 * 1. The parameters file (paramtersExplains.txt)
 * 2. The CSV file (עדכון SPEC והסברים למדדים.csv)
 * 
 * Use this as a reference to populate lib/hebrew-tooltips.ts
 */

/**
 * Hebrew translations extracted from paramtersExplains.txt
 * 
 * Map these to the metric IDs in lib/hebrew-tooltips.ts
 */
export const TRANSLATIONS_FROM_PARAMETERS = {
  // Core Metrics
  peRatio: 'מכפיל רווח: מראה כמה שקלים המשקיעים מוכנים לשלם על כל שקל שהחברה מרוויחה.',
  pegRatio: 'מכפיל צמיחה: בודק האם מחיר המניה הגיוני ביחס לקצב צמיחת הרווחים של החברה.',
  eps: 'רווח למניה: כמה מהרווח הנקי של החברה שייך לכל מניה בודדת.',

  // Efficiency
  roe: 'תשואה על ההון: מדד ליעילות - כמה רווח החברה מייצרת מהכסף שהשקיעו בעלי המניות.',

  // Financial Health
  fcf: 'תזרים מזומנים חופשי: המזומן שנשאר לחברה אחרי הוצאות, המשמש לדיבידנדים או פיתוח.',
  currentRatio: 'יחס שוטף: בודק אם לחברה יש מספיק נכסים נזילים כדי לכסות את חובותיה בשנה הקרובה.',
  debtToEquity: 'יחס חוב להון: מראה כמה החברה ממונפת (נשענת על הלוואות) לעומת הון עצמי.',

  // Market Context
  beta: 'בטא: מודד את התנודתיות של המניה ביחס לשוק (מעל 1 נחשב לתנודתי מהממוצע).',
  marketCap: 'שווי שוק: הערך הכולל של החברה (מחיר מניה כפול מספר המניות).',
};

/**
 * MANUAL INTEGRATION STEP:
 * 
 * Copy the translations above and paste them into lib/hebrew-tooltips.ts
 * in the HEBREW_TOOLTIPS object. For example:
 * 
 * export const HEBREW_TOOLTIPS: HebrewTranslations = {
 *   peRatio: 'מכפיל רווח: מראה כמה שקלים המשקיעים מוכנים לשלם על כל שקל שהחברה מרוויחה.',
 *   pegRatio: 'מכפיל צמיחה: בודק האם מחיר המניה הגיוני ביחס לקצב צמיחת הרווחים של החברה.',
 *   // ... etc
 * };
 */

/**
 * For metrics that don't have translations yet:
 * - revenueGrowth: (not in parameters file - needs translation)
 * - fiftyTwoWeekHigh: (not in parameters file - needs translation)
 * - fiftyTwoWeekLow: (not in parameters file - needs translation)
 * - dividendYield: (not in parameters file - needs translation)
 */

/**
 * QUICK START:
 * 1. Copy all translations from TRANSLATIONS_FROM_PARAMETERS
 * 2. Paste into lib/hebrew-tooltips.ts HEBREW_TOOLTIPS object
 * 3. Add missing translations for the remaining metrics
 * 4. Done! Tooltips will automatically appear in your app
 */
