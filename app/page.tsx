'use client';

import React, { useState } from 'react';
import { StockSelector, StockOption } from '@/components/StockSelector';
import { FinancialMetrics } from '@/components/FinancialMetrics';
import PriceChart from '@/components/PriceChart';
import AnalystConsensus from '@/components/AnalystConsensus';
import NewsFeed from '@/components/NewsFeed';
import CompanyOverview from '@/components/CompanyOverview';
import ManagementTeam from '@/components/ManagementTeam';
import SWOTAnalysis from '@/components/SWOTAnalysis';
import FinancialAnalysis from '@/components/FinancialAnalysis';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslationProgress } from '@/lib/hebrew-tooltips';
import { Loader2 } from 'lucide-react';

/**
 * Fetches stock profile from API
 */
async function fetchStockProfile(symbol: string) {
  try {
    const response = await fetch(`/api/stocks/${symbol}?detailed=true`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error fetching stock profile:', error);
    return null;
  }
}

/**
 * Demo Page - Stock Selector & Financial Metrics
 * 
 * This page demonstrates:
 * 1. Selecting a stock index
 * 2. Choosing a stock from that index
 * 3. Loading financial metrics for the selected stock
 * 4. Displaying metrics with Hebrew tooltips
 */
export default function Home() {
  const [selectedStock, setSelectedStock] = useState<StockOption | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<string>('sp500');
  const [stockMetrics, setStockMetrics] = useState<any>(null);
  const [loadingMetrics, setLoadingMetrics] = useState(false);

  const translationProgress = getTranslationProgress();

  const handleStockSelected = async (stock: StockOption) => {
    setSelectedStock(stock);
    setLoadingMetrics(true);

    try {
      const profile = await fetchStockProfile(stock.symbol);
      setStockMetrics(profile);
    } catch (error) {
      console.error('Error fetching stock profile:', error);
      setStockMetrics(null);
    } finally {
      setLoadingMetrics(false);
    }
  };

  // Convert stock profile to metrics format for FinancialMetrics component
  const getMetricsData = () => {
    if (!stockMetrics) return [];

    const metrics = [];

    // Core Metrics
    if (stockMetrics.peRatio) metrics.push({ id: 'peRatio', value: stockMetrics.peRatio });
    if (stockMetrics.pegRatio) metrics.push({ id: 'pegRatio', value: stockMetrics.pegRatio });

    // Efficiency
    if (stockMetrics.roe) metrics.push({ id: 'roe', value: stockMetrics.roe });

    // Health
    if (stockMetrics.currentRatio) 
      metrics.push({ id: 'currentRatio', value: stockMetrics.currentRatio });
    if (stockMetrics.debtToEquity) 
      metrics.push({ id: 'debtToEquity', value: stockMetrics.debtToEquity });
    if (stockMetrics.freeCashFlow) 
      metrics.push({ id: 'fcf', value: stockMetrics.freeCashFlow });

    // Market
    if (stockMetrics.marketCap) 
      metrics.push({ id: 'marketCap', value: stockMetrics.marketCap });
    if (stockMetrics.fiftyTwoWeekHigh) 
      metrics.push({ id: 'fiftyTwoWeekHigh', value: stockMetrics.fiftyTwoWeekHigh });
    if (stockMetrics.fiftyTwoWeekLow) 
      metrics.push({ id: 'fiftyTwoWeekLow', value: stockMetrics.fiftyTwoWeekLow });
    if (stockMetrics.beta) metrics.push({ id: 'beta', value: stockMetrics.beta });

    // Dividends
    if (stockMetrics.dividendYield) 
      metrics.push({ id: 'dividendYield', value: stockMetrics.dividendYield });

    return metrics;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-slate-900">
            Global Stock Analysis Dashboard
          </h1>
          <p className="text-lg text-slate-600">
            Explore stocks from major global indices
          </p>
        </div>

        {/* Translation Progress Card */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Translation Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-slate-600">
                Hebrew translations: <span className="font-bold text-blue-600">
                  {translationProgress.translated} / {translationProgress.total}
                </span>
              </p>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all"
                  style={{ width: `${translationProgress.percentage}%` }}
                />
              </div>
              <p className="text-xs text-slate-500">
                {translationProgress.percentage}% translated
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stock Selector */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Stock Selection</h2>
          <StockSelector 
            onStockSelected={handleStockSelected}
            onIndexChanged={setSelectedIndex}
          />
        </div>

        {/* Stock Details & Metrics */}
        {selectedStock && (
          <>
            {/* Stock Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>{selectedStock.symbol}</CardTitle>
              </CardHeader>
              <CardContent>
                {loadingMetrics && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-5 w-5 animate-spin text-blue-600 mr-2" />
                    <p className="text-gray-600">Loading stock data...</p>
                  </div>
                )}

                {!loadingMetrics && stockMetrics && (
                  <div className="space-y-4">
                    {stockMetrics.name && (
                      <div>
                        <p className="text-sm text-gray-600">Company Name</p>
                        <p className="text-xl font-semibold text-gray-900">
                          {stockMetrics.name}
                        </p>
                      </div>
                    )}

                    {stockMetrics.sector && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Sector</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {stockMetrics.sector}
                          </p>
                        </div>
                        {stockMetrics.industry && (
                          <div>
                            <p className="text-sm text-gray-600">Industry</p>
                            <p className="text-lg font-semibold text-gray-900">
                              {stockMetrics.industry}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {stockMetrics.description && (
                      <div>
                        <p className="text-sm text-gray-600">Description</p>
                        <p className="text-gray-700 line-clamp-3">
                          {stockMetrics.description}
                        </p>
                      </div>
                    )}

                    {stockMetrics.currentPrice && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Current Price</p>
                        <p className="text-2xl font-bold text-blue-600">
                          ${stockMetrics.currentPrice.toFixed(2)}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Price Chart */}
            {!loadingMetrics && selectedStock && (
              <div>
                <PriceChart symbol={selectedStock.symbol} timeframe="1M" />
              </div>
            )}

            {/* Financial Metrics */}
            {!loadingMetrics && getMetricsData().length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Financial Metrics
                </h2>
                <FinancialMetrics data={getMetricsData()} />
              </div>
            )}

            {/* Analyst Consensus */}
            {!loadingMetrics && selectedStock && (
              <div>
                <AnalystConsensus symbol={selectedStock.symbol} />
              </div>
            )}

            {/* News Feed */}
            {!loadingMetrics && selectedStock && (
              <div>
                <NewsFeed symbol={selectedStock.symbol} />
              </div>
            )}

            {/* Company Overview */}
            {!loadingMetrics && selectedStock && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Analysis</h2>
                <CompanyOverview symbol={selectedStock.symbol} data={stockMetrics} />
              </div>
            )}

            {/* Management Team & Vision */}
            {!loadingMetrics && selectedStock && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Leadership & Strategy</h2>
                <ManagementTeam symbol={selectedStock.symbol} />
              </div>
            )}

            {/* Detailed Financial Analysis */}
            {!loadingMetrics && selectedStock && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed Financial Analysis</h2>
                <FinancialAnalysis symbol={selectedStock.symbol} />
              </div>
            )}

            {/* SWOT Analysis */}
            {!loadingMetrics && selectedStock && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Strategic Assessment</h2>
                <SWOTAnalysis symbol={selectedStock.symbol} />
              </div>
            )}
          </>
        )}

        {/* Integration Guide */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-green-900">
            <div>
              <h3 className="font-semibold mb-2">1. Select an Index</h3>
              <p>Choose from S&P 500, TA-125, Nikkei 225, or European markets.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Select a Stock</h3>
              <p>The system loads real stocks from Yahoo Finance for your selected index.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. View Metrics</h3>
              <p>Financial metrics are automatically fetched and displayed with Hebrew tooltips.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
