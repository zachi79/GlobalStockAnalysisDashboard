/**
 * Pre-filled Hebrew Tooltips
 * 
 * This file contains all the Hebrew translations ready to use.
 * Simply copy the content and paste it directly into lib/hebrew-tooltips.ts
 * to replace the empty HEBREW_TOOLTIPS object.
 * 
 * After importing, all tooltips will automatically appear in your app!
 */

export const HEBREW_TOOLTIPS_READY = {
  // Core Metrics
  peRatio: 'מכפיל רווח: מראה כמה שקלים המשקיעים מוכנים לשלם על כל שקל שהחברה מרוויחה.',
  pegRatio: 'מכפיל צמיחה: בודק האם מחיר המניה הגיוני ביחס לקצב צמיחת הרווחים של החברה.',
  eps: 'רווח למניה: כמה מהרווח הנקי של החברה שייך לכל מניה בודדת.',

  // Efficiency Metrics
  roe: 'תשואה על ההון: מדד ליעילות - כמה רווח החברה מייצרת מהכסף שהשקיעו בעלי המניות.',
  revenueGrowth: 'גדילת הכנסות שנתית: קצב הגדילה של המכירות של החברה שנה לשנה.',

  // Financial Health
  currentRatio: 'יחס שוטף: בודק אם לחברה יש מספיק נכסים נזילים כדי לכסות את חובותיה בשנה הקרובה.',
  debtToEquity: 'יחס חוב להון: מראה כמה החברה ממונפת (נשענת על הלוואות) לעומת הון עצמי.',
  fcf: 'תזרים מזומנים חופשי: המזומן שנשאר לחברה אחרי הוצאות, המשמש לדיבידנדים או פיתוח.',

  // Market Context
  marketCap: 'שווי שוק: הערך הכולל של החברה (מחיר מניה כפול מספר המניות).',
  fiftyTwoWeekHigh: 'מחיר גבוה ב-52 שבועות: המחיר הגבוה ביותר שהמניה הגיעה אליו בשנה האחרונה.',
  fiftyTwoWeekLow: 'מחיר נמוך ב-52 שבועות: המחיר הנמוך ביותר שהמניה הגיעה אליו בשנה האחרונה.',
  beta: 'בטא: מודד את התנודתיות של המניה ביחס לשוק (מעל 1 נחשב לתנודתי מהממוצע).',

  // Dividends
  dividendYield: 'תשואת דיווידנד: הדיווידנד השנתי המוצע כאחוז מהמחיר הנוכחי של המניה.',
} as const;

/**
 * USAGE INSTRUCTIONS:
 * ====================
 * 
 * 1. Open lib/hebrew-tooltips.ts
 * 
 * 2. Replace this:
 *    export const HEBREW_TOOLTIPS: HebrewTranslations = {
 *      peRatio: '',
 *      pegRatio: '',
 *      // ... etc (empty strings)
 *    };
 * 
 * 3. With this (copy from HEBREW_TOOLTIPS_READY above):
 *    export const HEBREW_TOOLTIPS: HebrewTranslations = {
 *      peRatio: 'מכפיל רווח: מראה כמה שקלים המשקיעים מוכנים לשלם על כל שקל שהחברה מרוויחה.',
 *      pegRatio: 'מכפיל צמיחה: בודק האם מחיר המניה הגיוני ביחס לקצב צמיחת הרווחים של החברה.',
 *      // ... etc with Hebrew translations
 *    };
 * 
 * 4. Save the file
 * 
 * 5. Done! Restart the dev server and you'll see tooltips appear
 */
