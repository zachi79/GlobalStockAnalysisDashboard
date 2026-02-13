# Project Specification: Global Stock Insight Dashboard (Professional Version)

## 1. Project Goal
An English-language web application providing a deep-dive analysis of stocks from S&P 500, TA-125, Nikkei 225, and European markets. The focus is on fundamental health, efficiency metrics, and AI-driven qualitative insights.

## 2. Core Indices Support
* **USA:** S&P 500 | **Israel:** TA-125 | **Japan:** Nikkei 225 | **Europe:** Major exchanges.

## 3. Detailed Feature Requirements

### A. Company Overview & Industry Analysis
1. **Industry & Business:** What industry is the company in? Core products and services.
2. **Competitive Advantage (Moat):** What differentiates it from competitors? Unique value proposition.
3. **Products/Services:** Detailed breakdown of main product lines and revenue streams.
4. **Main Competitors:** Identify 3-5 primary competitors within the same sector.

### B. Management & Leadership
5. **Management Team:** Key executives (CEO, CFO, COO, etc.) with brief backgrounds and previous roles.
6. **Board of Directors:** Leadership structure and governance.
7. **Company Vision & Strategy:** Long-term goals, strategic initiatives, and market positioning.

### C. Financial Analysis (Latest Updated Data)
8. **Revenue Metrics:** Total revenues, YoY growth rate, revenue per segment.
9. **Profitability:** Net profit, operating profit, profit margins (gross, operating, net).
10. **Valuation Metrics:**
    - **P/E Ratio (Price-to-Earnings):** Current valuation multiple
    - **PEG Ratio:** Growth-adjusted valuation metric
    - **EPS (Earnings Per Share):** Earnings per outstanding share
    - **Price-to-Book (P/B):** Asset valuation
11. **Financial Health:** 
    - **Debt Levels & Debt-to-Equity Ratio:** Total debt, long-term debt, leverage analysis
    - **Current Ratio:** Short-term liquidity assessment
    - **Free Cash Flow (FCF):** Operating cash flow minus capital expenditures
    - **ROE (Return on Equity):** Profitability relative to shareholder equity
    - **ROA (Return on Assets):** Asset utilization efficiency
12. **Dividend Analysis:** Dividend yield, payout ratio, dividend history, and growth trend.
13. **52-Week Range:** High/Low prices, current price position.
14. **Beta (Volatility):** Stock price volatility relative to market.

### D. Visualizations & Market Data
15. **Historical Stock Charts:** 7 timeframe views - 1D, 1W, 1M, 6M, 1Y, 3Y, 5Y with price and volume data.
16. **Analyst Consensus:** Buy/Hold/Sell percentage, analyst target prices, and consensus recommendation.
17. **Market Sentiment:** Latest financial news with sentiment analysis (Positive/Negative/Neutral).

### E. SWOT & Strategic Analysis
18. **Strengths:** Key competitive advantages and strong points.
19. **Weaknesses:** Internal challenges and areas of concern.
20. **Opportunities:** Market growth potential and expansion areas.
21. **Threats:** Competitive threats, regulatory risks, market headwinds.

### F. User Interface & Navigation
22. **Dashboard Layout:** Clean, professional single-page design with index/stock selectors.
23. **Company Profile Card:** Company name, sector, industry, current price (real-time), logo/branding.
24. **Metrics Grid:** Organized by category (Valuation, Profitability, Health, Market, Dividends) with Hebrew tooltips on hover.
25. **Charts Section:** Interactive historical price charts with timeframe selector buttons.
26. **Analyst & News Section:** Side-by-side view of analyst consensus and latest news.
27. **Responsive Design:** Fully functional on desktop (primary) and tablet devices.

### G. Data Management & Updates
28. **Real-Time Prices:** Stock prices update every 60 seconds via API polling.
29. **Daily Data Refresh:** Financial metrics and fundamentals refreshed daily at market open.
30. **Historical Data Caching:** Chart data cached for 24 hours to reduce API calls.
31. **Fallback Handling:** Mock data displayed if API unavailable (graceful degradation).

### H. Hebrew Localization
32. **Metric Labels:** Each financial metric and data point has Hebrew tooltip text for Israeli users.
33. **Partial Translation:** UI/Content remains in English; only metric tooltips are translated to Hebrew.
34. **Translation File:** Centralized Hebrew translations in `lib/hebrew-tooltips.ts` for easy maintenance.
35. **Accessibility:** Clear tooltips with context for all financial terminology.

## 4. Detailed Metrics Dictionary

### Financial Metrics Explained

**Revenue Metrics**
- **Total Revenue:** Sum of all income from operations
- **Revenue Growth (YoY):** Percentage increase in revenue year-over-year

**Profitability Metrics**
- **Net Profit (Net Income):** Total profit after all expenses and taxes
- **Gross Profit Margin:** (Revenue - Cost of Goods Sold) / Revenue × 100
- **Operating Profit Margin:** Operating Income / Revenue × 100
- **Net Profit Margin:** Net Income / Revenue × 100

**Valuation Metrics**
- **P/E Ratio (Price-to-Earnings):** Stock Price / Earnings Per Share. Lower = potentially undervalued; Higher = growth premium
- **PEG Ratio (Price/Earnings-to-Growth):** P/E Ratio / Annual Earnings Growth Rate. Adjusts P/E for growth expectations
- **EPS (Earnings Per Share):** Total Net Income / Number of Outstanding Shares. Measures per-share profitability
- **Price-to-Book (P/B):** Stock Price / Book Value Per Share. Compares market vs. accounting value

**Financial Health Metrics**
- **Debt-to-Equity Ratio:** Total Debt / Total Equity. Lower is healthier; measures financial leverage
- **Current Ratio:** Current Assets / Current Liabilities. Measures short-term liquidity (ideal: 1.5-3.0)
- **Free Cash Flow (FCF):** Operating Cash Flow - Capital Expenditures. Cash available for dividends and debt repayment
- **Total Debt:** All short-term and long-term borrowings

**Efficiency & Return Metrics**
- **ROE (Return on Equity):** Net Income / Shareholders' Equity. How efficiently equity is used
- **ROA (Return on Assets):** Net Income / Total Assets. How efficiently assets generate profits
- **ROIC (Return on Invested Capital):** NOPAT / Invested Capital. Returns on all capital invested

**Market Metrics**
- **Market Cap:** Stock Price × Shares Outstanding. Total market value of the company
- **Beta:** Stock volatility relative to market. >1 = more volatile; <1 = more stable
- **52-Week High/Low:** Highest/lowest price over past 52 weeks

**Dividend Metrics**
- **Dividend Yield:** Annual Dividend Per Share / Stock Price × 100. Income return from dividends
- **Dividend Payout Ratio:** Total Dividends / Net Income × 100. Percentage of earnings paid as dividends
- **Dividend Growth:** Year-over-year or multi-year dividend increase rate

## 5. Technical Requirements
* **Language:** Entire UI/Logic in English. 
* **Tooltips:** Provide short Hebrew explanations for each financial metric (content provided in project docs).
* **Framework:** Next.js (App Router), Tailwind CSS, Shadcn/UI.
* **API:** Yahoo Finance (via Public APIs or RapidAPI endpoints).
* **State Management:** React hooks (useState, useEffect, useContext).
* **Styling:** Tailwind CSS for responsive utility-first design.
* **Type Safety:** TypeScript for all components and API routes.

## 6. Performance & Accessibility
* **Page Load Time:** Under 3 seconds on broadband connections.
* **API Response Time:** Stock data fetched within 500ms for optimal UX.
* **Accessibility:** WCAG 2.1 Level AA compliance (keyboard navigation, screen reader support).
* **SEO:** Meta tags for stock symbols, proper heading hierarchy.

## 7. Development Constraints
* **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge) from last 2 versions.
* **Code Quality:** ESLint configuration following Next.js best practices.
* **Testing:** Unit tests for utility functions; integration tests for API routes.
* **Deployment:** Vercel or similar serverless platform with automatic deployments from Git.

## 8. Future Enhancements (Phase 2+)
* **Portfolio Tracking:** Save and monitor multiple stocks with alerts.
* **Comparison Tool:** Side-by-side analysis of 2-3 stocks within same sector.
* **Export Reports:** PDF/Excel export of stock analysis and metrics.
* **Mobile App:** React Native or PWA version for iOS/Android.
* **Advanced Charts:** TradingView/Chart.js integration for candlestick and technical analysis.
* **Multi-Language UI:** Full UI translation beyond just tooltips.
* **AI-Powered Analysis:** GPT-4o/Claude integration for qualitative analysis (SWOT, management insights, competitive analysis).
* **Earnings Calls & Transcripts:** Searchable earnings call transcripts with sentiment analysis.