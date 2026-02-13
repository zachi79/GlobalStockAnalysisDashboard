/**
 * Financial Metrics Configuration
 * 
 * This configuration defines all financial metrics used in the dashboard.
 * Each metric includes:
 * - id: Unique identifier
 * - label: English label for display
 * - hebrewTooltip: Hebrew explanation (add translations here)
 * - category: Grouping for organization
 * - format: How to display the value (number, percentage, currency)
 */

export interface MetricConfig {
  id: string;
  label: string;
  hebrewTooltip?: string;
  category: 'core' | 'efficiency' | 'health' | 'market' | 'dividends';
  format: 'number' | 'percentage' | 'currency' | 'ratio';
  unit?: string;
}

export const FINANCIAL_METRICS: MetricConfig[] = [
  // Core Metrics
  {
    id: 'peRatio',
    label: 'P/E Ratio',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'core',
    format: 'number',
    unit: 'x',
  },
  {
    id: 'pegRatio',
    label: 'PEG Ratio',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'core',
    format: 'number',
    unit: 'x',
  },
  {
    id: 'eps',
    label: 'EPS (Earnings Per Share)',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'core',
    format: 'currency',
    unit: '$',
  },

  // Efficiency Metrics
  {
    id: 'roe',
    label: 'ROE (Return on Equity)',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'efficiency',
    format: 'percentage',
    unit: '%',
  },
  {
    id: 'revenueGrowth',
    label: 'Revenue Growth (YoY)',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'efficiency',
    format: 'percentage',
    unit: '%',
  },

  // Financial Health
  {
    id: 'currentRatio',
    label: 'Current Ratio',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'health',
    format: 'ratio',
    unit: 'x',
  },
  {
    id: 'debtToEquity',
    label: 'Debt-to-Equity',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'health',
    format: 'ratio',
    unit: 'x',
  },
  {
    id: 'fcf',
    label: 'Free Cash Flow (FCF)',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'health',
    format: 'currency',
    unit: '$',
  },

  // Market Context
  {
    id: 'marketCap',
    label: 'Market Cap',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'market',
    format: 'currency',
    unit: '$',
  },
  {
    id: 'fiftyTwoWeekHigh',
    label: '52-Week High',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'market',
    format: 'currency',
    unit: '$',
  },
  {
    id: 'fiftyTwoWeekLow',
    label: '52-Week Low',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'market',
    format: 'currency',
    unit: '$',
  },
  {
    id: 'beta',
    label: 'Beta (Volatility)',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'market',
    format: 'number',
    unit: 'x',
  },

  // Dividends
  {
    id: 'dividendYield',
    label: 'Dividend Yield',
    hebrewTooltip: '', // TODO: Add Hebrew translation
    category: 'dividends',
    format: 'percentage',
    unit: '%',
  },
];

/**
 * Helper function to get metrics by category
 */
export const getMetricsByCategory = (category: MetricConfig['category']) => {
  return FINANCIAL_METRICS.filter((metric) => metric.category === category);
};

/**
 * Helper function to get a specific metric by ID
 */
export const getMetricById = (id: string): MetricConfig | undefined => {
  return FINANCIAL_METRICS.find((metric) => metric.id === id);
};
