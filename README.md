# Global Stock Analysis Dashboard - Financial Metrics Implementation

## Overview

This project implements a comprehensive stock analysis dashboard with:
- **Stock Selection** from major global indices (S&P 500, TA-125, Nikkei 225, Europe)
- **Yahoo Finance Integration** to fetch real stock data
- **Financial Metrics Display** with automatic formatting and organization
- **Hebrew Tooltips** for metric explanations

## Architecture

### 1. **Stock Indices Configuration** (`config/indices.ts`)
Defines available stock indices and their top stocks:
- S&P 500 (USA)
- TA-125 (Israel)
- Nikkei 225 (Japan)
- Europe (Major exchanges)

**Key Functions:**
- `getIndexById()` - Get index configuration by ID
- `getAllIndices()` - Get all available indices

### 2. **Yahoo Finance Integration** (`lib/yahoo-finance.ts`)
Utilities for fetching live stock data:
- `getStockQuote()` - Get current price and basic info
- `getMultipleStocks()` - Batch fetch multiple stocks
- `searchStocks()` - Search for stocks by query
- `getStockProfile()` - Get detailed company information and financial metrics

### 3. **Stock Selector Component** (`components/StockSelector.tsx`)
Interactive stock selection with dropdown UI:
- Select an index
- Automatically loads stocks from that index (via Yahoo Finance)
- Displays stocks with current prices
- Returns selected stock data

**Features:**
- Real-time price loading
- Automatic data fetching
- Loading states with spinners
- Responsive dropdown UI

**Props:**
```typescript
interface StockSelectorProps {
  onStockSelected?: (stock: StockOption) => void;
  onIndexChanged?: (indexId: string) => void;
}
```

### 4. **Metrics Configuration** (`config/metrics.ts`)
Centralized metrics definitions with categories:
- Core Metrics (P/E, PEG, EPS)
- Efficiency (ROE, Revenue Growth)
- Financial Health (Current Ratio, Debt-to-Equity, FCF)
- Market Context (Market Cap, 52-Week High/Low, Beta)
- Dividends (Yield)

### 5. **Hebrew Tooltips Manager** (`lib/hebrew-tooltips.ts`)
Centralized Hebrew translation management with:
- `HEBREW_TOOLTIPS` object for all translations
- React hooks: `useHebrewTooltip()`, `useAllHebrewTooltips()`
- Progress tracking: `getTranslationProgress()`
- Bulk update functions

### 6. **MetricLabel Component** (`components/MetricLabel.tsx`)
Displays metric labels with optional Hebrew tooltips:
- Shows info icon when tooltip is available
- Auto-fetches tooltip using metric ID
- Accessible tooltip positioning

### 7. **FinancialMetrics Component** (`components/FinancialMetrics.tsx`)
Displays all metrics organized by category:
- Auto-groups by category
- Automatic value formatting (percentage, currency, etc.)
- Skips empty metrics
- Responsive grid layout

## How to Use

### Step 1: Select an Index

The app loads with S&P 500 selected. Click the "Select Index" dropdown to choose:
- S&P 500 (USA)
- TA-125 (Israel)
- Nikkei 225 (Japan)
- Europe (Major exchanges)

### Step 2: Select a Stock

Once an index is selected, the "Select Stock" dropdown populates with real stocks from Yahoo Finance. The stocks load with:
- Stock symbol
- Company name
- Current price

### Step 3: View Metrics

Once you select a stock:
1. Company profile loaded (name, sector, industry, description)
2. Financial metrics automatically fetched and displayed
3. Each metric has a Hebrew tooltip (when available)

### Step 4: Add Hebrew Tooltips

Edit `lib/hebrew-tooltips.ts` and add translations to the `HEBREW_TOOLTIPS` object:

```typescript
export const HEBREW_TOOLTIPS: HebrewTranslations = {
  peRatio: 'מכפיל רווח: מראה כמה שקלים המשקיעים מוכנים לשלם על כל שקל שהחברה מרוויחה.',
  roe: 'תשואה על ההון: מדד ליעילות - כמה רווח החברה מייצרת מהכסף שהשקיעו בעלי המניות.',
  // ... more translations
};
```

## File Structure

```
Global Stock Analysis Dashboard/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page with stock selector
│   └── globals.css             # Global styles
├── components/
│   ├── StockSelector.tsx       # Index & stock selection dropdowns
│   ├── MetricLabel.tsx         # Metric label with tooltips
│   ├── FinancialMetrics.tsx    # Metrics display component
│   └── ui/
│       ├── card.tsx            # Card component
│       └── tooltip.tsx         # Tooltip component
├── config/
│   ├── indices.ts              # Stock indices configuration
│   └── metrics.ts              # Metrics configuration
├── lib/
│   ├── yahoo-finance.ts        # Yahoo Finance API integration
│   ├── hebrew-tooltips.ts      # Hebrew translations manager
│   ├── import-hebrew-tooltips.ts # Translation import reference
│   └── utils.ts                # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── README.md
└── HEBREW_TOOLTIPS_SETUP.md
```

## Key Features

✅ **Real Stock Data** - Integrates with Yahoo Finance API  
✅ **Global Indices** - S&P 500, TA-125, Nikkei 225, Europe  
✅ **Dropdown Selection** - Easy index and stock selection  
✅ **Auto-Loading** - Metrics load automatically when stock is selected  
✅ **Hebrew Tooltips** - Easy-to-translate financial metrics  
✅ **Responsive Design** - Works on desktop and mobile  
✅ **Zero Configuration** - Just add Hebrew text, everything else works  
✅ **Type-Safe** - Full TypeScript support  

## API Integration

The app uses `yahoo-finance2` npm package to fetch:
- Current stock prices
- Company information
- Financial metrics
- Historical data (if needed)

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Language**: TypeScript
- **API**: Yahoo Finance (`yahoo-finance2`)
- **State Management**: React Hooks

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

4. **Add Hebrew translations:**
   - Edit `lib/hebrew-tooltips.ts`
   - Add translations to `HEBREW_TOOLTIPS` object
   - See [HEBREW_TOOLTIPS_SETUP.md](HEBREW_TOOLTIPS_SETUP.md) for quick start

## How It Works - Under the Hood

### Stock Selection Flow

```
User selects Index
  ↓
StockSelector loads top stocks from that index
  ↓
For each stock symbol, fetch price from Yahoo Finance
  ↓
Display stocks in dropdown with prices
  ↓
User selects stock
  ↓
Fetch full company profile and metrics
  ↓
FinancialMetrics component displays metrics with Hebrew tooltips
```

### Data Fetching

1. **Index Selection** → Loads pre-configured stock symbols
2. **Stock Prices** → Fetches via `getStockQuote(symbol)`
3. **Company Profile** → Fetches via `getStockProfile(symbol)`
4. **Metrics Display** → Formats and organizes data by category

## Troubleshooting

### Issue: Stocks not loading
- Check internet connection
- Verify Yahoo Finance API is accessible
- Check browser console for errors

### Issue: Metrics showing as "N/A"
- Some metrics may not be available for all stocks
- Data updates periodically on Yahoo Finance side
- Try different stocks if needed

### Issue: Hebrew tooltips not appearing
- Ensure translations are added to `lib/hebrew-tooltips.ts`
- Reload the browser
- Check translation text is not empty

## Future Enhancements

- [ ] Historical price charts
- [ ] Analyst recommendations
- [ ] News feed integration
- [ ] Portfolio tracking
- [ ] Custom alerts
- [ ] Compare multiple stocks
- [ ] Advanced filtering

## License

This project is available as-is for learning and development purposes.

---

**Need Help?** Check [HEBREW_TOOLTIPS_SETUP.md](HEBREW_TOOLTIPS_SETUP.md) for quick setup instructions.
