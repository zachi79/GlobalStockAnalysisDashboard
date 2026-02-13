/**
 * Hebrew Tooltips Hook and Manager
 * 
 * This module provides utilities for managing Hebrew tooltips across the application.
 * All Hebrew translations should be centralized here for easy maintenance and updates.
 */

import { useMemo } from 'react';
import { getMetricById } from '@/config/metrics';

interface HebrewTranslations {
  [metricId: string]: string;
}

/**
 * Centralized Hebrew translations for all financial metrics
 * 
 * Add Hebrew tooltips here and they'll automatically be used throughout the app.
 * Format is straightforward - just add the metric ID and its Hebrew translation.
 * 
 * Example:
 * peRatio: 'יחס מחיר להכנסה - משקף כמה בשקלים משלמים בעד שקל הכנסה של החברה',
 */
export const HEBREW_TOOLTIPS: HebrewTranslations = {
  // Core Metrics - TODO: Add translations
  peRatio: '',
  pegRatio: '',
  eps: '',

  // Efficiency Metrics - TODO: Add translations
  roe: '',
  revenueGrowth: '',

  // Financial Health - TODO: Add translations
  currentRatio: '',
  debtToEquity: '',
  fcf: '',

  // Market Context - TODO: Add translations
  marketCap: '',
  fiftyTwoWeekHigh: '',
  fiftyTwoWeekLow: '',
  beta: '',

  // Dividends - TODO: Add translations
  dividendYield: '',
};

/**
 * Hook to get Hebrew tooltip for a specific metric
 * 
 * Usage:
 * const tooltip = useHebrewTooltip('peRatio');
 * 
 * Returns empty string if translation is not yet provided.
 */
export const useHebrewTooltip = (metricId: string): string => {
  return useMemo(() => {
    return HEBREW_TOOLTIPS[metricId as keyof typeof HEBREW_TOOLTIPS] || '';
  }, [metricId]);
};

/**
 * Hook to get all Hebrew tooltips
 * 
 * Usage:
 * const tooltips = useAllHebrewTooltips();
 */
export const useAllHebrewTooltips = (): HebrewTranslations => {
  return useMemo(() => HEBREW_TOOLTIPS, []);
};

/**
 * Function to update Hebrew tooltip for a specific metric
 * 
 * Usage:
 * updateHebrewTooltip('peRatio', 'יחס מחיר להכנסה');
 */
export const updateHebrewTooltip = (metricId: string, translation: string) => {
  if (metricId in HEBREW_TOOLTIPS) {
    HEBREW_TOOLTIPS[metricId] = translation;
  }
};

/**
 * Function to get metrics with their Hebrew tooltips
 * Returns metrics that have Hebrew translations
 */
export const getMetricsWithTooltips = () => {
  return Object.entries(HEBREW_TOOLTIPS)
    .filter(([, translation]) => translation.length > 0)
    .map(([metricId]) => ({
      metric: getMetricById(metricId),
      tooltip: HEBREW_TOOLTIPS[metricId],
    }));
};

/**
 * Function to get percentage of metrics translated
 */
export const getTranslationProgress = (): { translated: number; total: number; percentage: number } => {
  const total = Object.keys(HEBREW_TOOLTIPS).length;
  const translated = Object.values(HEBREW_TOOLTIPS).filter((t) => t.length > 0).length;
  return {
    translated,
    total,
    percentage: Math.round((translated / total) * 100),
  };
};
