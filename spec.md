# Project Specification: Global Stock Insight Dashboard

## 1. Project Goal
An English-language web application that provides a deep-dive analysis of stocks from major global indices (S&P 500, TA-125, Nikkei 225, and European markets). The focus is on comprehensive fundamental data and AI-driven qualitative insights rather than real-time trading.

## 2. Core Indices Support
* **USA:** S&P 500
* **Israel:** TA-125
* **Japan:** Nikkei 225
* **Europe:** Major exchanges (DAX, FTSE, CAC)

## 3. Detailed Feature Requirements

### A. Qualitative Analysis (AI Powered)
For any selected ticker, provide:
1. **Business Profile:** Sector, core products/services, and Competitive Advantage (Moat).
2. **Management:** Key executives and their backgrounds.
3. **Strategic Vision:** Company's long-term goals.
4. **Competitors:** List of primary global and local competitors.

### B. Financials & Metrics (Latest Updated Data)
5. **Income Statement:** Total Revenue, Net Income, and Profit Margins.
6. **Valuation:** * P/E Ratio (Price-to-Earnings)
   * PEG Ratio (Price/Earnings to Growth)
   * EPS (Earnings Per Share)
7. **Balance Sheet & Yield:** Total Debt and Dividend yield/history.
8. **Analyst Consensus:** Professional ratings (% Buy/Hold/Sell) and target prices.

### C. Visualizations & News
9. **Historical Charts:** Static/Interactive charts for 1D, 1W, 1M, 6M, 1Y, 3Y, 5Y.
10. **Recent News:** Fetch the latest headlines and provide a brief English summary.

## 4. Technical Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS + Shadcn/UI
* **Financial Data API:** Yahoo Finance (via `yfinance` in Python or `yahoo-finance2` in Node.js)
* **AI Integration:** OpenAI API (GPT-4o) or Claude API for synthesizing company info.

## 5. Implementation Notes for Cline
* **Data Refresh:** No real-time updates needed. Fetch latest available daily data on request.
* **Ticker Mapping:** Ensure correct suffixes for international stocks (e.g., `.TA` for Tel Aviv, `.T` for Tokyo).
* **Language:** The entire interface, data labels, and AI summaries must be in **English**.
