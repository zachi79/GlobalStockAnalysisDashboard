# Adding Hebrew Tooltips - Quick Guide

## Option 1: Copy & Paste Translations (Fastest)

### 1. Open `lib/hebrew-tooltips.ts`

### 2. Replace the HEBREW_TOOLTIPS object with this:

```typescript
export const HEBREW_TOOLTIPS: HebrewTranslations = {
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
};
```

### 3. Save the file

✅ **Done!** The tooltips will automatically appear when users hover over metric labels.

---

## Option 2: Add Translations Incrementally

If you prefer to add translations one by one:

1. Open `lib/hebrew-tooltips.ts`
2. Find the metric ID you want to translate
3. Add the Hebrew text between the quotes
4. Save

Example:
```typescript
peRatio: 'מכפיל רווח: מראה כמה שקלים המשקיעים מוכנים לשלם על כל שקל שהחברה מרוויחה.',
```

---

## Verify Your Translations

After adding translations, visit the demo page (http://localhost:3000) and:

1. Look for the **Translation Status** card
2. It should show updated progress
3. Hover over metric labels to see the Hebrew tooltips

---

## Translation Sources

The Hebrew translations come from:
- `paramtersExplains.txt` - Main glossary file
- `עדכון SPEC והסברים למדדים.csv` - Updated metrics documentation

---

## Need to Add More Translations?

Edit `lib/hebrew-tooltips.ts` and add new entries in the `HEBREW_TOOLTIPS` object:

```typescript
newMetricId: 'Hebrew translation text here...',
```

The system will automatically:
- Display the info icon next to the label
- Show the tooltip on hover
- Update the translation progress tracker

---

**Note**: You can also use `lib/import-hebrew-tooltips.ts` as a reference guide for all available translations.
