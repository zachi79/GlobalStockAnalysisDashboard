'use client';

import React from 'react';
import { MetricLabel } from './MetricLabel';
import { getMetricsByCategory } from '@/config/metrics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricValue {
  id: string;
  value: number | string;
}

interface FinancialMetricsProps {
  data: MetricValue[];
  className?: string;
}

/**
 * FinancialMetrics Component
 * 
 * Displays financial metrics organized by category (Core, Efficiency, Health, Market, Dividends).
 * Each metric's label supports Hebrew tooltips.
 * 
 * Usage:
 * <FinancialMetrics 
 *   data={[
 *     { id: 'peRatio', value: 15.5 },
 *     { id: 'roe', value: 0.12 },
 *   ]}
 * />
 */
export const FinancialMetrics: React.FC<FinancialMetricsProps> = ({
  data,
  className = '',
}) => {
  const categories: Array<'core' | 'efficiency' | 'health' | 'market' | 'dividends'> = [
    'core',
    'efficiency',
    'health',
    'market',
    'dividends',
  ];

  const categoryTitles = {
    core: 'Core Metrics',
    efficiency: 'Efficiency',
    health: 'Financial Health',
    market: 'Market Context',
    dividends: 'Dividends',
  };

  const formatValue = (metric: any, value: number | string) => {
    if (typeof value === 'string') return value;
    if (value === null || value === undefined) return 'N/A';

    switch (metric.format) {
      case 'percentage':
        return `${(value * 100).toFixed(2)}${metric.unit || '%'}`;
      case 'currency':
        return `${metric.unit || '$'}${value.toFixed(2)}`;
      case 'number':
      case 'ratio':
        return `${value.toFixed(2)}${metric.unit ? ` ${metric.unit}` : ''}`;
      default:
        return String(value);
    }
  };

  const getValueByMetricId = (metricId: string) => {
    return data.find((item) => item.id === metricId)?.value;
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {categories.map((category) => {
        const metricsInCategory = getMetricsByCategory(category);
        const hasData = metricsInCategory.some((m) => getValueByMetricId(m.id) !== undefined);

        if (!hasData) return null;

        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-lg">{categoryTitles[category]}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {metricsInCategory.map((metric) => {
                  const value = getValueByMetricId(metric.id);
                  if (value === undefined) return null;

                  return (
                    <div key={metric.id} className="flex flex-col gap-2">
                      <MetricLabel
                        label={metric.label}
                        hebrewTooltip={metric.hebrewTooltip}
                        className="text-gray-700"
                      />
                      <div className="text-2xl font-bold text-blue-600">
                        {formatValue(metric, value)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
