'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { DollarSign, BarChart3, PieChart } from 'lucide-react';

interface FinancialAnalysisProps {
  symbol: string;
}

interface FinancialData {
  revenue: number;
  revenueGrowth: number;
  netProfit: number;
  grossMargin: number;
  operatingMargin: number;
  netMargin: number;
  debt: number;
  debtToEquity: number;
  eps: number;
  peRatio: number;
  pegRatio: number;
  dividendYield: number;
  dividendPerShare: number;
  dividendGrowth: number;
}

interface MetricCardProps {
  label: string;
  value: number | string;
  unit?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  purple: 'bg-purple-50 border-purple-200',
  orange: 'bg-orange-50 border-orange-200',
};

function MetricCard({ label, value, unit = '', color = 'blue' }: MetricCardProps) {
  const colorKey = color as keyof typeof colorClasses;
  return (
    <div className={`${colorClasses[colorKey]} border rounded-lg p-4`}>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">
        {typeof value === 'number' && unit === '%' ? value.toFixed(2) : value}
        {unit && <span className="text-sm ml-1">{unit}</span>}
      </p>
    </div>
  );
}

function getMockFinancialData(symbol: string): FinancialData {
  const financialData: { [key: string]: FinancialData } = {
    AAPL: {
      revenue: 383285000000,
      revenueGrowth: 2.1,
      netProfit: 96995000000,
      grossMargin: 47.6,
      operatingMargin: 32.1,
      netMargin: 25.3,
      debt: 106389000000,
      debtToEquity: 1.88,
      eps: 6.05,
      peRatio: 30.65,
      pegRatio: 2.12,
      dividendYield: 0.42,
      dividendPerShare: 0.78,
      dividendGrowth: 3.5,
    },
    MSFT: {
      revenue: 198270000000,
      revenueGrowth: 16.0,
      netProfit: 72053000000,
      grossMargin: 69.6,
      operatingMargin: 47.4,
      netMargin: 36.3,
      debt: 54409000000,
      debtToEquity: 0.52,
      eps: 10.65,
      peRatio: 38.5,
      pegRatio: 2.41,
      dividendYield: 0.68,
      dividendPerShare: 2.72,
      dividendGrowth: 10.0,
    },
    GOOGL: {
      revenue: 307394000000,
      revenueGrowth: 13.0,
      netProfit: 64142000000,
      grossMargin: 56.3,
      operatingMargin: 24.2,
      netMargin: 20.9,
      debt: 13168000000,
      debtToEquity: 0.15,
      eps: 5.58,
      peRatio: 25.15,
      pegRatio: 1.93,
      dividendYield: 0.0,
      dividendPerShare: 0.0,
      dividendGrowth: 0.0,
    },
  };

  return (
    financialData[symbol] || {
      revenue: 150000000000,
      revenueGrowth: 8.5,
      netProfit: 30000000000,
      grossMargin: 45.0,
      operatingMargin: 25.0,
      netMargin: 20.0,
      debt: 20000000000,
      debtToEquity: 0.75,
      eps: 3.5,
      peRatio: 25.0,
      pegRatio: 1.8,
      dividendYield: 2.0,
      dividendPerShare: 1.5,
      dividendGrowth: 5.0,
    }
  );
}

function formatCurrency(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  return `$${value.toFixed(2)}`;
}

export default function FinancialAnalysis(
  { symbol }: FinancialAnalysisProps
) {
  const data = getMockFinancialData(symbol);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            <CardTitle>Revenue & Profitability</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <MetricCard 
              label="Total Revenue" 
              value={formatCurrency(data.revenue)} 
              color="green" 
            />
            <MetricCard 
              label="Net Profit" 
              value={formatCurrency(data.netProfit)} 
              color="green" 
            />
            <MetricCard 
              label="Revenue Growth (YoY)" 
              value={data.revenueGrowth} 
              unit="%" 
              color="green" 
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Profit Margins</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Gross Margin</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-500 h-full"
                    style={{ width: `${Math.min(data.grossMargin, 100)}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900 mt-1">
                  {data.grossMargin.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Operating Margin</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: `${Math.min(data.operatingMargin, 100)}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900 mt-1">
                  {data.operatingMargin.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Net Margin</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-purple-500 h-full"
                    style={{ width: `${Math.min(data.netMargin, 100)}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900 mt-1">
                  {data.netMargin.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <CardTitle>Valuation Metrics</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <MetricCard 
              label="EPS (Earnings Per Share)" 
              value={data.eps.toFixed(2)} 
              unit="$" 
              color="blue" 
            />
            <MetricCard 
              label="P/E Ratio" 
              value={data.peRatio.toFixed(2)} 
              color="blue" 
            />
            <MetricCard 
              label="PEG Ratio" 
              value={data.pegRatio.toFixed(2)} 
              color="purple" 
            />
            <MetricCard 
              label="Interpretation" 
              value={data.peRatio > 25 ? 'Premium' : 'Fair'} 
              color="orange" 
            />
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Understanding These Metrics</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <strong>EPS:</strong> Shows the company&apos;s profit per share. Higher EPS indicates better profitability.
              </li>
              <li>
                <strong>P/E Ratio:</strong> Stock price divided by earnings per share. Lower = potentially undervalued, Higher = growth premium.
              </li>
              <li>
                <strong>PEG Ratio:</strong> P/E adjusted for growth rate. &lt;1.0 = undervalued relative to growth, &gt;1.0 = overvalued.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial Health & Debt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard 
              label="Total Debt" 
              value={formatCurrency(data.debt)} 
              color="orange" 
            />
            <MetricCard 
              label="Debt-to-Equity Ratio" 
              value={data.debtToEquity.toFixed(2)} 
              color="orange" 
            />
            <MetricCard
              label="Health Status"
              value={data.debtToEquity < 1.5 ? 'Healthy' : 'Caution'}
              color={data.debtToEquity < 1.5 ? 'green' : 'orange'}
            />
          </div>

          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Debt Analysis</h4>
            <p className="text-sm text-gray-700 mb-3">
              A Debt-to-Equity ratio of {data.debtToEquity.toFixed(2)}. 
              {data.debtToEquity < 1 
                ? ' This is healthy - the company uses more equity than debt.' 
                : data.debtToEquity < 2 
                ? ' This is moderate leverage.' 
                : ' This indicates high leverage.'}
            </p>
            <p className="text-sm text-gray-700">
              Total Debt: {formatCurrency(data.debt)} - The company&apos;s total borrowings across all sources.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <PieChart className="w-6 h-6 text-purple-600" />
            <CardTitle>Dividend Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {data.dividendYield > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard 
                label="Dividend Yield" 
                value={data.dividendYield.toFixed(2)} 
                unit="%" 
                color="purple" 
              />
              <MetricCard 
                label="Dividend Per Share" 
                value={data.dividendPerShare.toFixed(2)} 
                unit="$" 
                color="purple" 
              />
              <MetricCard 
                label="Dividend Growth (YoY)" 
                value={data.dividendGrowth.toFixed(2)} 
                unit="%" 
                color="purple" 
              />
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-gray-900 font-semibold">No Dividend Distribution</p>
              <p className="text-sm text-gray-700 mt-2">
                This company does not currently pay dividends. It may reinvest profits for growth instead.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
